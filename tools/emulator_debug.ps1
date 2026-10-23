# 在雷电模拟器里装我们的包并抓日志（自用调试环）
# 用法:
#   .\emulator_debug.ps1                 # 用桌面最新的包
#   .\emulator_debug.ps1 -Apk x.apk -Seconds 60
param(
    [string]$Apk = "",
    [int]$Seconds = 45,
    [int]$Index = 0
)

$ErrorActionPreference = "Continue"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$adb = "C:\Program Files (x86)\Android\android-sdk\platform-tools\adb.exe"

function Find-LD {
    $roots = @("C:\LDPlayer", "D:\LDPlayer", "E:\LDPlayer", "C:\Program Files\LDPlayer",
               "C:\Program Files (x86)\LDPlayer", "D:\Program Files\LDPlayer", "$env:LOCALAPPDATA\LDPlayer")
    foreach ($r in $roots) {
        $hit = Get-ChildItem -Path $r -Filter "ldconsole.exe" -Recurse -Depth 2 -ErrorAction SilentlyContinue |
               Select-Object -First 1
        if ($hit) { return $hit.DirectoryName }
    }
    $reg = Get-ItemProperty "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*",
                            "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" -ErrorAction SilentlyContinue |
           Where-Object { $_.DisplayName -match "LDPlayer|雷电" -and $_.InstallLocation } |
           Select-Object -First 1
    if ($reg -and (Test-Path (Join-Path $reg.InstallLocation "ldconsole.exe"))) { return $reg.InstallLocation }
    return $null
}

$ld = Find-LD
if (-not $ld) { Write-Host "[错误] 没找到雷电安装目录（含 ldconsole.exe）"; exit 1 }
Write-Host "雷电目录: $ld"
$console = Join-Path $ld "ldconsole.exe"

if (-not $Apk) {
    $desk = Join-Path ([Environment]::GetFolderPath("Desktop")) "最新包"
    $c = @(Get-ChildItem $desk -Filter *.apk -ErrorAction SilentlyContinue)
    if (-not $c) { $c = @(Get-ChildItem (Join-Path $root "build") -Filter "release_signed.apk" -ErrorAction SilentlyContinue) }
    if (-not $c) { Write-Host "[错误] 找不到 APK"; exit 1 }
    $Apk = ($c | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
}
Write-Host "APK: $Apk"

Write-Host "== 启动实例 $Index =="
& $console launch --index $Index 2>&1 | ForEach-Object { "   $_" }

Write-Host "== 等模拟器开机完成 =="
$booted = $false
for ($i = 0; $i -lt 90; $i++) {
    $p = & $console adb --index $Index --command "getprop sys.boot_completed" 2>$null
    if ($p -match "1") { $booted = $true; break }
    Start-Sleep -Seconds 2
}
if (-not $booted) { Write-Host "[失败] 模拟器没起来"; exit 1 }
Write-Host "   已开机"
& $console adb --index $Index --command "getprop ro.product.cpu.abilist" 2>&1 | ForEach-Object { "   ABI: $_" }

Write-Host "== 安装 =="
& $console installapp --index $Index --filename $Apk 2>&1 | ForEach-Object { "   $_" }

Write-Host "== 清日志 + 启动 =="
& $console adb --index $Index --command "logcat -c" 2>$null | Out-Null
& $console adb --index $Index --command "am force-stop com.sky.dsz.dsh" 2>$null | Out-Null
& $console adb --index $Index --command "monkey -p com.sky.dsz.dsh -c android.intent.category.LAUNCHER 1" 2>&1 | Out-Null

Write-Host "== 抓 $Seconds 秒日志 =="
Start-Sleep -Seconds $Seconds
$out = Join-Path $root "build\emulator_log.txt"
& $console adb --index $Index --command "logcat -d -v time" 2>&1 | Out-File -FilePath $out -Encoding utf8
Write-Host "完整日志: $out"

Write-Host "== 关键行 =="
$pat = "FATAL|AndroidRuntime|DSHBOOT|libcocos|UnsatisfiedLink|ClassNotFound|E/art|E/cocos|E/jswrapper|Abort message|tombstone"
Select-String -Path $out -Pattern $pat -CaseSensitive:$false |
    Select-Object -Last 80 | ForEach-Object { $_.Line } | Out-String -Width 240

Write-Host "== 进程是否存活 =="
& $console adb --index $Index --command "pidof com.sky.dsz.dsh" 2>&1 | ForEach-Object { "   pid: $_" }

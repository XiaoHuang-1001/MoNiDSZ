# 真机抓日志：插上手机 + 打开 USB 调试 后运行本脚本
# 作用：装最新的包 -> 清空日志 -> 启动 -> 抓 40 秒 logcat -> 存到 build\device_log.txt
param(
    [string]$Apk = "",
    [int]$Seconds = 40
)

$ErrorActionPreference = "Stop"
$adb = "C:\Program Files (x86)\Android\android-sdk\platform-tools\adb.exe"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

if (-not (Test-Path $adb)) { Write-Host "[错误] 找不到 adb: $adb"; exit 1 }

if (-not $Apk) {
    $latest = Get-ChildItem (Join-Path $root "build") -Filter "release_signed.apk" -ErrorAction SilentlyContinue |
              Sort-Object LastWriteTime -Descending | Select-Object -First 1
    $desk = Join-Path ([Environment]::GetFolderPath("Desktop")) "最新包"
    $cand = @()
    if ($desk -and (Test-Path $desk)) { $cand += Get-ChildItem $desk -Filter *.apk -ErrorAction SilentlyContinue }
    if ($cand.Count -gt 0) { $Apk = ($cand | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName }
    elseif ($latest) { $Apk = $latest.FullName }
}
if (-not $Apk -or -not (Test-Path $Apk)) { Write-Host "[错误] 找不到要安装的 APK"; exit 1 }

Write-Host "== 1/5 等待设备 =="
& $adb start-server 2>$null | Out-Null
$dev = $null
for ($i = 0; $i -lt 60; $i++) {
    $rows = & $adb devices | Select-Object -Skip 1 | Where-Object { $_ -match "\sdevice$" }
    if ($rows) { $dev = ($rows[0] -split "\s+")[0]; break }
    if ($i -eq 0) {
        Write-Host "   请把手机用数据线连上电脑，并在手机上：设置 -> 关于手机 -> 连点版本号7次 ->"
        Write-Host "   开发者选项 -> 打开 USB 调试；插上后手机弹出的“允许 USB 调试”要点允许。"
    }
    Start-Sleep -Seconds 2
}
if (-not $dev) { Write-Host "[失败] 60 秒内没检测到已授权的设备"; & $adb devices; exit 1 }
Write-Host "   设备: $dev"

Write-Host "== 2/5 安装 $Apk =="
& $adb -s $dev install -r -d $Apk 2>&1 | ForEach-Object { "   $_" }

Write-Host "== 3/5 清日志并启动 =="
& $adb -s $dev logcat -c 2>$null | Out-Null
& $adb -s $dev shell am force-stop com.sky.dsz.dsh 2>$null | Out-Null
& $adb -s $dev shell monkey -p com.sky.dsz.dsh -c android.intent.category.LAUNCHER 1 2>&1 | Out-Null

Write-Host "== 4/5 抓 $Seconds 秒日志 =="
$out = Join-Path $root "build\device_log.txt"
$job = Start-Job -ScriptBlock {
    param($adb, $dev, $out)
    & $adb -s $dev logcat -v time 2>&1 | Out-File -FilePath $out -Encoding utf8
} -ArgumentList $adb, $dev, $out
Start-Sleep -Seconds $Seconds
& $adb -s $dev logcat -d -v time 2>&1 | Out-File -FilePath $out -Encoding utf8
Stop-Job $job -ErrorAction SilentlyContinue; Remove-Job $job -Force -ErrorAction SilentlyContinue

Write-Host "== 5/5 关键行 =="
$patterns = "FATAL|AndroidRuntime|DSHBOOT|libcocos|UnsatisfiedLink|ClassNotFound|E/art|E/cocos|E/jswrapper|Error|exception"
Select-String -Path $out -Pattern $patterns -CaseSensitive:$false |
    Select-Object -Last 60 | ForEach-Object { $_.Line } | Out-String -Width 240

Write-Host ""
Write-Host "完整日志: $out"
Write-Host "命令: `"$adb`" -s $dev logcat -s DSHBOOT:*"

param(
  [Parameter(Mandatory=$true)][string]$Src,
  [Parameter(Mandatory=$true)][string]$Out
)
# Repack an unpacked APK directory into an unsigned APK.
# resources.arsc and *.so are stored uncompressed so zipalign can page-align them
# (Android 11+ requires an uncompressed resources.arsc for targetSdk >= 30).
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$Src = (Resolve-Path $Src).Path
$fs  = [System.IO.File]::Open($Out, [System.IO.FileMode]::Create)
$zip = New-Object System.IO.Compression.ZipArchive($fs, [System.IO.Compression.ZipArchiveMode]::Create, $true)
try {
  $files = Get-ChildItem -LiteralPath $Src -Recurse -File -Force
  foreach ($f in $files) {
    $rel = $f.FullName.Substring($Src.Length + 1).Replace('\', '/')
    $ext = [System.IO.Path]::GetExtension($f.Name).ToLowerInvariant()
    $level = [System.IO.Compression.CompressionLevel]::Optimal
    if ($rel -eq 'resources.arsc' -or $ext -eq '.so') {
      $level = [System.IO.Compression.CompressionLevel]::NoCompression
    }
    $entry = $zip.CreateEntry($rel, $level)
    $entry.LastWriteTime = [System.DateTimeOffset]::new($f.LastWriteTime)
    $es = $entry.Open()
    $ins = [System.IO.File]::OpenRead($f.FullName)
    try { $ins.CopyTo($es) } finally { $ins.Dispose(); $es.Dispose() }
  }
} finally {
  $zip.Dispose()
  $fs.Dispose()
}
$mb = [math]::Round((Get-Item $Out).Length / 1MB, 1)
Write-Output "repacked: $Out ($mb MB, $($files.Count) entries)"

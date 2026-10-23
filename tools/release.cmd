@echo off
rem ---------------------------------------------------------------
rem  Release wrapper.  ASCII only: cmd.exe mis-parses UTF-8 batch
rem  files under codepage 936 and breaks the %PY% variable.
rem  Usage:  release.cmd            (bump version)
rem          release.cmd --no-bump  (rebuild same version)
rem ---------------------------------------------------------------
setlocal
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
set "PY=C:\Users\20905\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"

if not exist "%PY%" goto nopython

"%PY%" "%~dp0release.py" %*
if errorlevel 1 goto failed
echo.
echo [OK] APK is in Desktop\zui-xin-bao , all gate checks passed.
exit /b 0

:nopython
echo [ERROR] python not found: %PY%
exit /b 1

:failed
echo.
echo [FAILED] gate rejected the build, output deleted. Do NOT ship.
exit /b 1

$bunPath = 'C:\Users\danie\AppData\Local\Microsoft\WinGet\Packages\Oven-sh.Bun_Microsoft.Winget.Source_8wekyb3d8bbwe\bun-windows-x64\bun.exe'
New-Item -ItemType Directory -Path "$env:USERPROFILE\.claude-mem\logs" -Force | Out-Null
Start-Process -FilePath $bunPath -ArgumentList 'C:\Users\danie\.openclaw\extensions\claude-mem\plugin\scripts\worker-service.cjs' -RedirectStandardOutput "$env:USERPROFILE\.claude-mem\logs\worker.log" -RedirectStandardError "$env:USERPROFILE\.claude-mem\logs\worker.err.log" -NoNewWindow
Start-Sleep -Seconds 3
try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:37777/api/health' -TimeoutSec 5).Content | Write-Output } catch { Write-Output 'HEALTH_FAIL' }

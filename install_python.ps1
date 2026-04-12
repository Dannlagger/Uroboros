$Url='https://www.python.org/ftp/python/3.11.6/python-3.11.6-amd64.exe'
$Dest="$env:TEMP\python-installer.exe"
Invoke-WebRequest -Uri $Url -OutFile $Dest -UseBasicParsing
Start-Process -FilePath $Dest -ArgumentList '/quiet','InstallAllUsers=1','PrependPath=1' -Wait
Write-Output 'installer_finished'
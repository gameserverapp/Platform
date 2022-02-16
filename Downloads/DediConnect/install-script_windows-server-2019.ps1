Set-ExecutionPolicy Bypass -Scope Process -force
Set-ExecutionPolicy Bypass -force

Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

Set-Service -Name sshd -StartupType Automatic

Get-NetFirewallRule -Name *ssh*
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

net start sshd

[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

C:\ProgramData\chocolatey\bin\choco.exe install -y python --version=3.9.2
C:\ProgramData\chocolatey\bin\choco.exe install -y nssm

Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force

Install-Module PSWindowsUpdate -confirm:$false -force
Get-WindowsUpdate -Install -acceptall -IgnoreReboot


echo "" >> C:\Users\Administrator\.gsa-script-installed

Restart-Computer -Force
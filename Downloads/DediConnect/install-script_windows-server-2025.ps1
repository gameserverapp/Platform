# ########################################################
# Copyright © 2023 GameServerApp.com. All rights reserved.
# ########################################################

Set-ExecutionPolicy Bypass -Scope Process -force
Set-ExecutionPolicy Bypass -force

function Test-Administrator
{
    [OutputType([bool])]
    param()
    process {
        [Security.Principal.WindowsPrincipal]$user = [Security.Principal.WindowsIdentity]::GetCurrent();
        return $user.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator);
    }
}

if(-not (Test-Administrator))
{
    Write-Error "This script must be executed as Administrator.";
    pause;
    exit 1;
}

Write-Host "Checking for available Windows Updates..." -ForegroundColor Cyan

Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force -ErrorAction SilentlyContinue
if (-not (Get-Module -ListAvailable -Name PSWindowsUpdate)) {
    Install-Module PSWindowsUpdate -Confirm:$false -Force -ErrorAction Stop
}

$pendingUpdates = Get-WindowsUpdate -ErrorAction SilentlyContinue

if ($pendingUpdates.Count -gt 0) {
    Write-Host ""
    Write-Host "=========================================================================" -ForegroundColor Red
    Write-Host "ERROR: There are $($pendingUpdates.Count) pending Windows Update(s) available!" -ForegroundColor Red
    Write-Host "Please update the server and restart before running this script." -ForegroundColor Red
    Write-Host "=========================================================================" -ForegroundColor Red
    Write-Host ""
    pause
    exit 1
}

Write-Host "No pending Windows Updates found. Continuing script execution..." -ForegroundColor Green
# ---------------------------------------------------

Add-WindowsCapability -Online -Name OpenSSH.Server~~~~

Set-Service -Name sshd -StartupType Automatic

Get-NetFirewallRule -Name *ssh*
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

net start sshd

[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

C:\ProgramData\chocolatey\bin\choco.exe install -y python --version=3.14.3
C:\ProgramData\chocolatey\bin\choco.exe install -y nssm

Install-WindowsFeature -Name Web-Mgmt-Tools
Install-WindowsFeature Web-FTP-Server -IncludeAllSubFeature
Install-WindowsFeature WAS
Install-WindowsFeature -Name Hyper-V
Install-WindowsFeature -Name Containers

C:\ProgramData\chocolatey\bin\choco.exe install -y docker-engine
C:\ProgramData\chocolatey\bin\choco.exe install -y docker-cli
Set-Service docker -StartupType Automatic

echo "" >> C:\Users\Administrator\.gsa-script-installed

Restart-Computer -Force
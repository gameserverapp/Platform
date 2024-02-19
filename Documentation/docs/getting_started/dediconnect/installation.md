---
title: Installation
sidebar_position: 2
---
DediConnect automatically installs everything required for hosting game servers.
Learn how to connect your dedicated root machine with DediConnect.

[Connect machine >](https://dash.gameserverapp.com/order/machine)

![Connect machine 1](/img/getting_started/dediconnect/installation/connect_machine_page.jpg)

## Prepare a Windows machine

:::warning WINDOWS ONLY
These steps are for Windows only. For Linux machines, [continue here](#connect-with-dediconnect).
:::

Before a Windows machine can connect with DediConnect, it must first run a script that will update the machine and prepare it for hosting game servers. If you are running a non-Windows machine, skip to the "Connect with Dediconnect" Section.

### 1. Login with RDP
Use [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) to login on your dedicated machine using the `Administrator` account and the password you received from your hosting provider.

:::info `Administrator` user required
Did your machine come without a `Administrator` user account?

[Learn how to activate it >](/getting_started/dediconnect/installation#activate-administrator-user-on-windows)
:::

### 2. Open "PowerShell"
Click the `Windows Start` button and type `Powershell` and hit `enter` to open it.

![Windows install 1](/img/getting_started/dediconnect/installation/windows_install_1.jpeg)

### 3. Run command in PowerShell
Copy the command for your OS and paste it into PowerShell. Then hit `enter` to execute it. When the script has finished it will restart the machine.

##### Windows Server 2019
```powershell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/gameserverapp/Platform/main/Downloads/DediConnect/install-script_windows-server-2019.ps1 -OutFile .\install-script.ps1; .\install-script.ps1
```

##### Windows Server 2022
```powershell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/gameserverapp/Platform/main/Downloads/DediConnect/install-script_windows-server-2022.ps1 -OutFile .\install-script.ps1; .\install-script.ps1
```

:::warning Wait for reboot
After hitting `enter` it may take a while for the script to finish. Do __not__ close the window. Wait for the machine to reboot, this may take up to 30 minutes.
:::


### 4. Wait for machine to come back online
After the machine rebooted and it is operational it is ready to [connect with Dediconnect](/getting_started/dediconnect/installation).


## Connect with DediConnect

:::caution before you begin
Ensure the machine has a [supported OS](/getting_started/dediconnect/requirements) installed and meets the [requirements](/getting_started/dediconnect/requirements). Windows machine must [run the GSA install script first](/getting_started/dediconnect/installation#prepare-a-windows-machine)!
:::

Add a new machine from the [machine overview page](https://dash.gameserverapp.com/machine) or take a shortcut by clicking the <Icon icon="fa-solid fa-plus-square" size="lg" /> next to `Machines`.


![Connect machine 1](/img/getting_started/dediconnect/installation/connect_machine_1.jpg)

### 1. Enter machine IP
The system will perform a quick scan to confirm your machine is compatible with DediConnect.

![Connect machine 2](/img/getting_started/dediconnect/installation/connect_machine_2.jpg)

### 2. Enter credentials
Enter the username and password for the dedicated root machine. GSA needs this information to manage game servers and services on the machine.

We use `AES-256` encryption (Military grade) to securely store the credentials.

:::caution Windows machine
Windows machine must [run the GSA install script first](/getting_started/dediconnect/installation#prepare-a-windows-machine) before they can connect.
:::

:::tip SSH Key Auth (advanced users only)
Prefer using key-based SSH authentication? Check out our [information for SSH](/getting_started/dediconnect/getting_started#ssh). Otherwise, no worries! Your machine will automatically move to an extra secure key-based authentication during installation.
:::

Hit `Start installation` when you're ready.

![Connect machine 3](/img/getting_started/dediconnect/installation/connect_machine_3.jpg)

### 3. Installation
After clicking `Start installation` DediConnect will install all the required software on the machine to host game servers.

You get an email when the installation is finished.

![Connect machine 4](/img/getting_started/dediconnect/installation/connect_machine_4.jpg)

### 4. Ready!
When the installation finished you can start using the machine.

[Learn how to install game servers and services >](/dashboard/machines/install_game-server_service#how-to-install-game-server)

![Connect machine 5](/img/getting_started/dediconnect/installation/connect_machine_5.jpg)

## 💥 Troubleshooting 💥


### Activate "Administrator" user on Windows
When your machine comes without a `Administrator` user account you need to manually activate it.

#### 1. Login with RDP
Login on your machine using [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab). Use the IP address and credentials you received from your hosting provider.

#### 2. Open "Computer Management"
Click the `Windows Start` button and type `Computer Management` and hit `enter` to open it.

![Windows user 1](/img/getting_started/dediconnect/installation/windows_user_1.jpeg)

#### 3. Locate "Users" overview
Click `Local Users and Groups` and then click `Users`.

![Windows user 2](/img/getting_started/dediconnect/installation/windows_user_2.png)

#### 4. Administrator properties
Right-click the `Administrator` account and click `Properties`.

![Windows user 3](/img/getting_started/dediconnect/installation/windows_user_3.png)

#### 5. Un-check `Account is disabled`

![Windows user 4](/img/getting_started/dediconnect/installation/windows_user_4.png)

#### 6. Set password for Administrator
Right-click the `Administrator` account and click `Set Password`.

![Windows user 5](/img/getting_started/dediconnect/installation/windows_user_5.png)
![Windows user 6](/img/getting_started/dediconnect/installation/windows_user_6.png)


#### 7. Enter new password for Administrator
Enter the password you received from the hosting provider.

![Windows user 6](/img/getting_started/dediconnect/installation/windows_user_7.png)

#### 8. Test the new acount
Close the RDP connection and login again using the `Administrator` user to confirm everything is working.

---

### Debian change language to English

#### 1. Login and run command
Login on your machine via SSH and run `dpkg-reconfigure locales`

#### 2. Select `en_US.UTF-8 UTF8`
Select `en_US.UTF-8 UTF8` and hit `OK`.
![Debian issue 1](/img/getting_started/dediconnect/installation/debian_issue_1.jpeg)

Then select `en_US.UTF-8` and hit `OK`.

![Debian issue 2](/img/getting_started/dediconnect/installation/debian_issue_2.jpeg)

#### 3. Reboot your machine & confirm changes applied
Restart your machine by running `reboot` and wait for it to come back online. When it's online run `env | grep LANG` to confirm it now says `LANGUAGE=en_US:en`.

![Debian issue 3](/img/getting_started/dediconnect/installation/debian_issue_3.jpeg)

---

### Update Windows
You should update your Windows install before installing DediConnect. Do not do this while installing DediConnect.

#### 1. Login with RDP
Login on your machine using [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab). Use the IP address and credentials you received from your hosting provider.

#### 2. Check for updates
Click the `Windows Start` button and type `update` and hit `enter`.

![Windows update 1](/img/getting_started/dediconnect/installation/windows_update_1.jpeg)

#### 3. Check for updates / install all
Depending on your system there may already be updates listed. If the machine indicates it is up-to-date you may want to click the `Check for updates` button to be sure.

![Windows update 2](/img/getting_started/dediconnect/installation/windows_update_2.jpeg)

#### 4. Restart machine
Some updates require the system to restart. You should do this before connecting it to DediConnect.


![Windows update 3](/img/getting_started/dediconnect/installation/windows_update_3.jpeg)

:::caution
Make sure your machine is fully operational before trying to connect the machine with DediConnect.
:::

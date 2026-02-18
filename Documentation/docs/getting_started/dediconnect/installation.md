---
title: Installation
sidebar_position: 2
---

DediConnect automatically installs everything required for hosting game servers.  
This guide helps you connect your dedicated root machine with DediConnect.

[Connect machine >](https://dash.gameserverapp.com/order/machine)

![Connect machine 1](/img/getting_started/dediconnect/installation/connect_machine_page.jpg)

## Prepare a Windows machine

:::warning WINDOWS ONLY
These steps are for Windows only. For Linux machines, [continue here](#connect-with-dediconnect).
:::

Before a Windows machine can connect with DediConnect, it must run a script to update the system and prepare it for hosting game servers. If you're using a non-Windows machine, skip ahead to the "Connect with DediConnect" section.

### 1. Login with RDP

Use [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) to access your dedicated machine using the `Administrator` account and the password from your hosting provider.

:::info `Administrator` user required
If your machine doesn’t have an `Administrator` account, [learn how to activate it >](/getting_started/dediconnect/installation#activate-administrator-user-on-windows)
:::

### 2. Open "PowerShell"

Click the `Windows Start` button, type `PowerShell`, then hit `Enter`.

![Windows install 1](/img/getting_started/dediconnect/installation/windows_install_1.jpeg)

### 3. Run command in PowerShell

Copy the appropriate command for your OS, paste it into PowerShell, and press `Enter`. The script will run and automatically restart your machine when finished.

##### Windows Server 2019
```powershell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/gameserverapp/Platform/main/Downloads/DediConnect/install-script_windows-server-2019.ps1 -OutFile .\install-script.ps1; .\install-script.ps1
```

##### Windows Server 2022
```powershell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/gameserverapp/Platform/main/Downloads/DediConnect/install-script_windows-server-2022.ps1 -OutFile .\install-script.ps1; .\install-script.ps1
```

:::warning Wait for reboot
Let the script complete fully, this might take up to 30 minutes. **Don’t** close the PowerShell window. 
Wait for the machine to reboot. This could take up to 30 minutes.
:::

### 4. Wait for machine to come back online

Once your machine is back online, it's ready to [connect with DediConnect](/getting_started/dediconnect/installation).

---

## Connect with DediConnect

:::caution before you begin
Make sure your machine runs a [supported OS](/getting_started/dediconnect/requirements) and meets all [requirements](/getting_started/dediconnect/requirements).  
Windows machines must first [run the GSA install script](/getting_started/dediconnect/installation#prepare-a-windows-machine)!
:::

You can add a new machine from the [machine overview page](https://dash.gameserverapp.com/machine) or by clicking the <Icon icon="fa-solid fa-plus-square" size="lg" /> next to `Machines`.

![Connect machine 1](/img/getting_started/dediconnect/installation/connect_machine_1.jpg)

### 1. Enter machine IP

DediConnect will quickly scan your machine to check compatibility.

![Connect machine 2](/img/getting_started/dediconnect/installation/connect_machine_2.jpg)

### 2. Enter credentials

Enter your machine’s username and password so GSA can install and manage game servers and services.

We use `AES-256` military-grade encryption to store your credentials securely.

:::caution Windows machine
Windows machines must run the [GSA install script first](/getting_started/dediconnect/installation#prepare-a-windows-machine) before connecting.
:::

:::tip SSH Key Auth (advanced users only)
Prefer key-based SSH login? Learn more [here](/getting_started/dediconnect/getting_started#ssh).  
If not, don't worry—your machine will automatically switch to key-based authentication during setup.
:::

Click `Start installation` when you're ready.

![Connect machine 3](/img/getting_started/dediconnect/installation/connect_machine_3.jpg)

### 3. Installation

Once installation begins, DediConnect will install all the required software. You'll receive an email when setup is complete.

![Connect machine 4](/img/getting_started/dediconnect/installation/connect_machine_4.jpg)

### 4. Ready!

Once the installation has finished you can start using your machine.

[Install game servers and services >](/dashboard/machines/install_game-server_service#how-to-install-game-server)

![Connect machine 5](/img/getting_started/dediconnect/installation/connect_machine_5.jpg)

---

## 💥 Troubleshooting 💥

### Activate "Administrator" user on Windows

If the `Administrator` account is missing, follow these steps to activate it:

#### 1. Login with RDP

Use [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) with the credentials from your hosting provider to connect to your machine.

#### 2. Open "Computer Management"

Click `Start`, type `Computer Management`, and press `Enter`.

![Windows user 1](/img/getting_started/dediconnect/installation/windows_user_1.jpeg)

#### 3. Locate "Users"

Navigate to `Local Users and Groups`, then `Users`.

![Windows user 2](/img/getting_started/dediconnect/installation/windows_user_2.png)

#### 4. Administrator properties

Right-click `Administrator`, then select `Properties`.

![Windows user 3](/img/getting_started/dediconnect/installation/windows_user_3.png)

#### 5. Enable the account

Uncheck the `Account is disabled` option.

![Windows user 4](/img/getting_started/dediconnect/installation/windows_user_4.png)

#### 6. Set Administrator password

Right-click `Administrator` again and select `Set Password`.

![Windows user 5](/img/getting_started/dediconnect/installation/windows_user_5.png) 

Then click proceed.

![Windows user 6](/img/getting_started/dediconnect/installation/windows_user_6.png)

#### 7. Enter password

Use the password you received from your hosting provider.

![Windows user 6](/img/getting_started/dediconnect/installation/windows_user_7.png)

#### 8. Test the account

Close your RDP session and log back in using the `Administrator` account to make sure its working properly.

---

### Debian: Change language to English

#### 1. Login and run command

Connect via SSH and run:

```bash
dpkg-reconfigure locales
```

#### 2. Select English locale

Choose `en_US.UTF-8 UTF8` and hit `OK`.

![Debian issue 1](/img/getting_started/dediconnect/installation/debian_issue_1.jpeg) 

then select `en_US.UTF-8` and hit `OK` again.

![Debian issue 2](/img/getting_started/dediconnect/installation/debian_issue_2.jpeg)

#### 3. Reboot and confirm

Run:

```bash
reboot
```

After reboot, confirm the change by running:

```bash
env | grep LANG
```

Expected output: `LANGUAGE=en_US:en`

![Debian issue 3](/img/getting_started/dediconnect/installation/debian_issue_3.jpeg)

---

### Windows: Change language to English

#### 1. Login with RDP

Use [Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) and log in with the `Administrator` account.

:::info `Administrator` user required
Missing the `Administrator` account? [Activate it >](/getting_started/dediconnect/installation#activate-administrator-user-on-windows)
:::

#### 2. Open PowerShell

Type `PowerShell` in the search bar or open it from the Start menu.

![Windows change language 1](/img/getting_started/dediconnect/installation/windows_change_language_1.jpg)

#### 3. Run language change commands

Copy/Paste and run:

```bash
Set-WinSystemLocale -SystemLocale en-US
Set-WinUILanguageOverride -Language en-US
```

![Windows change language 2](/img/getting_started/dediconnect/installation/windows_change_language_2.jpg)

#### 4. Reboot

Restart the machine. After reboot, the system should be in English and ready to connect.

:::danger
Keep the language on English. Changing the language again will break the installation.
:::
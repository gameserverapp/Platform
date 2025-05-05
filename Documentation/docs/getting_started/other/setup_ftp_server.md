---
title: Setup FTP Server (Windows)
sidebar_position: 2
---

:::warning RconConnect only
These instructions apply only to **RconConnect** game servers!
:::

## 1. Download FileZilla Server

Start by downloading [FileZilla Server](https://filezilla-project.org/download.php?type=server) on your dedicated machine.

![Setup FTP 1](/img/getting_started/rconconnect/getting_started/setup_ftp_1.jpeg)

## 2. Install FileZilla Server

Follow the installation prompts to install FileZilla Server.

![Setup FTP 2](/img/getting_started/rconconnect/getting_started/setup_ftp_2.jpeg)

![Setup FTP 3](/img/getting_started/rconconnect/getting_started/setup_ftp_3.jpeg)

![Setup FTP 4](/img/getting_started/rconconnect/getting_started/setup_ftp_4.jpeg)

![Setup FTP 5](/img/getting_started/rconconnect/getting_started/setup_ftp_5.jpeg)

### Enter a password

Set a strong password when prompted. This password will be used to manage the FTP server. Make sure to write it down or store it securely.

![Setup FTP 6](/img/getting_started/rconconnect/getting_started/setup_ftp_6.jpeg)

![Setup FTP 7](/img/getting_started/rconconnect/getting_started/setup_ftp_7.jpeg)

![Setup FTP 8](/img/getting_started/rconconnect/getting_started/setup_ftp_8.jpeg)

## 3. Connect to FileZilla Server

Click the `Connect to FileZilla FTP server` button and enter the management password you just set.

![Setup FTP 9](/img/getting_started/rconconnect/getting_started/setup_ftp_9.jpeg)

![Setup FTP 10](/img/getting_started/rconconnect/getting_started/setup_ftp_10.jpeg)

## 4. Create FTP User

Open the management panel by clicking `Server` → `Configure`.

![Setup FTP 11](/img/getting_started/rconconnect/getting_started/setup_ftp_11.jpeg)

![Setup FTP 12](/img/getting_started/rconconnect/getting_started/setup_ftp_12.jpeg)

![Setup FTP 13](/img/getting_started/rconconnect/getting_started/setup_ftp_13.jpeg)

### Set "Require a password to log in"

Enable the setting "Require a password to log in" under the `Credentials` field. Enter a new password for the FTP user. This password will be needed when setting up the RconConnect FTP form, so be sure to save it.

![Setup FTP 14](/img/getting_started/rconconnect/getting_started/setup_ftp_14.jpeg)

![Setup FTP 15](/img/getting_started/rconconnect/getting_started/setup_ftp_15.jpeg)

## 5. Configure Passive FTP Mode

Set up passive FTP mode in the server settings to ensure proper connectivity.

![Setup FTP 16](/img/getting_started/rconconnect/getting_started/setup_ftp_16.jpeg)

## 6. Update Firewall Rules

Now, you need to allow access through Windows Defender Firewall by opening the necessary ports.

:::info Other firewalls
If your machine has additional firewalls, make sure to also open or forward these ports: `21`, and the range `11000–12000`.
:::

:::caution
Opening ports can expose your machine to security risks. Always use **strong, unique passwords** for your FTP server to protect against unauthorized access.
:::

### 1. Open Windows Defender Firewall

Click the Windows Start button, type `firewall`, and press `Enter`.

![Setup FTP 17](/img/getting_started/rconconnect/getting_started/setup_ftp_17.jpeg)

### 2. Go to Advanced Settings

Click `Advanced settings` in the sidebar.

![Setup FTP 18](/img/getting_started/rconconnect/getting_started/setup_ftp_18.jpeg)

### 3. Create a New Inbound Rule

Click `Inbound Rules`, then click `New Rule`.

![Setup FTP 19](/img/getting_started/rconconnect/getting_started/setup_ftp_19.jpeg)

### 4. Set Rule Details

Follow the prompts to create a rule that opens the necessary ports for FTP traffic.

![Setup FTP 20](/img/getting_started/rconconnect/getting_started/setup_ftp_20.jpeg)

![Setup FTP 21](/img/getting_started/rconconnect/getting_started/setup_ftp_21.jpeg)

![Setup FTP 22](/img/getting_started/rconconnect/getting_started/setup_ftp_22.jpeg)

![Setup FTP 23](/img/getting_started/rconconnect/getting_started/setup_ftp_23.jpeg)

![Setup FTP 24](/img/getting_started/rconconnect/getting_started/setup_ftp_24.jpeg)

## 7. FTP Server Ready

Your FTP server is now set up and ready to be used with RconConnect. 

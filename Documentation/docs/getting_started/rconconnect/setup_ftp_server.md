---
title: Setup FTP Server (Windows)
sidebar_position: 2
---

## 1. Download FileZilla server
Download [FileZilla server](https://filezilla-project.org/download.php?type=server) on your dedicated machine.

![Setup FTP 1](/img/getting_started/rconconnect/getting_started/setup_ftp_1.jpeg)

## 2. Install FileZilla server

![Setup FTP 2](/img/getting_started/rconconnect/getting_started/setup_ftp_2.jpeg)

![Setup FTP 3](/img/getting_started/rconconnect/getting_started/setup_ftp_3.jpeg)

![Setup FTP 4](/img/getting_started/rconconnect/getting_started/setup_ftp_4.jpeg)

![Setup FTP 5](/img/getting_started/rconconnect/getting_started/setup_ftp_5.jpeg)

### Enter a password
This password is used to manage your FTP server. Pick a strong password and write it down somewhere.

![Setup FTP 6](/img/getting_started/rconconnect/getting_started/setup_ftp_6.jpeg)

![Setup FTP 7](/img/getting_started/rconconnect/getting_started/setup_ftp_7.jpeg)

![Setup FTP 8](/img/getting_started/rconconnect/getting_started/setup_ftp_8.jpeg)

## 3. Connect with FileZilla Server
Hit the `Connect to FileZilla FTP server` button. Enter the FTP management password (the one you setup in the previous step).

![Setup FTP 9](/img/getting_started/rconconnect/getting_started/setup_ftp_9.jpeg)

![Setup FTP 10](/img/getting_started/rconconnect/getting_started/setup_ftp_10.jpeg)

## 4. Create FTP user
Bring up the management panel by clicking `Server` and then `Configure`.

![Setup FTP 11](/img/getting_started/rconconnect/getting_started/setup_ftp_11.jpeg)

![Setup FTP 12](/img/getting_started/rconconnect/getting_started/setup_ftp_12.jpeg)

![Setup FTP 13](/img/getting_started/rconconnect/getting_started/setup_ftp_13.jpeg)

### Set "Require a password to log in"
Select "Require a password to log in" on the `Credentials` field and enter a new password.
Make sure to write down this password. You need this for the RconConnect FTP form later.

![Setup FTP 14](/img/getting_started/rconconnect/getting_started/setup_ftp_14.jpeg)

![Setup FTP 15](/img/getting_started/rconconnect/getting_started/setup_ftp_15.jpeg)

## 5. Configure Passive FTP mode

![Setup FTP 16](/img/getting_started/rconconnect/getting_started/setup_ftp_16.jpeg)

## 6. Update firewall
We should now allow access to the FTP server by opening the ports in the Windows Defender Firewall. 

:::info Other firewalls
If there are any other firewalls protecting your machine, you will also need to open / forward these ports manually: `21, 11000 - 12000`.
:::

:::caution
Opening ports can be risky. You should always use strong passwords on your FTP server (and anywhere else). People on the internet might crack weak passwords and access your FTP server.
You have been warned!
:::

### 1. Open Windows Defender Firewall
Click the `Windows Start` button and type `firewall` and hit `enter` to open it.

![Setup FTP 17](/img/getting_started/rconconnect/getting_started/setup_ftp_17.jpeg)

### 2. Advanced settings
Click `Advanced settings`.
![Setup FTP 18](/img/getting_started/rconconnect/getting_started/setup_ftp_18.jpeg)

### 3. Create new rule
First click `Inbound Rules` and then click `New Rule`.
![Setup FTP 19](/img/getting_started/rconconnect/getting_started/setup_ftp_19.jpeg)

### 4. Enter new rule settings

![Setup FTP 20](/img/getting_started/rconconnect/getting_started/setup_ftp_20.jpeg)

![Setup FTP 21](/img/getting_started/rconconnect/getting_started/setup_ftp_21.jpeg)

![Setup FTP 22](/img/getting_started/rconconnect/getting_started/setup_ftp_22.jpeg)

![Setup FTP 23](/img/getting_started/rconconnect/getting_started/setup_ftp_23.jpeg)

![Setup FTP 24](/img/getting_started/rconconnect/getting_started/setup_ftp_24.jpeg)

## 7. FTP server ready
Your FTP server is now ready to use with RconConnect.
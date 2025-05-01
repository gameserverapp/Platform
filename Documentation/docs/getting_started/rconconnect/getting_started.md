---
title: Getting started
sidebar_position: 1
---

RconConnect helps you supervise both self-hosted and rented game servers, giving you a clear helicopter view of your server environment.

:::info Limited features
While many features are available through RconConnect. Core server management actions  like starting, stopping, and updating game servers, are not supported.

If you need full automation and control of your game servers, consider using [DediConnect](/getting_started/dediconnect/getting_started).
:::

## 1. Connect with RconConnect

:::warning Incompatible providers
RconConnect is not compatible with the following providers due to technical limitations: __Gportal, GTX Gaming, and Host Havoc__.
:::

### 1. Select the game

Go to the [RconConnect game server form](https://dash.gameserverapp.com/order/gameserver/rconconnect) and choose the game your server is hosting.

### 2. Enter details

Fill in the required fields on the form. These details vary depending on the game. Once completed, \
click `Connect RconConnect server` at the bottom of the form.

![RconConnect connect 1](/img/getting_started/rconconnect/getting_started/connect_1.png)

:::info FTP access
For some games, RconConnect requires FTP access to enable features like admin tools and the in-game shop.

[How to install an FTP server on your machine >](/getting_started/other/setup_ftp_server)
:::

:::caution Find FTP path
If you're encountering errors with your FTP path, or you're not sure what to enter, follow this guide: [How to find the correct FTP path >](/getting_started/rconconnect/getting_started#find-the-savedarks-ftp-path)
:::

### 3. Integrate your game server

Once your server is connected, additional configuration may be required to complete the setup.

[Continue with the integration process >](/getting_started/rconconnect/integrate)

## 💥 Troubleshooting 💥

### Find the "SavedArks" FTP path

#### 1. Install an FTP client

Download and install [FileZilla Client](https://filezilla-project.org/download.php?type=client) on your personal computer.

#### 2. Connect to your FTP server

Launch FileZilla and connect to your server using its IP address, along with your FTP username and password.

![Find FTP 1](/img/getting_started/rconconnect/getting_started/find_ftp_1.jpeg)

#### 3. Locate the "SavedArks" folder

In the right-hand panel of FileZilla, browse to your `SavedArks` directory.

![Find FTP 2](/img/getting_started/rconconnect/getting_started/find_ftp_2.jpeg)

#### 4. Copy the FTP path

Look at the `Remote site` field at the top of the window. Copy this path and paste it into the `SavedArks` field in the RconConnect form.

![Find FTP 3](/img/getting_started/rconconnect/getting_started/find_ftp_3.jpeg)

---

### TCAdmin misconfigured

If you're using a TCAdmin server, it must be properly configured for RconConnect to function. The following settings are based on instructions from TCAdmin support:

![TCAdmin fix 1](/img/getting_started/rconconnect/getting_started/tcadmin_fix_1.png)

### No logs recieved error using nitrado

If you are using nitrado and keep getting the following error:
![Logs not received](/img/getting_started/rconconnect/getting_started/no_logs_nitrado.png)

Make sure you have enabled the `ServerGameLog` setting on the nitrado dashboard.

![Logs not received](/img/getting_started/rconconnect/getting_started/servergamelog_nitrado.png)
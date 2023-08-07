---
title: Getting started
sidebar_position: 1
---

RconConnect helps you supervise self-hosted & rented game servers and get a helicopter view.

:::info Limited features
While we try to make most features available for RconConnect, it's not possible to manage your game server (start, stop, update) when using RconConnect. Use [DediConnect](/getting_started/dediconnect/getting_started) for that instead.
:::



## 1. Connect with RconConnect

:::warning Incompatible providers
RconConnect cannot be used with these providers, due to technical reasons: __Gportal, GTX Gaming, Host Havoc & Nitrado__
:::

### 1. Select the game
Head over to the [connect RconConnect game server form](https://dash.gameserverapp.com/order/gameserver/rconconnect) and select the game your server is hosting.

### 2. Enter details
Follow instructions on the form and hit `Connect RconConnect server` at the bottom of the form to continue. The required info varies per game.

![RconConnect connect 1](/img/getting_started/rconconnect/getting_started/connect_1.png)

:::info FTP access
Some games need FTP access to gather information about your players, so the dashboard can present this to you. 

[Learn how to install a FTP server on your machine](/getting_started/rconconnect/setup_ftp_server)
:::

:::caution Find FTP path
If you're unable to find the right path or the form keeps reporting an error about the FTP path you provided: [Learn how to find the right FTP path >](/getting_started/rconconnect/getting_started#find-the-right-ftp-path)
:::

### 3. Configure game server
After successfully connecting your game server with RconConnect you may need to do a couple more things. Each game requires different things to complete integration.

Head over to the `Integrate` tab on your game server settings page, on your GSA dashboard, and follow the instructions from the `Integrate` tab to finish integration.

:::info No Integrate page?
If your game server did not come with an `Integrate` tab it means that you don't need to take any further steps and your game server is already fully integrated!
:::



## Troubleshooting

### Find the "SavedArks" FTP path

#### 1. Install FTP client on your personal computer
[Download FileZilla's client version](https://filezilla-project.org/download.php?type=client) and install it on your personal computer.

#### 2. Connect with FTP server
Open the FileZilla client and enter the IP, username and password for your FTP server.

![Find FTP 1](/img/getting_started/rconconnect/getting_started/find_ftp_1.jpeg)

#### 3. Navigate to "SavedArks" folder
In the right window, navigate to your `SavedArks` folder.

![Find FTP 2](/img/getting_started/rconconnect/getting_started/find_ftp_2.jpeg)

#### 4. Copy "Remote site" path
Copy the path in `Remote site` path and paste it in the `SavedArks` field on the RconConnect form.

![Find FTP 3](/img/getting_started/rconconnect/getting_started/find_ftp_3.jpeg)

---

### TCAdmin misconfigured
In order for RconConnect to work with a TCAdmin server the TCAdmin server should be properly configured. As instructed by TCAdmin support:

![TCAdmin fix 1](/img/getting_started/rconconnect/getting_started/tcadmin_fix_1.png)

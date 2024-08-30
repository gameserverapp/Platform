---
title: Create GSA + STEAM blueprint
sidebar_position: 3
---


Learn how to create a blueprint for STEAM games.

In this guide, we'll walk you through creating a blueprint for [Myth of Empires](https://store.steampowered.com/app/1371580/Myth_of_Empires/). While this example focuses on setting up a Windows blueprint, the same principles apply to Linux.

:::warning Work in Progress
This section is currently under development.
:::

## Intro

For this guide, we assume you've already [created a blueprint](/dashboard/blueprints/create_and_manage_blueprints#create-a-blueprint) and are now on [the `Add version` page](/dashboard/blueprints/create_and_manage_blueprints#add-version).

:::caution Use the `GSA + Steam` Template
We used the `GSA + Steam (Windows only)` blueprint template for this guide. Using a template is recommended as it ensures most fields are pre-filled.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)
:::

## 1. Enter STEAM ID & Executable

### Steam Client & Server ID

Enter the STEAM Client & Server ID for the game server in the appropriate fields ([Learn how to find STEAM IDs](/dashboard/blueprints/how-to/create_steam_blueprint#finding-steam-ids)).

For this example, we used:
- Client ID: `1371580`
- Server ID: `1794810`

![Blueprint - Create STEAM blueprint - Find server id](/img/dashboard/blueprint/create_steam_blueprint/enter_steam_ids.jpg)

### Executable Path

Enter the executable path in the `Executable` field and click save ([Learn how to find the executable path](/dashboard/blueprints/how-to/create_steam_blueprint#finding-executable-path)).

For this example, we used:\
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

![Blueprint - Create STEAM blueprint - Find executable path](/img/dashboard/blueprint/create_steam_blueprint/enter_executable.jpg)

## 2. Launch a Fresh Server with the Blueprint

### 2.1 Create a New Server

Go to the [Install new game server page](https://dash.gameserverapp.com/order/gameserver/machine) and start a new game server using the blueprint we just created.

![Blueprint - Create STEAM blueprint - Launch new game server](/img/dashboard/blueprint/create_steam_blueprint/launch_server.jpg)

Click `Install game server now` and wait for the installation process to finish.

:::caution
Before moving to the next step, please give the game server 2 to 5 minutes to boot up and initialize.
:::

### 2.2 Test if It Starts

Now, let's test whether the game server shows any signs of activity. This will help confirm that the IDs and executable path are correct.

#### Check Memory Usage

If the memory usage indicator hovers above `0.5GB`, it's a good sign that the game server is launching properly.

![Blueprint - Create STEAM blueprint - Check server memory](/img/dashboard/blueprint/create_steam_blueprint/check_server_memory.jpg)

#### Check Docker Container Logs

If logs start appearing in the [Docker container logs](/dashboard/game_servers/getting_started#logs), it’s usually a good sign that the game server is launching. However, logs may also indicate issues preventing the server from starting.

In our example (image below), you'll see multiple lines with the text `MOE` ([from our executable path](/dashboard/blueprints/how-to/create_steam_blueprint#executable-path)).\
The logs might show errors, but in this case, they confirm that the game server is starting up.

![Blueprint - Create STEAM blueprint - Check server logs](/img/dashboard/blueprint/create_steam_blueprint/check_server_logs.jpg)

## 4. Configure Settings

Now that we've confirmed the game server is booting up, it's important to configure the remaining settings. These settings will likely vary depending on the game.

In most cases, this involves adding `Launch parameters` and/or `Config files` with the correct values for your game server.

The easiest way to determine what your game needs is to use your favorite search engine or search the game's wiki page.

### 4.1 Launch Parameters

The preferred method is to use `launch parameters` for settings like game ports, slot limits, server name, cluster ID, etc. If your game server supports `launch parameters`, we recommend using them.

For Myth of Empires, we referred to [IceWarden's guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3169663150#6901124), which explains the `launch parameters` you can use. We selected the following parameters and replaced some values (ports, server name, IDs, etc.) with [variables](/dashboard/blueprints/variables):


```bash
LargeTerrain_Central_Main -game -server -DataLocalFile -NotCheckServerSteamAuth -PrivateServer -MultiHome=0.0.0.0 -OutAddress={machine.ip}
-SessionName={gameserver.list_name} -MaxPlayers={gameserver.slot_limit} -ClusterId={cluster.id} -Port={gameserver.game_port} -QueryPort={gameserver.query_port}
```
:::caution Use Variables
Since GSA automatically assigns ports for each game server, it's crucial to use [variables](/dashboard/blueprints/variables). This prevents your game server from attempting to launch with hardcoded ports when GSA has assigned different ones.
:::

**Add New Blueprint Version**\
[Create a new version for your blueprint](/dashboard/blueprints/create_and_manage_blueprints#add-version), enter the launch parameters in the `Launch parameters` field, and save the form.

![Blueprint - Create STEAM blueprint - Edit launch params](/img/dashboard/blueprint/create_steam_blueprint/edit_launch_params.jpg)

### 4.2 Config Files

[//]: # (todo add config file info)

**Test & Repeat**\
You can now [activate the new version on the game server](/dashboard/blueprints/getting_started#activate-blueprint-version) and restart the game server.\
Give it some time (2 - 10 minutes) to boot up. Afterward, check if it came up and try joining the game server.

## 5. Hooray!
If you're lucky, like us, the game server will show up, and you'll be able to join.

:::tip Finalize Blueprint Settings
Learn how to configure settings like uptime monitoring, RCON, backups, and more in the [blueprint form section >](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form).
:::

![Blueprint - Create STEAM blueprint - working server](/img/dashboard/blueprint/create_steam_blueprint/working_server.jpg)

## Help

### Finding STEAM IDs

#### Client ID
The Steam store URL contains the `STEAM Client ID`. In this example, the `STEAM Client ID` is `1371580`: https://store.steampowered.com/app/1371580/Myth_of_Empires/

#### Server ID
In most cases, the `STEAM Server ID` is different from the `STEAM Client ID`.\
Finding the `STEAM Server ID` is usually a bit more complicated. Websites like [SteamDB.info](https://steamdb.info/) can help you find it.

##### Search SteamDB
Use the search feature on [SteamDB.info](https://steamdb.info/) and search for: `{game name} dedicated server`.\
Replace `{game name}` with the actual name of the game.

In our example, we searched for: `myth of empires dedicated server`.

![Blueprint - Create a blueprint - Find server id](/img/dashboard/blueprint/create_steam_blueprint/steamdb.jpg)

According to [SteamDB.info](https://steamdb.info/), `1794810` is the Server ID for Myth of Empires.

### Finding Executable Path
[Search SteamDB for the dedicated server files](/dashboard/blueprints/how-to/create_steam_blueprint#search-steamdb) and click on the Dedicated server. Then go to the `Configuration` page, and look for `Executable`.

:::caution
It's important to ensure that the executable path is for the correct operating system, either Linux or Windows. In our case, since only Windows is supported, there should only be one executable path.
:::

![Blueprint - Create STEAM blueprint - Find executable path](/img/dashboard/blueprint/create_steam_blueprint/steamdb_executable.jpg)

In the example above, you see that `MOE/Binaries/Win64/MOEServer.exe` is the executable path.

:::caution Fix Paths
The executable path from SteamDB won't work out of the box.\
You need to add the correct container path, as explained below:

#### Windows
For Windows, prepend the following path: `C:\Users\ContainerUser\serverfiles\`\
Combined, it should look like this:\
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

#### Linux
For Linux, prepend the following path: `/home/containeruser/serverfiles/`\
Combined, it should look like this:\
`/home/containeruser/serverfiles/MOE/Binaries/Win64/MOEServer.exe`
:::

---
title: Create STEAM blueprint
sidebar_position: 2
---


Learn how to create a blueprint for STEAM games.


## Intro
For this guide we assume you already [created a blueprint](/dashboard/blueprints/create_blueprint#create-a-blueprint) and are currently on [the `Add version` page](/dashboard/blueprints/create_blueprint#add-version).\
In this example we create a blueprint for [Myth of Empires](https://store.steampowered.com/app/1371580/Myth_of_Empires/).

:::caution Use `GSA + Steam` Template
For this guide we used the blueprint template `GSA + Steam (Windows only)`. It's recommended to use a template, to ensure all fields are filled in.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)
:::

## 1. Find & enter STEAM ID's

Enter the STEAM Client & Server ID and save the blueprint.\
Don't have the ID's yet? [Learn how to find them >](/dashboard/blueprints/create_steam_blueprint#finding-steam-ids)

![Blueprint - Create STEAM blueprint - Find server id](/img/dashboard/blueprint/create_steam_blueprint/enter_steam_ids.jpg)


## 2. Find & enter Executable path

Enter the path for the executable in the `Executable` field and hit save.\
Don't have the executable path yet? [Learn how to find it >](/dashboard/blueprints/create_steam_blueprint#finding-executable-path)

Here is the Executable path we use for our example: 
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

![Blueprint - Create STEAM blueprint - Find executable path](/img/dashboard/blueprint/create_steam_blueprint/enter_executable.jpg)


## 3. Install fresh server with blueprint

Head over to the [Install new game server page](https://dash.gameserverapp.com/order/gameserver/machine) and fire up a new game server, using the blueprint you just created.\
Hit `Install game server now` and wait for the installation process to finish.

![Blueprint - Create STEAM blueprint - Launch new game server](/img/dashboard/blueprint/create_steam_blueprint/launch_server.jpg)

## 4. Confirm server starts

Before we can begin adding configurations, it's important to confirm that the ID's and executable path is valid.

### Check memory usage
The easiest way to check whether things are working, is by starting the game server and monitoring the memory usage. 

When the memory usage indicator hovers above `0.5GB` the server is most likely working.

![Blueprint - Create STEAM blueprint - Check server memory](/img/dashboard/blueprint/create_steam_blueprint/check_server_memory.jpg)


### Check Docker container logs

Head over to the `Game server settings` page and navigate to `Logs`.

When the Docker container logs are empty, it may indicate that the executable path was invalid or the game server needs certain software installed to launch.

**Errors may be fine**\
As you can see on the image below, are there a lot of lines with `MOE` (from our executable path).\
The logs may show errors, but at least we confirmed that the game server is starting up. Proceed to the next step!


![Blueprint - Create STEAM blueprint - Check server logs](/img/dashboard/blueprint/create_steam_blueprint/check_server_logs.jpg)


## 5. Finalize settings

Now that we confirmed that the game server is starting up, it is important to configure the remaining settings. What needs to be configured will be different per game.


### Look up game-specific settings
Some games use `launch parameters` for settings like game ports etc, and other games only provide configuration files for this. The easiest way to find out what your game needs, is to use your favorite search engine.

For Myth of Empires we came across [IceWarden's guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3169663150#6901124), which explained what `launch parameters` we can use.

### Configure launch parameters
We cherry-picked the following launch parameters from the guide and added [variables](/dashboard/blueprints/variables), so GSA will auto-adjust the settings for each game server:

```bash
LargeTerrain_Central_Main -game -server -DataLocalFile -NotCheckServerSteamAuth -PrivateServer -MultiHome=0.0.0.0 -OutAddress={machine.ip}
-SessionName={gameserver.list_name} -MaxPlayers={gameserver.slot_limit} -ClusterId={cluster.id} -Port={gameserver.game_port} -QueryPort={gameserver.query_port}
```

:::caution Use variables
Because GSA will automatically assign ports for each game server, it is important to use [variables](/dashboard/blueprints/variables). This avoids your game server trying to launch with hardcoded ports, while GSA assigned different ports.
:::


**Add new blueprint version**\
Go back to your blueprint and click `Add version`. Enter your launch parameters in the `Launch parameters` field, and save the form.

![Blueprint - Create STEAM blueprint - Edit launch params](/img/dashboard/blueprint/create_steam_blueprint/edit_launch_params.jpg)

**Test & repeat**\
Now [activate the new version on the game server](/dashboard/blueprints/getting_started#activate-blueprint-version) and restart the game server.
Check whether the game server was able to launch and you can join the game server.

## 6. Done!
If you are lucky, like us, then your game server will show up shortly after setting up the launch parameters or configuration files.

![Blueprint - Create STEAM blueprint - working server](/img/dashboard/blueprint/create_steam_blueprint/working_server.jpg)

## Help

### Finding STEAM ID's

#### Client ID
The Steam store url contains the `STEAM Client ID`. In this example the `STEAM Client ID` is `1371580`: https://store.steampowered.com/app/1371580/Myth_of_Empires/

#### Server ID
In most cases is the `STEAM Server ID` different from the `STEAM Client ID`.\
Finding the `STEAM Server ID` is usually a bit more complicated. Websites like [SteamDB.info](https://steamdb.info/) can help you find it.

##### Search SteamDB 
Use the search on [SteamDB.info](https://steamdb.info/) and search for: `{game name} dedicated server`.\
Replace `{game name}` with the actual game of the name.

In our example we searched for: `myth of empires dedicated server`.

![Blueprint - Create a blueprint - Find server id](/img/dashboard/blueprint/create_steam_blueprint/steamdb.jpg)

According to [SteamDB.info](https://steamdb.info/) is `1794810` the Server ID for Myth of Empires.



### Finding Executable path
[Search SteamDB for the dedicated server files](/dashboard/blueprints/create_steam_blueprint#search-steamdb) and click the Dedicated server. Then head over to the `Configuration` page, and look for `Executable`. 

:::caution
It's important to pay attention to whether the executable path is for Linux or Windows. When, like in our case, there is only Windows-support, there should only be one executable path.
:::


![Blueprint - Create STEAM blueprint - Find executable path](/img/dashboard/blueprint/create_steam_blueprint/steamdb_executable.jpg)


In the example above you see that `MOE/Binaries/Win64/MOEServer.exe` is the executable path.

:::caution Fix paths
The executable path on SteamDB will not work out of the box.\
You must add the container path, as explained below:

#### Windows
For Windows prepend the following path: `C:\Users\ContainerUser\serverfiles\`\
Combined it should look like: \
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

#### Linux
For Linux prepend the following path: `/home/containeruser/serverfiles/`\
Combined it should look like:\
`/home/containeruser/serverfiles/MOE/Binaries/Win64/MOEServer.exe`
:::
---
title: Create GSA + STEAM blueprint
sidebar_position: 3
---


Learn how to create a blueprint for STEAM games.

In this example we create a blueprint for [Myth of Empires](https://store.steampowered.com/app/1371580/Myth_of_Empires/). While this guide covers how to set up a Windows blueprint, but the same principles apply to Linux.

:::warning Work in progress
This section is currently being developed.
:::


## Intro
For this guide we assume you already [created a blueprint](/dashboard/blueprints/create_and_manage_blueprints#create-a-blueprint) and are currently on [the `Add version` page](/dashboard/blueprints/create_and_manage_blueprints#add-version).


:::caution Use `GSA + Steam` Template
For this guide we used the blueprint template `GSA + Steam (Windows only)`. It's recommended to use a template, to ensure most fields are already filled in.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)
:::

## 1. Enter STEAM ID & Executable

### Steam Client & Server ID

Enter the STEAM Client & Server ID ([Learn how to find STEAM IDs](/dashboard/blueprints/how-to/create_steam_blueprint#finding-steam-ids)), for the game server, in their appropriate fields.

For this example we used:
- Client ID: `1371580`
- Server ID: `1794810`

![Blueprint - Create STEAM blueprint - Find server id](/img/dashboard/blueprint/create_steam_blueprint/enter_steam_ids.jpg)


### Executable path

Enter the executable path ([Learn how to find executable path](/dashboard/blueprints/how-to/create_steam_blueprint#finding-executable-path)) in the `Executable` field and hit save.

For this example we used:\
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

![Blueprint - Create STEAM blueprint - Find executable path](/img/dashboard/blueprint/create_steam_blueprint/enter_executable.jpg)


## 2. Launch fresh server with blueprint


### 2.1 Create new server
Head over to the [Install new game server page](https://dash.gameserverapp.com/order/gameserver/machine) and fire up a new game server, using the blueprint we just created.\

![Blueprint - Create STEAM blueprint - Launch new game server](/img/dashboard/blueprint/create_steam_blueprint/launch_server.jpg)

Hit `Install game server now` and wait for the installation process to finish.


:::caution
Before you go to the next step, please give the game server at least  2 - 5 minutes to boot up and do its thing.
:::


### 2.2. Test if it starts

We can now test whether the game server shows any signs of life. This helps us confirm that the IDs and executable path are valid.

#### Check memory usage
When the memory usage indicator hovers above `0.5GB`, it's usually a good sign that the game server is able to launch.

![Blueprint - Create STEAM blueprint - Check server memory](/img/dashboard/blueprint/create_steam_blueprint/check_server_memory.jpg)


#### Check Docker container logs

When there are logs showing up on the [Docker container logs](/dashboard/game_servers/getting_started#logs), it's usually a good sign that the game server is able to launch. However, it may also indicate that something is wrong and the game server can't start.


On our example (image below), you can see many lines with the text `MOE` ([from our executable path](/dashboard/blueprints/how-to/create_steam_blueprint#executable-path)).\
The logs may show errors, but in this case we confirmed that the game server is starting up. 


![Blueprint - Create STEAM blueprint - Check server logs](/img/dashboard/blueprint/create_steam_blueprint/check_server_logs.jpg)


## 4. Configure settings

Now that we confirmed that the game server is booting up, it is important to configure the remaining settings. The things that need to be configured will most likely be different for each game.

In most cases does it either involve adding `Launch parameters` and / or `Config files`, combined with the right values for your game server.

The easiest way to find out what your game needs, is to use your favorite search engine or search the Game's wiki page.

### 4.1 Launch parameters
The preferred method is using `launch parameters` for settings like game ports, slot limits, server name, cluster id etc. If your game server supports `launch parameters`, we recommend going with that.

For Myth of Empires we came across [IceWarden's guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3169663150#6901124), that explained which `launch parameters` we can use.
We cherry-picked the following launch parameters and replaced some values (ports, server name, ids etc) with [variables](/dashboard/blueprints/variables):

```bash
LargeTerrain_Central_Main -game -server -DataLocalFile -NotCheckServerSteamAuth -PrivateServer -MultiHome=0.0.0.0 -OutAddress={machine.ip}
-SessionName={gameserver.list_name} -MaxPlayers={gameserver.slot_limit} -ClusterId={cluster.id} -Port={gameserver.game_port} -QueryPort={gameserver.query_port}
```

:::caution Use variables
Because GSA will automatically assign ports for each game server, it is important to use [variables](/dashboard/blueprints/variables). This avoids your game server trying to launch with hardcoded ports, while GSA assigned different ports.
:::


**Add new blueprint version**\
[Create a new version for your blueprint](/dashboard/blueprints/create_and_manage_blueprints#add-version), enter the launch parameters in the `Launch parameters` field, and save the form.

![Blueprint - Create STEAM blueprint - Edit launch params](/img/dashboard/blueprint/create_steam_blueprint/edit_launch_params.jpg)

### 4.2 Config files



**Test & repeat**\
You can now [activate the new version on the game server](/dashboard/blueprints/getting_started#activate-blueprint-version) and restart the game server.\
Give it some time (2 - 10 minutes) to boot up. Afterward check if it came up and try join the game server.

## 5. Hooray!
If you are lucky, like us, the game server will show up and you're able to join the server.

:::tip Finalize Blueprint settings
Learn how to configure settings like uptime monitoring, RCON, backups and more on the [blueprint form section >](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form)
:::

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
[Search SteamDB for the dedicated server files](/dashboard/blueprints/how-to/create_steam_blueprint#search-steamdb) and click the Dedicated server. Then head over to the `Configuration` page, and look for `Executable`. 

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
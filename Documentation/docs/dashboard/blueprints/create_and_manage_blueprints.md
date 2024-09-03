---
title: Create & manage blueprints
sidebar_position: 2
---
Learn how to create your first blueprint, add new versions, and effectively use the blueprint form.

**How-to Guides:**
- [Create a blueprint for STEAM games](/dashboard/blueprints/how-to/create_steam_blueprint)
- [Create a blueprint for existing Docker containers](/dashboard/blueprints/how-to/create_custom_blueprint)
- [Create a blueprint using LinuxGSM](/dashboard/blueprints/how-to/create_linuxgsm_blueprint)
- [Publish a blueprint on the marketplace](/dashboard/blueprints/how-to/publish_blueprint_on_marketplace)

:::warning Work in Progress
This section is currently being developed.
:::

## The Basics

### Create a Blueprint

To create a new blueprint, go to the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint) and click the `+ Add blueprint` button.

![Blueprint - Create a blueprint - Add blueprint](/img/dashboard/blueprint/create_blueprint/create_blueprint_add-blueprint.jpg)

Enter a name for your blueprint and select the game it’s created for. If the game isn't listed, choose `Custom game`. You can also select a template (optional) to prefill parts of the blueprint form, making the setup process easier.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)

### Import & Export

### Add Version

When you need to update a blueprint, it's best to add a new version. This helps you keep track of changes and easily revert to previous versions if needed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_1.jpg)

GameServerApp will automatically assign a new version number for each version you create. If you prefer, you can set a custom version number—just make sure it follows the [Semantic Versioning 2.0.0](https://semver.org/) guidelines.

After setting up the Linux or Windows blueprint fields, you can optionally describe what you changed in the changelog field. This is particularly useful if you plan to publish the version on the marketplace, as it helps others understand what’s new.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_2.jpg)

### Blueprint Versions

When viewing a blueprint on your dashboard or on the marketplace, you'll find a `Versions` menu on the right. This menu shows whether a version supports Linux, Windows, or both, and the `state` of each version.

![Blueprint - Create a blueprint - Manage versions](/img/dashboard/blueprint/create_blueprint/create_blueprint_versions.jpg)

#### Version State

Newly created versions will start in `DEV mode`. Versions in `DEV mode` are only visible on your dashboard, allowing you to experiment and test.

##### Private Blueprint

For private blueprints, you can use `DEV mode` for all versions. Publishing is not necessary in this case.

##### Marketplace Blueprint

If you plan to publish the blueprint on the marketplace, note that `DEV mode` versions will not appear there. This mode lets you test changes before making them public.

Only published versions will appear on the marketplace. You can identify a published version by the `P` or `Latest` label in the `Versions` menu. Versions with an `S` label are skipped because a newer version has already been published, so these versions are ignored.

## Blueprint Form

Each blueprint comes with two identical forms: one for Linux and one for Windows. If you only want to create a blueprint for Linux, you can leave the Windows form empty.

Each form consists of various sections, which are used to group related settings:
- [Game](/dashboard/blueprints/create_and_manage_blueprints#game)
- [Config template](/dashboard/blueprints/create_and_manage_blueprints#config-template)
- [Directories](/dashboard/blueprints/create_and_manage_blueprints#directories)
- [Docker](/dashboard/blueprints/create_and_manage_blueprints#docker)

![Blueprint - Blueprint form - Manage versions](/img/dashboard/blueprint/create_blueprint/blueprint_form_overview.jpg)

### Game

All game-related settings are grouped under `Game`. These settings control how the game server works.

#### Type

##### Custom

The `Custom` game type currently doesn't have any settings.

##### GSA + Steam

The `GSA + Steam` game type is designed to work with the Official GSA docker containers. This game type is the preferred method for all STEAM games.

:::tip GSA + Steam Guide
If you want to create a GSA + Steam type blueprint, consider using the [Create GSA + Steam blueprint guide >](/dashboard/blueprints/how-to/create_steam_blueprint)
:::

![Blueprint - Blueprint form - GSA + Steam game type](/img/dashboard/blueprint/create_blueprint/blueprint_form_gsa_steam.jpg)

###### STEAM Client & Server ID

Enter the STEAM Client & Server ID for the game server in the appropriate fields ([Learn how to find STEAM IDs](/dashboard/blueprints/create_and_manage_blueprints#finding-steam-ids)).

Examples:
- Client ID: `1371580`
- Server ID: `1794810`

###### Executable

Enter the executable path that works inside the container.

:::info
When using Official GSA docker containers, the game files are mounted to the container under `/serverfiles`:

- Linux:
  - On host: `/home/GameServerApp/containers/XXXXXX/serverfiles`
  - Inside container: `/home/containeruser/serverfiles`
- Windows:
  - On host: `C:\GameServerApp\containers\XXXXXX\serverfiles`
  - Inside container: `C:\Users\ContainerUser\serverfiles`
:::

Example:\
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

[Learn how to find the executable path >](/dashboard/blueprints/create_and_manage_blueprints#find-the-executable-path)

###### Launch Parameters

Most game servers use `launch/start parameters` for settings like ports, passwords, and server list names. These settings often look like `-Ports 7777` or `-QueryPort 27015`.

If you're unsure whether your game has launch parameters, check the game wiki or docs.

Example:
```
LargeTerrain_Central_Main -game -server -DataLocalFile -NotCheckServerSteamAuth -PrivateServer -MultiHome=0.0.0.0 -OutAddress={machine.ip} -SessionName={gameserver.list_name} -MaxPlayers={gameserver.slot_limit} -ClusterId={cluster.id} -Port={gameserver.game_port} -QueryPort={gameserver.query_port}
```

###### Executable Log Output

In cases where the game server does not offer any form of logging, you can use this option to have GSA write the console output to a new file on each launch.

For most game servers, this setting can be ignored.

Example:\
`/home/containeruser/serverfiles/logs`

###### User

When using Official GSA docker containers, this should be set to `containeruser`.\
For other docker containers, this can be ignored.

###### Platform Type

For situations where you're working with Proton and want to download the Windows game server files on a Linux machine, this option lets you specify which files are downloaded.

When you're on a Linux machine and want to run a Windows game server, you should set this to `Windows`.

Options:
- Native (recommended)
- Linux
- Windows

###### Requires STEAM Auth

Certain games can only be downloaded from STEAM while being logged into an account that bought the game you want to download.

If you are dealing with a game that needs STEAM auth to download the server files, you can enable this option. It will then use the [STEAM auth credentials configured for the machine](/dashboard/machines/getting_started#steam-download-credentials).

###### Additional Start Script Commands

Since every game has different needs, it is possible to provide extra commands to make sure the game server has the required software packages installed to run.

You can enter one or more commands in the `Additional start script commands` fields, which will run every time the game server starts.

Example:\
`chown -R containeruser:containeruser /home/containeruser`

#### Command / Control Connections

If the game you're working with comes with RCON, Telnet, Websockets, or other forms to send commands and instructions to the game server, you can enable that option here.

Besides selecting how GSA can connect with the game server, it also lets you customize what commands are sent to the game server. This allows you to customize how GSA broadcasts a message on the server, or what command is used to ban a player.

You can use [variables](/dashboard/blueprints/variables) in the commands, so GSA can automatically insert the right ID for different players.

![Blueprint - Blueprint form - Command and control](/img/dashboard/blueprint/create_blueprint/blueprint_form_command_and_control.jpg)

:::tip
For most connection types, multiple implementations are available. If you are sure the game server you're working with supports RCON, but it doesn't appear to be working with GSA, you may want to consider trying a different implementation.

![Blueprint - Blueprint form - Command and control implementations](/img/dashboard/blueprint/create_blueprint/blueprint_form_command_control_implementations.jpg)
:::

#### Monitoring

You can control how GSA will monitor this game server and whether it should try to recover it in case of crashes, etc.

Available options:
- **Container (default)**: Checks whether the container is running or not
- **Source Query**: Checks whether the query port is responding or not
- **RCON**: Checks whether RCON / Telnet / Websockets, etc. is working or not

**Recovery Mode**\
Setting recovery mode to `Disabled` will prevent GSA from trying to restart the game server. When it's set to `Enabled`, GSA will try to start the game server back up after a crash is detected.

![Blueprint - Blueprint form - Monitoring](/img/dashboard/blueprint/create_blueprint/blueprint_form_monitoring.jpg)

#### Wipe Folders

Register which paths should have everything removed when a wipe is requested via the dashboard.\
The entered paths should be relative to the `container path` on the host.

Examples:

**Linux**\
When you want to wipe the following folder: `/home/GameServerApp/containers/XXXXXX/serverfiles/ShooterGame/Saved/SavedArks`

Enter in the `Wiped folders`: `/serverfiles/ShooterGame/Saved/SavedArks`

**Windows**\
When you want to wipe the following folder: `C:\GameServerApp\containers\XXXXXX\serverfiles\ShooterGame\Saved\SavedArks`

Enter in the `Wiped folders`: `/serverfiles/ShooterGame/Saved/SavedArks`

#### Backup Folders

Register which folders must be included in backups.

The `folder name` can be anything and is only used as a folder name inside the backup to group the files for the given path. The `path` must be relative to the `container path` on the host.

Examples:

**Linux**\
When you want to back up the following folder: `/home/GameServerApp/containers/XXXXXX/serverfiles/ShooterGame/Saved/SavedArks`

Enter as `path`: `/serverfiles/ShooterGame/Saved/SavedArks`

**Windows**\
When you want to back up the following folder: `C:\GameServerApp\containers\XXXXXX\serverfiles\ShooterGame\Saved\SavedArks`

Enter as `path`: `/serverfiles/ShooterGame/Saved/SavedArks`

#### Custom Backup & Restore Scripts

These fields can be used to run special commands for creating and restoring backups. For example, when you want to include specific plugin files or filter out unneeded files.


### Config template

#### Files

#### Parameters

### Directories

### Docker

#### Image


##### Official GSA Docker images

#### Environment variables

#### Mounts

#### Ports




## Help

### Find & register config files


### Find the executable path


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
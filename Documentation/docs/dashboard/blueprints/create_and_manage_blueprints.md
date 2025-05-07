---
title: Create & manage blueprints
sidebar_position: 2
---

Learn how to create your first blueprint, add new versions, and use the blueprint form effectively.

**How-to Guides:**
- [Create a blueprint for STEAM games](/dashboard/blueprints/how-to/create_steam_blueprint)
- [Create a blueprint for existing Docker containers](/dashboard/blueprints/how-to/create_custom_blueprint)
- [Create a blueprint using LinuxGSM](/dashboard/blueprints/how-to/create_linuxgsm_blueprint)
- [Publish a blueprint on the marketplace](/dashboard/blueprints/how-to/publish_blueprint_on_marketplace)

## The Basics

### Create a Blueprint

To get started, go to the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint) and click the `+ Add blueprint` button.

![Blueprint - Create a blueprint - Add blueprint](/img/dashboard/blueprint/create_blueprint/create_blueprint_add-blueprint.jpg)

Enter a name and select the game your blueprint is for. If the game isn't listed, choose `Custom game`. Optionally, you can select a template to prefill parts of the form, which can speed things up.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)

### Import & Export

### Add Version

To update an existing blueprint, it's best to create a new version. This keeps a clean history of changes and allows easy rollback.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_1.jpg)

Each new version gets an auto-generated version number, or you can set a custom one following [Semantic Versioning 2.0.0](https://semver.org/).

After filling in the Linux or Windows blueprint fields, you can add a changelog message. This is especially useful if you plan to publish your blueprint on the [marketplace](/dashboard/marketplace), as it helps others understand what changed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_2.jpg)

### Blueprint Versions

When you view a blueprint on your dashboard or on the [marketplace](/dashboard/marketplace), the `Versions` menu shows the operating system support and the current `state` of each version.

![Blueprint - Create a blueprint - Manage versions](/img/dashboard/blueprint/create_blueprint/create_blueprint_versions.jpg)

#### Version State

All new versions start in `DEV mode`, which means they are only visible in your dashboard. This is ideal for testing and iterating safely.

##### Private Blueprint

You can keep all versions in `DEV mode` if you're not planning to publish.

##### Marketplace Blueprint

Only published versions will show on the [marketplace](/dashboard/marketplace). Versions in `DEV mode` are hidden, allowing you to make changes privately.

Published versions are labeled `P` or `Latest`. If a version is labeled `S`, it means it was skipped because a newer one was already published.

## Blueprint Form

Each blueprint has two forms: one for Linux and one for Windows. If you're only creating a Linux blueprint, leave the Windows form empty.

Each form has multiple sections that organize related settings:
- [Game](/dashboard/blueprints/create_and_manage_blueprints#game)
- [Config template](/dashboard/blueprints/create_and_manage_blueprints#config-template)
- [Directories](/dashboard/blueprints/create_and_manage_blueprints#directories)
- [Docker](/dashboard/blueprints/create_and_manage_blueprints#docker)

![Blueprint - Blueprint form - Manage versions](/img/dashboard/blueprint/create_blueprint/blueprint_form_overview.jpg)

### Game

The `Game` section controls how the server operates.

#### Type

##### Custom

No settings are needed for `Custom` game type.

##### GSA + Steam

Use this for official GSA Docker containers. This is the recommended choice for STEAM games.

:::tip GSA + Steam Guide
Use the [Create GSA + Steam blueprint guide >](/dashboard/blueprints/how-to/create_steam_blueprint)
:::

![Blueprint - Blueprint form - GSA + Steam game type](/img/dashboard/blueprint/create_blueprint/blueprint_form_gsa_steam.jpg)

###### STEAM Client & Server ID

Add the correct STEAM IDs.  
Examples:
- Client ID: `1371580`
- Server ID: `1794810`

[Learn how to find STEAM IDs >](/dashboard/blueprints/create_and_manage_blueprints#finding-steam-ids)

###### Executable

Set the path to the server's executable inside the container.

:::info
Official GSA containers use `/serverfiles` inside the container.

- Linux:
    - Host: `/home/GameServerApp/containers/XXXXXX/serverfiles`
    - Container: `/home/containeruser/serverfiles`
- Windows:
    - Host: `C:\GameServerApp\containers\XXXXXX\serverfiles`
    - Container: `C:\Users\ContainerUser\serverfiles`
:::

Example:  
`C:\Users\ContainerUser\serverfiles\MOE/Binaries/Win64/MOEServer.exe`

[Learn how to find the executable path >](/dashboard/blueprints/create_and_manage_blueprints#find-the-executable-path)

###### Launch Parameters

Used for server settings like ports and names.  
Example:

```
LargeTerrain_Central_Main -game -server -DataLocalFile -NotCheckServerSteamAuth -PrivateServer -MultiHome=0.0.0.0 -OutAddress={machine.ip} -SessionName={gameserver.list_name} -MaxPlayers={gameserver.slot_limit} -ClusterId={cluster.id} -Port={gameserver.game_port} -QueryPort={gameserver.query_port}
```


###### Executable Log Output

If the server lacks logging, this captures console output.  
Example:  
`/home/containeruser/serverfiles/logs`

###### User

Set to `containeruser` for GSA containers. Others can ignore this.

###### Platform Type

Useful when using Proton to run Windows servers on Linux.  
Options:
- Native (recommended)
- Linux
- Windows

###### Requires STEAM Auth

Enable this if the server files need a STEAM login.  
[Configure STEAM auth >](/dashboard/machines/getting_started#steam-download-credentials)

###### Additional Start Script Commands

Use this to run commands every time the server starts.  
Example:  
`chown -R containeruser:containeruser /home/containeruser`

#### Command / Control Connections

Enable and configure RCON, Telnet, or Websockets here. This also lets you customize how GSA sends commands to the server.

You can use [variables](/dashboard/blueprints/variables) to auto-fill player IDs and other data.

![Blueprint - Blueprint form - Command and control](/img/dashboard/blueprint/create_blueprint/blueprint_form_command_and_control.jpg)

:::tip
Try a different implementation if one doesn't work.
![Blueprint - Blueprint form - Command and control implementations](/img/dashboard/blueprint/create_blueprint/blueprint_form_command_control_implementations.jpg)
:::

#### Monitoring

Control how GSA monitors and recovers your game server.

Options:
- **Container (default)**: Checks if container is running.
- **Source Query**: Checks if query port responds.
- **RCON**: Verifies if RCON, Telnet, or Websockets are working.

**Recovery Mode**  
Set to `Enabled` to auto-restart after a crash.

![Blueprint - Blueprint form - Monitoring](/img/dashboard/blueprint/create_blueprint/blueprint_form_monitoring.jpg)

#### Wipe Folders

Paths to clear on wipe requests. Use paths relative to the container.

:::info Examples
**Linux**  
Enter: `/serverfiles/ShooterGame/Saved/SavedArks`

**Windows**  
Enter: `\serverfiles\ShooterGame\Saved\SavedArks`
:::

#### Backup Folders

Folders to include in backups. Use relative paths.

:::info Examples
**Linux**  
Path: `/serverfiles/ShooterGame/Saved/SavedArks`

**Windows**  
Path: `\serverfiles\ShooterGame\Saved\SavedArks`
:::

#### Custom Backup & Restore Scripts

Add custom scripts for advanced backup/restore needs.

### Config template

Control fields available on [Config templates](/dashboard/game_servers/config_templates). Use [variables](/dashboard/blueprints/variables) for ports and more.

![Blueprint - Blueprint form - Config Templates](/img/dashboard/blueprint/getting_started/blueprint_reference_config_template.jpg)

#### Files

Define config files.

**Path** should be relative to the container.

:::info Examples
**Linux**  
Path: `/serverfiles/ShooterGame/Game.ini`

**Windows**  
Path: `\serverfiles\ShooterGame\Game.ini`
:::

**Default content** is used if the field is empty.

![Blueprint - Blueprint form - Config Template file example](/img/dashboard/blueprint/create_blueprint/blueprint_form_files_example.jpg)

#### Parameters

Define launch/start parameters.

**ID** is used in variables like `{config_parameter id="launch_parameter"}`.

![Blueprint - Blueprint form - Config Template parameter example](/img/dashboard/blueprint/create_blueprint/blueprint_form_parameter_example.jpg)

### Directories

Register folders for FTP or plugins. Use relative paths.

:::info Examples
**Linux**  
Path: `/serverfiles/ShooterGame/Saved`

**Windows**  
Path: `\serverfiles\ShooterGame\Saved`
:::

Set **Type** (like `Logs`) to activate specific features.

![Blueprint - Blueprint form - Directory Example](/img/dashboard/blueprint/create_blueprint/blueprint_form_directories_example.jpg)

### Docker

Configure your Docker image and settings. For existing containers, see the [custom Docker blueprint guide](/dashboard/blueprints/how-to/create_custom_blueprint).

![Blueprint - Docker Overview](/img/dashboard/blueprint/create_blueprint/blueprint_form_docker_overview.jpg)

#### Image

Use a public image with an optional version tag to ensure consistency.

##### Official GSA Docker Images

[Find GSA images on Docker Hub](https://hub.docker.com/u/gameserverapp).

##### Linux

- **Proton Support**  
  - Image: `gameserverapp/dediconnect-linux`  
  - Version: `proton-debian12`

- **Basic Support**  
  - Image: `gameserverapp/dediconnect-linux`  
  - Version: `debian-12`

##### Windows

Use `{dynamic-os-tag}` for auto-matching Windows version.

- **Unreal Engine Support**  
  - Image: `gameserverapp/dediconnect-windows`  
  - Version: `{dynamic-os-tag}-ue5`

- **Basic Support**  
  - Image: `gameserverapp/dediconnect-windows`  
  - Version: `{dynamic-os-tag}`

#### Environment Variables

Set environment variables to customize behavior. Refer to the container's documentation.

#### Mounts

Mounts let you map a folder from your host machine to the Docker container.

**Host Path**  
You can enter any valid path on your machine as the `Host path`. Unlike other fields in the blueprint form, this path is **not** relative to the container folder. That means you can also mount folders located outside the container directory.

To simplify this, you can use various [path variables](/dashboard/blueprints/variables#containerhome_root), such as `{container.home_root}`, which points to commonly used locations like the container home directory.

Example:  

`{container.home_root}/serverfiles`


**Container Path**  
The `Container path` defines the location inside the container where the host path will be mounted.

#### Ports

When setting up ports, you need to specify the `type` (e.g., RCON, game port). This helps GSA understand how the port will be used.

The `multiplier` determines how ports are allocated across game servers that use the same blueprint. It's used to increment ports for each new server instance.

Example:  
If the base port is `7777` and the multiplier is `2`, ports would be assigned like this:

- Game server 1: port 7777  
- Game server 2: port 7779  
- Game server 3: port 7781

## Help

### Find & Register Config Files

Not sure where the config file is located? Follow these steps to find and register it:

1. **Launch a server using the blueprint**  
   Set up a game server with the blueprint. Make sure you’ve registered at least one directory pointing to the `serverfiles` folder.

2. **Connect via FTP**  
   Use your preferred FTP client to access the server files. You’ll find the [FTP credentials on the `Connect` page](/dashboard/game_servers/getting_started#connect--ftp-info).

3. **Locate the config file**  
   Browse the FTP to find the config file. If you're unsure where to look, refer to the game's documentation.  
   Example path: `/serverfiles/Config/LinuxServer/Game.ini`

![Blueprint - Find Config Path](/img/dashboard/blueprint/create_blueprint/find_config_path.jpg)

### Find the Executable Path

Need the executable path for your game server? Here's how:

1. **Launch a server using the blueprint**  
Install the server and make sure at least one registered directory points to `serverfiles`.

2. **Connect via FTP**  
Access the server files using an FTP client. The [FTP credentials are listed on the `Connect` page](/dashboard/game_servers/getting_started#connect--ftp-info).

3. **Locate the executable file**  
Navigate through the FTP client to find the server's executable.  
Example path: `/serverfiles/MOE/Binaries/Win64/MOEServer.exe`

![Blueprint - Find Executable Path](/img/dashboard/blueprint/create_blueprint/find_executable_path.jpg)

### Finding STEAM IDs

**Client ID**  
You can find the `STEAM Client ID` in the URL of the game's Steam store page. For example, in the link below, the ID is `1371580`: https://store.steampowered.com/app/1371580/Myth_of_Empires/

**Server ID**  
Often, the `STEAM Server ID` differs from the Client ID. You can find it using tools like [SteamDB.info](https://steamdb.info/).

**Search SteamDB**  
Go to [SteamDB.info](https://steamdb.info/) and search for `{game name} dedicated server`.  
Example search: `myth of empires dedicated server`

According to [SteamDB](https://steamdb.info/), the `STEAM Server ID` for Myth of Empires is: `1794810`

![Blueprint - Find STEAM Server ID](/img/dashboard/blueprint/create_steam_blueprint/steamdb.jpg)

---
title: Getting started
sidebar_position: 0
---

Learn how to set up and control your game servers.

[Go to Game server overview >](https://dash.gameserverapp.com/cluster)

![Game server - overview](/img/dashboard/gameserver/getting_started/gameserver_overview.jpg)

:::info Locating the `Game server ID`
When contacting support, always include the `game server ID`. You can find it in the __top-right corner__ on the game server settings page.

![Game server ID](/img/dashboard/gameserver/getting_started/gameserver_id.jpg)
:::

## Controls
You can start, stop, and update your game servers from multiple sections. This makes it easy to manage all servers on a particular machine at once.

![Game server - update modal example](/img/dashboard/gameserver/getting_started/gameserver_control_modal.jpg)

### Game server settings
Manage individual servers directly from the settings page. You can start, shut down, restart, or update the game server.

#### Perform manual index
This indexes all players and groups on the server. Use this when you've added a new game server and want to sync data.

#### Clone game server
Clone most settings to a new server. After cloning, the server isn't installed yet. Go to the "Your old game servers" section on the [Cluster overview](/dashboard/game_servers/clusters) and click `Install` for the cloned server.

![Game server - settings controls](/img/dashboard/gameserver/getting_started/gameserver_settings_controls.jpg)

### Cluster overview
Manage one or multiple servers through the cluster overview pages.

![Game server - cluster controls](/img/dashboard/gameserver/getting_started/gameserver_cluster_controls.jpg)

### Machine settings
Control servers via the `Game servers & services` page of a DediConnect machine.

![Game server - cluster controls](/img/dashboard/gameserver/getting_started/gameserver_machine_controls.jpg)

## Settings
The server settings page gives you access to configuration, performance stats, logs, console, and recent activity.

![Game server - settings](/img/dashboard/gameserver/getting_started/gameserver_settings.jpg)

### Server names (website, Discord etc.)

![Game server - settings - names](/img/dashboard/gameserver/getting_started/gameserver_settings_names.jpg)

#### Server list name
This name appears in the in-game server list.

#### Website name
Set the `website name` to show the server on the [Community website](/dashboard/community/website). You can also upload a background image for the server block.

:::info Hide on Community website
Leave the `website name` field empty to hide the server from the Community website.
:::

#### Cluster chat name
This name will appear in messages from [cluster chat](/dashboard/game_servers/clusters#cluster-chat).

#### Discord name
This is the name used by the [Discord Bot](/dashboard/discord-bot) when referencing the server.

:::info Hide on Discord
Leave the `Discord name` field empty to hide the server on Discord.
:::

### General

![Game server - settings - basic](/img/dashboard/gameserver/getting_started/gameserver_settings_basic.jpg)

#### Config template
Switch to a different [Config template](/dashboard/game_servers/config_templates) here.

:::tip
You can [automate switching templates](/dashboard/automate_tasks/actions#game-server-actions) via Tasks.
:::

##### Blueprint alert
If the server and template use different blueprints, you'll see a warning. It's not required to match them, but large differences may cause problems.

![Blueprint alert](/img/dashboard/gameserver/getting_started/gameserver_settings_basic_blueprint_different.jpg)

#### Map
Choose a preset map or enter a custom map name by selecting `Custom map`.

![Game server - custom map](/img/dashboard/gameserver/getting_started/gameserver_custom_map.jpg)

:::tip
You can [automate map changes](/dashboard/automate_tasks/actions#game-server-actions) via Tasks.
:::

#### Cluster
You can only change clusters when the server is shut down.

#### Slots
Change the player slot limit to a value supported by the game. Using too many slots may cause issues in some games.

#### In-game admin password
Each server gets a unique password automatically. This removes the need to hardcode passwords in config templates, improving security.

### Automation
Configure automation per server or globally via the [Config template settings](/dashboard/game_servers/config_templates#settings). Global settings are labeled `Inherited`.

![Game server - settings - automation](/img/dashboard/gameserver/getting_started/gameserver_settings_automation.jpg)

#### Update on start
Automatically updates the server on startup. Best used on test servers.

:::caution Test servers only
Using this on live servers increases startup time and is not recommended unless auto-updates are disabled.
:::

#### Auto-update
Set whether the server auto-updates and the countdown timer duration.

#### Auto-restart
Schedule automatic restarts to maintain performance.

:::tip Scheduled task
For more advanced schedules, use a [scheduled Task](/dashboard/automate_tasks/getting_started#scheduled).
:::

### Recent activity
View recent actions on the server.

![Activity](/img/dashboard/gameserver/getting_started/gameserver_settings_activity.jpg)

### Console
See output, send commands, and chat directly through the console.

![Console](/img/dashboard/gameserver/getting_started/gameserver_settings_console.jpg)

## Statistics
Monitor how player count affects server performance to prevent issues.

Metrics include:
- In-game FPS
- Memory usage
- Player count

![Statistics](/img/dashboard/gameserver/getting_started/gameserver_performance.jpg)

## Logs
Find server logs under the `Logs` tab on the settings page. Older logs are accessible via [FTP](#connect--ftp-info).

Logs include:
- Docker container logs
- STEAM install/update logs

![Logs](/img/dashboard/gameserver/getting_started/gameserver_logs.jpg)

## Activity
Check all server activity: errors, system events, and user actions.

![Activity](/img/dashboard/gameserver/getting_started/gameserver_activity.jpg)

## Connect / FTP info
View FTP credentials, ports, and connection info on the `Connect` tab.

![Connect info](/img/dashboard/gameserver/getting_started/gameserver_connect.jpg)

### Unlock FTP
If you encounter permission errors while downloading files via FTP, use `Unlock FTP` to reset the file permissions.

## Danger zone

:::warning Danger zone
Actions here can result in data loss. Proceed with caution!
:::

### Change game
Install a different game on the server. Don’t forget to update related settings.

:::info Operating system
Not all games support every OS. Check the [supported games list](https://dash.gameserverapp.com/order/machine).
:::

![Change game](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_change_game_1.jpg)

You can also select a specific [blueprint](/dashboard/blueprints/getting_started) during this process.

![Select blueprint](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_change_game_2.jpg)

### Change blueprint
To change the [blueprint](/dashboard/blueprints/getting_started), shut down the server first. You may need to [delete the container](/dashboard/game_servers/getting_started#delete-container) or [reinstall the server](/dashboard/game_servers/getting_started#re-install) afterwards.

![Change blueprint](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_change_blueprint_1.jpg)

### Re-install
Backs up save files and mods/plugins before wiping all data and reinstalling the game.

![Re-install](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_reinstall.jpg)

### Wipe
Removes all game save files. Restarting the server creates a fresh world.

:::info Clear data
Also [delete the dashboard data/stats](#delete-dashboard-data--stats) to remove character info.
:::

![Wipe](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_wipe.jpg)

### Relocate
Move the server to a new folder on the same machine.

![Relocate](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_relocate.jpg)

![Relocate modal](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_relocate_modal.jpg)

### Migrate / Move to another machine
Automatically transfer the server to another DediConnect machine. [Syncthing must be installed](/dashboard/machines/services#syncthing) on both machines.

![Migrate](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_migrate.jpg)

![Migrate modal](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_migrate_modal.jpg)

### Custom ports
Use this to set custom ports when needed.

:::caution No conflict detection
Port conflicts are not checked automatically. Make sure the ports are unique.
:::

![Custom ports](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_custom_ports.jpg)

### Docker container settings
Configure container behavior, including CPU/memory limits and mounts.

![Docker settings](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_container_settings.jpg)
![Docker modal](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_container_settings_modal.jpg)

### Delete container
Deletes the container. It will be recreated on next server start.

Be aware: this may change the HWID and remove by GSA created folders. Backup manually if unsure.

![Delete container](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_delete_container.jpg)

### Delete dashboard data / stats
Permanently removes all in-game data from the dashboard database. like characters, groups, chat etc. This action can't be restored.

:::tip Remove all
Select a future date to wipe all data for the server.
:::

![Delete dashboard data](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_wipe_data.jpg)

### Delete game server
Deletes all server files, the Docker container, and releases IP/ports. A backup is made, but manually back up custom changes beforehand.

![Delete game server](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_delete_gameserver.jpg)

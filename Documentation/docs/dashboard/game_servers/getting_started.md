---
title: Getting started
sidebar_position: 0
---

Learn how to control and set up your game servers.

[Go to Game server overview >](https://dash.gameserverapp.com/cluster)

![Game server - overview](/img/dashboard/gameserver/getting_started/gameserver_overview.jpg)

:::info Locating the `Game server ID`
Please include the `game server ID` when you contact support about a game server or service. It's located in the __top-right corner__ on the game server settings page.

![Game server ID](/img/dashboard/gameserver/getting_started/gameserver_id.jpg)

:::

## Controls
You can control (start, stop, update etc) your game servers from multiple sections. This makes it really easy to update all game servers on a particular machine, for example.

![Game server - update modal example](/img/dashboard/gameserver/getting_started/gameserver_control_modal.jpg)

### Game server settings
Control (start, shutdown, restart & update) the individual game server via the game server settings pages.

#### Perform manual index
Manually index all players and groups on this game server. This can be useful when you added a new game server.

#### Clone game server
Copies most of the settings to a new game server. After cloning the game server isn't installed on the machine yet. To do so, scroll down to the "Your old game servers" section on the [Cluster overview](/dashboard/game_servers/clusters) and hit `Install` for the cloned game server.

![Game server - settings controls](/img/dashboard/gameserver/getting_started/gameserver_settings_controls.jpg)

### Cluster overview
Control one or multiple game servers via any cluster overview page.

![Game server - cluster controls](/img/dashboard/gameserver/getting_started/gameserver_cluster_controls.jpg)

### Machine settings
Control one or multiple game servers via the `Game servers & services` page for the selected DediConnect machine.

![Game server - cluster controls](/img/dashboard/gameserver/getting_started/gameserver_machine_controls.jpg)

## Settings

The game server settings page gives quick access to most settings, a performance summary, recent activity, console output and more.

![Game server - settings](/img/dashboard/gameserver/getting_started/gameserver_settings.jpg)

Edit the [Config template](/dashboard/game_servers/config_templates), map, [cluster](/dashboard/game_servers/clusters), game server slots and admin passwords.

You can select any slot limit that is supported by the game.

![Game server - settings - basic](/img/dashboard/gameserver/getting_started/gameserver_settings_basic.jpg)

:::tip custom map
You can set up a custom map by changing the map to `Custom map`, which will bring up a field where you can add the custom map name.

![Game server - custom map](/img/dashboard/gameserver/getting_started/gameserver_custom_map.jpg)
:::

### Change names

![Game server - settings - names](/img/dashboard/gameserver/getting_started/gameserver_settings_names.jpg)

#### Server list name
This is the name that will show up on the in-game server list.

#### Website name
Setting the `website name` will make the game server appear on the [Community website](/dashboard/community/website).
You can also upload an image to use as the game server block background, on the Community website.


:::info Hide on Community website
Leave the `website name` field empty to hide the game server on the Community website.
:::

#### Cluster chat name
Determines how the game server name is presented on [cluster chat](/dashboard/game_servers/clusters#cluster-chat) messages.

#### Discord name
This is the name that the [Discord Bot](/dashboard/discord-bot) will show when it posts information about this game server.

:::info Hide on discord
Leave the `Discord name` field empty to hide the game server on Discord.
:::

### Automation
Automation settings can be configured per game server or for all game servers collectively through [Config template settings](/dashboard/game_servers/config_templates#settings). Using a Config template can be useful when using the same automation settings for all game servers.

When the settings are managed via a Config template it will show the `Inherited` label.

![Game server - settings - automation](/img/dashboard/gameserver/getting_started/gameserver_settings_automation.jpg)

#### Update on start
This will update a game server when it's starting up. This is mainly useful for testing servers. 

:::caution Test servers only
We do not recommend using this for normal game servers as it increases startup times and doesn't add any benefits, unless you disabled auto-updates.
:::


#### Auto-update
Configure whether the game server should automatically update and how long the countdown timer should run before updating.

#### Auto-restart
Automatically restarts the game server at configured hours. This can help improve performance.


:::tip Scheduled task
For more advanced restarting schedules you can [set up a scheduled Task](/dashboard/automate_tasks/getting_started#scheduled).
:::


### Recent activity
See the recent activity for the game server.

![Game server - settings - activity](/img/dashboard/gameserver/getting_started/gameserver_settings_activity.jpg)

### Console
See the console output and send commands or chat to the game server.

![Game server - settings - consoles](/img/dashboard/gameserver/getting_started/gameserver_settings_console.jpg)

## Statistics
Learn how the online player count affects the game server's performance, and avoid hick ups from becoming problems.

Monitor game server performance on various levels:
- In-game FPS (Frames Per Second)
- Memory usage
- Online players

![Game server - statistics](/img/dashboard/gameserver/getting_started/gameserver_performance.jpg)

## Access control
Every game will have different access control settings, but generally there are a few things present:

### Whitelist
All whitelist players for the game server will show up on the `Access` tab, under `GSA Whitelist`. You can clear the whitelist from here if needed.

### Twitch sub access
Give Twitch subs access to exclusive game servers. This process works completely automatically and requires no human interaction from the streamer.

:::info integration mod required
This feature requires having the GameServerApp.com Integration mod installed on the game server.
:::

![Game server - statistics](/img/dashboard/gameserver/getting_started/gameserver_access_twitch.jpg)

## Logs
Game server logs are directly accessible via the game server settings page, under the `Logs` tab.
You can also access all logs via [FTP](#connect--ftp-info).

![Game server - logs](/img/dashboard/gameserver/getting_started/gameserver_logs.jpg)

## Activity
See what happened with the game server. Any errors, user & system actions are logged on the Activity page.

![Game server - activity](/img/dashboard/gameserver/getting_started/gameserver_activity.jpg)

## Connect / FTP info
Find information like FTP, game ports, IP's and any game server related connection info on the `Connect` tab, under game server settings. 

![Game server - connect](/img/dashboard/gameserver/getting_started/gameserver_connect.jpg)

### Unlock FTP
In some occasions, where the game server changed or created new files, can you run into issues where you can't download a file via FTP due to permission issues. In those cases you can use `Unlock FTP` to fix the permissions issue.


## Danger zone

:::warning Danger zone
As the name implies: things you can do here are dangerous and can cause data loss!
:::

### Change game
Install a different game on the game servers. Make sure to update your Config template and related settings, like the map.

:::info Operating system
Not all games supported every Operating System (OS). See the [list of supported games per OS](https://dash.gameserverapp.com/order/machine).
:::

![Game server - danger zone - change game](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_change_game.jpg)

### Re-install
Before re-install a backup is created that stores the save files and info about installed mods and plugins.

This process will remove all files from the disk and reinstall from previously downloaded game files.

![Game server - danger zone - re-install](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_reinstall.jpg)

### Wipe
Wiping the game server will remove all save files from the game server. When you start the game server again it will launch with a fresh world.

:::info clear data
Make sure to also [delete the dashboard data / stats](#delete-dashboard-data--stats) to remove any old character info from the dashboard.
:::

![Game server - danger zone - wipe](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_wipe.jpg)

### Relocate
Re-install the game server at a different location on the current machine.

![Game server - danger zone - relocate](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_relocate.jpg)

![Game server - danger zone - relocate modal](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_relocate_modal.jpg)

### Migrate / Move to another machine
Move a game server to another DediConnect machine, fully automated.
This requires [Syncthing being installed](/dashboard/machines/services#syncthing) on both machines.

![Game server - danger zone - migrate](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_migrate.jpg)

![Game server - danger zone - migrate modal](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_migrate_modal.jpg)

### Custom ports
While the warnings on the `Custom ports` block are pretty clear are there occasions where game servers may need to use custom ports.

:::caution No conflict detection
When using Custom ports you may cause issues with conflicting ports. GSA does not check for conflicting ports, so make sure you do.
:::

![Game server - danger zone - custom ports](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_custom_ports.jpg)

### Docker container settings
Change how the Docker container behaves. Configure CPU & memory limits, add mounts and set other custom Docker parameters.



![Game server - danger zone - docker settings](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_container_settings.jpg)
![Game server - danger zone - docker settings](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_container_settings_modal.jpg)

### Delete container
This will delete the container, which generally won't cause any issues to existing game servers. A new container is automatically created when the game server is started again.

Deleting the container may change the HWID and/or delete files that are stored <u>outside</u> folders created by GSA. Backup important files manually when unsure.

![Game server - danger zone - delete container](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_delete_container.jpg)


### Delete dashboard data / stats
This process will remove all in-game data from the dashboard database, like characters, groups, chat etc. This action is irreversible.

:::tip remove all
Select a date in the future to remove all data for the game server.
:::

![Game server - danger zone - wipe data](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_wipe_data.jpg)

### Delete game server
This will delete all game server file, the Docker container for the game server and release the IP + ports combination.

While it will create a `pre-delete` backup, it might not back up manual changes. Make sure to manually back up anything that was added/changed without using the GSA dashboard.

![Game server - danger zone - delete container](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_delete_gameserver.jpg)


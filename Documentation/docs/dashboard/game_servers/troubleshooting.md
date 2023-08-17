---
title: 💥 Troubleshooting 💥
sidebar_position: 999
---

## Game server not starting / crashing

:::caution
Before contacting support you should follow all steps below.
:::

### 1. Check the logs
- Check the [logs](/dashboard/game_servers/getting_started#logs). Look for crashes or errors that mention what is causing your server to crash / stop working.
- Check [Activities](/dashboard/game_servers/getting_started#activity) for any recent changes and/or Docker startup errors.
- Use Google to loop up a solution for any errors / crash logs you find.
- Reach out to the game / mod / plugin developers for any errors you find. If there is an error, GSA probably can't do anything about it.


### 2. Check the system
- Does the machine have enough memory available
- Does the machine have enough disk space available

### 3. Recently updated game / mod?
Check [Activities](/dashboard/game_servers/getting_started#activity) for recent updates (game, mod, plugin etc.). When the game server was recently updated, check with the game, mod, plugin developer if there are any known issues with the latest release.

### 4. Create a backup
Before you continue it's important to [create a backup](/dashboard/game_servers/backups#create-manual-backup).

### 5. Update game server
[Run a game server update](/dashboard/game_servers/getting_started#controls) even when there is no update available for the game server. A manual update will validate the game server files.

### 6. Default config
Activate a [Default config](/dashboard/game_servers/config_templates#default-configs) on the game server and restart it.

:::tip Working now?
When the game server does start with a `Default config` you should check your original config for issues.

Create a new config template and slowly copy/paste sections from your old config. Test whether the server starts after adding new sections.
:::

### 7. Default map
Launch the game server with the default [map](/dashboard/game_servers/getting_started#settings).

:::tip Working now?
The map you selected is either broken or you entered an incorrect custom map path.
:::

### 8. Remove all mods & plugins
Ensure no [mods](/dashboard/game_servers/mods_plugins#update--delete) and [plugins](/dashboard/game_servers/mods_plugins#manage-plugins) are loaded in (check the logs!) and restart the game server.

:::tip Working now?
A mod or plugin was causing the problem. Slowly enable mods / plugins one by one and restart the server every time you add a new one. When the server stops working again you know which mod / plugin caused it.
:::

### 9. Reinstall game server
Occasionally something goes wrong with game servers. When none of the above suggestions solved the problems, please try [re-installing the game server](/dashboard/game_servers/getting_started/#re-install)


## Increased memory usage

### What is causing increased usage
Over time your game server will use more memory. This is normal behaviour. The game server has to store all the NPC's, players, items and buildings in its memory. Over time more will be created by players, thus increasing the memory that is used to store it all while running.

### Restarting the game server
The first thing you might want to rule out is anything random. Try restarting your game server to see if the situation improves.

#### What to expect and what to do:

- The memory usages is back at normal but slowly increases over the hours
   - Rule out any memory leak issues with the game server (check with the game developer).
   - Rule out any memory leak issues with mods / plugins (check with mod/plugin developer).

- The memory usages is very high immediately after starting.
   - Upgrade the memory for your machine.

### Memory leak
If the memory goes up again after restarting the game server then you might be dealing with a memory leak. A memory leak can be in the game server software, mods or plugins.
Memory leaks in the game server or mods are not uncommon. 

Unfortunately is there no way for GSA to fix this. Please contact the game / mod / plugin developers responsible.

## Not showing on game server list
Some games have known issues, like servers not showing up in the server list, which sadly is caused by an in-game bug: The in-game server browser has a limit of 5000 servers. This is an issue since there are more than 10.000 game servers and there is no guarantee that your game server will appear on the list.

We strongly recommend registering your game server on a server listing websites, if you are interested in getting new players.
You can also add the game server to your favourite server list via Steam or you can use the free community website to get direct access to your game server.
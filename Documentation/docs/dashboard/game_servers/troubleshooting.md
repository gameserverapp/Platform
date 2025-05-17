---
title: 💥 Troubleshooting 💥
sidebar_position: 999
---

## Game server not starting / crashing

:::caution
Please make sure you’ve tested __all steps__ (1–9) before contacting support.
:::

### 1. Check the logs

Check the [logs](/dashboard/game_servers/getting_started#logs) for any crashes or error messages that may indicate why your server is not starting.  
Review the [Activities](/dashboard/game_servers/getting_started#activity) tab for recent changes or Docker startup errors.  
Search online for solutions based on the error messages you find.  
If the issue is related to a specific game, mod, or plugin, reach out to the relevant developer, as GameServerApp (GSA) may not be able to resolve those errors.

### 2. Check the system

Ensure your machine has enough available memory and disk space to run the server.

### 3. Recently updated game or mod?

Visit the [Activities](/dashboard/game_servers/getting_started#activity) section to see if any recent updates were applied (game, mod, plugin).  
If an update occurred, check with the developers for any known issues with the latest version.

### 4. Create a backup

Before proceeding with any changes, [create a backup](/dashboard/game_servers/backups#create-manual-backup) of your game server.

### 5. Update game server

Run a [manual game server update](/dashboard/game_servers/getting_started#controls), even if no new version is available.  
This process will validate and repair any damaged game server files.

### 6. Default config

Activate the [Default config](/dashboard/game_servers/config_templates#default-config--template) on your server and restart it.

:::tip Working now?
If the server works with the `Default config`, your original config likely contains issues.

Create a new config template and carefully copy sections from your old config, testing the server after each addition.
:::

### 7. Default map

Try launching the server with the default [map](/dashboard/game_servers/getting_started#settings).

:::tip Working now?
Your selected map may be broken or you may have entered an incorrect custom map path.
:::

### 8. Remove all mods & plugins

Ensure that no [mods](/dashboard/game_servers/mods_plugins#update--delete) or [plugins](/dashboard/game_servers/mods_plugins#update--delete) are being loaded (check the logs), then restart your server.

:::tip Working now?
One of the mods or plugins was likely causing the issue.  
Re-enable them one at a time, restarting the server each time, until the problem reappears. This will help identify the cause.
:::

### 9. Reinstall game server

If none of the above steps help, try [re-installing the game server](/dashboard/game_servers/getting_started#re-install).  
This can resolve deeper, less obvious issues.

## Increased memory usage

### What is causing increased usage

It’s normal for game servers to consume more memory over time as they store NPCs, players, items, and buildings in active memory.  
As more content is created, memory usage increases.

### Restarting the game server

To rule out temporary glitches, restart your game server and observe what happens to the memory usage.

#### What to expect and what to do:

- If memory usage returns to normal but increases again over time:  
   - Check for memory leaks in the game server (contact the game developer).  
   - Check for memory leaks in mods or plugins (contact mod/plugin developers).

- If memory usage is already high immediately after starting:  
   - Consider upgrading your server’s memory.

### Memory leak

If memory increases rapidly again after a restart, you may be dealing with a memory leak.  
This could originate from the game server software, a mod, or a plugin.

Unfortunately, GSA cannot resolve memory leaks.  
Please report the issue to the developers responsible for the game or mod/plugin.

## Not showing on game server list

Some games suffer from a known issue where servers may not appear in the in-game browser.  
This happens because the browser can only display a maximum of 5000 servers, a problem since there are over 10,000 servers available.  
There’s no guarantee yours will appear.

We recommend registering your server on external server listing websites to help new players find you.  
You can also add your server to your favorites list via Steam, or use the free Community website for direct access to your server.

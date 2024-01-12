---
title: Available actions
sidebar_position: 1
---
Most actions listed on this page are available for Tasks, Shop packs, Supporter Tiers and Vote rewards.

![Automations / Tasks - Action](/img/dashboard/automate_tasks/create_task_5.jpg)

## General

### In-game command
Execute in-game RCON / Websocket / Telnet commands, with variables.
Supports unlimited numbers of commands. For Shop packs the Game selector is hidden.

![Automations / Tasks - Action - in-game command](/img/dashboard/automate_tasks/actions/action_ingame_command.png)

### In-game DM
Send an in-game Direct Message (DM) to the character.

![Automations / Tasks - Action - in-game dm](/img/dashboard/automate_tasks/actions/action_ingame_dm.png)

### In-game broadcast
Send an in-game global message / broadcast to the game server.

![Automations / Tasks - Action - in-game broadcast](/img/dashboard/automate_tasks/actions/action_ingame_broadcast.png)

### Donor status
Give player the Donor status for predetermined amount of time.

![Automations / Tasks - Action - Donor status](/img/dashboard/automate_tasks/actions/action_donor_status.png)

### Send tokens
Send tokens to the associated or all (online) players.
Works with both a fixed amount and a random amount, where you can set the range.

![Automations / Tasks - Action - Send tokens](/img/dashboard/automate_tasks/actions/action_send_tokens.png)

### Shop pack
Send a Shop pack to the player. This Action is not available in the Shop pack Delivery Builder.

![Automations / Tasks - Action - Shop pack](/img/dashboard/automate_tasks/actions/action_shop_pack.png)

### Integration mod
Activate special GSA Integration mod features, like:
- Open Report UI
- Open Review UI
- Kill player
- Teleport player to coordinates
- Give EXP to player

![Automations / Tasks - Action - Integration mod](/img/dashboard/automate_tasks/actions/action_integration_mod.png)


### Claim votes
Claims any claimable votes for the player.

![Automations / Tasks - Action - Claim vote](/img/dashboard/automate_tasks/actions/action_claim_vote.png)

## Admin tools

### Whitelist
Add / remove whitelist for a specific cluster, game server or all.

![Automations / Tasks - Action - whitelist 1](/img/dashboard/automate_tasks/actions/action_whitelist_1.png)

![Automations / Tasks - Action - whitelist 2](/img/dashboard/automate_tasks/actions/action_whitelist_2.png)

### Custom Role
Add or remove a Custom Role for the associated player.

![Automations / Tasks - Action - Custom role 1](/img/dashboard/automate_tasks/actions/action_custom_role_1.png)

![Automations / Tasks - Action - Custom role 2](/img/dashboard/automate_tasks/actions/action_custom_role_2.png)

### Mute / Unmute player
Mute / Unmute player on the game server(s).

![Automations / Tasks - Action - Unmute player](/img/dashboard/automate_tasks/actions/action_unmute_player.jpg)

![Automations / Tasks - Action - Mute player](/img/dashboard/automate_tasks/actions/action_mute_player.jpg)

### Kick player
Kicks player from the game server(s).

![Automations / Tasks - Action - kick player](/img/dashboard/automate_tasks/actions/action_kick_player.png)

### Ban / Unban player
Bans / unbans player from the game server(s).

![Automations / Tasks - Action - Unban player](/img/dashboard/automate_tasks/actions/action_unban_player.jpg)

![Automations / Tasks - Action - Ban player](/img/dashboard/automate_tasks/actions/action_ban_player.jpg)

## Discord

### Discord role
Assign or remove a Discord Role from the associated Discord user.

![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_1.png)

![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_2.png)

### Discord message
Post a custom message in your selected Discord channel.

![Automations / Tasks - Action - discord message](/img/dashboard/automate_tasks/actions/action_discord_message.png)

## Logic

### Conditional
Add if/else logic to your delivery with Conditional blocks.
This Action block supports adding sub-Action blocks, which run when the conditions are met.

![Automations / Tasks - Action - Conditional](/img/dashboard/automate_tasks/actions/action_conditional.png)

### Randomizer
Randomly execute one of the sub options based on chance settings.
This Action block supports adding sub-Action blocks, per Randomizer option.

![Automations / Tasks - Action - Randomizer](/img/dashboard/automate_tasks/actions/action_randomizer.png)

### Queue / Schedule
Schedule actions that should execute somewhere in the future.
This Action block supports adding sub-Action blocks, which run after specified amount of time.

![Automations / Tasks - Action - Queue / Schedule](/img/dashboard/automate_tasks/actions/action_queue_schedule.png)

### Task control
Enable or Disable a Task. Can be useful for events etc.

![Automations / Tasks - Action - Task control](/img/dashboard/automate_tasks/actions/action_task_control.png)

## Game server management

### Change Config template
Can be used to automatically activate weekend rates, allow players to pay for increased rates and much more.

![Automations / Tasks - Action - Change config template](/img/dashboard/automate_tasks/actions/action_change_config_template.png)

### Start game server
Starts the game server(s) for which the task is activated.

![Automations / Tasks - Action - start game server](/img/dashboard/automate_tasks/actions/action_start_gameserver.png)

### Schedule shutdown
Schedule a shutdown for the game server(s) for which the task is activated.

![Automations / Tasks - Action - schedule shutdown](/img/dashboard/automate_tasks/actions/action_schedule_shutdown.png)

### Schedule restart
Schedule a restart for the game server(s) for which the task is activated.

![Automations / Tasks - Action - schedule restart](/img/dashboard/automate_tasks/actions/action_schedule_restart.png)

### Schedule update
Schedule an update for the game server(s) for which the task is activated.

![Automations / Tasks - Action - schedule update](/img/dashboard/automate_tasks/actions/action_schedule_update.png)

### Wipe game server
Perform a game server wipe, with various options like:
- Full wipe (same as Danger zone wipe)
- Wipe player data only (RUST)
- Wipe world only (RUST)

![Automations / Tasks - Action - wipe game server](/img/dashboard/automate_tasks/actions/action_wipe_gameserver.png)

### Create backup
Create a backup with an optional automated cleanup of old backups with the same name.

![Automations / Tasks - Action - create backup](/img/dashboard/automate_tasks/actions/action_create_backup.png)
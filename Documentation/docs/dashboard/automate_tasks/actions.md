---
title: Actions
sidebar_position: 1
---

Most actions listed on this page are available for Tasks, Shop packs, Supporter Tiers, and Vote rewards.

![Automations / Tasks - Action](/img/dashboard/automate_tasks/create_task_5.jpg)

## General

### In-game command

Execute in-game RCON / Websocket / Telnet commands using variables. You can enter an unlimited number of commands. In Shop packs, the Game selector is hidden.

[Variables](/dashboard/automate_tasks/variables) are supported in this action.

![Automations / Tasks - Action - in-game command](/img/dashboard/automate_tasks/actions/action_ingame_command.png)

### In-game broadcast

Send a global message in-game to the server.

This action also supports [Variables](/dashboard/automate_tasks/variables).

![Automations / Tasks - Action - in-game broadcast](/img/dashboard/automate_tasks/actions/action_ingame_broadcast.png)

### Wipe / reset tokens

Reset tokens for all players on the dashboard. Can only be executed once every 15 minutes.

![Automations / Tasks - Action - Wipe / reset tokens](/img/dashboard/automate_tasks/actions/action_wipe_reset_tokens.jpg)

### Copy / Paste GSA clipboard

Easily duplicate actions, including sub actions using the clipboard. Clipboard content remains stored for 10 minutes.

![Automations / Tasks - Action - Copy to GSA clipboard](/img/dashboard/automate_tasks/actions/action_copy_to_gsa_clipboard.jpg)
![Automations / Tasks - Action - Paste GSA clipboard](/img/dashboard/automate_tasks/actions/action_paste_gsa_clipboard.jpg)

## Admin tools

### In-game DM

Send a Direct Message (DM) to a character in-game.

This action supports [Variables](/dashboard/automate_tasks/variables).

![Automations / Tasks - Action - in-game dm](/img/dashboard/automate_tasks/actions/action_ingame_dm.png)

### Send tokens

Send tokens to a player, either a fixed amount or a random amount within a defined range.

You can use negative numbers to deduct tokens. When using negative nubers for the `random amount`, always set `Min` to the lowest number (e.g. `-250`) and `Max` to the highest (e.g. `-5`).

This action supports [Variables](/dashboard/automate_tasks/variables).

![Automations / Tasks - Action - Send tokens](/img/dashboard/automate_tasks/actions/action_send_tokens.jpg)

### Mute / Unmute player

Mute or unmute a player on one or more game servers.

![Automations / Tasks - Action - Unmute player](/img/dashboard/automate_tasks/actions/action_unmute_player.jpg)
![Automations / Tasks - Action - Mute player](/img/dashboard/automate_tasks/actions/action_mute_player.jpg)

### Kick player

Remove a player from the game server.

![Automations / Tasks - Action - kick player](/img/dashboard/automate_tasks/actions/action_kick_player.png)

### Ban / Unban player

Ban or unban a player from one or more game servers.

![Automations / Tasks - Action - Unban player](/img/dashboard/automate_tasks/actions/action_unban_player.jpg)
![Automations / Tasks - Action - Ban player](/img/dashboard/automate_tasks/actions/action_ban_player.jpg)

### Integration mod

Activate special features from the GSA Integration mod, such as:

- Open Report UI
- Open Review UI
- Kill player
- Teleport player to coordinates
- Give EXP to player

![Automations / Tasks - Action - Integration mod](/img/dashboard/automate_tasks/actions/action_integration_mod.png)

### Access control

Add or remove a player from a specific Access group.
You can also set a membership type and duration.

![Automations / Tasks - Action - Access group 1](/img/dashboard/automate_tasks/actions/action_access-control_1.png)
![Automations / Tasks - Action - Access group 2](/img/dashboard/automate_tasks/actions/action_access-control_2.png)

### Custom Role

Assign or remove a custom role from a player.

![Automations / Tasks - Action - Custom role 1](/img/dashboard/automate_tasks/actions/action_custom_role_1.png)
![Automations / Tasks - Action - Custom role 2](/img/dashboard/automate_tasks/actions/action_custom_role_2.png)

### Donor status

Grant a player Donor status for a set period of time.

![Automations / Tasks - Action - Donor status](/img/dashboard/automate_tasks/actions/action_donor_status.png)

### Shop pack

Send a Shop pack to a player. Note: This action is not available within the Shop pack Delivery Builder.

![Automations / Tasks - Action - Shop pack](/img/dashboard/automate_tasks/actions/action_shop_pack.png)

### Storage pack

Send an in-game upload (available for ARK: Survival Evolved only). Only usable in Shop packs, Supporter Tiers, and Vote rewards.

![Automations / Tasks - Action - Storage pack](/img/dashboard/automate_tasks/actions/action_storage_pack.jpg)

### Claim votes

Automatically claims any outstanding votes for the player.

![Automations / Tasks - Action - Claim vote](/img/dashboard/automate_tasks/actions/action_claim_vote.png)

## Discord

### Discord role

Assign or remove a Discord role for a linked Discord user.

![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_1.png)
![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_2.png)

### Discord message

Post a custom message to a selected Discord channel.

[Variables](/dashboard/automate_tasks/variables) are supported in this action.

![Automations / Tasks - Action - discord message](/img/dashboard/automate_tasks/actions/action_discord_message.png)

### Discord embed

Post a custom embed to a Discord channel. Accepts raw JSON format.

[Variables](/dashboard/automate_tasks/variables) are supported in this action.

![Automations / Tasks - Action - discord embed](/img/dashboard/automate_tasks/actions/action_discord_embed.jpg)

## Logic

### Conditional

Add if/else logic using Conditional blocks. Sub-actions can be added and will execute when the defined condition is met.

![Automations / Tasks - Action - Conditional 1](/img/dashboard/automate_tasks/actions/action_conditional_1.jpg)

#### Available conditions:

- Player
  - Player name
  - Player token amount
  - Player Custom role
  - Player Status
  - Player is admin
  - Player account type
  - Player connected account(s)
  - Player accepted rules
- Character
  - Character name
  - Character level
  - Character gender
  - Character minutes online
  - Character was online past 30 days
  - Character was created today
  - Character has group
- Game server
  - Game server name
  - Game server online player count
  - Game server is scheduled
  - Game server has update available
  - Game server active Config template
- Date
  - Date & time
  - Day of the week

![Automations / Tasks - Action - Conditional 2](/img/dashboard/automate_tasks/actions/action_conditional_2.jpg)

### Randomizer

Run one of the sub-options randomly based on defined chance values. Sub-actions can be configured under each option.

![Automations / Tasks - Action - Randomizer](/img/dashboard/automate_tasks/actions/action_randomizer.png)

### Queue / Schedule

Delay action execution by a set amount of time. Minimum delay: 3 minutes. Sub-actions can be added and will execute after the timer.

![Automations / Tasks - Action - Queue / Schedule](/img/dashboard/automate_tasks/actions/action_queue_schedule.png)

### Run actions per player

Loop through selected player groups and execute actions for each. For example: send tokens to all online players.

Available groups:

- Online players

![Automations / Tasks - Action - Run actions per player](/img/dashboard/automate_tasks/actions/action_run_actions_per_player.jpg)

### Run actions per game server

Loop through selected game servers and run configured actions for each one. Only available in Shop packs and Supporter Tiers.

![Automations / Tasks - Action - Run actions per game server](/img/dashboard/automate_tasks/actions/action_run_actions_per_gameserver.jpg)

## Manage items

### Task actions

Perform administrative actions on Tasks, such as:

- Enable or disable a task
- Cancel a current run and all sub-tasks
- Cancel all scheduled runs

![Automations / Tasks - Action - Task control](/img/dashboard/automate_tasks/actions/action_task_control.png)

### Shop pack actions

Show or hide a Shop pack from your store.

![Automations / Tasks - Action - Shop pack control](/img/dashboard/automate_tasks/actions/action_shop_pack_control.jpg)

### Supporter Tier actions

Show or hide a Supporter Tier from your store.

![Automations / Tasks - Action - Supporter Tier control](/img/dashboard/automate_tasks/actions/action_supporter_tier_control.jpg)

### Game server actions

Control game server behavior with this action block. Includes options such as:

- Start server
- Schedule shutdown, restart, or update (optionally with countdown)
- Change config template
- Change map or seed
- Generate random seed (letters and numbers)
- Create backup (optional cleanup)
- Wipe game server (full or partial)

![Automations / Tasks - Action - Game server actions](/img/dashboard/automate_tasks/actions/action_gameserver_actions.jpg)

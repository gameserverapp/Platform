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

### In-game broadcast
Send an in-game global message / broadcast to the game server.

![Automations / Tasks - Action - in-game broadcast](/img/dashboard/automate_tasks/actions/action_ingame_broadcast.png)

### Wipe / reset tokens
This action will reset the tokens for all players on the dashboard. Can only run once every 15 minutes.

![Automations / Tasks - Action - Wipe / reset tokens](/img/dashboard/automate_tasks/actions/action_wipe_reset_tokens.jpg)

### Copy / Paste GSA clipboard
Actions can be copied, including any sub actions, to make things. The clipboard is stored for 10 minutes.

![Automations / Tasks - Action - Copy to GSA clipboard](/img/dashboard/automate_tasks/actions/action_copy_to_gsa_clipboard.jpg)
![Automations / Tasks - Action - Paste GSA clipboard](/img/dashboard/automate_tasks/actions/action_paste_gsa_clipboard.jpg)


## Admin tools

### In-game DM
Send an in-game Direct Message (DM) to the character.

![Automations / Tasks - Action - in-game dm](/img/dashboard/automate_tasks/actions/action_ingame_dm.png)

### Send tokens
Send tokens to the player.
Works with both a fixed amount and a random amount, where you can set the range.

![Automations / Tasks - Action - Send tokens](/img/dashboard/automate_tasks/actions/action_send_tokens.jpg)

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

### Integration mod
Activate special GSA Integration mod features, like:
- Open Report UI
- Open Review UI
- Kill player
- Teleport player to coordinates
- Give EXP to player

![Automations / Tasks - Action - Integration mod](/img/dashboard/automate_tasks/actions/action_integration_mod.png)

### Whitelist
Add / remove whitelist for a specific cluster, game server or all.

![Automations / Tasks - Action - whitelist 1](/img/dashboard/automate_tasks/actions/action_whitelist_1.png)

![Automations / Tasks - Action - whitelist 2](/img/dashboard/automate_tasks/actions/action_whitelist_2.png)

### Custom Role
Add or remove a Custom Role for the associated player.

![Automations / Tasks - Action - Custom role 1](/img/dashboard/automate_tasks/actions/action_custom_role_1.png)

![Automations / Tasks - Action - Custom role 2](/img/dashboard/automate_tasks/actions/action_custom_role_2.png)

### Donor status
Give player the Donor status for predetermined amount of time.

![Automations / Tasks - Action - Donor status](/img/dashboard/automate_tasks/actions/action_donor_status.png)

### Shop pack
Send a Shop pack to the player. This Action is not available in the Shop pack Delivery Builder.

![Automations / Tasks - Action - Shop pack](/img/dashboard/automate_tasks/actions/action_shop_pack.png)

### Storage pack
Send an in-game upload. This action is only available for ARK: Survival Evolved inside Shop packs.

![Automations / Tasks - Action - Storage pack](/img/dashboard/automate_tasks/actions/action_storage_pack.jpg)

### Claim votes
Claims any claimable votes for the player.

![Automations / Tasks - Action - Claim vote](/img/dashboard/automate_tasks/actions/action_claim_vote.png)

## Discord

### Discord role
Assign or remove a Discord Role from the associated Discord user.

![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_1.png)

![Automations / Tasks - Action - discord role](/img/dashboard/automate_tasks/actions/action_discord_role_2.png)

### Discord message
Post a custom message in your selected Discord channel.

![Automations / Tasks - Action - discord message](/img/dashboard/automate_tasks/actions/action_discord_message.png)

### Discord embed
Post a custom Discord embed in your selected Discord channel. Accepts raw json embed format.

![Automations / Tasks - Action - discord embed](/img/dashboard/automate_tasks/actions/action_discord_embed.jpg)

## Logic

### Conditional
Add if/else logic to your delivery with Conditional blocks.
This Action block supports adding sub-Action blocks, which run when the conditions are met.

![Automations / Tasks - Action - Conditional 1](/img/dashboard/automate_tasks/actions/action_conditional_1.jpg)

#### Available conditions:
- Player
  - Player name
  - Player token amount
  - Player Custom role
  - Player Status
  - Player is admin
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
- Date
  - Date & time
  - Day of the week
  
![Automations / Tasks - Action - Conditional 2](/img/dashboard/automate_tasks/actions/action_conditional_2.jpg)

### Randomizer
Randomly execute one of the sub options based on chance settings.
This Action block supports adding sub-Action blocks, per Randomizer option.

![Automations / Tasks - Action - Randomizer](/img/dashboard/automate_tasks/actions/action_randomizer.png)

### Queue / Schedule
Schedule actions that should execute somewhere in the future.
This Action block supports adding sub-Action blocks, which run after specified amount of time.

![Automations / Tasks - Action - Queue / Schedule](/img/dashboard/automate_tasks/actions/action_queue_schedule.png)

### Run actions per player
Loops over the selected player group and runs the actions configured for each player.
Useful for sending tokens to all online players, for example.

Currently available groups:
- Online players

![Automations / Tasks - Action - Run actions per player](/img/dashboard/automate_tasks/actions/action_run_actions_per_player.jpg)

### Run actions per game server
Loops over the selected game servers and runs the actions configured for each game server.
This action is only available in Shop packs and Supporter Tiers.

![Automations / Tasks - Action - Run actions per game server](/img/dashboard/automate_tasks/actions/action_run_actions_per_gameserver.jpg)


## Manage items

### Task actions
Enable or Disable a Task. Can be useful for events etc.

![Automations / Tasks - Action - Task control](/img/dashboard/automate_tasks/actions/action_task_control.png)

### Shop pack actions
Show or hide a Shop pack.

![Automations / Tasks - Action - Shop pack control](/img/dashboard/automate_tasks/actions/action_shop_pack_control.jpg)

### Supporter Tier actions
Show or hide a Supporter Tier.

![Automations / Tasks - Action - Supporter Tier control](/img/dashboard/automate_tasks/actions/action_supporter_tier_control.jpg)

### Game server actions
Lets you perform various actions, like:
- Start game server
- Schedule shutdown (with option countdown)
- Schedule restart (with option countdown)
- Schedule update (with option countdown)
- Change config template
- Change map / seed
- Generate random seed (numbers, lowercase & uppercase letters)
- Create backup (with cleanup option)
- Wipe game server (full or partial)

![Automations / Tasks - Action - Game server actions](/img/dashboard/automate_tasks/actions/action_gameserver_actions.jpg)
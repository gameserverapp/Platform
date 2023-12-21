---
title: General
sidebar_position: 0
---

## Chat / console log
See what players talk about on the game servers, what logs each game server generates and all admin commands.

[Go to Chat / console >](https://dash.gameserverapp.com/admintools/chatconsole)

![Admin tools - Chat log](/img/dashboard/admin_tools/general/chat_console_logs_overview.jpg)

Use filters and search to help find what you're looking for.

![Admin tools - Chat log](/img/dashboard/admin_tools/general/chatlog_search_filter.jpg)

## Controls
The [Player](#players) and [Character](#characters) section have a special `Admin actions` dropdown menu. The [Group](#groups) section comes with an action menu on the right.

While not all options displayed on the image below will be available on all sections, in general they are the same controls.

![Admin tools - Controls button](/img/dashboard/admin_tools/general/control_button.jpg)

### Ban, Kick & Mute
Use the controls in the sidebar (right) on every Player page to ban, kick or mute a player.
For bans and mutes you can specify a duration.

![Admin tools - Ban duration](/img/dashboard/admin_tools/general/controls_ban_duration.jpg)

### Whitelist
See where the player / character is whitelisted for and delete if needed.
Manually add players to a specific whitelist for a specified duration.

![Admin tools - Controls whitelist](/img/dashboard/admin_tools/general/controls_whitelist.jpg)

### Custom Roles
See all Custom Roles for the player / character. Manually assign Custom Roles for a specified duration.

![Admin tools - Controls Custom Role](/img/dashboard/admin_tools/general/controls_customrole.jpg)

### Send to player
Send tokens (or take them away) and manually send deliveries to the player / character.

![Admin tools - Controls send tokens](/img/dashboard/admin_tools/general/controls_send_tokens.jpg)
![Admin tools - Controls send delivery](/img/dashboard/admin_tools/general/controls_send_delivery.jpg)

### Notes
Keep notes per player. Useful to keep the entire admin team updated on warnings and events.

![Admin tools - Notes](/img/dashboard/admin_tools/general/controls_notes.jpg)

## Players
Find players across all game servers. Use search and filters to filter accounts that are banned, have a note, specific account types like Steam, Epic, Mojang or EOS accounts.

[Go to Players >](https://dash.gameserverapp.com/admintools/accounts)

![Admin tools - Players - overview](/img/dashboard/admin_tools/general/players_overview.jpg)

### Multi account
Players can "merge" their Epic, EOS, Steam, Mojang etc. accounts into 1 `Multi` account. The `Multi` label makes it easy to recognize which players on the dashboard represent multiple social accounts.

Players can log in on your Community website -> navigate to `Settings` -> scroll down to "Connected accounts" to manage their connected accounts. [Learn how to connect accounts that don't have a login method >](/dashboard/community/website#connect-sub-accounts-on-community-website)

![Admin tools - Players - multi account](/img/dashboard/admin_tools/general/players_overview_multi_account.jpg)

### Player details
See all information about the player and all connected accounts like their characters, sales, deliveries, Custom Roles and more.

![Admin tools - Player detail - info](/img/dashboard/admin_tools/general/player_detail_info.jpg)

### Rename player
In specific cases is it possible to rename the player. This is mainly for fixing issues where chat is not being picked up for the player, due to the use of special characters in the name or some other reason.

Keep in mind that changing the name can cause problems for the player, like cluster chat no longer working. Only use this to fix mentioned issues above.

#### 1. Click the <icon icon="fa-solid fa-pencil-alt" size="md" /> icon
Only specific players can have their name changed. The <icon icon="fa-solid fa-pencil-alt" size="md" /> icon is visible when this is supported.

![Admin tools - Player detail - Rename player 1](/img/dashboard/admin_tools/general/rename_player_1.jpg)

#### 2. Enter alternative name
Enter the new name in the popup. Make sure this name corresponds with the name you see in the chat log, if you're trying to fix chat issues.

![Admin tools - Player detail - Rename player 2](/img/dashboard/admin_tools/general/rename_player_2.jpg)

## Characters
Find characters across all game servers. Use search and filters to help find what you're looking for.

[Go to Characters >](https://dash.gameserverapp.com/admintools/characters)

![Admin tools - Characters - overview](/img/dashboard/admin_tools/general/characters_overview.jpg)

### Character details
See all information per character like when they were online, which groups they are in, chat log, deliveries and more.

![Admin tools - Character detail - info](/img/dashboard/admin_tools/general/character_detail_info.jpg)

## Groups
Find groups across all game servers. Use search and filters to help find what you're looking for.

[Go to Groups >](https://dash.gameserverapp.com/admintools/groups)

![Admin tools - Groups - overview](/img/dashboard/admin_tools/general/groups_overview.jpg)

### Members & logs
See who the group members are and search the group logs from the dashboard.

![Admin tools - Group detail - members](/img/dashboard/admin_tools/general/group_detail_characters.jpg)

![Admin tools - Group detail - logs](/img/dashboard/admin_tools/general/group_detail_log.jpg)


## Settings

[Go to Admin tools settings >](https://dash.gameserverapp.com/admintools/settings)

### Player greetings
Automatically welcomes players when they join a game server. GSA randomly picks one welcome line each time a players joins the server.

![Admin tools - Settings - Player greetings](/img/dashboard/admin_tools/general/settings_greetings.jpg)
![Admin tools - Settings - Player greeting example](/img/dashboard/admin_tools/general/player_greeting_example.jpg)

### Rule gate
The Rule gate eliminates the "I didnt know the rules" discussion once and for all.

Set a trial period during which players can play on your servers before they are required to accept the rules. During the trial they are reminded to visit the Community website and accept the rules.

When the trial expires the player receives a final reminder and is kicked when they fail to comply.

![Admin tools - Settings - Rule gate](/img/dashboard/admin_tools/general/settings_rulegate.jpg)

#### In-game reminders example
![Admin tools - Settings - Rule gate example](/img/dashboard/admin_tools/general/rule_gate_example.jpg)

#### Rule page example
After configuring which page contains the rules GSA will automatically add a button to the page so people can accept the rules.

![Admin tools - Settings - Rule page example](/img/dashboard/admin_tools/general/rule_page_example.jpg)
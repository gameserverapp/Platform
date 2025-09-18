---
title: Players, Characters & Groups
sidebar_position: 0
---

The Admin tools section helps you get a helicopter view of your community, and provides tools to manage your community.

## Overview pages

The overview pages for Players, Characters and Groups are very similar. This "Overview pages" section covers the common elements, like controls, search & filters and bulk actions.

![Overview](/img/dashboard/admin_tools/players_groups/overview.jpg)

### Tabs
The overview pages come with tabs that let you switch between different views. This helps you narrow down the list to only show what you're looking for, for example only show players that are banned or have a note.

Available options between Players, Characters and Groups may differ.

The `active` tab shows all players/characters/groups that were active in the last 30 days.

![Overview tabs](/img/dashboard/admin_tools/players_groups/overview_tabs.jpg)


### Search & filters

Use the search and filter options on the right-hand side to narrow down the list.
The filters available depend on the section you're in.

You can combine multiple filters to narrow down the list even further.

![Overview search & filters](/img/dashboard/admin_tools/players_groups/overview_search_filters.jpg)


### Table control
You can control how the table is displayed. You can sort the columns, change the number of rows displayed and show/hide specific columns.

Some columns support changing their order, letting you customize the table to your liking. You can change the order by dragging the column header to the desired position.

The settings are saved in your browser, so the next time you visit the page on the same device, the settings will be the same as before.

![Overview table controls](/img/dashboard/admin_tools/players_groups/overview_table_controls.jpg)

### Bulk actions
:::info
Bulk actions are only available on dashboards with an active add-on.
:::

You can select multiple players/characters/groups and apply certain actions to them all at once.
The bulk actions let you select up to 50 players/characters/groups at once.

The checkbox at the top-left of the table lets you select / deselect all players/characters/groups on the current page.

**Bulk actions disabled**\
You first need to select at least one player/character/group before the bulk actions button is enabled.


![Overview bulk actions](/img/dashboard/admin_tools/players_groups/overview_bulk_actions.jpg)




## Players
Every player has a detail page, where you can see all information about the player and manage them.

On the "General" tab you find a quick overview of all information about the player, like:
- Connected accounts
- General information (hours played, tokens, create date, etc.)
- Custom Roles
- Access control
- Last 5 sales, deliveries, token transactions, achievements and votes
- Moderation log

[Go to Players >](https://dash.gameserverapp.com/admintools_v2/players)

![Player - detail page](/img/dashboard/admin_tools/players_groups/player_detail_page.jpg)

### Subaccounts
Players can add additional accounts to their profile, for example a Discord or Twitch account.

Things like tokens, roles, etc. are shared between all connected accounts.
This lets players buy tokens on one account and use them on another, which can be useful when your community hosts different games.

This also means that if you ban a player, all their relevant subaccounts are banned on the applicable game servers. 

#### Connect subaccounts
Only players can connect additional accounts. They can do this by logging in on your [Community website](/dashboard/community/website), and then connecting the other account(s) on the settings page.

It is not possible to connect accounts for players on the dashboard, as this is a sensitive action that should only be performed by the owner of the account (the player).

![Player - Connected accounts](/img/dashboard/admin_tools/players_groups/player_connected_accounts.jpg)


### Quick ID list
You can access all player IDs from the overview page too. Click the `[+]` on the left of the username to unfold the ID list.

![Players - ID list](/img/dashboard/admin_tools/players_groups/player_overview_id_list.jpg)

### Admin actions
The `Admin actions` dropdown menu is available on the player detail page and on the player overview page.

#### Detail page
![Player - Detail - Admin actions](/img/dashboard/admin_tools/players_groups/player_detail_admin_actions.jpg)

#### Overview page
![Player - Overview - Admin actions](/img/dashboard/admin_tools/players_groups/player_overview_admin_actions.jpg)


### Moderation log
The moderation log keeps track of all moderation actions performed by admins, as well as automated actions performed by GSA. This can be particularly useful when working with an Admin team, as it helps you keep track of who did what. It also helps keep track of historic punishments.

Check out the [moderation tools](/dashboard/admin_tools/general#moderation-tools) section for more details.


![Player - Moderation log](/img/dashboard/admin_tools/players_groups/player_moderation_log.jpg)

### Monetization
You can find all monetization related information for the player on the player detail page. This includes:
- Sales
- Deliveries
- Token transactions
- Subscriptions

These pages come with filters and search to help you find what you're looking for.

![Player - Monetization](/img/dashboard/admin_tools/players_groups/player_monetization.jpg)

### Achievements
See all achievements for the player, including when they were earned, by which character and when it expires.

On the `Achievements` tab you can filter for specific achievements and date ranges.

![Player - Achievements](/img/dashboard/admin_tools/players_groups/player_achievements.jpg)


### Votes
See all votes for the player, including when they were cast and which game server they voted for.

You can filter for specific game servers and date ranges.

![Player - Votes](/img/dashboard/admin_tools/players_groups/player_votes.jpg)

### Delete player
You can delete a player from the dashboard. This will remove all information about the player, except for chat log, sales, token transactions & subscriptions. This action can't be undone.

For chat log, sales, token transactions & subscriptions the relation to the player is removed, so the data still exists on your dashboard.

When the players joins one of your game servers again, they will be treated as a new player.



## Characters

Characters have a detail page, where you can see all information about the character and manage them.

On the "General" tab you find a quick overview of all information about the character, like:
- General information (level, hours played, game server, etc.)
- Activity
- Chat log
- Deliveries
- Achievements
- Public profile
- Moderation log

[Go to Characters >](https://dash.gameserverapp.com/admintools_v2/characters)

![Character - Detail page](/img/dashboard/admin_tools/players_groups/character_detail_page.jpg)

### Admin actions
The `Admin actions` dropdown menu is available on the character detail page and on the character overview page.

#### Detail page
![Character - Detail - Admin actions](/img/dashboard/admin_tools/players_groups/character_detail_admin_actions.jpg)


#### Overview page
![Character - Overview - Admin actions](/img/dashboard/admin_tools/players_groups/character_overview_admin_actions.jpg)

The `Admin actions` dropdown menu on the right-hand side of the character row comes with the following options:
- Add note
- Send delivery
- Send message
- Manage tokens
- Manage roles
- Access control
- Kick from servers
- Mute player
- Ban player
- Delete character
- Delete player

### Activity
The activity tab shows when the character was online, how long they were online and on which game servers.

The filters let you filter for specific game servers and date ranges.

![Character - Activity](/img/dashboard/admin_tools/players_groups/character_activity.jpg)


### Chat log
All in-game chat messages for the character are shown on the chat log tab.

The filters let you filter for specific game servers and date ranges. You can also search for specific messages.

![Character - Chat log](/img/dashboard/admin_tools/players_groups/character_chatlog.jpg)

### Deliveries
See all deliveries for the character, including when they were sent and their status.

You can filter for specific deliveries and date ranges.

![Character - Deliveries](/img/dashboard/admin_tools/players_groups/character_deliveries.jpg)

### Achievements
See all achievements for the character, including when they were earned and when it expires.

You can filter for specific achievements and date ranges.

![Character - Achievements](/img/dashboard/admin_tools/players_groups/character_achievements.jpg)

### Public profile
The public profile tab shows the character's public profile, as it would appear on the [Community website](/dashboard/community/website). Players can customize their public profile on the Community website.

You can use the public profile tab to change the character's public profile.

![Character - Public profile](/img/dashboard/admin_tools/players_groups/character_public_profile.jpg)


## Groups
Every group has a detail page, where you can see all information about the group and manage them.

On the sidebar you can find a `Notes` block. This is a great place to keep notes about the group, for example when they violated the rules, what their in-game behavior is like, etc.

On the "General" tab you find a quick overview of all information about the group, like:
- General information (name, ID, achievement score, etc.)
- Characters
- Notes

[Go to Groups >](https://dash.gameserverapp.com/admintools_v2/groups)

![Group - Detail page](/img/dashboard/admin_tools/players_groups/group_detail_page.jpg)

### Admin actions
The `Admin actions` dropdown menu is available on the group detail page and on the group overview page.

#### Detail page
![Group - Detail - Admin actions](/img/dashboard/admin_tools/players_groups/group_detail_admin_actions.jpg)

#### Overview page
![Group - Overview - Admin actions](/img/dashboard/admin_tools/players_groups/group_overview_admin_actions.jpg)

### Log
When the game supports in-game group logs, you can view them on the group detail page. This can be useful to see what the group has been up to.

Use the filters to narrow down the log to specific dates.

![Group - Log](/img/dashboard/admin_tools/players_groups/group_logs.jpg)

### Public profile
The public profile tab shows the group's public profile, as it would appear on the [Community website](/dashboard/community/website). Owners & admins of the group can customize their group's public profile on the Community website.

![Group - Public profile](/img/dashboard/admin_tools/players_groups/group_public_profile.jpg)










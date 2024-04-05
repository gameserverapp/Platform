---
title: Variables
sidebar_position: 2
---
Variables can be used in various actions to add information like the character name, username, character id and more.


![Automations / Tasks - Variables](/img/dashboard/automate_tasks/variables/example_variables.jpg)

:::warning RCON command issues
Learn what you can do when commands / variables are not working: 
https://docs.gameserverapp.com/dashboard/monetization/deliveries#-troubleshooting-
:::

## Players

### Player ID
`{player.id}` Shows the player ID (steam, epic, EOS, mojang etc) for player.

### Username
`{player.username}` Shows the username for player.

### Token count
`{player.token_count}` Shows the token amount for player.

### Custom role
`{custom_role.1.hours_remaining}` Shows the remaining time in hours, for custom role ID.
`{custom_role.1.days_remaining}` Shows the remaining time in days, for custom role ID.


## Character

### Character ID
`{character.id}` Shows the in-game character ID.

### Character name
`{character.name}` Shows the in-game character name.


## Group

### Group ID
`{group.id}` Shows the in-game group ID.

### Group name
`{group.name}` Shows the in-game group name.

## Game server

### Game server name
`{gameserver.name}` Shows game server name (list name).

### Website name
`{gameserver.website_name}` Shows game server website name.

### Online player count
`{gameserver.online_player_count}` Shows the number of online players.

## Cluster

### Cluster name
`{cluster.name}` Shows cluster name.
---
title: Variables
sidebar_position: 2
---

Variables can be used in many actions to dynamically include details such as a character name, username, ID, and more.

![Automations / Tasks - Variables](/img/dashboard/automate_tasks/variables/example_variables.jpg)

:::warning RCON command issues
If your commands or variables aren't working, check out this troubleshooting guide:  
https://docs.gameserverapp.com/dashboard/monetization/deliveries#-troubleshooting-
:::

## Players

### Player ID

`{player.id}` Displays the player's unique ID (Steam, Epic, EOS, Mojang, etc).

### Username

`{player.username}` Displays the player's username.

### Token count

`{player.token_count}` Displays the player's current token balance.

### Custom role

`{custom_role.1.minutes_remaining}` shows the remaining time in **minutes**.  
`{custom_role.1.hours_remaining}` shows the remaining time in **hours**.  
`{custom_role.1.days_remaining}` shows the remaining time in **days**.

## Character

### Character ID

`{character.id}` Displays the in-game character ID.

### Character name

`{character.name}` Displays the in-game character name.

## Group

### Group ID

`{group.id}` Displays the in-game group ID.

### Group name

`{group.name}` Displays the in-game group name.

## Game server

### Game server name

`{gameserver.name}` Displays the server's name as it appears in the list.

### Website name

`{gameserver.website_name}` Displays the server's website name.

### Online player count

`{gameserver.online_player_count}` Displays the number of currently online players.

## Cluster

### Cluster name

`{cluster.name}` Displays the name of the cluster.

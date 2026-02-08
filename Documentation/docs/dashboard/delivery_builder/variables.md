---
title: Variables
sidebar_position: 1.2
---

Variables can be used in various parts of GSA, like [Tasks](/dashboard/automate_tasks/getting_started), [Shop packs](/dashboard/monetization/shop_packs), [Supporter Tiers](/dashboard/monetization/supporter_tiers), [Blueprints](/dashboard/blueprints/getting_started) [Discord Slash commands](/dashboard/discord-bot#slash-commands) and [Discord Emoji reactions](/dashboard/discord-bot#emoji-reactions).

Variables are used to dynamically include details such as a character name, username, ID, and more.

:::tip Blueprint variables
Working on blueprints? Then you can find more variables in the [Blueprints documentation](/dashboard/blueprints/variables).
:::

![Variables](/img/dashboard/delivery_builder/variables/example_variables.jpg)

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

### Custom Role

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

### Game server short name

`{gameserver.short_name}` Displays the server's short name.

### Website name

`{gameserver.website_name}` Displays the server's website name.

### Online player count

`{gameserver.online_player_count}` Displays the number of currently online players.

## Cluster

### Cluster name

`{cluster.name}` Displays the name of the cluster.


## Delivery

Delivery variables are used to dynamically include details about the delivery.

### Delivery ID
`{delivery.id}` Displays the delivery's unique ID.

### Delivery status
`{delivery.status}` Displays the delivery's current status.


### Other delivery variables
The variables below are only available in specific cases, for example when using a [Discord slash command](/dashboard/discord-bot#slash-commands).

#### Access group ID
`{variable.access_group_id}` Displays the delivery's access group ID.

#### Membership type
`{variable.membership_type}` Displays the delivery's membership type.

#### Amount
`{variable.amount}` Displays the amount.

#### Countdown minutes
`{variable.countdown_minutes}` Displays the countdown duration in minutes.

#### Duration
`{variable.duration}` Displays the duration.

#### Message
`{variable.message}` Displays the message.

#### Rcon command
`{variable.rcon_command}` Displays the rcon command.

#### Reason
`{variable.reason}` Displays the reason.
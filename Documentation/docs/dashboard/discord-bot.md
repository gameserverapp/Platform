---
title: Discord bot
sidebar_position: 2
---

Create custom Discord Slash commands and emoji reactions.\
Chat with in-game players directly from Discord, manage your servers, and more.

[Go to Discord bot settings >](https://dash.gameserverapp.com/community/discord)


## Slash commands
With slash commands you can execute actions on your dashboard without leaving Discord. You can customize the commands to fit your needs.

If you used GSA's task / delivery system already, then Slash commands system will feel familiar.

### Command types
The examples below are just a few examples of what you can do with Slash commands. You can create your own commands and customize them to fit your needs.

#### Generic
As the name suggests, this command type can be used for generic commands.
What is a generic command? It's a command that doesn't have any specific target.\
For example, `/help`, `/servers` or `/onlineplayers`.

#### Discord user (targets invoker)
This command type targets the invoker of the command, meaning the person that used the command on Discord.\
For example, `/claim`, `/kickme`, `/verify`, `/connect` or `/balance`.

#### Player
Player commands target a specific player. This can be a Discord user or a player from your dashboard.\
For example, `/kick`, `/ban`, `/sendtokens`, `/dm` or `/mute`.

:::info
These commands always require you to specify a player and can only be used by [Additional admins](/dashboard/admin_teams).
:::

#### Character
Character commands target a specific character from your dashboard.\
For example, `/levelup`, `/setname` or `/exp`.

:::info
These commands always require you to specify a character and can only be used by [Additional admins](/dashboard/admin_teams).
:::

#### Game server
Game server commands target a specific game server, a cluster, or all game servers.\
For example, `/restart`, `/backup` or `/rcon`.

:::info
These commands always require you to specify a game server and can only be used by [Additional admins](/dashboard/admin_teams).
:::

### Create a command

You can create a new command or download commands from the marketplace and edit them to your needs.

:::tip Browse the marketplace
Find inspiration or get started with Slash commands using the [Discord Marketplace >](https://dash.gameserverapp.com/marketplace/market/discord)
:::

Click `+ Add command` to create a new command.

![Discord bot - Create slash command 1](/img/dashboard/discord_bot/discord_command_create_1.jpg)

Select the command type and enter a name for your command.

![Discord bot - Create slash command 2](/img/dashboard/discord_bot/discord_command_create_2.jpg)

Add actions to your command, enter a description, and enable the command.

![Discord bot - Create slash command 3](/img/dashboard/discord_bot/discord_command_create_3.jpg)

On this example we've added the `Discord update interaction` action. This action will replace the default Discord interaction message with a custom one.
We also enabled `Ephemeral` so the message will only be visible to the user who invoked the command.

![Discord bot - Create slash command 4](/img/dashboard/discord_bot/discord_command_create_4.gif)

### Actions

Certain actions will automatically add arguments to your command.\
For example, when using the `In-game command` action, it will add the `rcon_command` argument to your command. 

[Learn more about all available actions >](/dashboard/delivery_builder/actions)

![Discord bot - Argument example 1.1](/img/dashboard/discord_bot/command_rcon_example_1.jpg)

Which translates to this command:

![Discord bot - Argument example 1.2](/img/dashboard/discord_bot/command_rcon_example_2.jpg)

### Settings

#### Enable command
Only enabled commands will be available on Discord.

#### Command name
The name of the command that will be used on Discord.

![Discord bot - Command setting - command](/img/dashboard/discord_bot/command_settings_command.jpg)

#### Description
A brief description of the command that will be displayed on Discord.

![Discord bot - Command setting - command](/img/dashboard/discord_bot/command_settings_description.jpg)
    
#### Ephemeral response
When enabled, the response to the command will be hidden from other users.

![Discord bot - Create slash command 4](/img/dashboard/discord_bot/command_settings_ephemeral.jpg)

## Emoji reactions

Emoji reactions can be useful for quick actions like rewarding players. Each emoji reaction comes with actions that run when you add an emoji to a message, and separate actions for when you remove an emoji from a message.

If you used GSA's task / delivery system already, then the emoji reactions system will feel familiar.


### Create an emoji reaction

You can create a new emoji reaction or download them from the marketplace and edit to your needs.

:::tip Browse the marketplace
Find inspiration or get started with emoji reaction using the [Discord Marketplace >](https://dash.gameserverapp.com/marketplace/market/discord)
:::

Click `+ Add reaction` to create a new emoji reaction.

![Discord bot - Create emoji reaction 1](/img/dashboard/discord_bot/create_reaction_1.jpg)

Select the emoji you want to use.\
You can use any emoji from the [Discord emoji list](https://emojipedia.org/) as well as any custom emoji you've uploaded to your Discord server.

![Discord bot - Create emoji reaction 2](/img/dashboard/discord_bot/create_reaction_2.jpg)

Add actions to your emoji reaction, select which roles can use it, and enable it.

:::warning
After enabling an emoji reaction, it may take a few minutes before the bot will process it. Please be patient.
:::

![Discord bot - Create emoji reaction 3](/img/dashboard/discord_bot/create_reaction_3.jpg)

On this example we've used the `Send tokens` action. When adding the selected emoji to a message, the bot will send 10 tokens to author of the message. Removing the emoji will remove the tokens again (assuming you set up the -10 tokens action on `Remove reaction`).

![Discord bot - Create emoji reaction 4](/img/dashboard/discord_bot/create_reaction_4.gif)



### Settings

#### Enable reaction
Only enabled reactions will be available on Discord.

#### Roles
Select which roles can use this reaction. If no roles are selected, everyone will be able to use the emoji reaction.

## Channels

### Discord + Cluster chat

Chat directly with in-game players from Discord. Supported in all games that [support Cluster chat](https://dash.gameserverapp.com/features-per-game).

![Discord bot - Cluster chat + Discord](/img/dashboard/discord_bot/cluster_chat_discord_chat_example.jpg)

Go to the [Discord page](https://dash.gameserverapp.com/community/discord) and assign a channel to the **Discord + Cluster chat** setting.

:::info
It may take a few minutes for chat to activate after saving your channel. Please be patient.
:::

![Discord bot - Enable Cluster chat + Discord](/img/dashboard/discord_bot/enable_discord_cluster_chat.jpg)

### Player join / leave

Get real-time join/leave notifications in Discord when players enter or exit a game server.

![Discord bot - Player join / leave](/img/dashboard/discord_bot/player_join_leave.jpg)

Set up the **Player join & leave** channel on the [Discord page](https://dash.gameserverapp.com/community/discord).

![Discord bot - Player join / leave](/img/dashboard/discord_bot/discord_player_join_leave_setup.jpg)

### Game server status card

Display a real-time server status card that updates on events like restarts or updates.

![Discord bot - Game server status card](/img/dashboard/discord_bot/discord_game_server_status_card.jpg)

Assign a channel for the **Game server status card** on the [Discord page](https://dash.gameserverapp.com/community/discord).

![Discord bot - Player join / leave](/img/dashboard/discord_bot/discord_game_server_status_card_setup.jpg)

### Game server status log

Track detailed server events such as startup, shutdown, or mod updates in Discord.

![Discord bot - Game server status log](/img/dashboard/discord_bot/discord_game_server_status_log.jpg)

Assign a channel for the **Game server status log** on the [Discord page](https://dash.gameserverapp.com/community/discord).

![Discord bot - Player join / leave](/img/dashboard/discord_bot/discord_game_server_status_log_setup.jpg)



## History

## Settings

### General

#### Report admin commands

Select a channel to send admin commands to. Admin commands used in-game are logged in this channel.

![Discord bot - Settings - Report admin commands](/img/dashboard/discord_bot/report_command_settings.jpg)

#### Send in-game broadcasts to Discord

Decide whether in-game broadcasts should be sent to Discord too.

![Discord bot - Settings - Broadcast to discord](/img/dashboard/discord_bot/general_broadcast_settings.jpg)

#### Avoiding broadcast spam

Reduce the number of broadcasts sent to Discord. This feature is useful when you send broadcasts to multiple game servers. Only one broadcast will be sent to Discord, avoiding spam.

![Discord bot - Settings - anti broadcast spam](/img/dashboard/discord_bot/general_broadcast_anti-spam.jpg)


#### Status block vote sites

This setting will add the configured vote sites to the status card for each game server.

![Discord bot - Settings - Status card vote sites](/img/dashboard/discord_bot/general_status_card_vote_site.jpg)


### Roles

Control which roles can be controlled on the dashboard. Only roles that you enabled can be used on tasks, deliveries, etc.
It's recommended to leave roles with administrator & moderator permissions __disabled__.

![Discord bot - Settings - roles](/img/dashboard/discord_bot/roles_settings.jpg)


## Set up the bot

### Connect bot to your dashboard

To get started, you need to connect the bot to your Discord server.

#### 1. Connect Discord

Go to the [Discord page](https://dash.gameserverapp.com/community/discord/settings) and click **Connect your Discord**.

![Discord bot - Connect discord 1](/img/dashboard/discord_bot/connect_discord_1.jpg)

#### 2. Select Discord server

Choose the Discord server where the bot should be installed and click **Continue**.

![Discord bot - Connect discord 2](/img/dashboard/discord_bot/connect_discord_2.jpg)

#### 3. Confirm permissions

Keep all requested permissions enabled, the bot needs them to function properly. Click **Authorize**.

![Discord bot - Connect discord 3](/img/dashboard/discord_bot/connect_discord_3.jpg)

#### 4. Done!

![Discord bot - Connect discord 4](/img/dashboard/discord_bot/connect_discord_4.jpg)

### Group log setup

Allow players to view group logs in a private Discord server to stay informed about in-game activity even when offline.

#### 1. Log in on Community website

Group logs must be enabled by a group admin on the Community site.

![Discord bot - Group log setup 1](/img/dashboard/discord_bot/group_log_setup_1.jpg)

Go to **Group settings**.

![Discord bot - Group log setup 2](/img/dashboard/discord_bot/group_log_setup_2.jpg)

#### 2. Connect group Discord

On the settings page, click **Connect Discord** to invite the bot to your group's private server.

![Discord bot - Group log setup 3](/img/dashboard/discord_bot/group_log_setup_3.jpg)

Select the server where you want group logs to be posted.

![Discord bot - Group log setup 4](/img/dashboard/discord_bot/group_log_setup_4.jpg)

Keep all listed permissions enabled, then click **Authorize**.

![Discord bot - Group log setup 5](/img/dashboard/discord_bot/group_log_setup_5.jpg)

#### 3. Select Discord channel

Choose the channel where group logs should be posted.

![Discord bot - Group log setup 6](/img/dashboard/discord_bot/group_log_setup_6.jpg)

#### 4. Done!

Group logs will now automatically appear in the selected Discord channel. It may take up to 10 minutes for new logs to show up.

![Discord bot - Group log setup 7](/img/dashboard/discord_bot/group_log_setup_7.jpg)


## Troubleshooting

### The bot isn't posting messages

If you've just added the bot, please give it a few minutes.

Ensure the bot has the correct permissions to post in your channels. Check the bot's role settings and make sure it can send messages.

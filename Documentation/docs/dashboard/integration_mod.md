---
title: Integration Mod
sidebar_position: 9
---

The Integration Mod improves the in-game experience by seamlessly connecting the game world with the dashboard.

[Go to Integration Mod >](https://dash.gameserverapp.com/integration-mod)

## Install the Mod

![Integration Mod Installation](/img/dashboard/integration_mod/mod_install.jpg)
![Integration Mod Installation 2](/img/dashboard/integration_mod/mod_install_2.jpg)

### RconConnect

:::caution
If you're using DediConnect, there's no need to set up RconConnect, it's already configured for you.
:::

RconConnect game servers can follow [these integration instructions](/getting_started/rconconnect/integrate#gsa-integration-mod).

### DediConnect

DediConnect servers can install the mod directly from the [mod page in the game server settings](/dashboard/game_servers/mods_plugins#install-mods).

:::info
For DediConnect, everything is automatically set up. You only need to install the mod.
:::

## Cluster Chat

![Cluster Chat](/img/dashboard/integration_mod/chat.jpg)

The Integration Mod enhances the cluster chat, giving it a cleaner look that blends well with the regular chat, while still keeping it distinct.

[Learn how to activate Cluster Chat >](/dashboard/game_servers/clusters#cluster-chat)

## In-Game Shop

![In-Game Shop ARK:SA](/img/dashboard/integration_mod/shop_overview_2.jpg)
![In-Game Shop ARK:SE](/img/dashboard/integration_mod/shop_overview.jpg)

Let players browse the shop without leaving the game.

[Learn how to create Shop Packs >](/dashboard/monetization/shop_packs)

:::tip
You can sell [Token Gems](#token-gems) in the shop, allowing players to deposit, withdraw, and trade their tokens.
:::

![In-Game Shop Detail ARK:SA](/img/dashboard/integration_mod/shop_detail_2.jpg)
![In-Game Shop Detail ARK:SE](/img/dashboard/integration_mod/shop_detail.jpg)

### Settings

You can customize the button binding and title for the shop.

[Go to Shop Settings >](https://dash.gameserverapp.com/integration-mod/game-shop)

![Shop Settings](/img/dashboard/integration_mod/shop_settings.jpg)

## Dino Paint Brush

![Dino Paint Brush ARK:SA](/img/dashboard/integration_mod/dino_color_2.jpg)
![Dino Paint Brush ARK:SE](/img/dashboard/integration_mod/dino_color.jpg)

The Dino Paint Brush is a one-time-use tool that lets you color a dino. You can also use an RCON command to give multiple brushes to a user with one command, automating the coloring process.

### How It Works

1. Equip the brush and use it on the dino you want to color.
2. Select colors from a user-friendly GUI that shows available options.
3. Preview colors without applying them.
4. Once you're satisfied, click "Apply Colors" to finalize the design.

### Preventing Abuse

To prevent misuse, there are two key safeguards:

- You have a set amount of time to use the brush. If you take too long, it will be destroyed.
- You can move around, but if you go too far, the brush will also be destroyed.
  Both actions are clearly indicated with alerts and a countdown.

### In-Game Command

Use the command:

```
scriptcommand gsadinocoloring 1 {player.id}
```

## Enhanced Notifications

![Enhanced Notifications](/img/dashboard/integration_mod/notifications_2.jpg)
![Enhanced Notifications](/img/dashboard/integration_mod/notifications.jpg)

This mod replaces the default yellow admin alerts with stylish notifications that fade out after a set duration.

### Settings

Notifications can be placed on either side of the screen with customizable fade-out timers. You can also turn them off.

[Go to Notification Settings >](https://dash.gameserverapp.com/integration-mod)

![Notification Settings](/img/dashboard/integration_mod/notification_settings.jpg)

## Report Form

![Report Form](/img/dashboard/integration_mod/report.jpg)

The mod introduces an in-game report form, which includes the in-game location from where the report was submitted.

### Settings

You can customize the button binding and title for the report screen.

[Go to Report Form Settings >](https://dash.gameserverapp.com/integration-mod/report)

![Report Form Settings](/img/dashboard/integration_mod/report_settings.jpg)

## Token Gems

Each Token Gem has its own token value, which cannot be customized at the moment. When a player consumes a Token Gem, the token amount is automatically added to their account, and the player receives a notification.

Like any other consumable item, Token Gems can be exchanged or stolen.

![Token Gems](/img/dashboard/integration_mod/token_gems.jpg)

:::info
The following codes are prepared for use in Shop Packs with [In-game Commands](/dashboard/automate_tasks/actions#in-game-command).
To use these outside of Shop Packs, replace `{character.id}` with the actual in-game character ID (not the Steam ID).
:::

### 1 Token Gem

![Token Gem 1](/img/dashboard/integration_mod/token_1.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/1/PrimalItemConsumable_Token_GSA_1.PrimalItemConsumable_Token_GSA_1" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/1/PrimalItemConsumable_Token_gsa_1.PrimalItemConsumable_Token_GSA_1'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_1_C`

### 5 Token Gem

![Token Gem 5](/img/dashboard/integration_mod/token_5.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/5/PrimalItemConsumable_Token_GSA_5.PrimalItemConsumable_Token_GSA_5" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/5/PrimalItemConsumable_Token_gsa_5.PrimalItemConsumable_Token_GSA_5'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_5_C`

### 10 Token Gem

![Token Gem 10](/img/dashboard/integration_mod/token_10.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/10/PrimalItemConsumable_Token_GSA_10.PrimalItemConsumable_Token_GSA_10" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/10/PrimalItemConsumable_Token_gsa_10.PrimalItemConsumable_Token_GSA_10'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_10_C`

### 25 Token Gem

![Token Gem 25](/img/dashboard/integration_mod/token_25.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/25/PrimalItemConsumable_Token_GSA_25.PrimalItemConsumable_Token_GSA_25" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/25/PrimalItemConsumable_Token_gsa_25.PrimalItemConsumable_Token_GSA_25'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_25_C`

### 50 Token Gem

![Token Gem 50](/img/dashboard/integration_mod/token_50.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/50/PrimalItemConsumable_Token_GSA_50.PrimalItemConsumable_Token_GSA_50" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/50/PrimalItemConsumable_Token_gsa_50.PrimalItemConsumable_Token_GSA_50'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_50_C`

### 100 Token Gem

![Token Gem 100](/img/dashboard/integration_mod/token_100.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/100/PrimalItemConsumable_Token_GSA_100.PrimalItemConsumable_Token_GSA_100" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/100/PrimalItemConsumable_Token_gsa_100.PrimalItemConsumable_Token_GSA_100'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_100_C`

### 250 Token Gem

![Token Gem 250](/img/dashboard/integration_mod/token_250.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/250/PrimalItemConsumable_Token_GSA_250.PrimalItemConsumable_Token_GSA_250" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/250/PrimalItemConsumable_Token_gsa_250.PrimalItemConsumable_Token_GSA_250'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_250_C`

### 500 Token Gem

![Token Gem 500](/img/dashboard/integration_mod/token_500.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/500/PrimalItemConsumable_Token_GSA_500.PrimalItemConsumable_Token_GSA_500" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/500/PrimalItemConsumable_Token_gsa_500.PrimalItemConsumable_Token_GSA_500'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_500_C`

### 1000 Token Gem

![Token Gem 1000](/img/dashboard/integration_mod/token_1000.png)

ARK:SA Command:

```
GiveItemToPlayer {character.id} "/gsa-mod/Tokens/Consumables/1000/PrimalItemConsumable_Token_GSA_1000.PrimalItemConsumable_Token_GSA_1000" 1 0 0
```

ARK:SE Command:

```
GiveItemToPlayer {character.id} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/1000/PrimalItemConsumable_Token_gsa_1000.PrimalItemConsumable_Token_GSA_1000'" 1 0 0
```

Blueprint Class: `PrimalItemConsumable_Token_gsa_1000_C`

## Vote Screen

![Vote Screen](/img/dashboard/integration_mod/vote_screen.jpg)

This feature provides a multi-purpose in-game popup with a short link for players to vote on game servers (optional).

### Settings

You can customize the buttons, text, and titles on the panel.

[Go to Vote Screen Settings >](https://dash.gameserverapp.com/integration-mod/vote-screen)

![Vote Screen Settings](/img/dashboard/integration_mod/vote_screen_settings.jpg)

## Review

![Review](/img/dashboard/integration_mod/review.jpg)

Allow players to rate the community and track long-term player satisfaction.

### Settings

Customize the button binding and title for the review screen.

[Go to Review Settings >](https://dash.gameserverapp.com/integration-mod/review)

![Review Settings](/img/dashboard/integration_mod/review_settings.jpg)

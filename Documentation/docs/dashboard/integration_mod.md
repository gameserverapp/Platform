---
title: Integration mod
sidebar_position: 2.3
---

The integration mod enhances the in-game experience and integrates the dashboard with the in-game world. 

[Go to Integration mod >](https://dash.gameserverapp.com/integration-mod)

## Install the mod
![Integration mod - ](/img/dashboard/integration_mod/mod_install.jpg)
![Integration mod - ](/img/dashboard/integration_mod/mod_install_2.jpg)

### RconConnect

:::caution
Are you using DediConnect? Then you won't have to set up RconConnect, this is already set up for you automatically.
:::

RconConnect game servers should follow [the integration instructions](/getting_started/rconconnect/integrate#gsa-integration-mod).

### DediConnect
DediConnect game servers can install the mod through the [mod page on game server settings](/dashboard/game_servers/mods_plugins#install-mods). 

:::info
Everything is automatically configured for DediConnect. You only have to install the mod.
:::


## Cluster chat
![Integration mod - ](/img/dashboard/integration_mod/chat.jpg)

The integration mod adds support for a cleaner looking cluster chat, which blends in with the normal chat but is still distinguishable. 

[Learn how to activate Cluster chat >](/dashboard/game_servers/clusters#cluster-chat)

## In-game shop
![Integration mod - ARK:SA](/img/dashboard/integration_mod/shop_overview_2.jpg)
![Integration mod - ARK:SE](/img/dashboard/integration_mod/shop_overview.jpg)

Let players browse the shop without leaving the game.

[Learn how to create Shop packs >](/dashboard/monetization/shop_packs)

:::tip Sell token gems
Selling [Token Gems](#token-gems) in the shop allows players to deposit and withdraw their tokens and trade them with other players.
:::

![Integration mod - ARK:SA](/img/dashboard/integration_mod/shop_detail_2.jpg)
![Integration mod - ARK:SE](/img/dashboard/integration_mod/shop_detail.jpg)

### Settings
Change the button binding and title for the shop.

[Go to Shop settings >](https://dash.gameserverapp.com/integration-mod/game-shop)

![Integration mod - ](/img/dashboard/integration_mod/shop_settings.jpg)

## Dino paint brush
![Integration mod - ARK:SA](/img/dashboard/integration_mod/dino_color_2.jpg)
![Integration mod - ARK:SE](/img/dashboard/integration_mod/dino_color.jpg)

This brush is single use and can only be used to color one dino. Optionally you can use the RCON command to give multiple brushes to a user with a single command. This is a great option to make dino color services fully automated without you having to do anything.

### How does it work
1. Equip the brush and hit the dino you want to color
2. You can select the colors using a nice GUI (a window that shows color options)
3. You can check out all the colors without applying.
4. When you are happy with your design, simply click "Apply colors" and it's done.

### Preventing abuse
When activating the brush by hitting your dino, you:

- have a certain amount of time (more than enough). If you take too long, the brush is destroyed.
- can move around, but if you go too far out the brush is destroyed.
For both there are clear alerts and a countdown, to indicate what is going on.

### In-game command
The command: `scriptcommand gsadinocoloring {quantity} {serviceid}`


## Enhanced notifications
![Integration mod - ](/img/dashboard/integration_mod/notifications_2.jpg)
![Integration mod - ](/img/dashboard/integration_mod/notifications.jpg)

Replace the in-game yellow admin alerts with stylish notifications. They automatically fade out after the configured amount of time.

### Settings
Can be placed on the right or left, with customizable fade-out timers. Can also be turned off.

[Go to Notification settings >](https://dash.gameserverapp.com/integration-mod)

![Integration mod - ](/img/dashboard/integration_mod/notification_settings.jpg)


## Report form
![Integration mod - ](/img/dashboard/integration_mod/report.jpg)

Adds the report form in-game. Created reports will include the in-game location where the report was submitted.

### Settings
Change the button binding and title for the report screen.

[Go to Report form settings >](https://dash.gameserverapp.com/integration-mod/report)

![Integration mod - ](/img/dashboard/integration_mod/report_settings.jpg)


## Token gems
Each Gem has its own token value. At the moment these can not be customised.
When a player consumes the Token Gem in-game, the amount of tokens is automatically added to their account. A notification is send to the user when it succeeded.
The Gem acts like any other consumable: it can be exchanged and/or stolen.

![Integration mod - ](/img/dashboard/integration_mod/token_gems.jpg)

:::info
These codes below are prepared for use in Shop packs using [In-game commands](/dashboard/automate_tasks/available_actions#in-game-command).
To use the commands outside the Shop packs, make sure to replace `{gameid}` with the in-game character ID (not the Steam id).
:::

### 1 Token Gem
![Integration mod - Token Gem 1](/img/dashboard/integration_mod/token_1.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/1/PrimalItemConsumable_Token_GSA_1.PrimalItemConsumable_Token_GSA_1" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/1/PrimalItemConsumable_Token_gsa_1.PrimalItemConsumable_Token_GSA_1'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_1_C`


### 5 Token Gem
![Integration mod - Token Gem 5](/img/dashboard/integration_mod/token_5.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/5/PrimalItemConsumable_Token_GSA_5.PrimalItemConsumable_Token_GSA_5" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/5/PrimalItemConsumable_Token_gsa_5.PrimalItemConsumable_Token_GSA_5'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_5_C`

### 10 Token Gem
![Integration mod - Token Gem 10](/img/dashboard/integration_mod/token_10.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/10/PrimalItemConsumable_Token_GSA_10.PrimalItemConsumable_Token_GSA_10" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/10/PrimalItemConsumable_Token_gsa_10.PrimalItemConsumable_Token_GSA_10'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_10_C`

### 25 Token Gem
![Integration mod - Token Gem 25](/img/dashboard/integration_mod/token_25.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/25/PrimalItemConsumable_Token_GSA_25.PrimalItemConsumable_Token_GSA_25" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/25/PrimalItemConsumable_Token_gsa_25.PrimalItemConsumable_Token_GSA_25'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_25_C`

### 50 Token Gem
![Integration mod - Token Gem 50](/img/dashboard/integration_mod/token_50.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/50/PrimalItemConsumable_Token_GSA_50.PrimalItemConsumable_Token_GSA_50" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/50/PrimalItemConsumable_Token_gsa_50.PrimalItemConsumable_Token_GSA_50'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_50_C`

### 100 Token Gem
![Integration mod - Token Gem 100](/img/dashboard/integration_mod/token_100.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/100/PrimalItemConsumable_Token_GSA_100.PrimalItemConsumable_Token_GSA_100" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/100/PrimalItemConsumable_Token_gsa_100.PrimalItemConsumable_Token_GSA_100'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_100_C`

### 250 Token Gem
![Integration mod - Token Gem 250](/img/dashboard/integration_mod/token_250.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/250/PrimalItemConsumable_Token_GSA_250.PrimalItemConsumable_Token_GSA_250" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/250/PrimalItemConsumable_Token_gsa_250.PrimalItemConsumable_Token_GSA_250'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_250_C`

### 500 Token Gem
![Integration mod - Token Gem 500](/img/dashboard/integration_mod/token_500.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/500/PrimalItemConsumable_Token_GSA_500.PrimalItemConsumable_Token_GSA_500" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/500/PrimalItemConsumable_Token_gsa_500.PrimalItemConsumable_Token_GSA_500'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_500_C`

### 1000 Token Gem
![Integration mod - Token Gem 1000](/img/dashboard/integration_mod/token_1000.png)

ARK:SA Command:
```
GiveItemToPlayer {gameid} "/gsa-mod/Tokens/Consumables/1000/PrimalItemConsumable_Token_GSA_1000.PrimalItemConsumable_Token_GSA_1000" 1 0 0
```

ARK:SE Command:
```
GiveItemToPlayer {gameid} "Blueprint'/Game/Mods/gsa-mod/Tokens/Consumables/1000/PrimalItemConsumable_Token_gsa_1000.PrimalItemConsumable_Token_GSA_1000'" 1 0 0
```
Blueprint class: `PrimalItemConsumable_Token_gsa_1000_C`





## Vote screen
![Integration mod - ](/img/dashboard/integration_mod/vote_screen.jpg)

Provides a multi-purpose in-game popup with short link for players to vote on game servers (optional).

### Settings
You can customize buttons, text and titles for the panel.

[Go to Vote screen settings >](https://dash.gameserverapp.com/integration-mod/vote-screen)

![Integration mod - ](/img/dashboard/integration_mod/vote_screen_settings.jpg)


## Review
![Integration mod - ](/img/dashboard/integration_mod/review.jpg)

Let players rate the community and track long-term player satisfaction.

### Settings
Change the button binding and title for the review screen.

[Go to Review settings >](https://dash.gameserverapp.com/integration-mod/review)

![Integration mod - ](/img/dashboard/integration_mod/review_settings.jpg)
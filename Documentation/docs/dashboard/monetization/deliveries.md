---
title: Deliveries
sidebar_position: 5
---

Deliveries for Shop packs, Supporter Tiers and Vote rewards get processed fully automated.

[Go to Deliveries >](https://dash.gameserverapp.com/monetization/deliveries/v2)


## Overview
Any deliveries that are currently being processed will show up on the Delivery overview, along with a graph of your total delivery count per day for the past 7 days

![Monetization - Deliveries overview](/img/dashboard/monetization/deliveries/deliveries_overview.jpg)

### Problems
Troubled deliveries will show up on your overview. You can retry a failed delivery or archive it.

![Monetization - Failed deliveries](/img/dashboard/monetization/deliveries/failed_deliveries.jpg)



### Manual delivery
Test or manually send Supporter Tiers to players by clicking `+ Create delivery ` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)
![Monetization - Manual delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

## Delivery details
Each delivery comes with a log, that shows exactly what happened.
You can change the recipient Character, retry failed deliveries or archive a delivery. Any associated sub-packages will show up on the details page as well.

Every action on a delivery is logged to help you understand what happened. This is especially helpful when deliveries are failing.

:::tip Log details
Click the <Icon icon="fa-solid fa-chevron-down" size="lg" /> icon in the logs section to show more details.
:::

:::caution Solve command issues
Learn how to [solve in-game command issues >](#in-game-command-not-working)
:::

![Monetization - Delivery detail](/img/dashboard/monetization/deliveries/delivery_details.jpg)

## Scheduled / Pending
Deliveries that are waiting for players to come online or clean their inventory are listed here.

## Completed
All deliveries that were successfully delivered show up on the `Completed` tab. These deliveries are used to determine whether a [player reached their purchase limit for Shop packs](/dashboard/monetization/shop_packs#purchase-limits).


### Reset purchase limits
To reset the purchase limits for individual players you must find deliveries for the Shop pack and archive the deliveries.

Resetting purchase limits for all players using the `Reset purchase limits` option located at the `Completed` tab.


![Monetization - Delivery reset purchase limits](/img/dashboard/monetization/deliveries/completed_deliveries_reset_purchase_limits.jpg)

## Settings

### Report to Discord
Configure Discord reporting and change the in-game confirmation message, when a delivery completed.

![Monetization - Report delivery info to discord](/img/dashboard/monetization/deliveries/delivery_settings.jpg)


## 💥 Troubleshooting 💥

### In-game command not working

#### 1. Run in-game
Run the command in-game using the right player / character id, if applicable.

:::info Does it work in-game?
__Yes__: Go to the next step!

__No__: The command you are using may not work. Use Google for the right command info or contact the game developers.
:::


#### 2. Run via dashboard
Open the `RCON` popup via the [shortcut menu](/#shortcut-menu) and run the command via there.
Make sure you use a valid ID. You cannot use variables here.

:::info Does it work?
__Yes__: Go to the next step!

__No__: The command you are using may not work via RCON. Make sure this command is supported for RCON use for your game.
:::

![Monetization - Solve rcon issue](/img/dashboard/monetization/deliveries/solve_rcon_issue_command.jpg)


#### 3. Check the ID / Variable
Most games require either a player / steam ID or a character id for a command.

Make sure the right ID / variables are used for the command. Check the variable list and try different ID's.

![Monetization - Rcon variable list](/img/dashboard/monetization/deliveries/rcon_variable_list.jpg)


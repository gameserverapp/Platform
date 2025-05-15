---
title: Deliveries
sidebar_position: 5
---

Deliveries for Shop packs, Supporter Tiers, and Vote rewards are fully automated.

[Go to Deliveries >](https://dash.gameserverapp.com/monetization/deliveries/v2)

## Overview

All active deliveries appear in the Delivery overview, which includes a graph showing your total delivery count per day over the last 7 days.

![Monetization - Deliveries overview](/img/dashboard/monetization/deliveries/deliveries_overview.jpg)

### Problems

If a delivery encounters an issue, it will be shown in the overview. You can retry any failed delivery or archive it as needed.

![Monetization - Failed deliveries](/img/dashboard/monetization/deliveries/failed_deliveries.jpg)

### Manual delivery

To test or manually send Supporter Tiers to players, click `+ Create delivery` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)
![Monetization - Manual delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

## Delivery details

Each delivery includes a detailed log of events, showing exactly what occurred. You can:

- Change the recipient Character
- Retry failed deliveries
- Archive the delivery

If the delivery includes any sub-packages, they’ll be listed as well.

These logs are especially useful for troubleshooting failed deliveries.

:::tip Log details
Click the `<Icon icon="fa-solid fa-chevron-down" size="lg" />` icon in the logs section to view more information.
:::

:::caution Solve command issues
Learn how to [solve in-game command issues >](#in-game-command-not-working)
:::

![Monetization - Delivery detail](/img/dashboard/monetization/deliveries/delivery_details.jpg)

## Scheduled / Pending

Deliveries waiting for the player to come online or clean their inventory are shown here.

## Completed

All successful deliveries are listed under the `Completed` tab. These are used to check whether a [player reached their purchase limit for Shop packs](/dashboard/monetization/shop_packs#purchase-limits).

### Reset purchase limits

To reset purchase limits for individual players, find and archive their relevant deliveries.

To reset limits for all players, use the `Reset purchase limits` option in the `Completed` tab.

![Monetization - Delivery reset purchase limits](/img/dashboard/monetization/deliveries/completed_deliveries_reset_purchase_limits.jpg)

## Settings

### Report to Discord

Configure Discord delivery reports and customize the in-game confirmation message shown after a successful delivery.

![Monetization - Report delivery info to discord](/img/dashboard/monetization/deliveries/delivery_settings.jpg)

## 💥 Troubleshooting 💥

### In-game command not working

#### 1. Run in-game

Try running the command in-game with the correct player or character ID, if required.

:::info Does it work in-game?
**Yes**: Go to the next step!

**No**: The command may be invalid. Search online for the correct command syntax or contact the game developers.
:::

#### 2. Run via dashboard

Use the `RCON` popup from the [shortcut menu](/#shortcut-menu) to test the command via the dashboard.

Ensure that you're using a valid ID, variables are not allowed here.

:::info Does it work?
**Yes**: Proceed to the next step.

**No**: The command may not be compatible with RCON for your game. Double-check whether it's supported.
:::

![Monetization - Solve rcon issue](/img/dashboard/monetization/deliveries/solve_rcon_issue_command.jpg)

#### 3. Check the ID / Variable

Many games require a player/Steam ID or character ID for commands.

Double-check the variables used. Refer to the variable list and test with different IDs.

![Monetization - Rcon variable list](/img/dashboard/monetization/deliveries/rcon_variable_list.jpg)

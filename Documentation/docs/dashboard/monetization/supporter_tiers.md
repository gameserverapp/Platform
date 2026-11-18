---
title: Supporter Tiers
sidebar_position: 2
---

Offer exclusive perks for money through one-time or recurring payments.

[Go to Supporter Tiers >](https://dash.gameserverapp.com/monetization/tiers)

:::tip Browse the marketplace
Looking for inspiration? Or just getting started, Explore GSA’s [Supporter Tier marketplace >](https://dash.gameserverapp.com/marketplace/market/supporter_tier_group)
:::

![Monetization - Supporter Tier example](/img/dashboard/monetization/supporter_tiers/example_supporter_tier_overview.jpg)  
![Monetization - Supporter Tier example detail](/img/dashboard/monetization/supporter_tiers/supporter_tier_example_detail.jpg)

## Create Supporter Tier

### 1. Click `+ Add Tier`

In the **top-right corner** of the [Supporter Tier overview page](https://dash.gameserverapp.com/monetization/tiers), click `+ Add Tier`.

![Monetization - Create Supporter Tier 1](/img/dashboard/monetization/supporter_tiers/create_tier_1.jpg)

Enter a name for the new tier in the popup window, then click `Create`.

![Monetization - Create Supporter Tier 2](/img/dashboard/monetization/supporter_tiers/create_tier_2.jpg)

### 2. Configure Settings

Add a clear description explaining what this Supporter Tier includes. This will be visible on the Community website. [Learn more about specific restrictions >](/dashboard/monetization/supporter_tiers#restrictions--limits)

Set the currency, price, and whether it's a one-time or recurring payment. Click `Save settings` once everything is set.

![Monetization - Create Supporter Tier 3](/img/dashboard/monetization/supporter_tiers/create_tier_3.jpg)

### 3. Add Actions

Switch to the `Delivery content` tab to define actions that are triggered when a player purchases the tier.  
For recurring subscriptions, these actions will run each time the subscription is renewed.

Actions work similarly to Task actions. [Learn more about available actions >](/dashboard/delivery_builder/actions)

![Monetization - Create Supporter Tier 4](/img/dashboard/monetization/supporter_tiers/create_tier_4.jpg)

### 4. Expired Actions

:::caution
This step applies only to recurring subscriptions.
:::

When a recurring subscription ends, the actions in the `Expired actions` tab are triggered. This lets you revoke roles, remove access, or disable perks.

These actions also function like Task actions. [Learn more about available actions >](/dashboard/delivery_builder/actions)

![Monetization - Create Supporter Tier 5](/img/dashboard/monetization/supporter_tiers/create_tier_5.jpg)

## Restrictions & Limits

### Purchase Limits

Control how often a Supporter Tier can be purchased.

Options include:
- Unlimited purchases
- Once per year
- Once every [X] days
- \[X\] purchases every [Y] days
- Disable after one purchase (for all players)

:::info Single Purchase
Use `Disable for everyone after purchase (global single purchase limit)` to make the tier unavailable to everyone after it's bought.
:::

Limits are determined by Sales and Subscriptions. In order to reset the limits, you can delete a sale. It's best to only delete sales when there is a problem.

#### Subscription Limits

For recurring Supporter Tiers, you can limit active subscriptions per player:

- `Limit to 1 active subscription of this tier per player`: Players can only have 1 active subscription with this tier.
- `Limit to 1 active subscription across all tiers per player`: Players can only buy this tier if they don't have any active subscriptions.

Subscriptions must be expired before players can purchase a new one. If there are issues, you can `terminate` a subscription to make it expire immediately and allow the player to buy a new subscription when subscription limits apply.

![Monetization - Settings - Purchase limits](/img/dashboard/monetization/supporter_tiers/tier_purchase_limits.jpg)

### Custom Role

Require players to have a specific [Custom role](/dashboard/admin_tools/custom_roles) to view and purchase the Supporter Tier. Players without the required role cannot see the package.

### Character Level (Min/Max)

Limit who can buy the Supporter Tier based on the player's character level (above or below a specific level). Ideal for beginner or high-level reward tiers.

![Monetization - Settings - Character Level](/img/dashboard/monetization/shop_packs/settings_char_level.jpg)

### Delivery Restrictions

Target specific clusters or game servers, or exclude some, based on where the Supporter Tier should or should not be delivered.

![Monetization - Settings - Delivery Restrictions](/img/dashboard/monetization/shop_packs/settings_delivery_restrictions.jpg)

## Manage Tiers

You can change the order of your Supporter Tiers by dragging them. Use the dropdown menu to send a tier to a player, or to clone or delete tiers.

![Monetization - Manage Supporter Tiers](/img/dashboard/monetization/supporter_tiers/manage_tiers.jpg)

## Supporter Tier groups

Organize your Supporter Tiers using groups, especially useful if you have many tiers.

You can assign existing tiers to a group or switch a tier's group at any time.

### Create Supporter Tier group

Click <Icon icon="fa-solid fa-plus-square" size="lg" /> next to "Supporter Tiers" to create a new group.

![Monetization - Groups - Create Shop Pack group 1](/img/dashboard/monetization/supporter_tiers/create_supporter_tier_group_1.jpg)

### Manage groups

To rename, reorder, or delete a group, click <Icon icon="fa-solid fa-pen-square" size="lg" />.

![Monetization - Groups - Manage Shop Pack group 1](/img/dashboard/monetization/supporter_tiers/manage_supporter_tier_group_1.jpg)  
![Monetization - Groups - Manage Shop Pack group 2](/img/dashboard/monetization/supporter_tiers/manage_supporter_tier_group_2.jpg)

### Submit to Marketplace

You can upload your Supporter Tier groups to the [marketplace](/dashboard/marketplace) and share them with the GSA community.

![Monetization - Groups - Publish Shop Pack group](/img/dashboard/monetization/supporter_tiers/publish_supporter_tier_group.jpg)

## Payment Information

### One-time vs Recurring

- **One-time payments** are single transactions that do not repeat.
- **Recurring payments** are subscriptions that renew automatically every month until cancelled.

### Supported Currencies

To accept payments in multiple currencies, your payment provider (like PayPal) must allow it. Contact them for setup assistance.

Supported currencies include:

- US Dollar ($ / USD)
- Euro (€ / EUR)
- GB Pound (£ / GBP)
- Brazilian Real (R$ / BRL)
- Australian Dollar (A$ / AUD)
- Canadian Dollar (C$ / CAD)
- Polish złoty (zł / PLN)

### Payment Processors

To see which providers are supported and how to connect your account to GSA:  
[See all supported payment providers >](/dashboard/monetization/payment_options)

## Deliveries

When a player purchases a Supporter Tier, the delivery is recorded on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual Delivery

To test or manually deliver a tier to a player, click `+ Create delivery` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual Delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)  
![Monetization - Manual Delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

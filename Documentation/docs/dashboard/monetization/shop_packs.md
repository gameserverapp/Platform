---
title: Shop packs
sidebar_position: 3
---

Sell perks for tokens using Single or Collection packs. Shop packs come with various customizable purchase limits.

[Go to Shop Packs >](https://dash.gameserverapp.com/monetization/shop)

## Shop Pack Types

There are two types of Shop packs:

### Single
A `Single` Shop pack involves a single package, as the name suggests. There are no sub-packages within a `Single` Shop pack.

:::tip
You can add existing `Single` packs to a `Collection`.
:::

![Monetization - Shop Pack Type - Single](/img/dashboard/monetization/shop_packs/shop_pack_type_single.jpg)

### Collection
Group packages from the same category or with different quantities in `Collections`. `Collections` allow you to create sub-packages that can be purchased separately.

![Monetization - Shop Pack Type - Collection](/img/dashboard/monetization/shop_packs/shop_pack_type_collection.jpg)

## Create a Shop Pack

### 1. Click `+ Add Shop Pack`
In the __top-right corner__ of the [Shop Pack Overview page](https://dash.gameserverapp.com/monetization/shop), click `+ Add Shop Pack`.

![Monetization - Create Shop Pack 1](/img/dashboard/monetization/shop_packs/create_shop_pack_1.jpg)

Enter a name in the popup, select the `Type` of Shop pack, and choose the game. Click `Create` to proceed.

![Monetization - Create Shop Pack 2](/img/dashboard/monetization/shop_packs/create_shop_pack_2.jpg)

### 2. Configure Settings
In the description field, summarize what is in the Shop pack. This description will be visible on the Community website.\
If the selected game supports the in-game shop, you can also choose an in-game image. Learn more about all the [Shop pack settings >](/dashboard/monetization/shop_packs#shop-pack-settings).

![Monetization - Create Shop Pack 3](/img/dashboard/monetization/shop_packs/create_shop_pack_3.jpg)

### 3. Add Actions
Adding actions differs slightly between Shop pack types. The actions are similar to Task actions. [Learn more about available actions >](/dashboard/automate_tasks/actions).

#### Single
The actions added here will execute when players purchase the Shop pack.

![Monetization - Create Shop Pack 4](/img/dashboard/monetization/shop_packs/create_shop_pack_4.jpg)

#### Collection
When creating a `Collection`, you must add actions to all sub-packages. Refer to [Sub packages `Collection`](/dashboard/monetization/shop_packs#sub-packages-collection) for more information about managing sub-packages for Collections.

![Monetization - Create Shop Pack 5](/img/dashboard/monetization/shop_packs/create_shop_pack_5.jpg)

## Sub-packages `Collection`

### Add to Collection

#### Add New Sub-package
To add a new sub-package to your existing Collection, click `Add Sub-package` at the bottom of the `Sub-packages` page.

![Monetization - Add Sub-package to Collection](/img/dashboard/monetization/shop_packs/add_sub_package_to_collection.jpg)

#### Convert Single to Collection Sub-package
Add an existing `Single` Shop pack to a Collection, such as when merging similar items into one Collection.

Click the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon on the Shop pack you want to add to a Collection, and then click `Add to Collection`.

![Monetization - Convert Single to Collection Sub-package 1](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_1.jpg)

Select the `Collection` to which the Single item should be added.

![Monetization - Convert Single to Collection Sub-package 2](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_2.jpg)

### Settings, Pricing & Delivery
You can modify settings for each sub-package individually.\
Click the <Icon icon="fa-solid fa-cog" size="lg" /> icon on the right of each sub-package and select `Settings` or `Pricing & Delivery` to edit sub-package settings.

You can also click the title or badges for a shortcut to `Settings` or `Pricing & Delivery`.

![Monetization - Sub-package Settings](/img/dashboard/monetization/shop_packs/sub_package_settings.jpg)

### Manage
To change the order of sub-packages, drag the <Icon icon="fa-solid fa-sort" size="lg" /> icon up or down on the left side of each sub-package. Click the <Icon icon="fa-solid fa-cog" size="lg" /> icon on the right to clone or delete a sub-package.

![Monetization - Sub-package Manage](/img/dashboard/monetization/shop_packs/sub_package_manage.jpg)

## Shop Pack Settings

### Pricing
Set the token price for each Shop pack or sub-package.

:::tip Free Items
Set the token price to `0` to make the item free.
:::

![Monetization - Settings - Token Price](/img/dashboard/monetization/shop_packs/settings_token_price.jpg)

### Labels / Filters
Labels can be used to highlight certain items and also serve as filters within the shop.

![Monetization - Settings - Labels](/img/dashboard/monetization/shop_packs/settings_label.jpg)

#### Label Example:
![Monetization - Settings - Labels Example](/img/dashboard/monetization/shop_packs/settings_label_example.jpg)

### Purchase Limits
You can limit how often players can buy certain Shop packs or sub-packages from a Collection.

Options include:
- Allow unlimited purchases.
- Limit to once a year.
- Limit to one purchase per [X] day(s).
- Limit to [X] sub-packages per [X] day(s).
- Disable the package after it's been purchased by someone (single purchase limit).

:::info Single Purchase
Select `Disable package when bought by someone (single purchase limit)` to disable the Shop pack or sub-package for all players immediately after someone buys it.
:::

[Learn how to reset purchase limits >](/dashboard/monetization/deliveries#reset-purchase-limits)

![Monetization - Settings - Purchase Limits](/img/dashboard/monetization/shop_packs/settings_purchase_limits.jpg)

### Visibility
Control who can see the Shop pack or sub-package. This feature is useful for creating Shop packs that are visible only to players with a specific [Custom Role](/dashboard/admin_tools/custom_roles) (e.g., VIPs).

Hiding packages is useful when you need to create packages for specific purposes, like recovering in-game items or sending items to admins using [manual delivery](#manual-delivery), without letting players buy them.

![Monetization - Settings - Visibility](/img/dashboard/monetization/shop_packs/settings_visibility.jpg)

### Offline Delivery
With `offline delivery`, actions will execute regardless of whether the buyer is online or not.

This is helpful for Shop packs or sub-packages that grant whitelist access. For example, players can't join the server until they are whitelisted.

:::caution
Most in-game commands require the player to be online. Be sure to test Shop packs thoroughly when using `Support offline delivery`.
:::

![Monetization - Settings - Offline Delivery](/img/dashboard/monetization/shop_packs/settings_offline_delivery.jpg)

### Character Level (Min/Max)
Require the buyer's character to be above or below a specific in-game level.

Setting a min/max level is useful for starter packs or advanced packs that should only be available for characters at higher levels.

![Monetization - Settings - Character Level](/img/dashboard/monetization/shop_packs/settings_char_level.jpg)

### Delivery Restrictions
Limit Shop packs or sub-packages to specific clusters or game servers.

You can also prohibit delivery on certain game servers, allowing you to restrict packages to specific clusters while excluding specific servers within those clusters.

![Monetization - Settings - Delivery Restrictions](/img/dashboard/monetization/shop_packs/settings_delivery_restrictions.jpg)

### Images
Set an image for the Shop pack or sub-package.

#### Website Image
![Monetization - Settings - Image Website](/img/dashboard/monetization/shop_packs/settings_image_website.jpg)

__Example:__

![Monetization - Settings - Image Website Example](/img/dashboard/monetization/shop_packs/settings_image_website_example.jpg)

#### In-game Image
:::caution
In-game images are only supported for games that use the GSA Integration mod. In-game images reference image paths within the game files and do not support uploaded images.
:::

![Monetization - Settings - Image In-game](/img/dashboard/monetization/shop_packs/settings_image_ingame.jpg)

__Example:__

![Monetization - Settings - Image In-game Example](/img/dashboard/monetization/shop_packs/settings_image_ingame_example.jpg)

## Manage Shop Packs

To change the order of Shop packs, drag the <Icon icon="fa-solid fa-sort" size="lg" /> icon up or down.

Click the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon on the right of each Shop pack to clone, delete or send it to a player.

Use the `Visit shop` button at the top-right to preview how your changes affect the shop.

![Monetization - Manage Shop Pack](/img/dashboard/monetization/shop_packs/manage_shop_pack.jpg)

## Deliveries

When players buy Shop packs, the deliveries appear on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual Delivery
Test or manually send Shop packs to players by clicking `+ Create Delivery` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual Delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)
![Monetization - Manual Delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

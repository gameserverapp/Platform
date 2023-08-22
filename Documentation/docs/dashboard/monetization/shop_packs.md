---
title: Shop packs
sidebar_position: 3
---
Sell perks for tokens using Single or Collection packs. Shop packs come with various customisable purchase limits.

## Shop pack types
There are 2 kind of Shop pack types:

### Single
The `Single` type Shop pack involves a single package (as the name implies). There are no sub packages for `Single` Shop packs. 

:::tip
You can add existing `Single` packs to a `Collection`.
:::

![Monetization - Shop pack type - Single](/img/dashboard/monetization/shop_packs/shop_pack_type_single.jpg)

### Collection
Group packages from the same category or with different quantities in `Collections`. `Collections` let you create sub packages that can be purchased separately.

![Monetization - Shop pack type - Collection](/img/dashboard/monetization/shop_packs/shop_pack_type_collection.jpg)


## Create Shop pack

### 1. Click `+ Add Shop pack`
Click `+ Add Shop pack` in the __top-right corner__ on the [Shop pack overview page](https://dash.gameserverapp.com/monetization/shop).

![Monetization - Create Shop pack 1](/img/dashboard/monetization/shop_packs/create_shop_pack_1.jpg)

Enter a name in the popup, select what `Type` of Shop pack and which game. Click `Create` to continue.

![Monetization - Create Shop pack 2](/img/dashboard/monetization/shop_packs/create_shop_pack_2.jpg)

### 2. Configure settings
In the description you can summarize what is in the Shop pack. The description is shown on the community website.

If the selected game supports the in-game shop, you can also select an in-game image. Learn more about all [Shop pack settings >](/dashboard/monetization/shop_packs#shop-pack-settings)

![Monetization - Create Shop pack 3](/img/dashboard/monetization/shop_packs/create_shop_pack_3.jpg)

### 3. Add actions
Adding actions is a little different for both Shop pack types.
The actions are similar to Task actions. [Learn more about the available actions >](/dashboard/automate_tasks/available_actions)

#### Single
Add actions to the `Delivery content` tab. These actions will execute when players buy the Shop pack.


![Monetization - Create Shop pack 4](/img/dashboard/monetization/shop_packs/create_shop_pack_4.jpg)

#### Collection
When creating a `Collection` you should add actions to all sub packages. Check out [Sub packages `Collection`](/dashboard/monetization/shop_packs#sub-packages-collection) for more information about managing sub packages for Collections.

![Monetization - Create Shop pack 5](/img/dashboard/monetization/shop_packs/create_shop_pack_5.jpg)

## Sub packages `Collection`

### Add to Collection

#### Add new sub package
Click the `Add sub package` at the bottom of the `Sub packages` page to add a new sub package to your existing Collection.

![Monetization - Add sub package to Collection](/img/dashboard/monetization/shop_packs/add_sub_package_to_collection.jpg)

#### Convert Single to Collection sub package
Add an existing `Single` Shop pack to a collection, for example when merging similar items into one Collection.

Click the <icon icon="fa-solid fa-caret-down" size="lg" /> icon on the Shop pack you want to add to a Collection and click ` Add to Collection`.

![Monetization - Convert Single to Collect sub package 1](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_1.jpg)

Select which `Collection` the Single item should be added too.

![Monetization - Convert Single to Collect sub package 2](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_2.jpg)


### Settings, Pricing & Delivery
Apart from the Collection settings tab is it possible to change settings per sub package.

Click the <icon icon="fa-solid fa-cog" size="lg" /> icon on the right of each sub package and click `Settings` or `Pricing & delivery` to edit the sub package settings.

Click the title / badges for a shortcut to `Settings` or `Pricing & delivery`.

![Monetization - Sub package settings](/img/dashboard/monetization/shop_packs/sub_package_settings.jpg)

### Manage
Drag (up/down) the <icon icon="fa-solid fa-sort" size="lg" /> on the left of each sub package to change the sub package order.
Click the <icon icon="fa-solid fa-cog" size="lg" /> icon on the right for cloning or deleting a sub package.


![Monetization - Sub package manage](/img/dashboard/monetization/shop_packs/sub_package_manage.jpg)

## Shop pack settings

### Pricing
Set the token price per Shop pack or sub package.

:::tip free items
Set the token price to `0` to make the item free.
:::

![Monetization - Settings - Token price](/img/dashboard/monetization/shop_packs/settings_token_price.jpg)

### Labels / filters
Labels can be used to highlight certain items, but they also function as filters for the shop.

![Monetization - Settings - Labels](/img/dashboard/monetization/shop_packs/settings_label.jpg)

#### Label example:
![Monetization - Settings - Labels example](/img/dashboard/monetization/shop_packs/settings_label_example.jpg)


### Purchase limits
Limit how frequently players can buy certain Shop packs or sub packages from a Collection.

Available options:
- Allow unlimited purchases
- Limit to once a year
- Limit to one purchase per [X] day(s)
- Limit to [X] sub packages per [X] day(s)
- Disable package when bought by someone (single purchase limit)

:::info single purchase
Select `Disable package when bought by someone (single purchase limit)` to disable the Shop pack / sub package for all players immediately after someone buys the Shop pack. 
:::

![Monetization - Settings - Purchase limits](/img/dashboard/monetization/shop_packs/settings_purchase_limits.jpg)

### Visibility
Determine who can see the Shop pack / sub package. Can be used to create Shop packs that are only visible to players with a specific [Custom Role](/dashboard/admin_tools/custom_roles) (VIPs for example).

Hiding packages can be useful in cases where you want to create a package to recover in-game items or to send items to admins using [manual delivery](#manual-delivery), but you don't want players being able to purchase the package.

![Monetization - Settings - Visibility](/img/dashboard/monetization/shop_packs/settings_visibility.jpg)

### Offline delivery
With `offline delivery` the actions will execute regardless of the buyer's in-game status (no character online for the buyer).

This can be useful for Shop packs / sub packages that grant whitelist access, for example. In those cases the player can't join the server until they are whitelisted.

:::caution
Most in-game commands do require the player to be online. Make sure to test Shop packs thoroughly when using `Support offline delivery`.
:::

![Monetization - Settings - Offline delivery](/img/dashboard/monetization/shop_packs/settings_offline_delivery.jpg)

### Character level (min/max)
Require the buyer's character to be above or below a certain in-game level.

Setting a min/max level can be useful for starter packs or advanced packs that should only be available for high level characters.

![Monetization - Settings - Character level](/img/dashboard/monetization/shop_packs/settings_char_level.jpg)

### Delivery restrictions
Limit Shop packs / sub packages to specific clusters or game servers.

In addition to limiting is it also possible to prohibit delivery on specific game servers. This allows you to restrict a package to a specific cluster but rule out certain servers in that cluster.

![Monetization - Settings - Delivery restrictions](/img/dashboard/monetization/shop_packs/settings_delivery_restrictions.jpg)

### Images
Set up an image for the Shop pack / sub package.

#### Website image
![Monetization - Settings - Image website](/img/dashboard/monetization/shop_packs/settings_image_website.jpg)

__Example:__

![Monetization - Settings - Image website example](/img/dashboard/monetization/shop_packs/settings_image_website_example.jpg)

#### In-game image
:::caution
In-game images are only supported for games that have the GSA Integration mod available. In-game images reference to image paths in the game files and do not support uploaded images.
:::

![Monetization - Settings - Image in-game](/img/dashboard/monetization/shop_packs/settings_image_ingame.jpg)

__Example:__

![Monetization - Settings - Image ingame example](/img/dashboard/monetization/shop_packs/settings_image_ingame_example.jpg)


## Manage Shop packs
Change the Shop pack order by dragging <icon icon="fa-solid fa-sort" size="lg" /> up / down.

Click the <icon icon="fa-solid fa-caret-down" size="lg" /> icon on the right with each Shop pack to clone or delete.

Use the `Visit shop` button at the top-right to see how changes affect the shop.

![Monetization - Manage Shop pack](/img/dashboard/monetization/shop_packs/manage_shop_pack.jpg)

## Deliveries
When players buy Shop packs the deliveries end up on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual delivery
Test or manually send Shop packs to players by clicking `+ Create delivery ` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual delivery 1](/img/dashboard/monetization/deliveries_manual_delivery_1.jpg)
![Monetization - Manual delivery 2](/img/dashboard/monetization/deliveries_manual_delivery_2.jpg)
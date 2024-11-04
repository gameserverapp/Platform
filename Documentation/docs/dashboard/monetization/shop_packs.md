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

## CSV tools
With the CSV tools, you can export Shop packs, modify them in programs like Excel, or edit them with an AI tool, and then re-import them.

The CSV export provides access to almost every Shop pack setting, which you can also manage on the dashboard

:::info Paid add-on only
The CSV tools are only available on dashboards with [any paid add-on](/dashboard/add-ons).
:::

![Monetization - CSV tools](/img/dashboard/monetization/shop_packs/csv_tool_general_1.jpg)

### Export
The export tool allows you to export one or multiple Shop packs (Single & Collection types) to a CSV file. You can then edit the CSV file using Excel or an AI tool.

On the [Shop pack overview page](https://dash.gameserverapp.com/monetization/shop) on your dashboard, you can find the CSV export button in the top-right corner of the screen ([see screenshot above](#csv-tools)).

![Monetization - CSV tools - Export](/img/dashboard/monetization/shop_packs/csv_tool_export_1.jpg)

### Import
When you’re finished editing the CSV export, you can upload the CSV file again. While GSA is processing your CSV file, no changes can be made to Shop packs. This prevents any issues from overlapping.

On the [Shop pack overview page](https://dash.gameserverapp.com/monetization/shop) on your dashboard, you can find the CSV import button in the top-right corner of the screen ([see screenshot above](#csv-tools)).

[//]: # (todo show import results in team logs)

![Monetization - CSV tools - Import](/img/dashboard/monetization/shop_packs/csv_tool_import_1.jpg)

### CSV file details
Below is an example of a CSV export. Further down, you can read about the purpose of each column and how you can use it.

![Monetization - CSV tools - Details](/img/dashboard/monetization/shop_packs/csv_tool_file_details_1.jpg)

#### ID
**Update existing items**\
When a number is entered in the `ID` field, it means an existing Shop pack should be modified. The number/ID refers to the existing Shop pack ID. When generating an export, the correct number is automatically filled in here.


**Creating new items**\
When no number is entered in the `ID` field, a new Shop pack will be created upon import. You don’t need to provide a number for new Shop packs.

![Monetization - CSV tools - Details - ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_ids_1.jpg)

#### Parent ID
The `Parent ID` is used to indicate which Shop packs are part of a Collection. The `Parent ID` refers to the `ID` of the main item.

If you want to add new sub-items to an existing Collection using the CSV tool, you can enter the existing Collection’s `ID` in the `Parent ID` field for the new sub-items (see the top example in the screenshot below).

When creating a new Collection, it’s not possible to specify an existing Collection `ID` in the `Parent ID` field. In this case, you can use so-called "fake IDs". You can choose a number yourself, as long as it starts with `fake-`, and use it to link sub-items to the new Collection (see the bottom example in the screenshot below).

:::info Fake ID's
The "fake IDs" are only used during the import process. After import, these "fake IDs" are no longer stored. In a subsequent import, you cannot refer to a "fake ID" used in an earlier import. In that case, you can use the `ID` since the item has already been created.
:::

![Monetization - CSV tools - Details - Parent ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_parent_id_1.jpg)


#### APP ID
The `APP ID` column indicates which game the specific Shop pack is for. You can enter a STEAM ID here, but for non-STEAM games, alternative IDs are available. You can view these when exporting a Shop pack for the respective game.

![Monetization - CSV tools - Details - App ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_app_id_1.jpg)

#### Name
Enter the name of the Shop pack in the `Name` column. A Shop pack name must be at least 3 characters long.

![Monetization - CSV tools - Details - Name field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_name_1.jpg)

#### Description
Depending on whether the specific Shop pack is a `Collection` or not, there are different requirements for the description.

**Single**\
You can provide a description that uses [Markdown styling](https://simplemde.com/markdown-guide).

**Collection**\
For the main item of the Collection (also known as the parent), only plain text is allowed in the description. Additionally, the description can be a maximum of `245` characters long.


![Monetization - CSV tools - Details - Description field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_description_1.jpg)


#### Label
The `Label` field is optional and can be used to assign a label to a Shop pack. Labels are used for filtering in the shop. You can specify only one label per Shop pack. The maximum length of the label is 25 characters.

![Monetization - CSV tools - Details - Label field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_label_1.jpg)


#### Token price
In this column, you set the price of the Shop pack. Should the Shop pack be free? Then enter 0.  
You can only enter numbers above 0.

![Monetization - CSV tools - Details - Token price field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_token_price_1.jpg)

#### Support offline delivery
If the specific Shop pack should also be delivered when the player is offline in-game, you can set that in this column.

0 = does not support offline delivery  
1 = deliver even when the player is offline

![Monetization - CSV tools - Details - Support offline delivery field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_offline_delivery_1.jpg)

#### Published
Shop packs are only visible to players in the shop if the specific Shop pack is published.

0 = not published / hidden  
1 = published / visible

![Monetization - CSV tools - Details - Published field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_published_1.jpg)

#### Order ID
The shop uses the `Order ID` to determine the order in which Shop packs are displayed. An `Order ID` of 0 will place a Shop pack at the beginning, and an `Order ID` of 9999 will place a Shop pack at the end.

The `Order ID` also determines the order of sub-items in a Collection.

![Monetization - CSV tools - Details - Order ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_order_id_1.jpg)

#### Delivery Content
The data in the `Delivery content` column is used to define what the Shop pack should actually do when it is delivered to a player.

The data in this field is sensitive to errors, so it's important to work carefully in this column. You can use a [JSON beautifier](https://jsonformatter.org/) to format the data into a layout that is easier to read. Always ensure you enter "minified" JSON in this field.

The easiest way to work with this field is to first set up the various actions you want to use via the dashboard. Then, you can run an export and modify the data as needed.


![Monetization - CSV tools - Details - Delivery content field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_delivery_content_1.jpg)

An example of how the data (JSON) looks when formatted / beautified ([JSON beautifier](https://jsonformatter.org/)). After making changes to the JSON, you should minify it again before posting it to GSA.

![Monetization - CSV tools - Details - Delivery content field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_delivery_content_2.jpg)

#### Restrict to Custom Role ID
If a Shop pack should only be available/visible to players with a specific `Custom role`, you can specify that in this column.

![Monetization - CSV tools - Details - Restrict Custom Role ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_custom_role_1.jpg)

You can find the ID for the respective Custom role on the Custom role page.


![Monetization - CSV tools - Details - Restrict Custom Role ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_custom_role_2.jpg)

#### Restrict to Cluster ID
If you want a Shop pack to be orderable only by players with a character in a specific cluster, you can set that in this column. When the field is left empty, the Shop pack can be ordered from any cluster.

This field accepts only one ID.

![Monetization - CSV tools - Details - Restrict Cluster ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_cluster_id_1.jpg)

You need to enter the `Internal Cluster ID` in the CSV. You can find the `Internal Cluster ID` on the Cluster page.

![Monetization - CSV tools - Details - Restrict Cluster ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_cluster_id_2.jpg)

#### Restrict to Game server ID
If you want a Shop pack to be orderable only by players with a character in a specific game server, you can set that in this column. When the field is left empty, the Shop pack can be ordered from any game server.

This field accepts only one ID.

![Monetization - CSV tools - Details - Restrict Game server ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_gameserver_id_1.jpg)

You need to enter the `Game server ID` in the CSV. You can find the `Game server ID` on the Game server settings page.
Make sure to enter only the numeric ID.

![Monetization - CSV tools - Details - Restrict Game server ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_gameserver_id_2.jpg)

#### Block for Game server ID's
Using this column, you can prevent a Shop pack from being ordered from specific game servers. Enter the IDs of the game servers from which you want to restrict access to the Shop pack.

When the column is left empty, it means there are no restrictions, and the Shop pack can be ordered from any server (unless you are using one of the above "restrict" options).

If you want to specify one or more game servers, you need to use JSON format. See the examples below:

With three IDs: `["123", "456", "789"]`  
With one ID: `["123"]`

See [Restrict to Game server ID](#restrict-to-game-server-id) for info how to find the Game server ID.

![Monetization - CSV tools - Details - Block Game server IDs field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_block_gameserver_ids_1.jpg)

#### Character level restrictions
Use this column to determine whether a player is allowed to order a Shop pack. You can set whether the in-game level should be below or above a certain number. If the field is left empty, there are no restrictions.

**Above**\
For restrictions where the player's level must be __above__ a certain number, use the following format:\
Above level 1: `a_1`  
Above level 25: `a_25`  
Above level 123: `a_123`

**Below**\
For restrictions where the player's level must be __below__ a certain number, use the following format:\
Below level 1: `b_1`  
Below level 25: `b_25`  
Below level 123: `b_123`

![Monetization - CSV tools - Details - Character level restrictions field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_character_level_restrictions_1.jpg)

#### Single purchase
If you want a Shop pack to be ordered only once, by anyone, you can use `Single purchase`. If you enter a `1` here, the Shop pack will be removed from the shop as soon as someone has purchased it. Only 1 player will be able to buy it when this is active.

![Monetization - CSV tools - Details - Single purchase field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_single_purchase_1.jpg)

#### Purchase limit (count & days)
With the purchase limit columns, you can determine how many times players can order certain packs.

**Purchase limit count**  
Determines the quantity of times a pack can be purchased.

**Purchase limit period (days)**  
Determines the number of days for which the purchase limit applies.

In the example below, a purchase limit of 5 packs for a period of 30 days means that players can order the pack a maximum of 5 times within a 30-day period.


![Monetization - CSV tools - Details - Purchase limit field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_purchase_limit_1.jpg)
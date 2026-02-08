---
title: Shop packs
sidebar_position: 3
---

Sell perks for tokens using Single or Collection packs. Shop packs offer flexible purchase limits and powerful customization.

[Go to Shop Packs >](https://dash.gameserverapp.com/monetization/shop)

:::tip Browse the marketplace
Find inspiration or get started with GSA's Shop packs using the [Shop pack marketplace >](https://dash.gameserverapp.com/marketplace/market/shop_pack_group)
:::

## Shop Pack Types

There are two types of Shop packs you can create:

### Single

A `Single` Shop pack is a standalone package without sub-packages.

:::tip
You can include existing `Single` packs inside a `Collection`.
:::

![Monetization - Shop Pack Type - Single](/img/dashboard/monetization/shop_packs/shop_pack_type_single.jpg)

### Collection

A `Collection` lets you group multiple sub-packages under one pack. This is ideal for offering different variations, quantities, or categories within a single display.

![Monetization - Shop Pack Type - Collection](/img/dashboard/monetization/shop_packs/shop_pack_type_collection.jpg)

## Create a Shop Pack

### 1. Click `+ Add Shop Pack`

Go to the [Shop Pack Overview page](https://dash.gameserverapp.com/monetization/shop) in the **top-right** corner and click `+ Add Shop Pack`.

![Monetization - Create Shop Pack 1](/img/dashboard/monetization/shop_packs/create_shop_pack_1.jpg)

In the popup, enter a name, select the `Type` of Shop pack, choose the game, and click `Create`.

![Monetization - Create Shop Pack 2](/img/dashboard/monetization/shop_packs/create_shop_pack_2.jpg)

### 2. Configure Settings

Write a short description that explains what your Shop pack includes. This will appear on the Community website.\
If the game supports an in-game shop, you can upload an in-game image as well. Learn more about all [Shop pack settings >](/dashboard/monetization/shop_packs#shop-pack-settings).

![Monetization - Create Shop Pack 3](/img/dashboard/monetization/shop_packs/create_shop_pack_3.jpg)

### 3. Add Actions

Actions work like Task actions, but differ slightly between Shop pack types and are triggered when a Shop pack is purchased. [Learn more about available actions >](/dashboard/delivery_builder/actions)

#### Single

For `Single` packs, the actions run when a player makes a purchase.

![Monetization - Create Shop Pack 4](/img/dashboard/monetization/shop_packs/create_shop_pack_4.jpg)

#### Collection

In `Collections`, each sub-package must have its own actions. See [Sub packages `Collection`](/dashboard/monetization/shop_packs#sub-packages-collection) for full details.

![Monetization - Create Shop Pack 5](/img/dashboard/monetization/shop_packs/create_shop_pack_5.jpg)

## Sub-packages `Collection`

### Add to Collection

#### Add New Sub-package

To add a sub-package to your Collection, go to the `Sub-packages` page and click `Add Sub-package`.

![Monetization - Add Sub-package to Collection](/img/dashboard/monetization/shop_packs/add_sub_package_to_collection.jpg)

#### Convert Single to Collection Sub-package

You can also add an existing `Single` pack to a Collection.

Click the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon next to the Shop pack, then select `Add to Collection`.

![Monetization - Convert Single to Collection Sub-package 1](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_1.jpg)

Choose the Collection where the Single item should be added.

![Monetization - Convert Single to Collection Sub-package 2](/img/dashboard/monetization/shop_packs/convert_single_to_collection_sub_package_2.jpg)

### Settings, Pricing & Delivery

Click the <Icon icon="fa-solid fa-cog" size="lg" /> icon next to each sub-package to access its settings or pricing.\
You can also click the title or badges for quick access.

![Monetization - Sub-package Settings](/img/dashboard/monetization/shop_packs/sub_package_settings.jpg)

### Manage

To reorder sub-packages, drag the <Icon icon="fa-solid fa-sort" size="lg" /> icon. Use the <Icon icon="fa-solid fa-cog" size="lg" /> menu to clone or delete.

![Monetization - Sub-package Manage](/img/dashboard/monetization/shop_packs/sub_package_manage.jpg)

## Shop Pack Settings

### Pricing

Set the token price for each Shop pack or sub-package.

:::tip Free Items
Set the price to `0` to make the item free.
:::

![Monetization - Settings - Token Price](/img/dashboard/monetization/shop_packs/settings_token_price.jpg)

### Labels / Filters

Labels help highlight items and act as shop filters.

![Monetization - Settings - Labels](/img/dashboard/monetization/shop_packs/settings_label.jpg)

#### Label Example:

![Monetization - Settings - Labels Example](/img/dashboard/monetization/shop_packs/settings_label_example.jpg)

### Purchase Limits

Control how often a Shop pack or sub-package can be purchased.

Options include:

- Unlimited purchases
- Once per year
- Once every [X] days
- Up to [X] sub-packages every [X] days
- Disable after one purchase (for all players)

:::info Single Purchase
Use `Disable package when bought by someone (single purchase limit)` to make the pack unavailable to everyone after it's bought.
:::

[How to reset purchase limits >](/dashboard/monetization/deliveries#reset-purchase-limits)

![Monetization - Settings - Purchase Limits](/img/dashboard/monetization/shop_packs/settings_purchase_limits.jpg)

### Visibility

Show or hide Shop packs for specific players. This is ideal for VIP-only items or admin/test items sent via [manual delivery](#manual-delivery).

![Monetization - Settings - Visibility](/img/dashboard/monetization/shop_packs/settings_visibility.jpg)

### Offline Delivery

Enable `offline delivery` to run actions even if the buyer is not online.

This is useful for perks like whitelist access, where players must be whitelisted before they can join.

:::caution
Most in-game commands require players to be online. Be sure to test thoroughly if enabling `Support offline delivery`.
:::

![Monetization - Settings - Offline Delivery](/img/dashboard/monetization/shop_packs/settings_offline_delivery.jpg)

### Character Level (Min/Max)

Limit who can buy the pack based on the buyer's character level. Ideal for beginner or high-level reward packs.

![Monetization - Settings - Character Level](/img/dashboard/monetization/shop_packs/settings_char_level.jpg)

### Delivery Restrictions

Target specific clusters or servers, or exclude some, based on where the Shop pack should be delivered.

![Monetization - Settings - Delivery Restrictions](/img/dashboard/monetization/shop_packs/settings_delivery_restrictions.jpg)

### Images

#### Website Image

Set a thumbnail for how your pack appears in the Community shop.

![Monetization - Settings - Image Website](/img/dashboard/monetization/shop_packs/settings_image_website.jpg)

**Example:**

![Monetization - Settings - Image Website Example](/img/dashboard/monetization/shop_packs/settings_image_website_example.jpg)

#### In-game Image

:::caution
In-game images only work for games using the GSA Integration mod. You must reference in-game file paths, not uploads.
:::

![Monetization - Settings - Image In-game](/img/dashboard/monetization/shop_packs/settings_image_ingame.jpg)

**Example:**

![Monetization - Settings - Image In-game Example](/img/dashboard/monetization/shop_packs/settings_image_ingame_example.jpg)

## Manage Shop Packs

To reorder your Shop packs, drag the <Icon icon="fa-solid fa-sort" size="lg" /> icon.

Use the <Icon icon="fa-solid fa-caret-down" size="lg" /> menu to clone, delete, or send a Shop pack to a player.

Click `Visit shop` in the top-right corner to preview how your Shop packs look in the store.

![Monetization - Manage Shop Pack](/img/dashboard/monetization/shop_packs/manage_shop_pack.jpg)

## Shop pack groups

Group your Shop packs to keep things organized, especially if you have many items.

You can assign Shop packs to groups or move them between groups.

### Create Shop pack group

Click <Icon icon="fa-solid fa-plus-square" size="lg" /> next to "Shop packs" to create a new group.

![Monetization - Groups - Create Shop Pack group 1](/img/dashboard/monetization/shop_packs/create_shop_pack_group_1.jpg)

### Manage groups

Click <Icon icon="fa-solid fa-pen-square" size="lg" /> to rename, reorder, or delete your groups.

![Monetization - Groups - Manage Shop Pack group 1](/img/dashboard/monetization/shop_packs/manage_shop_pack_group_1.jpg)

![Monetization - Groups - Manage Shop Pack group 2](/img/dashboard/monetization/shop_packs/manage_shop_pack_group_2.jpg)

### Submit to Marketplace

You can share your Shop pack groups with the GSA community by uploading them to the [marketplace](/dashboard/marketplace).

![Monetization - Groups - Publish Shop Pack group](/img/dashboard/monetization/shop_packs/publish_shop_pack_group.jpg)

## Deliveries

When players purchase Shop packs, the deliveries will appear on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual Delivery

To test or manually send Shop packs to players, click `+ Create Delivery` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual Delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)  
![Monetization - Manual Delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

## CSV tools

CSV tools let you export Shop packs, edit them using Excel or an AI tool, and re-import them to your dashboard.

The export includes nearly every Shop pack setting available on the dashboard.

:::info Paid add-on only
CSV tools are only available on dashboards with [any paid add-on](/dashboard/add-ons).
:::

![Monetization - CSV tools](/img/dashboard/monetization/shop_packs/csv_tool_general_1.jpg)

### Export

Use the export tool to download one or more Shop packs (Single and Collection) to a CSV file. You can edit this file in Excel or with an AI tool.

To export, go to the [Shop pack overview page](https://dash.gameserverapp.com/monetization/shop) and click the CSV export button in the top-right corner ([see screenshot above](#csv-tools)).

![Monetization - CSV tools - Export](/img/dashboard/monetization/shop_packs/csv_tool_export_1.jpg)

### Import

After editing your CSV file, you can upload it again via the import tool. During the import process, Shop packs will be temporarily locked to prevent conflicting changes.

Find the CSV import button on the [Shop pack overview page](https://dash.gameserverapp.com/monetization/shop), in the top-right corner ([see screenshot above](#csv-tools)).

[//]: # "todo show import results in team logs"

![Monetization - CSV tools - Import](/img/dashboard/monetization/shop_packs/csv_tool_import_1.jpg)

### CSV file details

Here’s an overview of a typical CSV export. You’ll find explanations for each column below.

![Monetization - CSV tools - Details](/img/dashboard/monetization/shop_packs/csv_tool_file_details_1.jpg)

#### ID

**Update existing items**  
Enter a number in the `ID` field to update an existing Shop pack. This number refers to the pack's current ID and is automatically included during export.

**Create new items**  
Leave the `ID` field empty to create a new Shop pack. You don’t need to manually assign an ID.

![Monetization - CSV tools - Details - ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_ids_1.jpg)

#### Parent ID

Use the `Parent ID` column to assign sub-items to a Collection. The value should match the `ID` of the main item.

To add new sub-items to an existing Collection, enter the Collection’s `ID` in this field for the sub-items (see the top example in the screenshot below).

If you're creating a new Collection and its sub-items, use a "fake ID" (e.g., `fake-123`) to link them. These are temporary and only used during import (see the bottom example in the screenshot below).

:::info Fake ID's
"Fake IDs" are discarded after import. In future imports, use the actual `ID` created after the original import.
:::

![Monetization - CSV tools - Details - Parent ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_parent_id_1.jpg)

#### APP ID

The `APP ID` identifies which game the Shop pack is for. Use a STEAM ID or another supported game ID. When exporting a pack, the correct ID for that game will appear automatically.

![Monetization - CSV tools - Details - App ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_app_id_1.jpg)

#### Name

Enter the Shop pack name in the `Name` column. The name must be at least 3 characters long.

![Monetization - CSV tools - Details - Name field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_name_1.jpg)

#### Description

Requirements depend on the type of Shop pack:

**Single**  
Supports [Markdown formatting](https://simplemde.com/markdown-guide).

**Collection**  
For the parent item, only plain text is allowed and limited to 245 characters.

![Monetization - CSV tools - Details - Description field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_description_1.jpg)

#### Label

The `Label` field is an optional field for assigning a label used for filtering in the Shop. Only one label is allowed, with a max length of 25 characters.

![Monetization - CSV tools - Details - Label field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_label_1.jpg)

#### Token price

Set the token price for the Shop pack. Use `0` for free packs. Only values above or equal to 0 are accepted.

![Monetization - CSV tools - Details - Token price field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_token_price_1.jpg)

#### Support offline delivery

Controls whether the pack should be delivered when the player is offline.

`0` = No  
`1` = Yes

![Monetization - CSV tools - Details - Support offline delivery field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_offline_delivery_1.jpg)

#### Published

Controls the visibility of the Shop pack.

`0` = Hidden  
`1` = Visible

![Monetization - CSV tools - Details - Published field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_published_1.jpg)

#### Order ID

Sets the order in which Shop packs appear. Lower numbers show first.

E.g., `0` appears first, `9999` appears last. Also applies to the order of sub-items in a Collection.

![Monetization - CSV tools - Details - Order ID field](/img/dashboard/monetization/shop_packs/csv_tool_file_details_order_id_1.jpg)

#### Delivery Content

Defines what the Shop pack does upon delivery. This field uses JSON format and must be accurate to prevent errors.

Use a [JSON beautifier](https://jsonformatter.org/) to format the content for easier editing. Before import, make sure to use minified JSON.

A good approach is to configure the actions via the dashboard, export the file, and modify the existing JSON from there.

![Monetization - CSV tools - Details - Delivery content field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_delivery_content_1.jpg)  
![Monetization - CSV tools - Details - Delivery content field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_delivery_content_2.jpg)

#### Restrict to Custom Role ID

Use this column to restrict the Shop pack to players with a specific `Custom Role`.

You can find the role ID on the [Custom Role page](/dashboard/admin_tools/custom_roles).

![Monetization - CSV tools - Details - Restrict Custom Role ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_custom_role_1.jpg)  
![Monetization - CSV tools - Details - Restrict Custom Role ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_custom_role_2.jpg)

#### Restrict to Cluster ID

Limits the Shop pack to players with a character in a specific cluster. Leave blank for no restriction.

Enter only one `Internal Cluster ID`, which can be found on the Cluster page.

![Monetization - CSV tools - Details - Restrict Cluster ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_cluster_id_1.jpg)  
![Monetization - CSV tools - Details - Restrict Cluster ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_cluster_id_2.jpg)

#### Restrict to Game server ID

Limits the Shop pack to players on a specific game server. Leave blank for no restriction, this field is limited to one ID.

Enter only one numeric `Game server ID`, which you can find on the Game server settings page.

![Monetization - CSV tools - Details - Restrict Game server ID field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_gameserver_id_1.jpg)  
![Monetization - CSV tools - Details - Restrict Game server ID field 2](/img/dashboard/monetization/shop_packs/csv_tool_file_details_restrict_gameserver_id_2.jpg)

#### Block for Game server ID's

Prevents a Shop pack from being ordered from specific game servers. \
When the column is left empty, it means there are no restrictions, and the Shop pack can be ordered from any server (unless you are using one of the above "restrict" options).

If you want to specify one or more game servers, you need to use JSON format. See the examples below:

Use JSON format:  
With three IDs: `["123", "456", "789"]`  
With one ID: `["123"]`

Refer to the [Restrict to Game server ID](#restrict-to-game-server-id) section for how to find Game server IDs.

![Monetization - CSV tools - Details - Block Game server IDs field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_block_gameserver_ids_1.jpg)

#### Character level restrictions

Use this column to restrict purchases based on the player's in-game level.

**Above**  
Format: `a_<level>`  
Examples: `a_1`, `a_25`, `a_123`

**Below**  
Format: `b_<level>`  
Examples: `b_1`, `b_25`, `b_123`

Leave the field blank to allow all levels.

![Monetization - CSV tools - Details - Character level restrictions field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_character_level_restrictions_1.jpg)

#### Single purchase

Enter `1` to make the Shop pack purchasable only once by a single player. After that, it will be removed from the shop.

![Monetization - CSV tools - Details - Single purchase field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_single_purchase_1.jpg)

#### Purchase limit (count & days)

Set limits on how often a Shop pack can be purchased.

**Purchase limit count**  
The total number of times a player can buy the pack.

**Purchase limit period (days)**  
The time window in days for that purchase count.

For example: 5 purchases within 30 days = max 5 times in a 30-day window.

![Monetization - CSV tools - Details - Purchase limit field 1](/img/dashboard/monetization/shop_packs/csv_tool_file_details_purchase_limit_1.jpg)

---
title: Ark Server API Developer guidelines
---

These guidelines are intended to make the automatic plugin installation as easy as possible.  Following the guidelines from this guide will ensure your plugins install flawlessly.

:::caution
This guide is intended for Plugin developers.
:::


![Developer - Api guidelines example](/img/developers/other/ark_server_api_example.jpg)


### Upload to GameServersHub.com
Make sure your plugin is registered at gameservershub.com. New plugins or updates may take 10 minutes to show up.

### Upload files in a ZIP
Upload ZIP file only, as download. Other extensions are ignored.

### Use numeric versioning
Use a numeric version, like: `1.4` or `1.4.2` or `10` when you register the update.

### Corresponding folder name
Make the main folder in the zip correspond with the plugin name, using Camel Case.
Convert to Camel Case helper: [https://en.toolpage.org/tool/camelcase](https://en.toolpage.org/tool/camelcase).

Here are a few examples: 
1. `PvP+` -> `PvpPlus`
2. `[Unstable] ArkShop Rework` -> `ArkshopRework` (**everything between [] is removed**)
3. `Shop Rewards & Stats` -> `ShopRewards&Stats`
4. `GAMINGOGS - BOUNTY HUNTER` -> `GamingogsBountyHunter`

### Config.json
Store your configurations in `config.json`  

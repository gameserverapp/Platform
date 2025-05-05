---
title: Integrate
sidebar_position: 2
---

:::caution Connect server first
If you're not using DediConnect, make sure to [connect your game server with RconConnect](/getting_started/rconconnect/getting_started) before proceeding.
:::

:::info No Integrate page?
If you don't see an `Integrate` tab, no further steps are needed. Your game server is fully integrated and ready to use!
:::

## ARK

To begin, locate the `Integrate` tab under your [game server settings](/dashboard/game_servers/getting_started#settings). This applies only to servers connected through RconConnect.

### GSA Integration Mod

Add powerful features to your ARK server like an in-game shop, cluster chat, advanced whitelisting, player muting, notifications, token gems and issue reporting.

:::warning Required setting
These settings are essential. Without them, many features won't function properly. Be sure to set them up for each individual game server.
:::

Install the GSA Integration Mod:

- [ARK: Survival Ascended version](https://www.curseforge.com/members/gameserverapp/projects)
- [ARK: Survival Evolved version](https://steamcommunity.com/sharedfiles/filedetails/?id=2107956699)

After installing the mod, go to the `Integrate` tab and follow the steps in the **"GSA Integration mod"** section.

![Integrate ARK: Survival Evolved game server - GSA integration mod](/img/getting_started/rconconnect/integrate/ark_atlas_integration_mod.jpg)

### Server Game Log

Enable the `-servergamelog` launch parameter for your ARK server.

:::warning Required setting
These settings are essential. Without them, many features won't function properly. Be sure to set them up for each individual game server.
:::

You must add `-servergamelog` to your server's startup parameters. For some hosting providers, this might be a toggle named `Server game log` in their dashboard.

### BanlistURL

Automatically sync the Admin Tools banlist across all your ARK servers.

:::warning Required setting
These settings are essential. Without them, many features won't function properly. Be sure to set them up for each individual game server.
:::

Go to the `Integrate` tab and follow the instructions in the **"Banlist URL"** section.

![Integrate ARK: Survival Evolved game server - BanlistURL](/img/getting_started/rconconnect/integrate/ark_atlas_banlisturl.jpg)

### Dynamic Configs / Live Tuning

Host "DynamicConfig" and "Live Tuning" settings for ARK servers using [Config templates](/dashboard/game_servers/config_templates#game-config).

:::tip Recommended setting
These are optional settings. If you're able to configure them, we highly recommend it. If your hosting provider restricts access, it’s not a major issue.
:::

Navigate to the `Integrate` tab and follow the steps in the **"Dynamic Config & Live Tuning URL"** section. After applying the changes, restart your game server.

![Integrate ARK: Survival Evolved game server - Dynamic configs / Live Tuning](/img/getting_started/rconconnect/integrate/ark_atlas_dynamicconfig_live_tuning_url.jpg)

### Email Webalarm

Get notified via email about in-game events like baby births or tripwire activations. Each player can enable notifications via the Community website.

:::tip Recommended setting
These are optional settings. If you're able to configure them, we highly recommend it. If your hosting provider restricts access, it’s not a major issue.
:::

Go to the `Integrate` tab and follow the instructions in the **"Email Webalarm"** section.

![Integrate ARK: Survival Evolved game server - Email Webalarm](/img/getting_started/rconconnect/integrate/ark_atlas_email_webalarm.jpg)

## Conan Exiles

### Enable Whitelist

To enable RCON whitelisting in Conan Exiles, add the following line to your `ServerSettings.ini` file:

```ini
EnableWhitelist=True
```
After saving the change, restart your game server for it to take effect.

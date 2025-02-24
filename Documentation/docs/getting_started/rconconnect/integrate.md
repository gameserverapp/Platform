---
title: Integrate
sidebar_position: 2
---

:::caution Connect server first
When you aren't using DediConnect, make sure to [connect game server with RconConnect](/getting_started/rconconnect/getting_started) before continuing.
:::

:::info No Integrate page?
When there is no `Integrate` tab you do not need to take any further steps. Your game server is fully integrated and ready to go!
:::

## Atlas & ARK

Find the `Integrate` tab under [game server settings](/dashboard/game_servers/getting_started#settings) for RconConnect servers only.


### GSA Integration mod
Add an in-game shop, cluster chat, advanced whitelisting, player muting, notifications, token gems & issue reporting to your ARK server.

:::warning Required setting
Without these settings some of the important features may not work. We strongly recommend you set these up for each individual game server.
:::

Install mod:
- [ARK:Survival Ascended version](https://www.curseforge.com/members/gameserverapp/projects)
- [ARK:Survival Evolved version](https://steamcommunity.com/sharedfiles/filedetails/?id=2107956699)
- [Atlas version](https://steamcommunity.com/sharedfiles/filedetails/?id=2108685945)

Navigate to the `Integrate` tab and follow the instructions in the __"GSA Integration mod"__ block.

![Integrate ARK: Survival Evolved game server - GSA integration mod](/img/getting_started/rconconnect/integrate/ark_atlas_integration_mod.jpg)

### Server game log
Enable the `-servergamelog` setting for your ARK / Atlas server.

:::warning Required setting
Without these settings some of the important features may not work. We strongly recommend you set these up for each individual game server.
:::

This launch parameter `-servergamelog` must be added to your game server.\
For some hosting providers you may need to activate `Server game log` on their dashboard. 


### BanlistURL
Automatically apply the Admin tools banlist to all your ARK game servers.

:::warning Required setting
Without these settings some of the important features may not work. We strongly recommend you set these up for each individual game server.
:::

Navigate to the `Integrate` tab and follow the instructions in the __"Banlist URL"__ block.

![Integrate ARK: Survival Evolved game server - BanlistURL](/img/getting_started/rconconnect/integrate/ark_atlas_banlisturl.jpg)

### Dynamic configs / Live Tuning
Host "DynamicConfig" and "Live Tuning" for ARK game server using [Config templates](/dashboard/game_servers/config_templates#game-config).

:::tip Recommended setting
These are non-crucial settings. If you are able to configure these, we recommend you do. If your hosting provider does not let you manage these settings, it's not a big issue.
:::

Navigate to the `Integrate` tab and follow the instructions in the __"Dynamic Config & Live Tuning URL"__ block.

After changing the setting you should restart the game server.

![Integrate ARK: Survival Evolved game server - Dynamic configs / Live Tuning](/img/getting_started/rconconnect/integrate/ark_atlas_dynamicconfig_live_tuning_url.jpg)

### Email Webalarm
Receive email notifications about in-game activities, like babies being born or tripwires activating. Email set up per player via the Communtiy website.

:::tip Recommended setting
These are non-crucial settings. If you are able to configure these, we recommend you do. If your hosting provider does not let you manage these settings, it's not a big issue.
:::

Navigate to the `Integrate` tab and follow the instructions in the __"Email Webalarm"__ block.

![Integrate ARK: Survival Evolved game server - Email Webalarm](/img/getting_started/rconconnect/integrate/ark_atlas_email_webalarm.jpg)


## Conan Exiles

### Enable whitelist

Enable the RCON whitelist for Conan by adding below line to your `ServerSettings.ini`:
```ini
EnableWhitelist=True
```

After changing the setting you should restart the game server.

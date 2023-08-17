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

## Atlas & ARK: Survival Evolved

Find the `Integrate` tab under [game server settings](/dashboard/game_servers/getting_started#settings) for RconConnect servers only.


### GSA Integration mod
Add an in-game shop, cluster chat, advanced whitelisting, player muting, notifications, token gems & issue reporting to your ARK server.

Install mod:
- [Atlas version](https://steamcommunity.com/sharedfiles/filedetails/?id=2108685945)
- [ARK:Survival Evolved version](https://steamcommunity.com/sharedfiles/filedetails/?id=2107956699)

Navigate to the `Integrate` tab and follow the instructions in the __"GSA Integration mod"__ block.

![Integrate ARK: Survival Evolved game server - GSA integration mod](/img/getting_started/rconconnect/integrate/ark_atlas_integration_mod.jpg)

### Dynamic configs / Live Tuning
Host "DynamicConfig" and "Live Tuning" for ARK game server using [Config templates](/dashboard/game_servers/config_templates#game-config).

Navigate to the `Integrate` tab and follow the instructions in the __"Dynamic Config & Live Tuning URL"__ block.

After changing the setting you should restart the game server.

![Integrate ARK: Survival Evolved game server - Dynamic configs / Live Tuning](/img/getting_started/rconconnect/integrate/ark_atlas_dynamicconfig_live_tuning_url.jpg)

### BanlistURL
Automatically apply the Admin tools banlist to all your ARK game servers.

Navigate to the `Integrate` tab and follow the instructions in the __"Banlist URL"__ block.

![Integrate ARK: Survival Evolved game server - BanlistURL](/img/getting_started/rconconnect/integrate/ark_atlas_banlisturl.jpg)

### Email Webalarm
Receive email notifications about in-game activities, like babies being born or tripwires activating. Email set up per player via the Communtiy website.

Navigate to the `Integrate` tab and follow the instructions in the __"Email Webalarm"__ block.

![Integrate ARK: Survival Evolved game server - Email Webalarm](/img/getting_started/rconconnect/integrate/ark_atlas_email_webalarm.jpg)


## Conan Exiles

### Enable whitelist

Enable the RCON whitelist for Conan by adding below line to your `ServerSettings.ini`:
```ini
EnableWhitelist=True
```

After changing the setting you should restart the game server.

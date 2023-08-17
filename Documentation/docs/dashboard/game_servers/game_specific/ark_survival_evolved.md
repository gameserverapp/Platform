---
title: "ARK: Survival Evolved"
---

## Dynamic configs / Live Tuning
Manage ARK's `DynamicConfig` and `DefaultOverloads.json` through [Config templates](/dashboard/game_servers/config_templates/#game-config). 

:::info 15 minute refresh timer
After making changes to the Config template it may take up to 15 minutes for the ARK game server to pick up the changes. This is normal.
:::

![ARK: Survival Evolved - Live Tuning / DynamicConfigs](/img/dashboard/gameserver/game_specific/ark_dynamicconfigs_live_tuning.jpg)

## Banlist URL

### DediConnect
Add or replace in the `GameUserSettings.ini` underneath `[ServerSettings]`:
```ini
BanListURL="%%BANLIST%%"
```

### RconConnect
[See BanlistURL instructions for RconConnect >](/getting_started/rconconnect/integrate#banlisturl)


## Settings

### Wipe dinos on start
Wipe all the dinos on each start by adding `-ForceRespawnDinos` to the "end" section, in your active config template.
This does not affect tamed / sleeping dinos.
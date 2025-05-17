---
title: "ARK: Survival Evolved"
---

## Dynamic configs / Live Tuning

Easily manage ARK’s `DynamicConfig` and `DefaultOverloads.json` using [Config templates](/dashboard/game_servers/config_templates#game-config). This allows for live tuning without needing to manually upload files.

:::info 15 minute refresh timer
After saving changes in the config template, it can take up to 15 minutes for your ARK server to apply them. This is expected behavior.
:::

![ARK: Survival Evolved - Live Tuning / DynamicConfigs](/img/dashboard/gameserver/game_specific/ark_dynamicconfigs_live_tuning.jpg)

## Banlist URL

### DediConnect

To configure your server’s ban list, open `GameUserSettings.ini` and add or update the line under `[ServerSettings]` as follows:

```ini
BanListURL="%%BANLIST%%"
```

### RconConnect

If you're using RconConnect, follow the specific guide for [BanListURL instructions >](/getting_started/rconconnect/integrate#banlisturl)

## Settings

### Wipe dinos on start
To wipe all wild dinos on every server start, add the following to the end section of your active config template:
```ini
-ForceRespawnDinos
```
This command only affects wild dinos—it does not impact tamed or sleeping creatures.

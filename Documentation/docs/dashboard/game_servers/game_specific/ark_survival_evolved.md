---
title: "ARK: Survival Evolved"
---

## Dynamic configs / Live Tuning
Manage ARK's `DynamicConfig` and `DefaultOverloads.json` through [Config templates](https://docs.gameserverapp.com/dashboard/game_servers/config_templates/#game-config). 


:::caution RconConnect
For RconConnect servers please navigate to the `Integrate` tab on your game servers settings page and follow the instructions in the `Dynamic Config & Live Tuning URL` block. Don't forget to restart the game server.
:::

[More information about Live Tuning & Dynamic config >](https://survivetheark.com/index.php?/forums/topic/569366-server-configuration-live-tuning-system/)


After making changes to the Config template it may take up to 15 minutes for the ARK game server to pick up the changes. This is normal.

![ARK: Survival Evolved - Live Tuning / DynamicConfigs](/img/dashboard/gameserver/game_specific/ark_dynamicconfigs_live_tuning.jpg)

[//]: # (TODO add reference to `connect` page @ game server settings)

## Banlist URL
[//]: # (TODO add reference to `connect` page @ game server settings)

## Integration mod setup
[//]: # (TODO add reference to `connect` page @ game server settings)

## Email webalarm

## Integrate page info
[//]: # (TODO add reference to `integrate` page @ game server settings)


## Settings

### Wipe dinos on start
Wipe all the dinos on each start by adding `-ForceRespawnDinos` to the "end" section, in your active config template.
This does not affect tamed / sleeping dinos.
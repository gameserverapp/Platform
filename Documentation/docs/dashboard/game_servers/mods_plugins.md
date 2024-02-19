---
title: Mods & plugins
sidebar_position: 1
---
Fully automated mod / plugin installation and updating support for:
- Steam Workshop mods
- CurseForge mods
- uMod plugins
- PaperMC plugins
- ARK Server API plugins

![Mods & plugins - ](/img/dashboard/gameserver/mods_plugins/mod_overview.jpg)


## Mod / Plugin Framework
Before you can go ahead and install mods / plugins, the framework should to be installed first in most cases. Certain games allow you to select a specific mod / plugin framework version, others will the latest version.

### Install framework
Hit the `Actions` button and select the version you want to install.

![Mods & plugins - install plugin framework 1](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_1.jpg)

Select one or multiple game servers that should have the framework installed.

![Mods & plugins - install plugin framework 2](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_2.jpg)

Installation usually takes only a few minutes. The installed version is displayed when it finished installing.

![Mods & plugins - install plugin framework 3](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_3.jpg)

### Manage framework
![Mods & plugins - manage plugin framework](/img/dashboard/gameserver/mods_plugins/plugin_framework_manage.jpg)

#### Manually updating framework
When an update is available for the framework you can manually update by click `Actions` and then `Update now`. 

#### Uninstalling plugin framework
To uninstall the framework go to `Actions` and click `Uninstall framework`.


## Mods / Plugins
Installing mods / plugins works identical for every mod / plugin framework on GSA (except for [STEAM mods](#steam-mods)). So when you know how to install mods / plugins on uMod, you can work with any other framework.


### Install
Hit `Browse mods / plugins` to install a new mod / plugin on the game server.

![Mods & plugins - install plugin 1](/img/dashboard/gameserver/mods_plugins/install_plugin_1.jpg)

In the `Available mods / plugins` window you can use search to find mods / plugins. Hit the `Install` button at the mod / plugin.

![Mods & plugins - install plugin 2](/img/dashboard/gameserver/mods_plugins/install_plugin_2.jpg)

Select one or multiple game servers that should have the mod / plugin installed. Make sure the [framework is installed](/dashboard/game_servers/mods_plugins#mod--plugin-framework) on all selected servers.

![Mods & plugins - install plugin 3](/img/dashboard/gameserver/mods_plugins/install_plugin_3.jpg)

Installation usually takes only a few minutes. The installed version is displayed when it finished installing.

![Mods & plugins - install plugin 4](/img/dashboard/gameserver/mods_plugins/install_plugin_4.jpg)


### Change load order
Certain mods / plugins need to load in using a specific load order. The load order can be changed by grabbing the <Icon icon="fa-solid fa-sort" /> and drag the mod / plugin to the desired position.

![Mods & plugins - mod / plugin load order](/img/dashboard/gameserver/mods_plugins/change_mod-plugin_load_order.jpg)

### Update & delete
![Mods & plugins - manage plugins](/img/dashboard/gameserver/mods_plugins/manage_plugin.jpg)

#### Manually update mod /  plugin
When an update is available for the mod / plugin you can manually update by click `Actions` and then `Update mod / plugin`.

#### Delete mod / plugin
To uninstall the mod / plugin go to `Actions` and click `Delete mod / plugin`.


### Configs
When supported, mod / plugin configuration files can be managed via the [Config templates `Plugin` section](/dashboard/game_servers/config_templates#mod--plugin-configs).

Click `Add to config templ.` to add the mod / plugin to the Config template for the selected game server.

![Mods & plugins - plugin config](/img/dashboard/gameserver/mods_plugins/plugin_config.jpg)


## Steam Mods
When the game supports steam mods there will be a `Mods` tab under Game server settings.

### Install mods
For most Steam games there is a special `Workshop` section where you can find mods. There are multiple ways you can install these mods on the game server:
- Paste the workshop URL into the field.
- Paste the workshop ID into the field.
- Paste multiple workshop ID's into the field, seperated by a comma (123, 456, 789 etc).

:::tip GSA integration mod
For example, you can find the [GameServerApp.com integration mod on Steam >](https://steamcommunity.com/sharedfiles/filedetails/?id=2107956699)
:::

![Mods & plugins - Install mod](/img/dashboard/gameserver/mods_plugins/install_mod.jpg)

### Change load order
Certain mods need to load in using a specific load order. The load order can be changed by grabbing the <Icon icon="fa-solid fa-sort" /> and drag the mod to the desired position.

![Mods & plugins - mod load order](/img/dashboard/gameserver/mods_plugins/change_mod_load_order.jpg)

### Update & delete
Manually updating & deleting mods is only possible when the game server is turned off.

It is possible to schedule a mod for removal when the game server is running. This will remove the mod on the next shutdown.

![Mods & plugins - update & delete mod](/img/dashboard/gameserver/mods_plugins/update_delete_mod.jpg)

Scheduled mod removals can be cancelled too.

![Mods & plugins - update & delete mod](/img/dashboard/gameserver/mods_plugins/mod_cancel_scheduled_delete.jpg)

:::tip mod manifest ID
When you want to double check whether the mod was updated, hover over the `Latest version` badge to see the manifest ID. This ID corresponds with the releases on the Steam workshop page.

![Mods & plugins - mod manifest id](/img/dashboard/gameserver/mods_plugins/mod_manifest_id.jpg)
:::

## Update countdown
Configure how long the in-game countdown should run before automatically updating mods, plugins & plugin frameworks. Countdown options range from `immediately` to 75 minutes.

To turn off auto-updating select `DISABLE auto update`.

The auto-updating countdown range can also [inherit settings from a Config template](/dashboard/game_servers/config_templates#settings).

### Mods
![Mods & plugins - mod update countdown](/img/dashboard/gameserver/mods_plugins/mod_update_countdown.jpg)

### Plugins
![Mods & plugins - plugin update countdown](/img/dashboard/gameserver/mods_plugins/plugin_update_countdown.jpg)
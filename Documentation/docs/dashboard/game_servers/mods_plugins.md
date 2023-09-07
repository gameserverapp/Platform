---
title: Mods & plugins
sidebar_position: 1
---
Fully automated mod / plugin installation and updating support for:
- Steam Workshop mods
- ARK Server API plugins
- uMod plugins
- PaperMC plugins

![Mods & plugins - ](/img/dashboard/gameserver/mods_plugins/mod_overview.jpg)

## Mods
When the game supports mods there will be a `Mods` tab under Game server settings.

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
Certain mods need to load in using a specific load order. The load order can be changed by grabbing the <icon icon="fa-solid fa-sort" size="md" /> and drag the mod to the desired position.

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

## Plugin framework
Before you can go ahead and install plugins, the plugin framework needs to be installed first. Certain games allow you to select a specific plugin framework version. Others will default to the latest version.

### Install plugin framework
Hit the `Actions` button and select the version you want to install.

![Mods & plugins - install plugin framework 1](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_1.jpg)

Select one or multiple game servers that should have the framework plugin installed.

![Mods & plugins - install plugin framework 2](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_2.jpg)

Installation usually takes only a few minutes. The installed version is displayed when it finished installing.

![Mods & plugins - install plugin framework 3](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_3.jpg)

### Manage framework
![Mods & plugins - manage plugin framework](/img/dashboard/gameserver/mods_plugins/plugin_framework_manage.jpg)

#### Manually updating framework
When an update is available for the framework you can manually update by click `Actions` and then `Update now`. 

#### Uninstalling plugin framework
To uninstall the framework go to `Actions` and click `Uninstall framework`.


## Plugins
Installing plugins works identical for every plugin framework on GSA. So when you know how to install plugins on uMod, you can work with any other plugin framework.


### Install plugin
Hit `Install new plugin` to install a new plugin on the game server.

![Mods & plugins - install plugin 1](/img/dashboard/gameserver/mods_plugins/install_plugin_1.jpg)

In the `Available plugins` popup you can use search to find the right plugin. Hit the `Install` button at the plugin you want to install.

![Mods & plugins - install plugin 2](/img/dashboard/gameserver/mods_plugins/install_plugin_2.jpg)

Select one or multiple game servers that should have the plugin installed. Make sure the [plugin framework is installed](#plugin-framework) on all selected servers.

![Mods & plugins - install plugin 3](/img/dashboard/gameserver/mods_plugins/install_plugin_3.jpg)

Installation usually takes only a few minutes. The installed version is displayed when it finished installing.

![Mods & plugins - install plugin 4](/img/dashboard/gameserver/mods_plugins/install_plugin_4.jpg)

### Manage plugins
![Mods & plugins - manage plugins](/img/dashboard/gameserver/mods_plugins/manage_plugin.jpg)

#### Manually update plugin
When an update is available for the plugin you can manually update by click `Actions` and then `Update plugin`.

#### Delete plugin
To uninstall the framework go to `Actions` and click `Delete plugin`.


### Plugin configs
Plugin configuration files can be managed via the [Config templates `Plugin` section](/dashboard/game_servers/config_templates#plugin-configs) for most games.

Click `Add to config templ.` to add the plugin to the Config template for the selected game server.

![Mods & plugins - plugin config](/img/dashboard/gameserver/mods_plugins/plugin_config.jpg)



## Update countdown
Configure how long the in-game countdown should run before automatically updating mods, plugins & plugin frameworks. Countdown options range from `immediately` to 75 minutes.

To turn off auto-updating select `DISABLE auto update`.

The auto-updating countdown range can also [inherit settings from a Config template](/dashboard/game_servers/config_templates#game-server-automation-settings).

### Mods
![Mods & plugins - mod update countdown](/img/dashboard/gameserver/mods_plugins/mod_update_countdown.jpg)

### Plugins
![Mods & plugins - plugin update countdown](/img/dashboard/gameserver/mods_plugins/plugin_update_countdown.jpg)
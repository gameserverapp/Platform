---
title: Mods & plugins
sidebar_position: 1
---

Fully automated mod and plugin installation and update support is available for:

- Steam Workshop mods  
- CurseForge mods  
- uMod plugins  
- PaperMC plugins  
- ARK Server API plugins

![Mods & plugins - ](/img/dashboard/gameserver/mods_plugins/mod_overview.jpg)

## Mod / Plugin Framework

Before installing mods or plugins, most games require a mod/plugin framework to be installed. Some games allow you to select a specific version, while others will automatically use the latest.

### Install framework

Click the `Actions` button and choose the version of the framework you want to install.

![Mods & plugins - install plugin framework 1](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_1.jpg)

Select the game servers you want the framework installed on.

![Mods & plugins - install plugin framework 2](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_2.jpg)

Installation usually completes within a few minutes. Once done, the installed version will be displayed.

![Mods & plugins - install plugin framework 3](/img/dashboard/gameserver/mods_plugins/install_plugin_framework_3.jpg)

### Manage framework

![Mods & plugins - manage plugin framework](/img/dashboard/gameserver/mods_plugins/plugin_framework_manage.jpg)

#### Manually updating the framework

If an update is available, click `Actions` > `Update now` to manually update the framework.

#### Uninstalling the framework

To uninstall, click `Actions` > `Uninstall framework`.

## Mods / Plugins

Installing mods and plugins works the same way across all frameworks on GSA (except for [Steam Mods](#steam-mods)). Once you learn one, you can manage all others in a similar manner.

### Install

Click `Browse mods / plugins` to install a new mod or plugin.

![Mods & plugins - install plugin 1](/img/dashboard/gameserver/mods_plugins/install_plugin_1.jpg)

In the `Available mods / plugins` window, search for the desired mod or plugin. Then click `Install`.

![Mods & plugins - install plugin 2](/img/dashboard/gameserver/mods_plugins/install_plugin_2.jpg)

Select one or more game servers to install the mod or plugin on. Make sure the [framework is installed](/dashboard/game_servers/mods_plugins#mod--plugin-framework) on each selected server.

![Mods & plugins - install plugin 3](/img/dashboard/gameserver/mods_plugins/install_plugin_3.jpg)

Installation typically takes a few minutes. Once complete, the installed version will be shown.

![Mods & plugins - install plugin 4](/img/dashboard/gameserver/mods_plugins/install_plugin_4.jpg)

### Change load order

Some mods or plugins require a specific load order. To change it, grab the <Icon icon="fa-solid fa-sort" /> icon and drag the item into the correct position.

![Mods & plugins - mod / plugin load order](/img/dashboard/gameserver/mods_plugins/change_mod-plugin_load_order.jpg)

### Update & delete

![Mods & plugins - manage plugins](/img/dashboard/gameserver/mods_plugins/manage_plugin.jpg)

#### Manually update a mod or plugin

If an update is available, click `Actions` > `Update mod / plugin`.

#### Delete a mod or plugin

To uninstall, click `Actions` > `Delete mod / plugin`.

### Configs

If supported, configuration files for mods and plugins can be managed through the [Config templates `Plugin` section](/dashboard/game_servers/config_templates#mod--plugin-configs).

Click `Add to config templ.` to include the mod or plugin in the config template for your selected server.

![Mods & plugins - plugin config](/img/dashboard/gameserver/mods_plugins/plugin_config.jpg)

## Steam Mods

If your game supports Steam mods, you’ll see a `Mods` tab under the Game server settings.

### Install mods

Most Steam games include a `Workshop` section for finding mods. You can install them in several ways:

- Paste the workshop URL into the field  
- Paste a single workshop ID  
- Paste multiple workshop IDs, separated by commas (e.g., `123, 456, 789`)

:::tip GSA integration mod
For example, you can find the [GameServerApp.com integration mod on Steam >](https://steamcommunity.com/sharedfiles/filedetails/?id=2107956699)
:::

![Mods & plugins - Install mod](/img/dashboard/gameserver/mods_plugins/install_mod.jpg)

### Change load order

Some mods require a specific load order. Drag and drop using the <Icon icon="fa-solid fa-sort" /> icon to reorder them.

![Mods & plugins - mod load order](/img/dashboard/gameserver/mods_plugins/change_mod_load_order.jpg)

### Update & delete

Mods can only be manually updated or deleted when the game server is turned off.

If the server is running, you can still schedule a mod for removal. It will be deleted the next time the server shuts down.

![Mods & plugins - update & delete mod](/img/dashboard/gameserver/mods_plugins/update_delete_mod.jpg)

You can also cancel scheduled removals.

![Mods & plugins - update & delete mod](/img/dashboard/gameserver/mods_plugins/mod_cancel_scheduled_delete.jpg)

:::tip mod manifest ID
To verify whether a mod has been updated, hover over the `Latest version` badge to view the manifest ID. This ID matches the release version on the Steam Workshop. \
![Mods & plugins - mod manifest id](/img/dashboard/gameserver/mods_plugins/mod_manifest_id.jpg)
:::

## Update countdown

Set how long the in-game countdown should run before automatically updating mods, plugins, or frameworks. Options range from `immediately` to 75 minutes.

To disable auto-updates entirely, select `DISABLE auto update`.

The update countdown setting can also [inherit values from a Config template](/dashboard/game_servers/config_templates#settings).

### Mods

![Mods & plugins - mod update countdown](/img/dashboard/gameserver/mods_plugins/mod_update_countdown.jpg)

### Plugins

![Mods & plugins - plugin update countdown](/img/dashboard/gameserver/mods_plugins/plugin_update_countdown.jpg)

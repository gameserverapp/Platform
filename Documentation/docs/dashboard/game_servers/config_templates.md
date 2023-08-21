---
title: Config templates
sidebar_position: 2
---
Config templates are a set of configurations, that can attach to one or more game servers. This lets you customize multiple servers at once.

[Go to Config templates >](https://dash.gameserverapp.com/config-template)

![Config template - overview](/img/dashboard/gameserver/config_template/config_template_overview.jpg)

## Create template

### Blank template
To create a new config template that is empty click `+ Add Config template` on the Config template page.

![Config template - create new 1](/img/dashboard/gameserver/config_template/config_template_create_new_1.jpg)

Enter a `name` and select which `game` the config template is for. Click `Create` to create a new Config template.

![Config template - create new 2](/img/dashboard/gameserver/config_template/config_template_create_new_2.jpg)

### Default config / template
For every game we created a `Default config`, which is a good starting point for new game servers. The `Default config` can also be used [during troubleshooting](/dashboard/game_servers/troubleshooting#game-server-not-starting), to rule out any issues with your configs.

![Config template - default config](/img/dashboard/gameserver/config_template/config_template_default_configs.jpg)

Some games have multiple examples. Click a `Default config` to add it to your dashboard.

![Config template - default config](/img/dashboard/gameserver/config_template/select_default_config.jpg)


## Config templates


### Game config
Each game comes with different configuration files and settings on the `Game` tab. You can manage all relevant files and settings from there.

Use [Config variables](#game-config-variables) for added flexibility.

:::tip Shortcut navigation
Use the `Shortcut navigation` on the right to quickly navigate to the right file / setting.
:::

![Config template - edit](/img/dashboard/gameserver/config_template/config_template_edit.jpg)

#### Easy & Advanced-mode
While all games support `Advanced-mode`, some games support `Easy-mode`. With `Easy-mode` the settings are converted into a form with switches for easy management. 

Switch between modes using the <icon icon="fa-solid fa-caret-down" size="lg" /> icon in the __top-right corner__ and clicking `Switch to Advanced-mode` or `Switch to Easy-mode`.

##### Easy-mode example
Easy-mode presents a form with switches and input fields where you can manage a select group of settings.

![Config template - easy mode](/img/dashboard/gameserver/config_template/config_easy_mode.jpg)

##### Advanced-mode example
Advanced-mode shows all relevant files and settings that you may want to change for game servers.

![Config template - advanced mode](/img/dashboard/gameserver/config_template/config_advanced_mode.jpg)


### Plugin configs

#### General / Framework configs
Some frameworks have general settings that determine how the framework functions, like PaperMC. 

For frameworks with general settings you can, in most cases, manage the framework settings from the `Plugin` tab too.

![Config template - framework settings](/img/dashboard/gameserver/config_template/framework_settings_papermc.jpg)

#### Configs for specific plugins
Manage configs for individual plugins from the Config template.

:::info Installed plugins only
You can only manage configs for plugins that were installed via the dashboard. Manually installed plugins won't have their configs updated by Config templates.
:::

Use [Config variables](#game-config-variables) for added flexibility.

![Config template - plugin specific configs](/img/dashboard/gameserver/config_template/plugin_specific_configs.jpg)

Click `+ Add plugin` in the sidebar (right) to add more plugins to your Config template. 

![Config template - add plugin to configs](/img/dashboard/gameserver/config_template/add_plugin_to_configs.jpg)

Besides adding the config to your config template is it also possible to install plugins on game servers from here.

![Config template - add plugin config and install on game server](/img/dashboard/gameserver/config_template/add_config_or_add_and_install.jpg)



### Settings
Change the Config template name, manage Admin ID's, configure automations and more advanced settings.

![Config template - settings](/img/dashboard/gameserver/config_template/config_template_settings.jpg)

#### Access

![Config template - settings - access](/img/dashboard/gameserver/config_template/config_template_settings_access.jpg)

##### Admin ID's
Grant admin privileges to all ID's listed in the field. This automatically deploys to all connected game servers.

#### Automation
The automation settings in a Config template can be used to automate game servers.
See the [Game server automation section](/dashboard/game_servers/getting_started#automation) for more details.

![Config template - settings - automation](/img/dashboard/gameserver/config_template/config_template_settings_automation.jpg)

#### Special settings

:::caution Advanced users only
Settings under `Special settings` are potentially breaking and should not be used unless you understand what you are doing. This might break your game server when used irresponsibly.
:::

##### SteamCMD branch
Load any public SteamCMD branch.
![Config template - special settings - steamcmd branch](/img/dashboard/gameserver/config_template/config_template_special_settings_steamcmd_branch.jpg)

##### Custom launch script
Add custom scripts to the `gsa-control.ps1` and `gsa-control.sh` files.
![Config template - special settings - launch script](/img/dashboard/gameserver/config_template/config_template_special_settings_launch_script.jpg)




## General

### Config variables
Adds extra flexibility to Config templates. Can be used to automatically load in installed mods, for example.

#### Game config variables
- `%%BANLIST%%` replaced with ban list URL for game server
- `%%MODIDS%%` replaced with id's of all installed mods

#### Plugin config variables
- `%%RCON_PORT%%` replaced with RCON port for the game server

### Keep notes
Help everyone on the team stay updated about what changed for each Config template.

When editing a config, click `Notes` in the __top-right corner__.

![Config template - notes 1](/img/dashboard/gameserver/config_template/config_notes_1.jpg)

In the popup you can write text using [Markdown styling](https://simplemde.com/markdown-guide). Hit `Save` to save your changes.

![Config template - notes 2](/img/dashboard/gameserver/config_template/config_notes_2.jpg)

Configs with notes show a little <icon icon="fa-solid fa-sticky-note" size="lg" /> icon at the Config template overview. Hover over the icon to see a summary.

![Config template - notes 3](/img/dashboard/gameserver/config_template/config_notes_3.jpg)

### Cloning
![Config template - clone](/img/dashboard/gameserver/config_template/config_template_clone.jpg)

### Archive
![Config template - archive](/img/dashboard/gameserver/config_template/config_template_archive.jpg)

### Game server actions

#### Activate on game servers
Besides [choosing a Config template from the game server settings](/dashboard/game_servers/getting_started#settings) can you also activate a config template on game servers from a Config template.

Click the <icon icon="fa-solid fa-caret-down" size="lg" /> icon in the __top-right corner__ and click `Activate on servers`.

![Config template - activate on servers 1](/img/dashboard/gameserver/config_template/config_template_activate_on_servers_1.jpg)

In the popup you can see which servers already have the Config template activated and select other servers (for the game) to activate it on.

![Config template - activate on servers 2](/img/dashboard/gameserver/config_template/config_template_activate_on_servers_2.jpg)


#### Restart game servers
Apply changes directly from the Config template.

Click the <icon icon="fa-solid fa-caret-down" size="lg" /> icon in the __top-right corner__ and click `Restart servers`.

![Config template - restart servers 1](/img/dashboard/gameserver/config_template/config_template_restart_servers_1.jpg)

In the popup you select which game servers should restart.

![Config template - restart servers 2](/img/dashboard/gameserver/config_template/config_template_restart_servers_2.jpg)


## Groups
Config template groups help keep config templates organised and tidy.
You can add existing templates to a group or change the group for a template.

### Create template group
Click <icon icon="fa-solid fa-plus-square" size="lg" /> next to "Config templates" to create a new group.

![Config template group - create 1](/img/dashboard/gameserver/config_template/config_template_group_add_1.jpg)

Enter a name for the new group and hit `Create`.

![Config template group - create 2](/img/dashboard/gameserver/config_template/config_template_group_add_2.jpg)

### Change group for template
Add existing templates to a group or change the group for a template by selecting the desired group in the dropdown.

![Config template group - Change group for template](/img/dashboard/gameserver/config_template/config_template_group_change_group.jpg)


### Manage template groups

Reorder, rename or delete template groups by clicking <icon icon="fa-solid fa-pen-square" size="lg" />.

![Config template group - manage groups 1](/img/dashboard/gameserver/config_template/config_template_group_manage_1.jpg)

![Config template group - manage groups 2](/img/dashboard/gameserver/config_template/config_template_group_manage_2.jpg)

## Third party apps

### Beacon
For ARK: Survival Evolved you can use Beacon to manage your config template. Check out the video below to learn how to set it up.

<iframe width="560" height="315" src="https://www.youtube.com/embed/N35NyETlY6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
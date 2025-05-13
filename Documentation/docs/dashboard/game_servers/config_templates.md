---
title: Config templates
sidebar_position: 2
---

Config templates are a set of configurations that can be attached to one or more game servers. This allows you to manage and customize multiple servers at once, saving time and ensuring consistency.

[Go to Config templates >](https://dash.gameserverapp.com/config-template)

![Config template - overview](/img/dashboard/gameserver/config_template/config_template_overview.jpg)

## Create template

### Blank template

To create a new, empty config template, click `+ Add Config template` on the Config template page.

![Config template - create new 1](/img/dashboard/gameserver/config_template/config_template_create_new_1.jpg)

Enter a `name` and select the `game` the template is for. \
You can optionally change the blueprint, but if unsure, stick with the `Default blueprint`.

Click `Create` to finish creating your new Config template.

![Config template - create new 2](/img/dashboard/gameserver/config_template/config_template_create_new_2.jpg)

### Default config / template

Each supported game has a pre-made `Default config`, a great starting point for setting up new servers. These defaults are also useful when [troubleshooting server issues](/dashboard/game_servers/troubleshooting#game-server-not-starting--crashing). \
The default configs can been found under the arrow as shown in the picture and then clicking `Add new using template`

![Config template - default config](/img/dashboard/gameserver/config_template/config_template_default_configs.jpg)

Some games have multiple examples. Click on any `Default config` to add it to your dashboard.

![Config template - default config](/img/dashboard/gameserver/config_template/select_default_config.jpg)

## Config templates

### Game config

Every game includes specific config files and settings, accessible under the `Game` tab. From here, you can manage everything the game requires.

Use [Config variables](#game-config-variables) to make your templates even more flexible.

:::tip Shortcut navigation
Use the `Shortcut navigation` on the right to jump quickly to specific files or settings.
:::

![Config template - edit](/img/dashboard/gameserver/config_template/config_template_edit.jpg)

#### Easy & Advanced-mode

All games support `Advanced-mode`, and some also support `Easy-mode`. Easy-mode displays a simplified interface using switches and input fields.

Switch between modes using the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon in the **top-right corner**, then select `Switch to Advanced-mode` or `Switch to Easy-mode`.

##### Easy-mode example

In Easy-mode, settings are shown as a user-friendly form.

![Config template - easy mode](/img/dashboard/gameserver/config_template/config_easy_mode.jpg)

##### Advanced-mode example

Advanced-mode gives access to all config files and settings for full control.

![Config template - advanced mode](/img/dashboard/gameserver/config_template/config_advanced_mode.jpg)

### Mod / Plugin configs

#### General / Framework configs

Some mod frameworks, like PaperMC, have general settings that determine how the framework behaves. These can usually be managed from the `Mod / Plugin` tab.

![Config template - framework settings](/img/dashboard/gameserver/config_template/framework_settings_papermc.jpg)

#### Configs for specific mods / plugins

You can manage the configuration for each installed mod or plugin through the Config template.

:::info Installed mods / plugins only
Only mods and plugins installed via the dashboard can be configured through templates. Manually installed ones won’t be updated.
:::

Use [Config variables](#game-config-variables) here as well for dynamic content.

![Config template - plugin specific configs](/img/dashboard/gameserver/config_template/plugin_specific_configs.jpg)

Click `+ Add mod / plugin` in the right sidebar to add more mods or plugins to your template.

![Config template - add plugin to configs](/img/dashboard/gameserver/config_template/add_plugin_to_configs.jpg)

You can also install the mod/plugin on servers directly from this section.

![Config template - add plugin config and install on game server](/img/dashboard/gameserver/config_template/add_config_or_add_and_install.jpg)

### Settings

Here you can rename your template, switch its blueprint, assign Admin IDs, set up automations, and manage other advanced settings.

![Config template - settings](/img/dashboard/gameserver/config_template/config_template_settings.jpg)

#### Blueprint

Blueprints determine which config files are shown in your template. This is especially helpful for unsupported games or when expected files are missing.

##### Change blueprint for Config template

You can update the blueprint just for the template or also for all connected servers.

![Config template - settings - blueprint](/img/dashboard/gameserver/config_template/config_template_settings_blueprint.jpg)

#### Access

![Config template - settings - access](/img/dashboard/gameserver/config_template/config_template_settings_access.jpg)

##### Admin ID's

Any ID listed here will receive admin privileges across all servers using the template.

#### Automation

Automate server behavior through Config template automation settings.\
Visit the [Game server automation section](/dashboard/game_servers/getting_started#automation) for more info.

![Config template - settings - automation](/img/dashboard/gameserver/config_template/config_template_settings_automation.jpg)

#### Special settings

:::caution Advanced users only
Use the settings under `Special settings` only if you understand the risks. Incorrect use may break your server.
:::

##### SteamCMD branch

Specify a public SteamCMD branch to load.

![Config template - special settings - steamcmd branch](/img/dashboard/gameserver/config_template/config_template_special_settings_steamcmd_branch.jpg)

##### Custom launch script

Add custom scripts to run via `gsa-control.ps1` and `gsa-control.sh`.

![Config template - special settings - launch script](/img/dashboard/gameserver/config_template/config_template_special_settings_launch_script.jpg)

## General

### Config variables

These add flexibility by auto-populating values like mod lists or admin URLs.

#### Game config variables

- `%%BANLIST%%` → replaced with the ban list URL for the server
- `%%MODIDS%%` → replaced with all installed mod IDs
- `%%ADMINLISTURL%%` → replaced with the admin list URL

#### Blueprint variables

Advanced variables from the [blueprint variables section](/dashboard/blueprints/variables) are also supported and will eventually replace the above.

### Keep notes

Keep your team informed by leaving notes on config changes.

Click `Notes` in the **top-right corner** when editing.

![Config template - notes 1](/img/dashboard/gameserver/config_template/config_notes_1.jpg)

Use [Markdown styling](https://simplemde.com/markdown-guide) to write your notes. Click `Save` to store them.

![Config template - notes 2](/img/dashboard/gameserver/config_template/config_notes_2.jpg)

A <Icon icon="fa-solid fa-sticky-note" size="lg" /> icon shows up for configs with notes. Hover to preview the note.

![Config template - notes 3](/img/dashboard/gameserver/config_template/config_notes_3.jpg)

### Cloning

By clicking this button you can clone a config template.
![Config template - clone](/img/dashboard/gameserver/config_template/config_template_clone.jpg)

### Archive

By clicking this button you can archive a config template.
![Config template - archive](/img/dashboard/gameserver/config_template/config_template_archive.jpg)

### Game server actions

#### Activate on game servers

You can activate a Config template from within the template itself.

Click the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon in the **top-right corner** and select `Activate on servers`.

![Config template - activate on servers 1](/img/dashboard/gameserver/config_template/config_template_activate_on_servers_1.jpg)

Select which servers you want to apply the template to.

![Config template - activate on servers 2](/img/dashboard/gameserver/config_template/config_template_activate_on_servers_2.jpg)

#### Restart game servers

Push changes by restarting game servers directly from the template.

Click the <Icon icon="fa-solid fa-caret-down" size="lg" /> icon in the **top-right corner** and select `Restart servers`.

![Config template - restart servers 1](/img/dashboard/gameserver/config_template/config_template_restart_servers_1.jpg)

Choose which servers to restart in the popup.

![Config template - restart servers 2](/img/dashboard/gameserver/config_template/config_template_restart_servers_2.jpg)

## Groups

Groups help organize your Config templates.

### Create template group

Click <Icon icon="fa-solid fa-plus-square" size="lg" /> next to "Config templates" to start a new group.

![Config template group - create 1](/img/dashboard/gameserver/config_template/config_template_group_add_1.jpg)

Enter a group name and click `Create`.

![Config template group - create 2](/img/dashboard/gameserver/config_template/config_template_group_add_2.jpg)

### Change group for template

To reassign a template to a different group, select the new group from the dropdown.

![Config template group - Change group for template](/img/dashboard/gameserver/config_template/config_template_group_change_group.jpg)

### Manage template groups

Reorder, rename, or delete groups by clicking <Icon icon="fa-solid fa-pen-square" size="lg" />.

![Config template group - manage groups 1](/img/dashboard/gameserver/config_template/config_template_group_manage_1.jpg)

![Config template group - manage groups 2](/img/dashboard/gameserver/config_template/config_template_group_manage_2.jpg)

## Third party apps

### Beacon

For ARK: Survival Evolved & ARK: Survival Ascended, you can manage your Config templates using Beacon. Watch the video below to learn how.

[How to import configs on Beacon >](https://usebeacon.app/help/importing_existing_config)

<iframe width="560" height="315" src="https://www.youtube.com/embed/N35NyETlY6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

---
title: Getting started
sidebar_position: 0
---

Learn what settings DediConnect includes and how to install game servers and services.

[Go to Machines >](https://dash.gameserverapp.com/machine)

![Machine overview](/img/dashboard/machines/getting_started/machine_overview.jpg)

:::caution How to connect a machine
Head to the "Install & Connect" section to [learn how to connect a machine](/getting_started/dediconnect/getting_started).
:::

:::info Locating the `Machine ID`
When contacting support about a machine, please include the `machine ID`. You’ll find it in the __top-right corner__ of the machine settings page.

![Machine ID](/img/dashboard/machines/getting_started/machine_id.jpg)
:::

## Machine basics
The Machine overview page lets you switch between a `Block` view and a `Table` view for easier navigation.

![Machine overview - table-mode](/img/dashboard/machines/getting_started/machine_overview_table.jpg)

### Resource monitoring
Keep track of CPU, RAM, and Disk usage right from the machine overview or from the Game Servers & Services page.

![Machine overview 1](/img/dashboard/machines/getting_started/machine_details_1.jpg)
![Machine overview 2](/img/dashboard/machines/getting_started/machine_details_2.jpg)

## Game server controls
Use the controls on the right-hand sidebar to manage any game servers hosted on the machine.

![Machine - game server controls 1](/img/dashboard/machines/getting_started/gameserver_controls_1.jpg)
![Machine - game server controls 2](/img/dashboard/machines/getting_started/gameserver_controls_2.jpg)

## Activity
All activity related to a machine, whether triggered by an admin or the DediConnect system, will appear on the Activity page. This includes any reported issues.

:::tip Dashboard widget
You can also bring activity logs directly to your dashboard using the "Events & activity" [dashboard widget](/dashboard/dashboard_panel_widgets).
:::

![Machine activity](/img/dashboard/machines/getting_started/machine_activity.jpg)

## Settings
To manage a specific machine, click it in the sidebar and go to the `Settings` tab.

![Machine settings](/img/dashboard/machines/getting_started/machine_settings.jpg)

### Rename machine
You can rename machines to make them easier to identify and manage.

![Machine settings - rename machine](/img/dashboard/machines/getting_started/rename_machine.jpg)

### Steam download credentials
In rare cases, game server files must be downloaded using a Steam account that owns the game. If you're trying to install such a game, you’ll need to enter Steam account credentials here and disable Steam Guard.

We know this isn't ideal, but currently, it's the only way to proceed.

![Machine settings - steam download credentials](/img/dashboard/machines/getting_started/machine_steam_download_credentials.jpg)

### Firewall
The built-in firewall automatically blocks unwanted connections while still allowing players to connect. You can whitelist additional IP addresses, such as your home IP, to bypass these rules.

If you prefer not to use this feature, select `Ignore` in the `Firewall` settings to remove related security warnings.

![Machine settings - Firewall 1](/img/dashboard/machines/getting_started/restrict_access_machine_actions_1.jpg)
![Machine settings - Firewall 2](/img/dashboard/machines/getting_started/restrict_access_machine_actions_2.jpg)

### Throttle / stagger actions
If too many processes (like game server updates) run at the same time, your machine might slow down. To avoid performance issues, you can limit how many actions DediConnect performs at the same time.

:::tip Finetuning
If you're seeing performance issues, try experimenting with these settings. Start low, increase gradually, and test after each change by updating all game servers simultaneously.
:::

![Machine settings - Throttle / stagger actions](/img/dashboard/machines/getting_started/throtte_stagger_machine_actions.jpg)

### Storage management
Set up which disks or volumes DediConnect can use for storing data.

![Machine settings - Storage management](/img/dashboard/machines/getting_started/machine_storage_management.jpg)

## Danger zone

:::warning Danger zone
As the name implies, actions here are potentially dangerous and could lead to data loss.
:::

![Machine Danger zone](/img/dashboard/machines/getting_started/machine_danger_zone.jpg)

### Change IP
If the machine’s IP address changes, you can update it here.

![Machine Danger zone - change IP](/img/dashboard/machines/getting_started/change_machine_ip.jpg)

### Update machine credentials
Updating the machine's login credentials is usually only necessary after re-installing the system.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/update_machine_credentials.jpg)

### Reinstall machine

:::caution
Reinstalling a machine will delete all game servers and can cause permanent data loss. Be sure to create and [download backups](/dashboard/machines/practical_info#directories--folders) beforehand.

After reinstalling the OS, don’t forget to [update the machine credentials](/dashboard/machines/getting_started#update-machine-credentials).
:::

![Machine Danger zone - reinstall machine](/img/dashboard/machines/getting_started/reinstall_machine.jpg)

### Docker images
Manage Docker images installed on the machine and remove any that are no longer used.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/machine_docker_images.jpg)

### Game file cache
Manage and clean up cached game files for installed servers.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/machine_game_file_cache.jpg)

### Delete machine
This action permanently removes the machine from GSA. __This cannot be undone.__

Note: Files on the machine itself will not be deleted, only the GSA data associated with it.

![Machine Danger zone - delete machine](/img/dashboard/machines/getting_started/delete_machine.jpg)

---
title: Getting started
sidebar_position: 0
---

Learn what settings DediConnect comes with and how to install game servers and services.

[Go to Machines >](https://dash.gameserverapp.com/machine)

![Machine overview](/img/dashboard/machines/getting_started/machine_overview.jpg)

:::caution How to connect a machine
Check out the "Install & Connect" section to [learn how to connect a machine](/getting_started/dediconnect/getting_started).
:::

:::info Locating the `Machine ID`
Please include the `machine ID` when contact support about a machine. It's located in the __top-right corner__ on the machine settings page.

![Machine ID](/img/dashboard/machines/getting_started/machine_id.jpg)
:::

## Machine basics
Choose between a `Block` and `Table` view for the Machine overview page. 

![Machine overview - table-mode](/img/dashboard/machines/getting_started/machine_overview_table.jpg)

### Resource monitoring
Monitor resources such as CPU, RAM and Disk usage from the machine overview page as well as the Game servers & services page.

![Machine overview 1](/img/dashboard/machines/getting_started/machine_details_1.jpg)
![Machine overview 2](/img/dashboard/machines/getting_started/machine_details_2.jpg)



## Game server controls
Use the controls on the sidebar to the right to manage one or more game servers hosted on the machine.

![Machine - game server controls 1](/img/dashboard/machines/getting_started/gameserver_controls_1.jpg)

![Machine - game server controls 2](/img/dashboard/machines/getting_started/gameserver_controls_2.jpg)


## Activity
All activity for a machine, either initiated by an admin or the DediConnect system is reported to the activity page. Issues are also reported here.

:::tip Dashboard widget
Bring activity logs to your dashboard panels using the "Events & activity" [dashboard widget](/dashboard/dashboard_panel_widgets).
:::

![Machine activity](/img/dashboard/machines/getting_started/machine_activity.jpg)

## Settings
Click the machine you want to manage in the sidebar and go to `Settings`.

![Machine settings](/img/dashboard/machines/getting_started/machine_settings.jpg)

### Rename machine
Machine names can be changed for easy navigation & identification. 

![Machine settings - rename machine](/img/dashboard/machines/getting_started/rename_machine.jpg)

### Steam download credentials
In rare occasions the required game server files can only be downloaded from Steam when the machine is logged in with a Steam account that bought the game. When you're trying to install a game that requires this you need to enter the Steam account credentials here and disabled Steam Guard.

While we agree that having to enter Steam credentials and disabling Steam Guard is far from ideal, it's currently the only option.

![Machine settings - steam download credentials](/img/dashboard/machines/getting_started/machine_steam_download_credentials.jpg)

### Restrict access
This will automatically configure the firewall on the machine and block any unwanted connections to the machine, without affecting player connections.
You can add other IP addresses (like your home IP) to the list, which will let traffic from that IP address bypass the firewall rules.

When you don't want to use this feature, you can select `Ignore` on the `Restrict access` settings. This will remove the security warning from the machine pages.

![Machine settings - Restrict access 1](/img/dashboard/machines/getting_started/restrict_access_machine_actions_1.jpg)
![Machine settings - Restrict access 2](/img/dashboard/machines/getting_started/restrict_access_machine_actions_2.jpg)

### Throttle / stagger actions
In certain cases you may want to reduce the number of things that happen simultaneously on your machine. When too many things, like updating all game servers, happen simultaneously it might cause severe performance issues with a machine.

Mitigate this problem by settings a limit to how many things DediConnect will make the machine do in parallel.

:::tip finetuning
If you experience issues with your machine it can be useful to test various settings. Start with a low number and slowly work your way up. Test the new settings, by updating all game server simultaneously, before making new changes.
:::

![Machine settings - Throttle / stagger actions](/img/dashboard/machines/getting_started/throtte_stagger_machine_actions.jpg)

### Storage management
Configure which disks/volumes can be used for DediConnect.

![Machine settings - Storage management](/img/dashboard/machines/getting_started/machine_storage_management.jpg)

## Danger zone

:::warning Danger zone
As the name implies: things you can do here are dangerous and can cause data loss!
:::

![Machine Danger zone](/img/dashboard/machines/getting_started/machine_danger_zone.jpg)

### Change IP
When the IP for the machine changed you can update the IP for the machine here.

![Machine Danger zone - change IP](/img/dashboard/machines/getting_started/change_machine_ip.jpg)


### Update machine credentials
Updating the machine login credentials is usually only necessary when re-installing the machine.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/update_machine_credentials.jpg)

### Reinstall machine

:::caution
Reinstalling the machine will remove all game servers and cause data loss. Make sure you created backups and [downloaded those backups](/dashboard/machines/practical_info#directories--folders)!

After you reinstalled the OS, make sure to [update the machine credentials](/dashboard/machines/getting_started#update-machine-credentials).
:::

![Machine Danger zone - reinstall machine](/img/dashboard/machines/getting_started/reinstall_machine.jpg)

### Docker images
Manage the installed Docker images on the machine and purge unused images.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/machine_docker_images.jpg)

### Game file cache
Manage game file cache for installed games and purge unused game files.

![Machine settings - update credentials](/img/dashboard/machines/getting_started/machine_game_file_cache.jpg)

### Delete machine
Removing a machine is permanent. __It can not be undone__.

This action does not remove files from the machine, but will remove all data on GSA about the machine.

![Machine Danger zone - delete machine](/img/dashboard/machines/getting_started/delete_machine.jpg)
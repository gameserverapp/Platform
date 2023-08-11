---
title: Getting started
sidebar_position: 0
---

Learn what settings DediConnect comes with and how to install game servers and services.

[How to connect a machine >](/getting_started/dediconnect/getting_started)

:::info Locating the `Machine ID`
Please include the `machine ID` when you need to contact support about the machine. It's located in the __top-right corner__ on the machine settings page.


![Machine ID](/img/dashboard/machines/getting_started/machine_id.jpg)
:::

## Install game servers & services
Navigate to the machine settings and click the `Actions` button in the __top-right corner__.

![Install game server & services on machine](/img/dashboard/machines/getting_started/install_gameserver_service.jpg)


### Game servers
Select the game, [Config template](/dashboard/game_servers/config_templates) and [Cluster](/dashboard/game_servers/clusters) for the new game server. From there you can select which machine the game server is installed on.

:::info OS support
Not all games are available on every Operating System (OS). You can see which OS's are supported per game.

![OS support per game](/img/dashboard/machines/getting_started/game_os_support.jpg)
:::

![Install game server on machine 1](/img/dashboard/machines/getting_started/install_gameserver_1.jpg)

Click `Install game server now` to install the new game server on the selected machine.

![Install game server on machine 2](/img/dashboard/machines/getting_started/install_gameserver_2.jpg)

[Learn how to configure & manage game servers >](/dashboard/game_servers/getting_started)

### Services
Depending on the Operating System (OS) of the machine, you can install a variety of services.

![Install service on machine 1](/img/dashboard/machines/getting_started/install_service_1.jpg)

After clicking a service, DediConnect will begin installing the service.

![Install service on machine 2](/img/dashboard/machines/getting_started/install_service_2.jpg)

![Install service on machine 3](/img/dashboard/machines/getting_started/install_service_3.jpg)

[Learn more about the available services >](/dashboard/machines/services)

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

### Throttle / stagger actions
In certain cases you may want to reduce the number of things that happen simultaneously on your machine. When too many things, like updating all game servers, happen simultaneously it might cause severe performance issues with a machine.

Mitigate this problem by settings a limit to how many things DediConnect will make the machine do in parallel.

:::tip finetuning
If you experience issues with your machine it can be useful to test various settings. Start with a low number and slowly work your way up. Test the new settings, by updating all game server simultaneously, before making new changes.
:::

![Machine settings - rename machine](/img/dashboard/machines/getting_started/throtte_stagger_machine_actions.jpg)

### Update machine credentials
This is usually only useful after you re-installed the machine. 

![Machine settings - update credentials](/img/dashboard/machines/getting_started/update_machine_credentials.jpg)

### Steam download credentials
In rare occasions the required game server files can only be downloaded from Steam when the machine is logged in with a Steam account that bought the game. When you're trying to install a game that requires this you need to enter the Steam account credentials here and disabled Steam Guard.

While we agree that having to enter Steam credentials and disabling Steam Guard is far from ideal, it's currently the only option.

![Machine settings - steam download credentials](/img/dashboard/machines/getting_started/machine_steam_download_credentials.jpg)


## Danger zone

:::warning Danger zone
As the name implies: things you can do here are dangerous and can cause data loss!
:::

![Machine Danger zone](/img/dashboard/machines/getting_started/machine_danger_zone.jpg)

### Change IP
When the IP for the machine changed you can update it here.

![Machine Danger zone - change IP](/img/dashboard/machines/getting_started/change_machine_ip.jpg)

### Reinstall machine

:::caution
Reinstalling the machine will remove all game servers and cause data loss. Make sure you created backups and [downloaded those backups](/getting_started/dediconnect/practical_info#directories--folders)!

After you reinstalled the OS, make sure to [update the machine credentials](/dashboard/machines/getting_started#update-machine-credentials).
:::

![Machine Danger zone - reinstall machine](/img/dashboard/machines/getting_started/reinstall_machine.jpg)

### Delete machine
Removing a machine is permanent. __It can not be undone__.

This action does not remove files from the machine, but will remove all data on GSA about the machine.

![Machine Danger zone - delete machine](/img/dashboard/machines/getting_started/delete_machine.jpg)
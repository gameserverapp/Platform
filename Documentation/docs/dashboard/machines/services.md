---
title: Services
sidebar_position: 1
---

DediConnect can install various services on your machine. These services are optional and are usually required by game servers, like needing a MySQL database to store data.


## Available services

### MySQL / MariaDB
DediConnect installs MariaDB, which is a MySQL drop-in replacement with generally better performance and support.

Beside the general connection information for the main database can you also find the `root` account information + examples for plugin settings.

![MySQL service settings](/img/dashboard/machines/services/mysql_service_settings.jpg)

### Syncthing
With Syncthing you can synchronize [`cluster` data](/getting_started/dediconnect/practical_info#directories--folders), which is required for games like [ARK: Survival Evolved to support Cross ARK travel](https://docs.gameserverapp.com/dashboard/game_servers/game_specific/ark_survival_evolved).

For optimal performance we recommend each machine is connected with every other machine. In the example below we sync 2 machines. Repeat the steps if you have more machines.

#### 1. Install Syncthing & open settings url
Install Syncthing on all machines that need to be synchronized. When the service finished installing, head over to the `Settings` page and open the Syncthing URL for all Syncthing services you installed.

![Syncthing syncing setup 1](/img/dashboard/machines/services/syncthing_settings_1.jpg)

#### 2. Find & copy Syncthing ID for machine A
In the Syncthing interface, hit `Actions` and `Show ID`.

![Syncthing syncing setup 2](/img/dashboard/machines/services/syncthing_settings_2.jpg)

![Syncthing syncing setup 3](/img/dashboard/machines/services/syncthing_settings_3.jpg)

#### 3. Add Syncthing ID to machine B

On Machine B click "Add remote device" and paste the ID (the one you copied from machine A) in here. __Do NOT click Save yet.__

![Syncthing syncing setup 4](/img/dashboard/machines/services/syncthing_settings_4.jpg)

Navigate to the `Sharing` tab and activate `backup` and `cluster`. Then hit `Save`.

![Syncthing syncing setup 5](/img/dashboard/machines/services/syncthing_settings_5.jpg)

#### 4. Confirm on machine A
Now go back to the Syncthing interface on Machine A. After a short while a confirmation window will show up. This will ask you to confirm that you want to connect with Machine B.
__Do not add any device that you do not recognise__.

![Syncthing syncing setup 6](/img/dashboard/machines/services/syncthing_settings_6.jpg)

![Syncthing syncing setup 7](/img/dashboard/machines/services/syncthing_settings_7.jpg)

#### 5. Confirm sharing folders
After confirming to connect with Machine B, Syncthing will ask to confirm sharing the "backup" and "cluster" folder. Click "Share" for both.

![Syncthing syncing setup 8](/img/dashboard/machines/services/syncthing_settings_8.jpg)


#### 6. Ready!
Verify all `Remote devices` are connected.

![Syncthing syncing setup 9](/img/dashboard/machines/services/syncthing_settings_9.jpg)





## Management
Like with game servers can you reinstall a service or delete it. Activity logs are also available for services.

![Service settings 1](/img/dashboard/machines/services/service_settings_1.jpg)

### Settings
Rename services or move them to a different cluster.

Settings specific to services are also listed on the `Settings` page. See [available services](#available-services) for more information.

![Service settings 2](/img/dashboard/machines/services/service_settings_2.jpg)



### Activity
All activity for a service, either initiated by an admin or the DediConnect system is reported to the activity page. Issues are also reported here.

:::tip Dashboard widget
Bring activity logs to your dashboard panels using the "Events & activity" [dashboard widget](/dashboard/dashboard_panel_widgets).
:::

![Service activity](/img/dashboard/machines/services/service_activity.jpg)

### Danger zone

:::warning Danger zone
As the name implies: things you can do here are dangerous and can cause data loss!
:::

Restart, re-install or delete a service via the Danger zone section.

![Service activity](/img/dashboard/machines/services/service_danger_zone.jpg)

---
title: Services
sidebar_position: 1
---

DediConnect allows you to install various services on your machine. These services are optional, but often required for certain game servers, such as needing a MySQL database to store persistent data.

## How to install a service

To get started, go to the machine settings, click the `Actions` button in the __top-right corner__, and select `Install service`.

[Go to Machines >](https://dash.gameserverapp.com/machine)

![Install game server & services on machine](/img/dashboard/machines/getting_started/install_gameserver_service.jpg)

## Available services

### MySQL / MariaDB

DediConnect installs MariaDB, a drop-in replacement for MySQL that offers better performance and broader support in most cases.

Alongside the general connection details for the main database, you'll also find the `root` account credentials and example plugin configurations.

![MySQL service settings](/img/dashboard/machines/services/mysql_service_settings.jpg)

### Syncthing

Syncthing enables you to synchronize [`cluster` data](/dashboard/machines/practical_info#directories--folders), which is essential for features like [Cross ARK travel in ARK: Survival Evolved](/dashboard/game_servers/game_specific/ark_survival_evolved).

For optimal synchronization, we recommend connecting each machine to every other machine. The steps below demonstrate how to sync two machines. Repeat these steps to add more machines.

#### 1. Install Syncthing & open the settings URL

Install Syncthing on every machine that needs to sync. Once installed, go to the `Settings` page and open the Syncthing URL for each of the installed services.

![Syncthing syncing setup 1](/img/dashboard/machines/services/syncthing_settings_1.jpg)

#### 2. Find & copy Syncthing ID from Machine A

In the Syncthing interface, click `Actions` and then `Show ID` to reveal the machine’s unique identifier.

![Syncthing syncing setup 2](/img/dashboard/machines/services/syncthing_settings_2.jpg)

![Syncthing syncing setup 3](/img/dashboard/machines/services/syncthing_settings_3.jpg)

#### 3. Add Syncthing ID to Machine B

On Machine B, click "Add remote device" and paste the ID from Machine A. __Do not click Save yet.__

![Syncthing syncing setup 4](/img/dashboard/machines/services/syncthing_settings_4.jpg)

Next, navigate to the `Sharing` tab and activate both `backup` and `cluster`, then click `Save`.

![Syncthing syncing setup 5](/img/dashboard/machines/services/syncthing_settings_5.jpg)

#### 4. Confirm connection on Machine A

Return to Machine A’s Syncthing interface. After a short wait, a prompt will appear asking to confirm the connection with Machine B.  
__Only confirm devices you recognize and trust.__

![Syncthing syncing setup 6](/img/dashboard/machines/services/syncthing_settings_6.jpg)

![Syncthing syncing setup 7](/img/dashboard/machines/services/syncthing_settings_7.jpg)

#### 5. Confirm folder sharing

Once the connection is confirmed, Syncthing will prompt you to approve sharing the "backup" and "cluster" folders. Click "Share" for both.

![Syncthing syncing setup 8](/img/dashboard/machines/services/syncthing_settings_8.jpg)

#### 6. All done!

Make sure all `Remote devices` show as connected.

![Syncthing syncing setup 9](/img/dashboard/machines/services/syncthing_settings_9.jpg)

## Management

As with game servers, you can reinstall or delete services. Activity logs for each service are also available.

![Service settings 1](/img/dashboard/machines/services/service_settings_1.jpg)

### Settings

You can rename services or assign them to a different cluster.

Service-specific settings can be found on the `Settings` page. See the [Available services](#available-services) section above for more details.

![Service settings 2](/img/dashboard/machines/services/service_settings_2.jpg)

### Activity

All service activity, whether initiated by an admin or by DediConnect, is logged on the activity page. Any issues will also be displayed here.

:::tip Dashboard widget
You can display service activity logs in your dashboard panels using the "Events & activity" [dashboard widget](/dashboard/dashboard_panel_widgets).
:::

![Service activity](/img/dashboard/machines/services/service_activity.jpg)

### Danger zone

:::warning Danger zone
As the name suggests: actions in this section are potentially destructive and can lead to data loss!
:::

You can restart, reinstall, or delete a service via the Danger zone.

![Service activity](/img/dashboard/machines/services/service_danger_zone.jpg)

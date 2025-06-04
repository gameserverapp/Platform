---
title: Backups
sidebar_position: 1
---

Create manual backups, restore backups from other game servers, and configure automatic backups such as pre-update, pre-shutdown, or daily scheduled backups.

![Game server - backups](/img/dashboard/gameserver/backups/gameserver_backups.jpg)

## Create manual backup

You can create a manual backup from the `Backups` tab under the Game server settings.\
Click on `+ Create backup` to begin.

![Game server - create manual backup 1](/img/dashboard/gameserver/backups/create_manual_backup_1.jpg)

Enter a name for your backup, then click `Start`.

![Game server - create manual backup 2](/img/dashboard/gameserver/backups/create_manual_backup_2.jpg)

Once the backup is complete, the page will refresh automatically.

![Game server - create manual backup 3](/img/dashboard/gameserver/backups/create_manual_backup_3.jpg)

## Restore, convert & delete

You can restore any backup, as long as it was created for the same game. \
Note that only `manual` backups can be deleted.

In certain cases you may want to prevent automatic backups from being deleted. \
By converting them to manual backups, they will no longer be automatically deleted.

:::info clean up
Automatic daily backups are automatically removed after 7 days.
:::

![Game server - restore backup](/img/dashboard/gameserver/backups/backup_restore.jpg)

### Restore from other game server

Select the desired game server in the sidebar.

:::info multi-machine backup sync
If the target game server is hosted on another machine, ensure [Syncthing](/dashboard/machines/services#syncthing) is installed and set up to sync backups between machines.
:::

![Game server - restore backup](/img/dashboard/gameserver/backups/backup_restore_other_game_server.jpg)

## Smart backups

No more worrying about updates breaking your save files without a backup!

![Game server - smart backups](/img/dashboard/gameserver/backups/smart_backups.jpg)

### Pre-update

When enabled, a backup is automatically created just before the game server updates.

### Pre-shutdown

If enabled, a backup is automatically created before the game server shuts down or restarts. \
To avoid unnecessary backups, this will be skipped if the server has been online for less than 20 minutes.

### Daily backups

GameServerApp creates automatic backups twice per day, ensuring you always have a recent working backup. \
These daily backups run at fixed times and cannot be changed. Use Tasks for full control over scheduling.

:::tip Convert automatic backups to manual backups
In certain cases you may want to prevent automatic backups from being deleted, like `pre-update` backups. \
By converting them to manual backups, they will no longer be automatically deleted.
:::

## Custom backup schedule (task)

For more control, you can use [Scheduled Tasks](/dashboard/automate_tasks/getting_started#scheduled) to set up your own backup schedule. \
The example below creates a backup every 30 minutes and retains up to 10 versions.

![Game server - backup task](/img/dashboard/gameserver/backups/backup_task.jpg)

## Blueprint

Control which files are included in your backups using [blueprints](/dashboard/blueprints/getting_started). \
This is especially helpful if you're running a custom server setup.

---
title: Backups
sidebar_position: 1
---

Create manual backups, restore backups from other game servers and configure pre-update & pre-shutdown backups or automatic daily updates.

![Game server - backups](/img/dashboard/gameserver/backups/gameserver_backups.jpg)

## Create manual backup

Manual backups are created from the `Backups` tab under Game server settings.\
Hit `+ Create backup` to create a backup.

![Game server - create manual backup 1](/img/dashboard/gameserver/backups/create_manual_backup_1.jpg)

Enter a name for the backup and hit `Start`.

![Game server - create manual backup 2](/img/dashboard/gameserver/backups/create_manual_backup_2.jpg)

When the backup is ready, the page will automatically reload.

![Game server - create manual backup 3](/img/dashboard/gameserver/backups/create_manual_backup_3.jpg)


## Restore / delete
All backups can be restored, assuming they are backups of the same game.\
Only `manual` backups can be deleted.

:::info clean up
Automatic daily backups are automatically deleted after 7 days.
:::

![Game server - restore backup](/img/dashboard/gameserver/backups/backup_restore.jpg)

### Restore from other game server
Select the game server in the sidebar. 

:::info multi-machine backup sync
Make sure you have [Syncthing](/dashboard/machines/services#syncthing) setup when the game server is hosted on a different machine, to sync the backups between the machines.
:::

![Game server - restore backup](/img/dashboard/gameserver/backups/backup_restore_other_game_server.jpg)


## Smart backups
Gone are the days when updates break the save files and there are no backups!

![Game server - smart backups](/img/dashboard/gameserver/backups/smart_backups.jpg)

### Pre-update
When enabled a backup is automatically created right before the game server is updated. 

### Pre-shutdown
If enabled, a backup is automatically created right before the game server is shutdown and/or restarted.\
When the game server was started less than 20 minutes ago, backups are skipped.

### Daily backups
GSA will automatically create backups twice per day, so you always have a "working state" backup. Daily backups run at predefined moments and cannot be changed. Use Tasks for custom schedules.

## Custom backup schedule (task)
When a custom schedule is preferred you can use [Scheduled Tasks to create custom backup task schedules](/dashboard/automate_tasks/getting_started#scheduled).\
The example below runs every 30 minutes and retains 10 copies. 

![Game server - backup task](/img/dashboard/gameserver/backups/backup_task.jpg)


## Blueprint
Control what files are included in backups, using [blueprints](/dashboard/blueprints/getting_started). This is useful when you have a custom game server setup.
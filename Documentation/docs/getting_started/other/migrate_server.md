---
title: Migrate game server
sidebar_position: 1
---

Learn how to migrate your old game server to a new game server with these simple steps.

:::caution Turn off both game servers
Before starting it is important that both game servers are turned off, to avoid data loss.
:::

:::info DediConnect FTP credentials
You can find the FTP credentials for your DediConnect game servers on the `Connect` tab (Go to `Game server settings` -> `Connect`).
:::

## 1. Download files from old game server
Log in on the old game server using [FTP](https://filezilla-project.org/download.php?type=client) or [RDP](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) and download all:
- Save files
- Game config files *
- Plugin / mod setting files*

_\* = Skip these when migrating between DediConnect game servers or when the game server does not support it._

If you're not sure where to find the files, contact the hosting provider.



## 2. Upload save files to new game server

Connect with the new game server using [FTP](https://filezilla-project.org/download.php?type=client) or [RDP](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) and upload the old save files to the save files directory on the new game server.


## 3. Add configs to the Config template

:::info DediConnect migration
Skip this steps when migrating between DediConnect game servers.

Simply activate the existing Config template on the new game server to migrate the configs.
:::

GSA uses `Config templates` to manage config files. `Config templates` let you manage the config files via the dashboard and automatically deploy them to the game servers.

[Learn more about Config templates >](/dashboard/game_servers/config_templates)


### Game configs

Upload the configs from the old game server to a Config template.


### Plugin / mod configs
Upload the plugin & mod configs to a Config template. This is only supported for DediConnect game servers.

## 4. Import ban list
You can import your existing ban list to GSA via the [Import page >](https://dash.gameserverapp.com/configure/import).


![Translate menu](/img/getting_started/other/import_banlist.jpg)

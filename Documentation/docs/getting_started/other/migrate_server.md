---
title: Migrate game server
sidebar_position: 1
---

Learn how to migrate your old game server to a new one by following these straightforward steps.

:::caution Turn off both game servers
Before beginning, make sure **both** the old and new game servers are turned off. This is critical to prevent data loss.
:::

:::info DediConnect FTP credentials
You can find the FTP login details for your DediConnect servers under the `Connect` tab. Go to `Game server settings` → `Connect`.
:::

:::tip Migrating between DediConnect machines?
If you're moving a server between two DediConnect machines, [check out this guide instead >](/dashboard/game_servers/getting_started#migrate--move-to-another-machine)

![Game server - danger zone - migrate](/img/dashboard/gameserver/getting_started/gameserver_dangerzone_migrate.jpg)
:::

## 1. Download files from the old game server

Access your old server using either [FTP](https://filezilla-project.org/download.php?type=client) or [RDP](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab). Download all essential data, including:

- Save files
- Game configuration files *
- Plugin or mod settings files *

_\* You can skip these if you're migrating between DediConnect servers, or if your game server does not use them._

If you’re unsure where to find these files, contact your hosting provider for assistance.

## 2. Upload save files to the new game server

Use [FTP](https://filezilla-project.org/download.php?type=client) or [RDP](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab) to connect to the new server. Upload the previously downloaded save files into the appropriate save directory.

## 3. Add config files to the Config template

:::info DediConnect migration
If you're migrating between DediConnect game servers, you can skip this step.

Just activate the existing Config template on your new server to apply the necessary configs.
:::

GameServerApp uses `Config templates` to manage server configuration files. These templates allow you to edit and deploy config files directly from the dashboard.

[Learn more about Config templates >](/dashboard/game_servers/config_templates)

### Game configs

Upload your configuration files from the old server to a new or existing Config template.

### Plugin / mod configs

If supported, upload plugin and mod configuration files to the Config template. This feature is available only for DediConnect game servers.

## 4. Import your ban list

You can bring your existing ban list into GSA using the [Import page >](https://dash.gameserverapp.com/configure/import).

![Translate menu](/img/getting_started/other/import_banlist.jpg)

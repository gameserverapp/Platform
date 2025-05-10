---
title: Getting Started
sidebar_position: 0
---

Blueprints allow you to customize how game servers and services operate behind the scenes. They also control which fields appear in [Config templates](/dashboard/game_servers/config_templates).

Blueprints are also useful when you want to host games or services that aren't officially supported by GameServerApp.

[Go to Blueprints >](https://dash.gameserverapp.com/server/blueprint)

:::tip Blueprint Marketplace
Need ideas or want to get started quickly? Visit the [Blueprint Marketplace >](https://dash.gameserverapp.com/marketplace/market/blueprint)
:::

## What Are Blueprints?

You may recognize the term "blueprint" from construction or certain games.

In GameServerApp, blueprints work similarly, they define how game servers and Config templates behave. They determine where files are stored, which files are included in backups, how services should operate, and more.

Blueprints are especially useful for:
- Hosting unsupported games or services.
- Modifying server behavior.
- Tailoring your setup to better match your community’s needs.

## Using Blueprints

### Switching Blueprints

When configuring [game servers](/dashboard/game_servers/getting_started#change-blueprint) or [Config templates](/dashboard/game_servers/config_templates#settings), you’ll often see a dropdown menu for selecting a `blueprint`.

You can choose from:
- **GameServerApp blueprints** – Official blueprints provided by GSA.
- **Followed blueprints** – Community blueprints you've [followed from the marketplace](/dashboard/blueprints/getting_started#follow-a-marketplace-blueprint).
- **Your blueprints** – Blueprints you've created or forked, or that other [admins](/dashboard/admin_teams) have made available.

![Blueprint - Using Blueprints - Select Blueprint Dropdown](/img/dashboard/blueprint/getting_started/blueprint_select_dropdown.jpg)

### Versions

Each time a blueprint is updated by its author, a new version is created.  
This allows you to track what has changed and revert if necessary.

If an update is available, you can [apply the latest version to your game servers and Config templates](/dashboard/blueprints/getting_started#activate-blueprint-version).

![Blueprint - Using Blueprints - Blueprint Versioning](/img/dashboard/blueprint/getting_started/blueprint_versioning.jpg)

#### Activate Blueprint Version

To activate a blueprint version, go to the blueprint page, select the version from the menu on the right, and click `Activate selected version`.  
In the popup that appears, choose one or more game servers and/or Config templates.

Make sure the game servers are shut down before switching versions.

![Blueprint - Using Blueprints - Blueprint Activate Version](/img/dashboard/blueprint/getting_started/blueprint_version_activate.jpg)

The [Marketplace](/dashboard/marketplace) is a great place to discover both official and community-made blueprints.

### Follow a Marketplace Blueprint

The [Blueprint Marketplace](https://dash.gameserverapp.com/marketplace/market/blueprint) features a variety of pre-built blueprints.  
Use the search and filter options to find the one that best fits your needs.

Filters include OS (Linux or Windows), Type (official or community), and Game.

![Blueprint - Follow Blueprint - Search Marketplace](/img/dashboard/blueprint/getting_started/follow_blueprint_search_filters.jpg)

#### Follow Blueprint

When you've found a blueprint you want to use, click the `Follow` button in the top-right corner.

This downloads the blueprint to your dashboard, making it available for game servers and Config templates.

![Blueprint - Follow Blueprint - Follow Blueprint](/img/dashboard/blueprint/getting_started/follow_blueprint.jpg)

You can activate the blueprint immediately.  
Remember to shut down the game servers first.

![Blueprint - Follow Blueprint - Follow Blueprint Modal](/img/dashboard/blueprint/getting_started/follow_blueprint_modal.jpg)

#### Done!

The blueprint is now available on your dashboard and can be used in game servers and Config templates.  
If you followed the wrong one, just delete it to remove it from your dashboard.

**Blueprint Updates**  
When a followed blueprint gets updated by its author, the new version will appear on your dashboard.  
However, it will not automatically [update on your servers](/dashboard/blueprints/getting_started#versions). You need to activate it manually.

![Blueprint - Follow Blueprint - Show Followed Blueprint on Blueprint Overview](/img/dashboard/blueprint/getting_started/follow_blueprint_overview.jpg)

### Manage

#### Clone

Cloning a blueprint creates an exact copy.  
The clone is automatically unpublished, and all versions are placed in `DEV mode`.

![Blueprint - Manage - Clone Blueprint](/img/dashboard/blueprint/getting_started/clone_blueprint.jpg)

#### Fork

Forking works like cloning but with one key difference:  
You can’t clone marketplace blueprints, but you can fork them if the author has allowed it.

Forking copies the original so you can modify it.  
If forking is disabled, the fork button won’t appear.

![Blueprint - Manage - Fork Blueprint](/img/dashboard/blueprint/getting_started/fork_blueprint.jpg)

#### Delete

If you no longer need a blueprint, delete it from the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint).

![Blueprint - Manage - Delete Blueprint](/img/dashboard/blueprint/getting_started/delete_blueprint.jpg)

## What Blueprints Can Do For...

[Start creating your first blueprint >](/dashboard/blueprints/create_and_manage_blueprints)

### Game Servers

Blueprints give you control over nearly every server aspect, such as:
- Executables, launch parameters, and Steam server IDs.
- Monitoring tools to check online status.
- RCON, Telnet, or WebSocket commands (e.g., save, broadcast).
- Files included in backups or deleted during wipes.
- FTP file/directory visibility.
- Docker settings (images, ports, mounts, etc.).

### Config Templates

Each blueprint includes a `Config template` section for registering config files and parameters.  
GameServerApp takes care of uploading and applying them to the server.

After making changes, [activate the updated blueprint version](/dashboard/blueprints/getting_started#activate-blueprint-version) to apply them.

![Blueprint - What Blueprints Can Do For - Config Templates](/img/dashboard/blueprint/getting_started/blueprint_reference_config_template.jpg)

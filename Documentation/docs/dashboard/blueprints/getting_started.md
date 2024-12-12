---
title: Getting Started
sidebar_position: 0
---

Blueprints allow you to customize how game servers and services operate behind the scenes. They also control the fields available in [Config templates](/dashboard/game_servers/config_templates).

Blueprints can also be used to host games and services that aren't officially supported by GameServerApp.

[Go to Blueprints >](https://dash.gameserverapp.com/server/blueprint)

:::tip Blueprint Marketplace
Find inspiration or get started with GSA's Blueprints using the [Blueprint marketplace >](https://dash.gameserverapp.com/marketplace/market/blueprint)
:::

## What Are Blueprints?

The term "blueprint" might be familiar from games or construction plans.

GameServerApp blueprints work similarly—they're like schematics that define how game servers and Config templates should behave, where files are stored, what to include in backups, and more.

Blueprints are useful for:
- Hosting games and services not available on the GSA platform.
- Modifying behavior on existing servers.
- Tailoring game servers to better fit your community.

## Using Blueprints

### Switching Blueprints

When working with [game servers](/dashboard/game_servers/getting_started#change-blueprint) or [Config templates](/dashboard/game_servers/config_templates#settings), you may encounter a dropdown menu where you can select a `blueprint`.

You can choose from three types of blueprints:
- **GameServerApp blueprints** - Official/default GSA blueprints available by default.
- **Followed blueprints** - Community-generated blueprints that you [follow on the marketplace](/dashboard/blueprints/getting_started#follow-a-marketplace-blueprint).
- **Your blueprints** - Blueprints you've created, [forked](/dashboard/blueprints/getting_started#fork), or those created by [admins](/dashboard/admin_teams) on your dashboard.

![Blueprint - Using Blueprints - Select Blueprint Dropdown](/img/dashboard/blueprint/getting_started/blueprint_select_dropdown.jpg)

### Versions

Each time an author updates a blueprint, a new version is created.\
Versions help you track changes and allow you to revert to earlier versions if needed.

When a new blueprint version is available, you can [update your game servers and Config templates to the latest version](/dashboard/blueprints/getting_started#activate-blueprint-version).

![Blueprint - Using Blueprints - Blueprint Versioning](/img/dashboard/blueprint/getting_started/blueprint_versioning.jpg)

#### Activate Blueprint Version

To activate a blueprint version, select it from the version menu on the right side of the blueprint page, and click `Activate selected version`. Then, choose one or more game servers and/or Config templates in the popup.

The selected game servers and Config templates will switch to the new blueprint version.\
Ensure that game servers are shut down before changing the blueprint.

![Blueprint - Using Blueprints - Blueprint Activate Version](/img/dashboard/blueprint/getting_started/blueprint_version_activate.jpg)

The [marketplace](/dashboard/marketplace) is a great place to get inspired and share with the community, offering both official and community-generated blueprints.

### Follow a Marketplace Blueprint

The [blueprint marketplace](https://dash.gameserverapp.com/marketplace/market/blueprint) is an excellent resource for finding ready-to-use blueprints.\
Use the search and filter options to narrow down your results and find the perfect blueprint.

You can filter results by OS (Linux or Windows), Type (official or community-generated blueprints), and Game.

![Blueprint - Follow Blueprint - Search Marketplace](/img/dashboard/blueprint/getting_started/follow_blueprint_search_filters.jpg)

#### Follow Blueprint

Once you find the right blueprint, click the `Follow` button in the top-right corner.

Following a blueprint downloads it to your dashboard, making it available for use on game servers and Config templates.

![Blueprint - Follow Blueprint - Follow Blueprint](/img/dashboard/blueprint/getting_started/follow_blueprint.jpg)

You can also activate the blueprint on game servers and Config templates immediately.\
Remember to shut down game servers before changing the blueprint.

![Blueprint - Follow Blueprint - Follow Blueprint Modal](/img/dashboard/blueprint/getting_started/follow_blueprint_modal.jpg)

#### Done!

The blueprint is now visible on your dashboard and ready to use with game servers and Config templates.\
If you made a mistake, you can delete the followed blueprint to remove it from your dashboard.

**Blueprint Updates**\
When the blueprint author uploads a new version, it will appear on your dashboard. However, game servers and Config templates won't automatically [update to the latest version](/dashboard/blueprints/getting_started#versions).

![Blueprint - Follow Blueprint - Show Followed Blueprint on Blueprint Overview](/img/dashboard/blueprint/getting_started/follow_blueprint_overview.jpg)

### Manage

#### Clone

Cloning a blueprint creates an exact copy of the original.\
Clones are automatically unpublished, and all blueprint versions switch to `DEV mode`.

![Blueprint - Manage - Clone Blueprint](/img/dashboard/blueprint/getting_started/clone_blueprint.jpg)

#### Fork

Forking is similar to cloning; it creates an exact copy of the original.

The key difference between forking and cloning is that you can't clone a blueprint from the marketplace. If a marketplace blueprint allows forking, you can copy the original and make changes.

The blueprint author can disable forking; in that case, the fork button won't be visible.

![Blueprint - Manage - Fork Blueprint](/img/dashboard/blueprint/getting_started/fork_blueprint.jpg)

#### Delete

If you no longer need a blueprint, you can remove it through the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint).

![Blueprint - Manage - Delete Blueprint](/img/dashboard/blueprint/getting_started/delete_blueprint.jpg)

## What Blueprints Can Do For...

[Learn how to create your first blueprint >](/dashboard/blueprints/create_and_manage_blueprints)

### Game Servers

Blueprints can modify nearly every aspect of a game server, including:
- Executables, launch parameters, Steam server ID for installation & updates.
- Methods for monitoring game server online status.
- RCON/Telnet/WebSocket connection methods & commands (save, broadcast, etc.).
- Files to include in backups & remove during wipes.
- Available files & directories via FTP.
- Docker container settings (image, mounts, ports, etc.).

### Config Templates

Every blueprint includes a `Config template` section where configuration files and parameters are registered.
GameServerApp handles uploading the files and parameters to the game server.

After modifying the `Config template` section of a blueprint, you should [activate the new blueprint version](/dashboard/blueprints/getting_started#activate-blueprint-version) to apply the changes to game servers and Config templates.

![Blueprint - What Blueprints Can Do For - Config Templates](/img/dashboard/blueprint/getting_started/blueprint_reference_config_template.jpg)

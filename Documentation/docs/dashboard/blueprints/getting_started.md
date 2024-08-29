---
title: Getting started
sidebar_position: 0
---
Blueprints are used to customize how game servers & services work under the hood, and control what fields are available on [Config templates](/dashboard/game_servers/config_templates).

They can also be used to host games & services that are not officially supported by GameServerApp.

[Go to Blueprints >](https://dash.gameserverapp.com/server/blueprint)

:::tip Blueprint Marketplace
Not sure where to begin?\
Browse the [Blueprint marketplace](/dashboard/blueprints/getting_started#how-to-follow-a-blueprint) for existing blueprints and launch a game server without any hassle.
:::

## What Are Blueprints?
You are probably familiar with the term “blueprint” from games or, alternatively, as a blueprint used in construction.

GameServerApp's blueprint works in a similar way: it's like a schematic that describes how game servers & Config templates should behave, where files are stored, what files to include in backups, etc.

Blueprints are useful for:
- Hosting games & services currently not available on the GSA platform.
- Changing behavior for existing servers.
- Tuning game servers to better fit your community.

## Using Blueprints

### Switching Blueprints

While working with [game servers](/dashboard/game_servers/getting_started#change-blueprint) or [Config templates](/dashboard/game_servers/config_templates#settings), you may come across a dropdown menu that lets you select a `blueprint`.

You can choose from 3 blueprint categories:
- **GameServerApp blueprints** - Official / Default GSA blueprints that are available by default.
- **Followed blueprints** - Community-generated blueprints that you [follow on the marketplace](/dashboard/blueprints/getting_started#follow-a-marketplace-blueprint).
- **Your blueprints** - Blueprints created or [forked](/dashboard/blueprints/getting_started#fork) by you (or [admins](/dashboard/admin_teams) on your dashboard).

![Blueprint - Using Blueprints - Select Blueprint Dropdown](/img/dashboard/blueprint/getting_started/blueprint_select_dropdown.jpg)

### Versions
Each time the author makes changes to a blueprint, it's saved as a new version.\
Versions help you track changes and enable you to roll back to earlier versions if needed.

When a new blueprint version is released, you can [update game servers and Config templates to the latest version](/dashboard/blueprints/getting_started#activate-blueprint-version).

![Blueprint - Using Blueprints - Blueprint Versioning](/img/dashboard/blueprint/getting_started/blueprint_versioning.jpg)

#### Activate Blueprint Version
Select a blueprint version on the right-hand version menu on the blueprint page, and click `Activate selected version`. Then select one or multiple game servers and/or Config templates in the popup.

The selected game servers & Config templates will have their blueprint changed to the selected version.\
Game servers must be shut down before changing the blueprint.

![Blueprint - Using Blueprints - Blueprint Activate Version](/img/dashboard/blueprint/getting_started/blueprint_version_activate.jpg)

The marketplace is a source for inspiration and a place to share with the community, where you can find official and community-generated blueprints.

### Follow a Marketplace Blueprint

The [blueprint marketplace](https://dash.gameserverapp.com/marketplace/market/blueprint) is a great place for finding ready-for-use blueprints.\
Use the search & filters to narrow down the results and help you find the right blueprint.

You can filter the results by OS (Linux or Windows), Type (Official or community-generated blueprints), and Game.

![Blueprint - Follow Blueprint - Search Marketplace](/img/dashboard/blueprint/getting_started/follow_blueprint_search_filters.jpg)

#### Follow Blueprint
When you find the right blueprint, hit the `Follow` button in the top-right corner.

Following a blueprint will download the blueprint to your dashboard and make it available to use on game servers and Config templates.

![Blueprint - Follow Blueprint - Follow Blueprint](/img/dashboard/blueprint/getting_started/follow_blueprint.jpg)

Optionally, you can activate the blueprint on game servers and Config templates immediately.\
Game servers must be shut down before changing the blueprint.

![Blueprint - Follow Blueprint - Follow Blueprint Modal](/img/dashboard/blueprint/getting_started/follow_blueprint_modal.jpg)

#### Done!
The blueprint is now visible on your dashboard and can be used with game servers and Config templates.\
If you made a mistake, you can delete the followed blueprint. This will remove it from your dashboard again.

**Blueprint Updates**\
When the blueprint author uploads a new version, it will be available on your dashboard too. Game servers and Config templates do not automatically [update to the latest version](/dashboard/blueprints/getting_started#versions).

![Blueprint - Follow Blueprint - Show Followed Blueprint on Blueprint Overview](/img/dashboard/blueprint/getting_started/follow_blueprint_overview.jpg)

### Manage

#### Clone
By cloning a blueprint, you create an exact copy of the original.\
Clones are automatically unpublished and all blueprint versions will be switched over to `DEV mode`.

![Blueprint - Manage - Clone Blueprint](/img/dashboard/blueprint/getting_started/clone_blueprint.jpg)

#### Fork
Forking is essentially the same as cloning: it creates an exact copy of the original.

The key difference between forking and cloning is that you can't clone a blueprint from the marketplace. If the marketplace blueprint supports forking, it allows you to copy the original and make changes.

The blueprint author can disable the ability to fork a blueprint. In that case, the fork button won't be visible.

![Blueprint - Manage - Fork Blueprint](/img/dashboard/blueprint/getting_started/fork_blueprint.jpg)

#### Delete
When you no longer need a blueprint, you can remove it via the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint).

![Blueprint - Manage - Delete Blueprint](/img/dashboard/blueprint/getting_started/delete_blueprint.jpg)

## What Blueprints Can Do For...

[Learn how to create your first blueprint >](/dashboard/blueprints/create_and_manage_blueprints)

### Game Servers
Blueprints can change almost every aspect of a game server, such as:
- Executables, launch parameters, Steam server ID for install & updates.
- Method for monitoring game server online status.
- RCON/Telnet/Websocket connection method & commands (save, broadcast, etc.).
- What files must be included in backups & removed on a wipe.
- The available files & directories via FTP.
- Docker container settings (image, mounts, ports, etc.).

### Config Templates
Every blueprint comes with a `Config template` section. This is where configuration files and parameters are registered.
GameServerApp takes care of uploading the files and parameters to the game server.

After changing the `Config template` section on a blueprint, you should [activate the new blueprint version](/dashboard/blueprints/getting_started#activate-blueprint-version) to apply the changes to the game servers & Config templates.

![Blueprint - What Blueprints Can Do For - Config Templates](/img/dashboard/blueprint/getting_started/blueprint_reference_config_template.jpg)

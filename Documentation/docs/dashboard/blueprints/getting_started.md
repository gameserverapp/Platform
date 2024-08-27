---
title: Getting started
sidebar_position: 0
---

Blueprints are used to customize how game servers & services work under the hood, and control what fields are available on [Config templates](/dashboard/game_servers/config_templates).

They can also be used to host games & services that are not officially supported by GameServerApp.

[Go to Blueprints >](https://dash.gameserverapp.com/server/blueprint)

:::tip Blueprint marketplace
Not sure where to begin?\
Browse the [Blueprint marketplace](/dashboard/blueprints/getting_started#how-to-follow-a-blueprint) for existing blueprints and launch a game server without any hassle.
:::

## What are blueprints?
You are probably familiar with the term “blueprint” from games or, alternatively, as a blue piece of paper that has drawings on it used for the construction of new buildings.

GameServerApp's blueprint works in a similar way: it's a (json) schematic that describes how game servers & Config templates should behave, where files are stored, what files to include in backups etc.

Blueprints are useful for:
- hosting games & services currently not available on the GSA platform,
- change behavior for existing servers,
- tune game servers to better fit your community.


## Using blueprints
When working with [game servers](/dashboard/game_servers/getting_started) or [Config templates](/dashboard/game_servers/config_templates), you may come across a dropdown menu that lets you select a blueprint.

### Choose a blueprint
You can choose from 3 blueprint categories:
- **GameServerApp blueprints** - Official / Default GSA blueprints that are available by default.
- **Followed blueprints** - Community-generated blueprints that you [follow on the marketplace](/dashboard/blueprints/getting_started#marketplace).
- **Your blueprints** - Blueprints created or [forked](/dashboard/blueprints/getting_started#fork) by you (or [admins](/dashboard/admin_teams) on your dashboard).

![Blueprint - using blueprints - select blueprint dropdown](/img/dashboard/blueprint/getting_started/blueprint_select_dropdown.jpg)


### Versions
Every time the author makes changes to a blueprint, it is saved under a new version.\
Versions help you keep track of changes and allow for rolling back to previous versions.

When a new blueprint version is released, you can [update game servers and Config templates to the latest version](/dashboard/blueprints/getting_started#activate-blueprint-version).

Game

![Blueprint - using blueprints - blueprint versioning](/img/dashboard/blueprint/getting_started/blueprint_versioning.jpg)


### Activate blueprint version
Select a blueprint version on the right-hand version menu, on the blueprint page, and click `Activate selected version`. Then select one or multiple game servers and/or Config templates, on the popup.

The selected game servers & Config templates will have their blueprint changed to the selected version.\
Game servers must be shutdown before changing the blueprint.

![Blueprint - using blueprints - blueprint activate version](/img/dashboard/blueprint/getting_started/blueprint_version_activate.jpg)


## What blueprints can do for...

[Learn how to create your first blueprint >](/dashboard/blueprints/create_blueprint)

### Game servers
Blueprints can change almost every aspect of a game server, like:
- Executables, launch parameters, Steam server ID for install & updates.
- Method for monitoring game server online status.
- RCON/Telnet/Websocket connection method & commands (save, broadcast etc.).
- What files must be included in backups & removed on a wipe.
- The available files & directories via FTP.
- Docker container settings (image, mounts, ports etc.).

### Config templates
Every blueprint comes with a `Config template` section. This is where configuration files and parameters are registered.
GameServerApp takes care of uploading the files and parameters to the game server.

After changing the `Config template` section on a blueprint, you can [update the blueprint on the Config template settings page](/dashboard/game_servers/config_templates#settings).


![Blueprint - What blueprints can do for - Config templates](/img/dashboard/blueprint/getting_started/blueprint_reference_config_template.jpg)



## Marketplace
On the marketplace you can find Official and community-generated blueprints. It's a source for inspiration and a place to share with the community.

### How to follow a blueprint

The [blueprint marketplace](https://dash.gameserverapp.com/marketplace/market/blueprint) comes with filters and search, in the sidebar. Use these to narrow down the results and find the right blueprint.

You can filter the results by OS (Linux or Windows), Type (Official or community-generated blueprints) and Game. 

![Blueprint - Follow blueprint - Search marketplace](/img/dashboard/blueprint/getting_started/follow_blueprint_search_filters.jpg)

#### Follow blueprint
When you found the right blueprint, hit the `Follow` button in the top-right corner.

Following a blueprint will download the blueprint to your dashboard, and make it available to use on game servers and Config templates.

![Blueprint - Follow blueprint - Follow blueprint](/img/dashboard/blueprint/getting_started/follow_blueprint.jpg)

Optionally can you activate the blueprint on game servers and Config templates immediately.\
Game servers must be shutdown before changing the blueprint.

![Blueprint - Follow blueprint - Follow blueprint modal](/img/dashboard/blueprint/getting_started/follow_blueprint_modal.jpg)


#### Done!
The blueprint is now visible on your dashboard and can be used with game servers and Config templates.\
If you made a mistake, you can delete the followed blueprint. This will remove it from your dashboard again.


**Blueprint updates**\
When the blueprint author uploads a new version for the blueprint, it will be available on your dashboard too. Game servers and Config templates do not automatically update to the latest version. 

![Blueprint - Follow blueprint - Show followed blueprint on blueprint overview](/img/dashboard/blueprint/getting_started/follow_blueprint_overview.jpg)



## Manage

### Clone
By cloning a blueprint, you create an exact copy of the original.\
Clones are automatically unpublished and all blueprint versions will be switched over to `DEV mode`.

![Blueprint - Manage - Clone blueprint](/img/dashboard/blueprint/getting_started/clone_blueprint.jpg)

### Fork
Forking is basically the same as Cloning: It creates an exact copy of the original.

The main difference between forking and cloning, is that you cannot clone a blueprint from the marketplace. When the marketplace blueprint supports forking, it lets you copy the original and make changes.


![Blueprint - Manage - Fork blueprint](/img/dashboard/blueprint/getting_started/fork_blueprint.jpg)

### Delete
When you no longer need a blueprint, you can remove it via the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint).

![Blueprint - Manage - Delete blueprint](/img/dashboard/blueprint/getting_started/delete_blueprint.jpg)



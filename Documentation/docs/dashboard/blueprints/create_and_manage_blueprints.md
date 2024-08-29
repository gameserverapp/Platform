---
title: Create & manage blueprints
sidebar_position: 2
---
Learn how to create your first blueprint, add new versions, and effectively use the blueprint form.

**How-to Guides:**
- [Create a blueprint for STEAM games](/dashboard/blueprints/how-to/create_steam_blueprint)
- [Create a blueprint for existing Docker containers](/dashboard/blueprints/how-to/create_custom_blueprint)
- [Publish a blueprint on the marketplace](/dashboard/blueprints/how-to/publish_blueprint_on_marketplace)

:::warning Work in Progress
This section is currently being developed.
:::

## The Basics

### Create a Blueprint

To create a new blueprint, go to the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint) and click the `+ Add blueprint` button.

![Blueprint - Create a blueprint - Add blueprint](/img/dashboard/blueprint/create_blueprint/create_blueprint_add-blueprint.jpg)

Enter a name for your blueprint and select the game it’s created for. If the game isn't listed, choose `Custom game`. You can also select a template (optional) to prefill parts of the blueprint form, making the setup process easier.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)

### Add Version

When you need to update a blueprint, it's best to add a new version. This helps you keep track of changes and easily revert to previous versions if needed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_1.jpg)

GameServerApp will automatically assign a new version number for each version you create. If you prefer, you can set a custom version number—just make sure it follows the [Semantic Versioning 2.0.0](https://semver.org/) guidelines.

After setting up the Linux or Windows blueprint fields, you can optionally describe what you changed in the changelog field. This is particularly useful if you plan to publish the version on the marketplace, as it helps others understand what’s new.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_2.jpg)

### Blueprint Versions

When viewing a blueprint on your dashboard or on the marketplace, you'll find a `Versions` menu on the right. This menu shows whether a version supports Linux, Windows, or both, and the `state` of each version.

![Blueprint - Create a blueprint - Manage versions](/img/dashboard/blueprint/create_blueprint/create_blueprint_versions.jpg)

#### Version State

Newly created versions will start in `DEV mode`. Versions in `DEV mode` are only visible on your dashboard, allowing you to experiment and test.

##### Private Blueprint

For private blueprints, you can use `DEV mode` for all versions. Publishing is not necessary in this case.

##### Marketplace Blueprint

If you plan to publish the blueprint on the marketplace, note that `DEV mode` versions will not appear there. This mode lets you test changes before making them public.

Only published versions will appear on the marketplace. You can identify a published version by the `P` or `Latest` label in the `Versions` menu. Versions with an `S` label are skipped because a newer version has already been published, so these versions are ignored.





## Blueprint form



### Game

### Config template

### Directories

### Docker

#### Official GSA Docker images




---
title: Create & manage blueprints
sidebar_position: 2
---
Learn how to create your first blueprint, add new versions, and use the blueprint form.

**How-to Guides:**
- [Create a blueprint for STEAM games](/dashboard/blueprints/how-to/create_steam_blueprint)
- [Create a blueprint for existing Docker containers](/dashboard/blueprints/how-to/create_custom_blueprint)
- [Publish blueprint on marketplace](/dashboard/blueprints/how-to/publish_blueprint_on_marketplace)

:::warning Work in Progress
This section is currently being developed.
:::

## The Basics

### Create a Blueprint

You can create a new blueprint on the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint) by clicking the `+ Add blueprint` button.

![Blueprint - Create a blueprint - Add blueprint](/img/dashboard/blueprint/create_blueprint/create_blueprint_add-blueprint.jpg)

Enter a name and select which game this blueprint is created for.\
If the game isn't on the list, select `Custom game`.

Selecting a template (optional) will prefill parts of the blueprint form, making the process easier.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)

### Add Version

When you need to change parts of a blueprint, it's best to add a new version. Versions help you keep track of changes and revert to previous versions if needed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_1.jpg)

GameServerApp will automatically assign a new version number for each version you create.\
If you prefer, you can set a custom version number—just make sure it follows the [Semantic Versioning 2.0.0](https://semver.org/) guidelines.

After [setting up the Linux or Windows blueprint fields](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form), you can optionally explain what you changed in the changelog field.
This is particularly useful if you plan to [publish the version on the marketplace](#), as it helps others understand what has changed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_2.jpg)

### Blueprint Versions

![Blueprint - Create a blueprint - Manage versions](/img/dashboard/blueprint/create_blueprint/create_blueprint_versions.jpg)

When viewing a blueprint on your dashboard or on the marketplace, you'll find a `Versions` menu on the right. This menu shows whether a version supports Linux and/or Windows and the `state` of each version.

#### Version State
Newly created versions will start in the `DEV mode` state. Versions in `DEV mode` are only visible on your dashboard. You can use these to experiment and test.

##### Private Blueprint
When working on a private blueprint, you can use `DEV mode` for all versions. Publishing a version won't matter in this case.

##### Marketplace Blueprint
If you plan to publish the blueprint on the marketplace, it's important to note that `DEV mode` versions do not appear on the marketplace. Using `DEV mode` lets you test changes before publishing them.

**Publish**\
Only published versions will appear on the marketplace.\
You can identify a published version by the `P` or `Latest` label in the `Versions` menu.

Versions with an `S` label are skipped because a newer version has already been published. These versions are ignored.




## Blueprint form



### Game

### Config template

### Directories

### Docker

#### Official GSA Docker images




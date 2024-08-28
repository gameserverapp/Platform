---
title: Create & manage blueprints
sidebar_position: 2
---

Learn how to create your first blueprint, add new versions and use the blueprint form.


**How-to guides:**
- [Create a blueprint for STEAM games](/dashboard/blueprints/how-to/create_steam_blueprint)
- [Create a blueprint for existing Docker containers](/dashboard/blueprints/how-to/create_custom_blueprint)
- [Publish blueprint on marketplace](/dashboard/blueprints/how-to/publish_blueprint_on_marketplace)

:::warning Work in progress
This section is currently being developed.
:::
## The basics

### Create a blueprint

You can create a new blueprint on the [blueprint overview page](https://dash.gameserverapp.com/server/blueprint), by clicking the `+ Add blueprint` button.

![Blueprint - Create a blueprint - Add blueprint](/img/dashboard/blueprint/create_blueprint/create_blueprint_add-blueprint.jpg)

Enter a name and select which game this blueprint is created for.\
When the game is not on the list, select `Custom game`.

Selecting a template (optional) will prefill parts of the blueprint form, and make your life easier.

![Blueprint - Create a blueprint - Add blueprint modal](/img/dashboard/blueprint/create_blueprint/create_blueprint_modal.jpg)

### Add version
When you need to change parts of a blueprint, you should add a new version. Versions help you keep track of changes and revert back if needed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_1.jpg)

GameServerApp will automatically assign a new version number for each new version. \
If you prefer, you can set a custom version number—just ensure it follows the [Semantic Versioning 2.0.0](https://semver.org/) guidelines.

After [setting up the Linux or Windows blueprint fields](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form), you can (optional) explain what you changed in the changelog field. 
This is particularly useful when you plan to [publish the version on the marketplace](#), as it helps folks understand what changed.

![Blueprint - Create a blueprint - Add version](/img/dashboard/blueprint/create_blueprint/create_blueprint_create_version_2.jpg)

### Blueprint versions

![Blueprint - Create a blueprint - Manage versions](/img/dashboard/blueprint/create_blueprint/create_blueprint_versions.jpg)

When looking at a blueprint on your dashboard, or on the marketplace, you will find a `Versions` menu on the right. The menu indicates whether a version supports Linux and/or Windows and the `state` of each version.

#### Version state
Newly created versions will start in `DEV mode` state. Versions in the `DEV mode` state are only visible on your dashboard. You can use these to experiment and test.

##### Private blueprint
When working on a private blueprint, you can just use `DEV mode` for all versions.
Publishing a version won't matter in this case.

##### Marketplace blueprint
If you are planning to publish the blueprint on the marketplace, it is important to note that `DEV mode` versions do not show up on the marketplace. Using `DEV mode` lets you test changes before publishing those changes to the marketplace.

**Publish**\
Only published versions will only show up on the marketplace.\
You can recognize a published version by their `P` or `Latest` label, on the `Versions` menu.

Versions with an `S` label are skipped, as a newer version was already published. These versions are ignored.




## Blueprint form



### Game

### Config template

### Directories

### Docker

#### Official GSA Docker images




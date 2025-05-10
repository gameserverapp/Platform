---
title: Create LinuxGSM Blueprint
sidebar_position: 4
---

This guide will help you create a blueprint using the [LinuxGSM](https://linuxgsm.com/) template. In this example, we'll create a blueprint for [Left 4 Dead 2](https://linuxgsm.com/servers/l4d2server/) using the [LinuxGSM Docker container](https://hub.docker.com/r/gameservermanagers/gameserver).

## Intro

This guide assumes you have already [created a blueprint](/dashboard/blueprints/create_and_manage_blueprints#create-a-blueprint) and are currently on [the `Add version` page](/dashboard/blueprints/create_and_manage_blueprints#add-version).

:::caution Use `LinuxGSM` Template
For this guide, we used the `LinuxGSM` blueprint template. It is recommended to use a template to ensure most fields are pre-filled.

![Blueprint - Create LinuxGSM blueprint - Add blueprint modal](/img/dashboard/blueprint/create_linuxgsm_blueprint/create_blueprint_modal.jpg)
:::

## 1. Save Generated Blueprint

GameServerApp will automatically fill in the necessary fields for your LinuxGSM blueprint. Simply review the form and click `Save`.

![Blueprint - Create LinuxGSM blueprint - Save blueprint form](/img/dashboard/blueprint/create_linuxgsm_blueprint/save_blueprint_form.jpg)

## 2. Launch a Fresh Server with the Blueprint

Go to the [Install New Game Server page](https://dash.gameserverapp.com/order/gameserver/machine) and deploy a new game server using the blueprint you just created.

![Blueprint - Create LinuxGSM blueprint - Launch new game server](/img/dashboard/blueprint/create_linuxgsm_blueprint/launch_server.jpg)

Click `Install game server now` and wait for the setup to complete.

### 2.1 First Launch

Once the installation finishes, launch the game server without modifying any of the default settings.

![Blueprint - Create LinuxGSM blueprint - First launch](/img/dashboard/blueprint/create_linuxgsm_blueprint/first_launch_install.jpg)

:::caution Install During First Start
LinuxGSM downloads the required game server files on the first startup. This means the first boot can take 5–10 minutes. Be patient while it completes the initial setup.
:::

### 2.2 Follow Installation Progress

You can monitor the installation progress through the Docker container logs.

![Blueprint - Create LinuxGSM blueprint - See installation progress](/img/dashboard/blueprint/create_linuxgsm_blueprint/follow_install_progress.jpg)

Wait for a log message that indicates installation has completed successfully.

![Blueprint - Create LinuxGSM blueprint - LGSM installation finished](/img/dashboard/blueprint/create_linuxgsm_blueprint/lgsm_install_progress.jpg)

## 3. Fix Port Settings

The ports configured by LinuxGSM in the `LinuxGSM config file` may need adjustment to ensure the game server appears correctly on the dashboard. This issue arises because LinuxGSM variables are applied differently depending on the game, so some tweaking may be required.

For example, if memory usage is around `0.65 GB` but the server is showing as `Offline (loading...)`, it's likely a port issue.

![Blueprint - Create LinuxGSM blueprint - Almost working LinuxGSM server](/img/dashboard/blueprint/create_linuxgsm_blueprint/almost_working_lgsm_server.jpg)

To fix this, go to the Config template linked to your game server and adjust the port variable assignments. After saving the changes, restart the game server.

![Blueprint - Create LinuxGSM blueprint - Swap ports](/img/dashboard/blueprint/create_linuxgsm_blueprint/swap_ports_linuxgsm.jpg)

## 4. Hooray!

If everything went smoothly, your game server will now appear online and be ready to join.

:::tip Finalize Blueprint Settings
For advanced settings such as uptime monitoring, RCON, and backups, refer to the [blueprint form section >](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form).
:::

![Blueprint - Create LinuxGSM blueprint - Working LinuxGSM server](/img/dashboard/blueprint/create_linuxgsm_blueprint/working_linuxgsm_server.jpg)

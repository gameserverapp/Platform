---
title: Create Docker blueprint
sidebar_position: 4
---

This guide will help you create a blueprint for an existing Docker container. In this example, we'll create a blueprint for [Path of Titans](https://pathoftitans.com/) using [Auhrus's Docker container](https://github.com/Auhrus/pathoftitans-docker-server).

## Intro

This guide assumes you have found a `Docker run` command for the game you want to host, similar to the one we found for Path of Titans:

```bash
docker run -p 7778:7778/tcp -p 7780:7780/tcp -p 7777:7777/udp -v VOLUME_NAME:/opt/data/PathOfTitans/Saved -e username="ALDERON_MAILADDRESS" -e password="ALDERON_PASSWORD" -e authtoken="AUTH_TOKEN" -e guid="GUID" --name CONAINER_NAME ghcr.io/auhrus/pathoftitans:latest
```

![Blueprint - Create existing Docker container blueprint - Finding docker run command on repo](/img/dashboard/blueprint/create_docker_blueprint/find_docker_run_command_repo.jpg)

## 1. Import Custom Docker Container

On the `Create new blueprint` popup, select the `Import Custom Docker Container` template. Choose the Operating System (OS) that matches the supported OS for the Docker container. Then, copy and paste the `Docker run` command into the `Enter docker run command` field and click `Create`.

![Blueprint - Create existing Docker container blueprint - Create blueprint with import docker run command](/img/dashboard/blueprint/create_docker_blueprint/create_blueprint_with_import_docker_run_command.jpg)

## 2. Check Blueprint Settings

In this case, we had to configure some of the `Environment variables` because it was necessary to install the Path of Titans game server. For games that don't require a user account to download or run a game server, this step may not be needed.

![Blueprint - Create existing Docker container blueprint - Check blueprint settings](/img/dashboard/blueprint/create_docker_blueprint/check_blueprint_settings.jpg)

### Save Blueprint Version

After confirming that most settings were imported correctly, you can save the blueprint.

## 3. Launch a Fresh Server with the Blueprint

Go to the [Install New Game Server page](https://dash.gameserverapp.com/order/gameserver/machine) and launch a new game server using the blueprint you just created.

![Blueprint - Create existing Docker container blueprint - Launch new game server](/img/dashboard/blueprint/create_docker_blueprint/launch_server.jpg)

Click `Install game server now` and wait for the installation process to complete.

### 3.1 First Launch

Once the installation is complete, launch the game server without making any changes to its settings.

![Blueprint - Create existing Docker container blueprint - First launch](/img/dashboard/blueprint/create_docker_blueprint/first_launch_install.jpg)

:::caution Install During First Start
Most custom Docker containers will download the game server files on the first boot, so the initial startup will take some time. Allow the game server at least 5-10 minutes to boot up and complete the setup.
:::

### 3.2 Follow Installation Progress

You can monitor the game server installation progress in the Docker container logs. Wait until you see a log message indicating that the installation is complete. The exact information will vary by game, but generally, you should look for a message indicating that the game server is starting.

![Blueprint - Create existing Docker container blueprint - Docker installation finished](/img/dashboard/blueprint/create_docker_blueprint/finished_install_progress.jpg)

## 4. Add Missing Settings

It's possible that the game server may boot with ports that are not properly configured yet. If the memory usage is above `0.5 GB`, but the game server shows as Offline (loading...), this usually indicates a port configuration issue.

![Blueprint - Create existing Docker container blueprint - game server with port issues](/img/dashboard/blueprint/create_docker_blueprint/game_server_with_port_issues.jpg)

### 4.1 Add More Settings to Blueprint

To add more settings, create a new version of the blueprint. For this particular Docker container, you can provide additional launch parameters by adding a new `Environment variable` named `additionalcommands`.

We use this as the value for `additionalcommands`:
```bash
-Port={gameserver.game_port} -QueryPort={gameserver.query_port} -QueryIP=0.0.0.0 -RconPort={gameserver.rcon_port} -RconIP=0.0.0.0 -RconPassword={gameserver.rcon_password} -MULTIHOME=0.0.0.0 -ServerName={gameserver.list_name}
```

![Blueprint - Create existing Docker container blueprint - Add port settings](/img/dashboard/blueprint/create_docker_blueprint/add_port_settings.jpg)

### 4.2 Activate New Version & Test

You can now [activate the new version on the game server](/dashboard/blueprints/getting_started#activate-blueprint-version) and restart the game server.

## 5. Hooray?

If all goes well, your game server should now be online and ready for you to join. However, in most cases, your game server may still require further configuration to work properly.

Visit the [blueprint form section](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form) to learn how to add Config templates to the blueprint and configure additional settings like uptime monitoring, RCON, and backups.

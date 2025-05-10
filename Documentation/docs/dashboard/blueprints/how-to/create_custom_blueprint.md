---
title: Create Docker blueprint
sidebar_position: 4
---

This guide will walk you through creating a blueprint from an existing Docker container. In this example, we'll set one up for [Path of Titans](https://pathoftitans.com/) using [Auhrus's Docker container](https://github.com/Auhrus/pathoftitans-docker-server).

## Intro

Before starting, you’ll need a `Docker run` command for the game you want to host, similar to the one we found for Path of Titans:

```
docker run -p 7778:7778/tcp -p 7780:7780/tcp -p 7777:7777/udp -v VOLUME_NAME:/opt/data/PathOfTitans/Saved -e username="ALDERON_MAILADDRESS" -e password="ALDERON_PASSWORD" -e authtoken="AUTH_TOKEN" -e guid="GUID" --name CONAINER_NAME ghcr.io/auhrus/pathoftitans:latest
```

:::tip
If you haven't found a `Docker run` command yet, the quickest way is to search for `[game] docker container` using your preferred search engine. Just replace `[game]` with the name of your game.
:::

![Blueprint - Create existing Docker container blueprint - Finding docker run command on repo](/img/dashboard/blueprint/create_docker_blueprint/find_docker_run_command_repo.jpg)

## 1. Import Custom Docker Container

In the `Create new blueprint` popup, select the `Import Custom Docker Container` template. Choose the correct Operating System (OS) that matches the Docker container's requirements.

Then copy/paste the `Docker run` command into the `Enter docker run command` field and click `Create`.

![Blueprint - Create existing Docker container blueprint - Create blueprint with import docker run command](/img/dashboard/blueprint/create_docker_blueprint/create_blueprint_with_import_docker_run_command.jpg)

## 2. Check Blueprint Settings

In our example, we needed to configure a few `Environment variables` to get the Path of Titans server working. For most games, you likely won’t need to adjust anything and can simply save the form.

![Blueprint - Create existing Docker container blueprint - Check blueprint settings](/img/dashboard/blueprint/create_docker_blueprint/check_blueprint_settings.jpg)

#### Save Blueprint Version

Once you’ve verified the imported settings, click `Save settings` to save your blueprint.

## 3. Launch a Fresh Server with the Blueprint

Now it’s time to test the blueprint by launching a game server using it.

Head over to the [Install New Game Server page](https://dash.gameserverapp.com/order/gameserver/machine) and use your blueprint to spin up a new server.

![Blueprint - Create existing Docker container blueprint - Launch new game server](/img/dashboard/blueprint/create_docker_blueprint/launch_server.jpg)

Click `Install game server now` and wait for the installation to finish.

### 3.1 First Launch

When installation completes, launch the server without changing any settings.

For many Docker containers, the game server files are downloaded during the first startup. This may take atleast 5–10 minutes, so be patient.

![Blueprint - Create existing Docker container blueprint - First launch](/img/dashboard/blueprint/create_docker_blueprint/first_launch_install.jpg)

### 3.2 Installation Progress

To track installation progress, open the Docker container logs.

Look for log entries indicating that the installation is completed. The exact message varies by game, usually you should look for a message indicating that the game server is starting.

![Blueprint - Create existing Docker container blueprint - Docker installation finished](/img/dashboard/blueprint/create_docker_blueprint/finished_install_progress.jpg)

### 3.3 Confirm Booting Up

It's likely that there will be some issues but even with minimal setup, the server should be able to start.

If memory usage stays above `0.5 GB` for a few minutes after installation, it’s a good sign that things are working. You can now proceed to the next step.

![Blueprint - Create existing Docker container blueprint - game server with port issues](/img/dashboard/blueprint/create_docker_blueprint/game_server_with_port_issues.jpg)

## 4. Finalize Settings

After confirming your game server runs, it’s time to configure the missing settings, like correct port usage and additional launch options, so that players can join.

We’ll add these settings to our Path of Titans blueprint. To do this, [create a new version](/dashboard/blueprints/create_and_manage_blueprints#add-version) so you can adjust config files and launch parameters.

:::info Different Game
If you're working with a different game, config file names and settings may vary. The general process still applies, just use the correct files and settings for your game.
:::

### 4.1 Register Config Files

Game servers often rely on configuration files like `.json`, `.ini`, or `.cfg`.

Blueprints let you register these files so you can control their contents using [Config templates](/dashboard/game_servers/config_templates). Updates are automatically pushed to your game servers.

For Path of Titans, we’ll register the `Game.ini`, which controls ports and slot limits.

:::info Different Game / Config
If you're working with a different game, you may need to look up the configuration file path. [Here’s how to find the configuration file path >](/dashboard/blueprints/create_and_manage_blueprints#find--register-config-files)
:::

![Blueprint - Create existing Docker container blueprint - Register configuration file](/img/dashboard/blueprint/create_blueprint/register_config_file.jpg)

### 4.2 Register Launch Parameters

Game servers often use `launch/start parameters` for things like ports, passwords, or server names. These usually look like `-Ports 7777` or `-QueryPort 27015`.

:::info Different Game
If you’re unsure what your game’s launch parameters are, check the game’s documentation or wiki. You can skip this if launch parameters are handled through config files.
:::

For the Path of Titans Docker container, the documentation indicates that we can provide additional `launch/start parameters` by `Environment variable` called `additionalcommands`.

Here are the parameters we found:

```
-Port={gameserver.game_port} -QueryPort={gameserver.query_port} -QueryIP=0.0.0.0 -RconPort={gameserver.rcon_port} -RconIP=0.0.0.0 -RconPassword={gameserver.rcon_password} -MULTIHOME=0.0.0.0 -ServerName={gameserver.list_name}
```

#### Hardcoded vs Config Templates

You can enter the parameters directly into the blueprint (hardcoded), or make them configurable through a Config template.

- **Hardcoded**: Settings can only be changed by creating a new blueprint version.
- **Config template**: Parameters can be edited anytime in a Config template. This is better when values differ between servers.

#### Hardcoded

Paste the parameters directly into the `Environment variables` section of the blueprint.

Check your Docker container’s documentation to use the correct `key` for your game.

![Blueprint - Create existing Docker container blueprint - Register configuration file](/img/dashboard/blueprint/create_docker_blueprint/add_port_settings_hardcoded.jpg)

#### Config Template

To use Config templates, first register a `Config template parameter`. In our example, we use the ID `launch_params`.

![Blueprint - Create existing Docker container blueprint - Register parameter](/img/dashboard/blueprint/create_blueprint/register_config_parameter.jpg)

Then reference it in your `Environment variable` using:

```
{config_parameter id="launch_params"}
```

After saving the blueprint, [activate the new version on the game server and Config templates](/dashboard/blueprints/getting_started#activate-blueprint-version).

![Blueprint - Create existing Docker container blueprint - Register configuration file](/img/dashboard/blueprint/create_blueprint/use_config_parameter_on_environment_variable_docker_container.jpg)

### 4.3 Set up Config Template

Now create a new [Config template](/dashboard/game_servers/config_templates#create-template) or [update the blueprint for an existing one](/dashboard/game_servers/config_templates#blueprint).

Fill in the required configurations. If you're not sure what to enter, check the game documentation or community resources.

Save the template and reboot the game server.

![Blueprint - Create existing Docker container blueprint - Config template with config file and launch parameter](/img/dashboard/blueprint/create_docker_blueprint/config_template_with_settings.jpg)

## 5. Hooray!

If all goes well, the server will appear in your game’s server list, and you’ll be able to join.

:::tip Finalize Blueprint Settings
You can now configure advanced features like uptime monitoring, RCON, backups, and more in the [blueprint form section >](/dashboard/blueprints/create_and_manage_blueprints#blueprint-form).
:::

![Blueprint - Create existing Docker container blueprint - working server](/img/dashboard/blueprint/create_docker_blueprint/working_custom_docker_server.jpg)

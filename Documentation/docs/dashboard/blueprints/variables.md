---
title: Blueprint variables
sidebar_label: Variables
sidebar_position: 77
---

Variables are useful in cases where you need to insert a specific machine directory, game server port or cluster ID on blueprints or Config templates.

The variables below can be used on blueprints and Config templates.



### Dashboard

#### `{api.community.client_id}`
Returns the Community API `client_id`. Only available in Config templates.<br />
Example: `083e2257-c7d6-444d-ac17-e5334ede9b27`

#### `{api.community.client_secret}`
Returns the Community API `client_secret`. Only available in Config templates.<br />
Example: `GV0bESCnrrwAEHkHA90m6bwAD3Em49pi`

### Machine

#### `{machine.ip}`
Returns the machine's public ip.<br />
Example: `5.78.80.72`

#### `{machine.nas_root}`
Returns the path for the NAS folder.<br />
Example: `/home/GameServerApp/nas`

#### `{machine.cluster_root}`
Returns the path for the cluster folder.<br />
Example: `/home/GameServerApp/nas/cluster`

#### `{machine.backup_root}`
Returns the path for the backup folder.<br />
Example: `/home/GameServerApp/nas/backup`


### Container

#### `{container.name}`
Returns the name of the container.<br />
Example: `sd03kdwd`

#### `{container.uid}`
Returns the UID of the container user.<br />
Example: `1004`

#### `{container.gid}`
Returns the GID of the container user.<br />
Example: `1004`

#### `{container.home_root}`
Returns the path for the container folder.<br />
Example: `/home/GameServerApp/containers/sd03kdwd`

#### `{container.temp_backup_dir}`
Returns the path for the container backup dir, this is a temporary directory created during the backup process.


### Game server

#### `{gameserver.list_name}`
Returns the in-game server browser list name for the game server.<br />
Example: `My Game Server`

#### `{gameserver.slot_limit}`
Returns the slot limit for the game server.<br />
Example: `70`

#### `{gameserver.map}`
Returns the map for the game server.<br />
Example: `TheIsland`

#### `{gameserver.seed}`
Returns the map for the game server.<br />
Example: `49385948383`

#### `{gameserver.query_port}`
Returns the assigned query port for the game server.<br />
Example: `27015`

#### `{gameserver.game_port}`
Returns the assigned game port for the game server.<br />
Example: `7777`

#### `{gameserver.raw_port}`
Returns the assigned raw port for the game server.<br />
Example: `7778`

#### `{gameserver.other_port}`
Returns the assigned `other` port for the game server.<br />
Example: `12345`


#### `{gameserver.rcon_port}`
Returns the assigned RCON / Telnet / Websocket port for the game server.<br />
Example: `37015`

#### `{gameserver.rcon_password}`
Returns the RCON / Telnet / Websocket password for the game server.<br />
Example: `CLzvR035`



#### `{gameserver.banlist_url}`
Returns the banlist url for the game server.

#### `{gameserver.adminlist_url}`
Returns the adminlist url for the game server.



### Cluster

#### `{cluster.id}`
Returns the connected cluster ID for the game server.<br />
Example: `cb0440e7-d2e0-4eed-809c-16fa812ea928`


### Config template

#### `{config_template.settings.branch}`
Returns the branch settings, that were entered on the Settings page for the selected Config template.<br />
Example: `public`


#### `{config_parameter id=""}`
Returns the content of the parameter, that was set on the Config template.<br />
Example: when the config template has a parameter (id) `end`, you can reference it like so: `{config_parameter id="end"}`
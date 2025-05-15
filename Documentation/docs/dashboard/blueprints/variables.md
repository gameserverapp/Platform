---
title: Blueprint variables
sidebar_label: Variables
sidebar_position: 77
---

Variables are helpful when you need to insert specific values such as machine directories, game server ports, or cluster IDs into blueprints or Config templates.

You can use the following variables in both blueprints and Config templates.

### Dashboard

#### `{api.community.client_id}`

Returns the Community API `client_id`. Available only in Config templates.  
Example: `083e2257-c7d6-444d-ac17-e5334ede9b27`

#### `{api.community.client_secret}`

Returns the Community API `client_secret`. Available only in Config templates.  
Example: `GV0bESCnrrwAEHkHA90m6bwAD3Em49pi`

### Machine

#### `{machine.ip}`

Returns the machine's public IP address.  
Example: `5.78.80.72`

#### `{machine.nas_root}`

Returns the path to the NAS folder.  
Example: `/home/GameServerApp/nas`

#### `{machine.cluster_root}`

Returns the path to the cluster folder.  
Example: `/home/GameServerApp/nas/cluster`

#### `{machine.backup_root}`

Returns the path to the backup folder.  
Example: `/home/GameServerApp/nas/backup`

### Container

#### `{container.name}`

Returns the name of the container.  
Example: `sd03kdwd`

#### `{container.uid}`

Returns the UID of the container user.  
Example: `1004`

#### `{container.gid}`

Returns the GID of the container user.  
Example: `1004`

#### `{container.home_root}`

Returns the path to the container folder.  
Example: `/home/GameServerApp/containers/sd03kdwd`

#### `{container.temp_backup_dir}`

Returns the path to the container's temporary backup directory, which is created during the backup process.

### Game server

#### `{gameserver.list_name}`

Returns the in-game server browser list name.  
Example: `My Game Server`

#### `{gameserver.slot_limit}`

Returns the slot limit for the server.  
Example: `70`

#### `{gameserver.map}`

Returns the map name assigned to the server.  
Example: `TheIsland`

#### `{gameserver.seed}`

Returns the seed value for the server map.  
Example: `49385948383`

#### `{gameserver.query_port}`

Returns the server’s query port.  
Example: `27015`

#### `{gameserver.game_port}`

Returns the primary game port.  
Example: `7777`

#### `{gameserver.other_port}`

Returns the assigned `other` port.  
Example: `7778`

#### `{gameserver.other_port}`

Returns the assigned `other` port.  
Example: `12345`

#### `{gameserver.rcon_port}`

Returns the assigned RCON / Telnet / WebSocket port.  
Example: `37015`

#### `{gameserver.rcon_password}`

Returns the RCON / Telnet / WebSocket password.  
Example: `CLzvR035`

#### `{gameserver.banlist_url}`

Returns the banlist URL for the game server.

#### `{gameserver.adminlist_url}`

Returns the adminlist URL for the game server.

### Cluster

#### `{cluster.id}`

Returns the connected cluster ID for the game server.  
Example: `cb0440e7-d2e0-4eed-809c-16fa812ea928`

### Config template

#### `{config_template.settings.branch}`

Returns the branch setting as entered on the Config template's Settings page.  
Example: `public`

#### `{config_parameter id=""}`

Returns the content of a custom parameter set in the Config template.  
Example:  
If the Config template includes a parameter with ID `end`, you can reference it as: `{config_parameter id="end"}
`

### Helper

#### `{helper.uuid}`

Returns unique UUID v4
Example: `f2102acc-ce04-43c7-9efc-badea8e51128`

#### `{helper.date_iso8601}`

Returns the date and time using the iso8601 format
Example: `2025-05-15T15:53:12+00:00`

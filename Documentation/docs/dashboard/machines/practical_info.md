---
title: Practical information
sidebar_position: 3
---

## Directories / folders

### Machine
Below is a list of paths that are available on DediConnect machines. These are different from the paths made available inside the docker container.

#### Linux

Containers: `/home/GameServerApp`<br />
Games: `/home/GameServerApp/games`<br />
Docker: `/home/GameServerApp/docker`<br />
Backups: `/home/GameServerApp/nas/backup`<br />
Cluster files: `/home/GameServerApp/nas/cluster`

#### Windows
Containers: `C:\GameServerApp`<br />
Games: `C:\GameServerApp\games`<br />
Docker: `C:\GameServerApp\docker`<br />
Backups: `C:\GameServerApp\nas\backup`<br />
Cluster files: `C:\GameServerApp\nas\cluster`

### Container
These are the relative paths __inside a docker container__.

#### Linux

Game files: `/serverfiles`
Alternative game files path: `/home/containeruser/serverfiles`

#### Windows
Game files: `C:\serverfiles`
Alternative game files path: `C:\Users\ContainerUser\serverfiles`

## Useful Docker parameters
Configure custom Docker parameters using [Docker launch params](/dashboard/game_servers/getting_started/#docker-launch-params).

### Mount a folder (symlink equivalent)
GSA automatically mounts the game server files directory inside the container (see paths above). In cases where you need one or more custom folders mounted, you can do so by adding the following line to the Docker launch params, per folder you want to mount:

`-v C:\path\on\machine:C:\path\inside\container`

The example above will mount the folder `C:\path\on\machine` (on the machine) inside the container at the path `C:\path\inside\container`.

For Linux the same principle applies, but with different paths.

## Access container console
In some occasions you may want to login on the container and fire command manually.

Each DediConnect container comes with a `container name`. The `container name` can be found on the game server settings page, in the top-right corner.

### Linux
Login with SSH and run `docker exec -it {container name} bash`

### Windows
Login with RDP and open Powershell. Then run `docker exec -it {container name} cmd`

## Delete Docker container
Learn how to delete a Docker container. Deleting a container __does not remove the save files__ for a server, as long as you follow the instructions below. Shutdown the game server before doing this.

:::caution HWID change
Deleting a Docker container will in most cases change the HWID for that game server. If you use plugins with HWID licenses you may need to update the license.
:::

Each DediConnect container comes with a `container name`. The `container name` can be found on the game server settings page, in the top-right corner.


### Linux
Login with SSH and run `docker rm {container name}`

### Windows
Login with RDP and open Powershell. Then run `docker rm {container name}`

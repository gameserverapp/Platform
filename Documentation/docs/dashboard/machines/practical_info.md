---
title: Practical information
sidebar_position: 3
---

## Directories / folders

### Machine

Below are the default directory paths available on DediConnect machines. These paths are specific to the host machine and differ from the paths used inside Docker containers.

:::warning Be careful
Only change files if you know what your doing. Modifying files can cause instability or break the system entirely. In some cases, a full reinstall may be required.
:::

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

These are the relative paths used __inside a Docker container__ and may differ from those on the host machine.

#### Linux

Game files: `/serverfiles`  
Alternative game files path: `/home/containeruser/serverfiles`

#### Windows

Game files: `C:\serverfiles`  
Alternative game files path: `C:\Users\ContainerUser\serverfiles`

## Access container console

In some cases, you may need to access the container directly to run commands manually.

Each DediConnect container has a unique `container name`, which can be found in the top-right corner of the game server's settings page.

### Linux

Log in via SSH and run: `docker exec -it {container name} bash`


### Windows

Log in via RDP, open PowerShell, and run: `docker exec -it {container name} cmd`

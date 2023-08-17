---
title: "Atlas"
---

:::info
Since Atlas is basically an ARK: Survival Evolved clone, we recommend you also check the [Game specific info for ARK: Survival Evolved](/dashboard/game_servers/game_specific/ark_survival_evolved).
:::

## Setup Atlas cluster
Atlas can be somewhat cumbersome to set up. But using DediConnect you can offload most of the heavy lifting to the dashboard.

### Determine number of game servers
The size of your grid (world) determines how many nodes / game servers you need. 

For a 4x4 Atlas cluster you will need 16 game servers (4x4=16). For a 1x1 cluster you just need 1 game server.

:::info Master server
DediConnect will use the node / game server with `0 x 0` (X & Y) grid settings as the master server. This server hosts the Redis database along with the web server to host your map images.
:::

### 1. Install all game servers on machine
You can spread the game servers over multiple machines or install all game servers on one machine.

[Learn how to install game servers >](/dashboard/machines/install_game-server_service#how-to-install-game-server)

### 2. Set up X & Y for all game servers
Navigate to [Game server settings](/dashboard/game_servers/getting_started#settings) and configure the corresponding [X & Y numbers](/dashboard/game_servers/game_specific/atlas#cluster-x--y-examples) while (or after) the game servers are installing.

![Atlas - grid location settings 1](/img/dashboard/gameserver/game_specific/atlas_grid_settings_1.jpg)

You may also want to enable Freeport / Home server according to your map settings.

![Atlas - grid location settings 2](/img/dashboard/gameserver/game_specific/atlas_grid_settings_2.jpg)

### 3. Export map & cell images
For the in-game map to work you should upload the generated map & cell images.
Use the Atlas grid editor to export the map & cell images on your computer.

### 4. Upload map & cell images

:::caution Master server only
You should only upload the map & cell images to the master server. The master server is the node / game server with `0 x 0` (X & Y).
:::

Connect with the master server via [FTP](/dashboard/game_servers/getting_started#connect--ftp-info) and navigate to the directory `ServerGrid`.

![Atlas - upload images 1](/img/dashboard/gameserver/game_specific/atlas_upload_1.png)

Drag the images (MapImg.jpg & CellImg_x-x) to the directory. Make sure NOT to upload the `ServerGrid` folder, only the contents.

![Atlas - upload images 2](/img/dashboard/gameserver/game_specific/atlas_upload_2.png)

### 5. Export Grid editor settings to Config template
Export the `ServerGrid.json` and `ServerGrid.ServerOnly.json` and copy their content to your [Config template](/dashboard/game_servers/config_templates).

:::info Automatic IP & port configuration
DediConnect will automatically replace the `ServerGrid.json` and `ServerGrid.ServerOnly.json` with the right IP, ports and Redis information when the configs are deployed to the game servers.
:::

## Cluster X & Y examples

ATLAS supports big clusters, allowing you to create a massive world of connected servers. ATLAS spreads the entire map over multiple servers. Each server in the grid is assigned a specific number (X & Y) to organise each server in the big grid.

If you want to setup a simple 2x2 cluster, you will need to assign the following XY combinations to your servers. Each combination represents one game servers.

#### Cluster 2x2
```composer log
X: 0, Y: 0
X: 1, Y: 0
X: 0, Y: 1
X: 1, Y: 1
```


#### Cluster 4x4
```composer log
X: 0, Y: 0 (A1)
X: 1, Y: 0 (B1)
X: 2, Y: 0 (C1)
X: 3, Y: 0 (D1)
X: 0, Y: 1 (A2)
X: 1, Y: 1 (B2)
X: 2, Y: 1 (C2)
X: 3, Y: 1 (D2)
X: 0, Y: 2 (A3)
X: 1, Y: 2 (B3)
X: 2, Y: 2 (C3)
X: 3, Y: 2 (D3)
X: 0, Y: 3 (A4)
X: 1, Y: 3 (B4)
X: 2, Y: 3 (C4)
X: 3, Y: 3 (D4)
```

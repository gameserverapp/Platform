---
title: Clusters
sidebar_position: 3
---

Clusters help organize your game servers and are required for certain games that support clustered environments.

[Go to Clusters >](https://dash.gameserverapp.com/cluster)

![Clusters - overview](/img/dashboard/gameserver/clusters/cluster_overview.jpg)

## Cluster chat

Cluster chat allows players to communicate even if they’re playing on different game servers within the same cluster. This feature is game-dependent. Check the [features list per game](https://dash.gameserverapp.com/features-per-game) to see if it's supported for your game.

By default, cluster chat is turned off. To enable it, click `Cluster chat` in the right-hand sidebar menu.

![Clusters - enable cluster chat 1](/img/dashboard/gameserver/clusters/enable_cluster_chat_1.jpg)

Toggle the `Cluster chat` switch to enable the feature. __No game server restarts are needed.__

![Clusters - enable cluster chat 2](/img/dashboard/gameserver/clusters/enable_cluster_chat_2.jpg)

### Global chat

Enable `Global chat` to share messages between all clusters that also have Global chat enabled. This allows cross-cluster communication.

![Clusters - global cluster chat](/img/dashboard/gameserver/clusters/global_cluster_chat.jpg)

### Cluster chat format

Customize how messages appear in-game using the `Cluster chat format` field. You can include the following variables:

#### Available variables

- `{charname}` – Replaced with the character's name
- `{servername}` – Replaced with the name of the server the message came from
- `{groupname}` – Replaced with the character's group name
- `{message}` – Represents the actual chat message content

![Clusters - cluster chat format](/img/dashboard/gameserver/clusters/cluster_chat_format.jpg)

### Discord + Cluster chat

You can also send and receive in-game cluster chat messages via Discord. This lets you chat with players across servers and platforms.

Learn more about [Discord + Cluster chat](/dashboard/discord-bot#discord--cluster-chat)

### In-game example

![Clusters - cluster chat example](/img/dashboard/gameserver/clusters/cluster_chat_example.jpeg)

## Change cluster view

You can switch between two display modes for viewing clusters:
- Block view
- Table view

![Clusters - change view type](/img/dashboard/gameserver/clusters/cluster_view_change_type.jpg)

### Block view

![Clusters - block view](/img/dashboard/gameserver/clusters/cluster_view_block.jpg)

### Table view

![Clusters - table view](/img/dashboard/gameserver/clusters/cluster_view_table.jpg)

### Reorder game servers in cluster

You can change the order in which game servers appear in a cluster. This order will be consistent for all admins.

![Clusters - change game server order in cluster](/img/dashboard/gameserver/clusters/cluster_change_server_order.jpg)

Simply drag the servers up or down to rearrange them.

![Clusters - change game server order in cluster modal](/img/dashboard/gameserver/clusters/cluster_change_server_order_modal.jpg)

## Manage clusters

### Re-order, Rename & Delete

Click <Icon icon="fa-solid fa-pen-square" size="lg" /> to open the cluster management window, where you can rename, reorder, or delete clusters.

![Clusters - change order](/img/dashboard/gameserver/clusters/change_cluster_order.jpg)

### Create cluster

To create a new cluster, click `+ Add cluster` in the __top-right__ corner of your screen.

![Clusters - create cluster](/img/dashboard/gameserver/clusters/create_cluster.jpg)

### Cluster ID

Some games require a `cluster ID` to link servers together. GameServerApp automatically handles this, so you don’t need to configure anything manually.

![Clusters - ID](/img/dashboard/gameserver/clusters/cluster_id.jpg)

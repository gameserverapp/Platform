---
title: Clusters
sidebar_position: 3
---

Clusters help organise game servers and have a functional reason for games that support clusters.

[Go to Clusters >](https://dash.gameserverapp.com/cluster)

![Clusters - overview](/img/dashboard/gameserver/clusters/cluster_overview.jpg)


## Cluster chat
Cluster chat allows players to chat even when they are on different game servers. Not all games support cluster chat. See the [features list per game](https://dash.gameserverapp.com/features-per-game) for more information.

By default cluster chat is not enabled. Manage cluster chat settings by clicking `Cluster chat` in the sidebar menu, on the right.

![Clusters - enable cluster chat 1](/img/dashboard/gameserver/clusters/enable_cluster_chat_1.jpg)

Enable the `Cluster chat` switch to enable cluster chat. __No game server restarts required.__

![Clusters - enable cluster chat 2](/img/dashboard/gameserver/clusters/enable_cluster_chat_2.jpg)


### Global chat
Share cluster chat among all clusters by enabling Global chat. This automatically shares the cluster chat messages with the other clusters that have `Global chat` enabled too.

![Clusters - global cluster chat](/img/dashboard/gameserver/clusters/global_cluster_chat.jpg)

### Cluster chat format
The `Cluster chat format` field allows for customising how the cluster chat is displayed in-game. Use the variables below:

#### Available variables

- `{charname}` is replaced with name of character that posted the chat
- `{servername}` is replaced with name of server the chat came from
- `{groupname}` is replace with name of character's group
- `{message}` is used to determine where the actual chat message is placed

![Clusters - cluster chat format](/img/dashboard/gameserver/clusters/cluster_chat_format.jpg)


### Discord + Cluster chat
In addition to talking to players on other game servers is it also possible to talk to in-game players from Discord. 

Learn more about [Discord + Cluster chat](/dashboard/discord-bot#discord--cluster-chat)


### In-game example
![Clusters - cluster chat example](/img/dashboard/gameserver/clusters/cluster_chat_example.jpeg)

## Change cluster view
Clusters currently supports 2 different displaying options:
- Block view
- Table view

![Clusters - change view type](/img/dashboard/gameserver/clusters/cluster_view_change_type.jpg)

### Block view
![Clusters - block view](/img/dashboard/gameserver/clusters/cluster_view_block.jpg)

### Table view
![Clusters - table view](/img/dashboard/gameserver/clusters/cluster_view_table.jpg)

### Reorder game servers in cluster
Change the order of game servers in a cluster. This changes the order for the cluster for all admins.

![Clusters - change game server order in cluster](/img/dashboard/gameserver/clusters/cluster_change_server_order.jpg)

Change the order by dragging the game servers up / down.

![Clusters - change game server order in cluster modal](/img/dashboard/gameserver/clusters/cluster_change_server_order_modal.jpg)


## Manage clusters

### Re-order, Rename & Delete
Click <icon icon="fa-solid fa-pen-square" size="lg" /> to open the window where you can re-order, rename and delete clusters.

![Clusters - change order](/img/dashboard/gameserver/clusters/change_cluster_order.jpg)

### Create cluster
Click `+ Add cluster` in the __top-right__ corner of your screen to create a cluster. 

![Clusters - create cluster](/img/dashboard/gameserver/clusters/create_cluster.jpg)


### Cluster ID
Some games need a `cluster ID` in order to cluster together game servers. GameServerApp automatically configures the `cluster ID` in those cases. You don't have to do anything.

![Clusters - ID](/img/dashboard/gameserver/clusters/cluster_id.jpg)

[//]: # (todo https://help.gameserverapp.com/article/233-cluster-chat)
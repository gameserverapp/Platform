---
title: Requirements & tips
sidebar_position: 1.1
---

Here are the key requirements and helpful tips for hosting reliable, high-performance game servers using DediConnect.

## Supported Operating Systems (OS)

DediConnect supports the following operating systems. Make sure the language on the machine is set to English:

- Debian 11  
- Debian 12  
- Ubuntu 22.04  
- Windows Server 2019 (Standard & Datacenter editions)  
- Windows Server 2022 (Standard & Datacenter editions)  

:::caution Windows machines
Windows machines must [run the GSA install script](/getting_started/dediconnect/installation#prepare-a-windows-machine) before they can connect to DediConnect.
:::

### Supported games

For up-to-date information about which games are supported per OS, visit the [Connect DediConnect machine page](https://dash.gameserverapp.com/order/machine).  
If your game isn’t listed, it might still be available through [custom blueprints](/dashboard/blueprints/getting_started) or the [marketplace](https://dash.gameserverapp.com/marketplace).

![Connect machine 1](/img/getting_started/dediconnect/installation/game_support_os.jpg)

## Hardware specifications

- **Processor:** 3.5GHz or higher (AMD or Intel)  
- **RAM:** 64GB or more  
- **Disk:** 500GB or more (SSD or NVMe only, no HDDs!)

:::caution Windows `C:` usage
While game servers can be installed on alternative drives, critical files like game cache, Docker images, and required software are only supported on the `C:` drive.
:::

## Root / Administrator access

DediConnect needs full system access `Root` (Linux) or `Administrator` (Windows) to optimize the machine for game server hosting. There is currently no workaround for this.

## Network ports

These are the ports GSA may use to communicate with your machine and to host game servers and related services:

:::danger
DO NOT manually open these ports on your Windows or Linux firewall. GSA handles all port management for you.  
If you’ve rented a machine from a data center, there’s no need to configure ports at all.
:::

### Required

- 21 `FTP`  
- 22 `SSH`  
- 2456 - 2600  
- 7777 - 7900  
- 11000 - 11999 `Passive FTP`  
- 23000 - 23300  
- 27015 - 27300  
- 30000 - 30300  
- 37015 - 37215  

### Optional

- 8384 `Required for Syncthing`

:::tip Firewall suggestion
For extra security, consider allowing access to key ports (21, 22, 8384, 11000 - 11999) only for [Platform IPs](/getting_started/security#platform-ips).
:::

## Finding the right hardware

:::tip Need help?
[Join our Discord](https://www.gameserverapp.com/join-discord) to speak with experienced users who can guide you.

When asking for help, include:
- Your experience level  
- The game(s) you host  
- Number of game servers  
- Estimated number of players  
:::

### Processor / CPU

Most games benefit from higher clock speeds (GHz) rather than more cores. CPUs running below 3.5GHz may lead to lag or rubberbanding.  
Reserve at least one `thread` per game server.

You can look up your processor’s core and thread count online.

:::info Example
To host 8 game servers, you'll need at least 8 `threads`. Ideally, reserve 2 extra threads for system tasks.
:::

#### Popular hardware

Here are some commonly used CPUs for DediConnect:

- AMD Ryzen 5 3600  
- AMD Ryzen 7 7700  
- AMD Ryzen 9 7900  
- AMD Ryzen 9 7950X3D  
- AMD Ryzen Threadripper 2950X  
- Intel Core i7-6700  
- Intel Core i7-7700  
- Intel Core i9-9900K  

:::caution E-core CPU's
We recommend using CPUs with only P-cores (performance cores). CPUs with E-cores (efficiency cores) are supported but not ideal for game server hosting.
:::

### Memory / RAM

Game servers store save data in memory, increasing RAM usage. If memory runs out, servers crash.

Most games require 4–10 GB of RAM per server (average is ~7 GB).

:::info Example
For 8 game servers, plan for at least 56GB of RAM (8 x 7 = 56GB). Add ~4GB for system tasks, totaling 60GB.
:::

### Disk space

Fast storage is essential, use SSD or NVMe. Avoid HDDs entirely.

Most game servers need around 30GB of disk space.

:::info Example
For 8 game servers, you'll need at least 240GB (8 x 30 = 240GB). Add 100GB for the system, totaling 340GB.
:::

### DDoS protection

DDoS protection is a must for popular communities. Smaller or friend-only servers generally don’t need it.

## Practical tips

### Fresh install

For best results, install DediConnect on a freshly installed system, without any additional software. This avoids conflicts with programs not managed by GSA.

### Spread across multiple machines

In some cases, using several smaller machines is more cost-effective than one large one.  
It also lets you match the right hardware to each game. Use high-performance machines for popular servers, and lower spec ones for smaller maps or less active servers.

---
title: Requirements & tips
sidebar_position: 1.1
---

Requirements and tips for hosting reliable high performance game servers using DediConnect.

## Supported Operating Systems (OS)

- Debian 10
- Debian 11
- Debian 12
- Ubuntu 22.04
- Windows Server 2019 (Standard & Datacenter edition)
- Windows Server 2022 (Standard & Datacenter edition)

:::caution Windows machines
Windows machine must [run the GSA install script](/getting_started/dediconnect/installation#prepare-a-windows-machine) before they can connect with DediConnect.

:::

### Supported games

[Visit the Connect DediConnect machine page](https://dash.gameserverapp.com/order/machine) for up-to-date information about Game support per Operating System.

![Connect machine 1](/img/getting_started/dediconnect/installation/game_support_os.jpg)

## Hardware specifications

- Processor: 3.5GHz or more (AMD or Intel)
- RAM: 64GB or more
- DISK: 500GB or more (SSD or NVMe only!)

:::caution Windows `C:` usage
Game servers can be installed on alternative drives.
Game file cache, Docker images and other software for hosting game servers currently only supports installing on the `C:` drive.
:::


## Root / Administrator access
DediConnect requires `Root` (Linux) or `Administrator` (Windows) access in order to optimise machines for hosting game servers. There currently is no work around for this.

## Network ports

These are the ports GSA may use to run communicate with your machine and host game servers and service on the machine:

### Required
- 21 `FTP`
- 22 `SSH`
- 2456 - 2600
- 7777 - 7900
- 11000 - 12000 `Passive FTP`
- 23000 - 23300
- 27015 - 27300
- 30000 - 30300
- 37015 - 37215

### Optional
- 5555 - 5700 `Atlas only`
- 8080 - 8200 `Atlas only`
- 8384 `Required for Syncthing`

:::tip Firewall suggestion
Optionally you can allow access to specific ports (21, 22, 8384, 11000 - 12000) for [Platform IP's](/getting_started/security#platform-ips) only, for extra security.
:::

## Finding the right hardware

:::tip Need help?
[Jump on our Discord](https://www.gameserverapp.com/join-discord) and talk to one of the many experts that are happy to help you.

Include answers to the following questions in your Discord request:
- What is your experience level?
- Which game(s) do you host?
- How many game servers?
- How many players?
:::

### Processor / CPU
Almost every game performs better when hosted on high GHz CPU's. Only a few games benefit from more cores / threads. Processors below 3.5GHz may experience rubberbanding and lag. Reserve at least 1 `thread` per game server.

You can find the core / thread count for any processor on the internet.

:::info Example
If you want to host 8 game servers, you need at least 8 `threads`. Preferably reserve 2 extra `threads` for system tasks.
:::


#### Popular hardware
Below is a list of frequently used hardware, for DediConnect:
- AMD Ryzen 5 3600
- AMD Ryzen 7 7700
- AMD Ryzen 9 7900
- AMD Ryzen 9 7950X3D
- AMD Ryzen Threadripper 2950X
- Intel Core i7-6700
- Intel Core i7-7700
- Intel Core i9-9900K

:::caution E-core CPU's
For game server hosting we recommend using CPU's that only have P-cores (normal CPU's). You can technically use CPU's with E-cores, but we recommend you don't.
:::


### Memory / RAM
Running game servers load the save files into memory, which causes increased memory usages. When memory runs out, the server crashes.

For most games you should reserve between 4 - 10 GB RAM per game server (7GB on average).

:::info Example
If you want to host 8 game servers, you need at least 56 GB (8 x 7 = 56GB). Preferably reserve 4GB extra for system tasks, totalling to 60GB.
:::

### Disk space
Game servers benefit from high speed disks, like SSD and NVMe. Avoid HDDs!

In most cases you should reserve 30GB disk space per game server.

:::info Example
If you want to host 8 game servers, you need at least 240 GB (8 x 30 = 240GB). Preferably reserve 100GB extra for the system, totalling to 340GB.
:::

### DDoS protection
Professional DDoS protection is recommended for popular communities. Small (PvE) communities or friend-only servers can easily do without.



## Practical tips

### Fresh install
It's best to install DediConnect on a machine you recently installed, ideally without installing anything else. This avoids conflicts with software not managed by GSA.

### Spread across multiple machines
In certain cases it may be cheaper to spread your game servers over multiple machines. Small machines are usually cheaper, without sacrificing performance.

This also allows you to use different hardware for popular and less popular game servers, hosting the less popular maps on low spec hardware.
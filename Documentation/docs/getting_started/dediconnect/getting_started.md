---
title: Getting started
sidebar_position: 1
---

DediConnect is an auto-pilot software for dedicated root machines and game servers. It does all the heavy lifting autonomously, like installing game servers, performing updates and crash recovery.

[See how it works after installation >](/dashboard/machines/introduction)

## Dedicated root machine 
---
Choose one of the two options below to continue:

### Rent a machine
When you are new to dedicated machines or prefer a professional solution, we recommend you rent a dedicated machine from a hosting provider. It's easy and robust.

[Instructions for hosting provider machines >](/getting_started/dediconnect/hosting_providers)

### Self-hosted machine
If you are experienced and host a machine on your home / the office network, you can probably use that machine for DediConnect.

[Instructions for self-hosted machine >](/getting_started/dediconnect/self-hosted_machine)

## What machine specs do you need?
---

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

### Practical tips

#### Spread across multiple machines
In certain cases it may be cheaper to spread your game servers over multiple machines. Small machines are usually cheaper, without sacrificing performance.

This also allows you to use different hardware for popular and less popular game servers, hosting the less popular maps on low spec hardware.


## Requirements & recommendations
---


### Hardware specifications

- Processor: 3.5GHz or more (AMD or Intel)
- RAM: 64GB or more
- DISK: 500GB or more


### Supported Operating Systems (OS)

:::info Pick the right OS
The games you want to host should primarily determine what OS works best for your machine.
Not all games work on every OS and in certain cases plugins only work one OS, so we recommend you do your research. [Join our Discord](https://www.gameserverapp.com/join-discord) for personal advice.
:::
- Debian 10
- Debian 11
- Ubuntu 22.04
- Windows Server 2019 (Standard)
- Windows Server 2022 (Standard)

### DDoS protection
Professional DDoS protection is recommended for popular communities. Small (PvE) communities or friend-only servers can easily do without.

## Technical info about DediConnect
---
Below you can find some technical information about how DediConnect works and what kind of tools it uses under the hood.

### Docker

DediConnect uses [Docker](https://www.docker.com/) to containerize game servers and services. This ensures highly reliable and stable game servers with minimal downtime.

### SSH
GSA primarily uses SSH to securely connect with your machine.

During the installation process GSA will switch from `password auth` to `key auth`, for optimal security. Optionally can you use `key auth` from the start, by adding GSA's public key to your machine.

If you don't know how to do this, please use the normal password auth.

#### GSA Public SSH key
```composer log
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIC9BY5UGWpFTOHDRskIeide5oWYPSh97eJkTlQCzNi0S support@gameserverapp.com
```


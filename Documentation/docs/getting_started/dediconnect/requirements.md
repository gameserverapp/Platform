---
title: Requirements
sidebar_position: 1.1
---



## Supported Operating Systems (OS)

:::info Pick the right OS
The games you want to host should primarily determine what OS works best for your machine.
Not all games work on every OS and in certain cases plugins only work one OS, so we recommend you do your research. [Join our Discord](https://www.gameserverapp.com/join-discord) for personal advice.
:::
- Debian 10
- Debian 11
- Ubuntu 22.04
- Windows Server 2019 (Standard)
- Windows Server 2022 (Standard)

## Hardware specifications

- Processor: 3.5GHz or more (AMD or Intel)
- RAM: 64GB or more
- DISK: 500GB or more

:::caution Windows drive
GSA can currently only install DediConnect on the C:\ drive.
:::

## Root / Administrator access
In order to optimise your machine for DediConnect, it needs `Root` (Linux) or `Administrator` (Windows) access. There currently is no work around for this.

## Network ports

These are the ports GSA may use to run communicate with your machine and host game servers and service on the machine:

### Required
- 21 `FTP`
- 22 `SSH`
- 2456 - 2600
- 5555 - 5700
- 7777 - 7900
- 11000 - 12000 `Passive FTP`
- 23000 - 23300
- 27015 - 27300
- 30000 - 30300
- 37015 - 37215

### Optional
- 8080 - 8200 `Atlas only`
- 8384 `Required for Syncthing`

:::tip Firewall suggestion
Optionally you can allow access to specific ports (21, 22, 8384, 11000 - 12000) for [Platform IP's](/getting_started/other/platform_ips) only, for extra security.
:::
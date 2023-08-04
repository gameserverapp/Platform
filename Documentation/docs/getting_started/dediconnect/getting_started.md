---
title: Getting started
sidebar_position: 1
---

## Supported Operating Systems (OS)
- Debian 10
- Debian 11
- Ubuntu 22.04
- Windows Server 2019 (Standard)
- Windows Server 2022 (Standard)

## Hardware specifications
- Processor: 3.5GHz or more (AMD or Intel)
- RAM: 64GB or more
- DISK: 500GB or more

## Calculate what you need


## Technical info about DediConnect

### Docker

DediConnect uses [Docker](https://www.docker.com/) to containerize game servers and services. This ensures highly reliable and stable game servers with minimal downtime.

### SSH
GSA primarily uses SSH to securely connect with your machine.

During the installation process GSA will switch from `password` to `SSH key` authentication, for optimal security. Optionally can you use `key auth` from the start, by adding GSA's public key to your server. If you don't know how to do this, please use the normal password auth.

```composer log
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIC9BY5UGWpFTOHDRskIeide5oWYPSh97eJkTlQCzNi0S support@gameserverapp.com
```


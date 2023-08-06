---
title: Self-hosted machine
sidebar_position: 10
---

When using a dedicated server connected to a home / office network, there are a couple extra things you may need to configure.


:::danger Not supported
Do not run DediConnect inside a Hyper-V, LXC or Docker container.
:::


:::info Check requirements
Make sure your hardware meets the [hardware requirements](getting_started.md#hardware-specifications) and your machine runs a [supported Operating Systems (OS)](/getting_started/dediconnect/getting_started#supported-operating-systems-os).
:::

## Dedicated IP
In order for people and GSA to connect with your machine, you need to make sure that your internet connection has a dedicated IP (or a dynamic IP that never changes). Contact your Internet Service Provider for more information.

## Port forwards

The ports listed below should be forwarded to the internal IP of your machine. Forwarding is usually configured on your router. For instructions how to forward ports on your router, please use a search engine.

:::caution forward all ports
Missing any ports may cause problems.
Make sure to forward TCP & UDP for all ports.
:::

- 21
- 22
- 2456 - 2600
- 5555 - 5700
- 7777 - 7900
- 8080 - 8200
- 8384 (Required for Syncthing)
- 11000 - 12000
- 23000 - 23300
- 27015 - 27300
- 30000 - 30300
- 37015 - 37215

Optionally you can whitelist certain ports for [Platform IP's](/getting_started/other/platform_ips) only, for extra security.


## Multi-machine setup
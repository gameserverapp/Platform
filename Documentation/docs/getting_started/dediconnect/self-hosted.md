---
title: Home server
sidebar_position: 10
---

When you're using a dedicated server hosted from your home, there are a couple more things you need to prepare before you can use DediConnect.

Check out the [recommended hardware specs](getting_started.md#hardware-specifications).

:::caution
You can not run DediConnect inside a Hyper-V, LXC or Docker container. You also cannot put a VPN in front of your server.
:::

### Dedicated IP
In order for people and GSA to connect with your machine, you need to make sure that your internet connection has a dedicated IP (or a dynamic IP that never changes). Contact your Internet Service Provider for more information.

### Port forwards

The ports listed below should be forwarded to the internal IP of your machine. Forwarding is usually configured on your router. For instructions how to forward ports on your router, please use a search engine.

:::caution
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
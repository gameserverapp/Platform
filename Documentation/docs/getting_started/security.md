---
title: Security
sidebar_position: 0
---

## Platform IPs

Here is a list of IP addresses that GameServerApp (GSA) may use to communicate with your game server or machine. For extra security, you can whitelist these IPs.

Please keep in mind that these addresses may change. Any changes will be announced on our Discord.

- 49.12.0.167
- 49.12.13.25
- 49.12.33.53
- 49.12.243.67
- 49.13.48.159
- 88.99.83.142
- 88.99.125.108
- 128.140.81.89
- 157.90.245.206
- 159.69.121.201
- 159.69.179.102
- 162.55.164.94
- 188.34.165.170

If your firewall supports hostnames, you can whitelist all our IPs using:  
`platform.gameserverapp.com`

## Public SSH key

This is the public SSH key used by GSA to establish secure communication for DediConnect.

```composer log
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIC9BY5UGWpFTOHDRskIeide5oWYPSh97eJkTlQCzNi0S support@gameserverapp.com
```

## Report security issue

If you discover a security issue, please report it immediately by emailing:  
`support@gameserverapp.com`

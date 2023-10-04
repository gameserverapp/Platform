---
title: Getting started
sidebar_position: 1
---

DediConnect helps you host stable and high performance game servers, without the technical hassle, on rented or self-hosted hardware.

The hosted game server manager does all the heavy lifting, like installing game servers, running updates and crash recovery.


[See how it works after connecting a machine >](/dashboard/machines/getting_started)

## Where to begin?

### Rent a machine
Keep it simple by renting a machine from a data center. This is the easiest and (in our opinion) best solution for hosting game servers.

Rented machines are usually more reliable vs. self-hosted machines, due to redundancies in data centers. It's easy and robust.

[Find a dedicated machine provider >](/getting_started/dediconnect/hosting_providers)

### Self-hosted machine
Use a self-hosted dedicated root machine running on a home / office network with DediConnect.

[Using self-hosted machines >](/getting_started/dediconnect/self-hosted_machine)

## What tech do we use?

Below you can find some technical information about how DediConnect works and what kind of tools it uses under the hood.

### Docker

DediConnect uses [Docker](https://www.docker.com/) to containerize game servers and services. This ensures highly reliable and stable game servers with minimal downtime.

### SSH
GSA primarily uses SSH to securely connect with your machine.

During the installation process GSA will switch from `password auth` to `key auth`, for optimal security. 

Optionally can you use `key auth` from the start, by adding [GSA's public key](/getting_started/security#public-ssh-key) to the `authorized_keys` file on the machine.
If you don't know how to do this, please use the normal password auth.


---
title: Getting started
sidebar_position: 1
---

DediConnect helps you host stable, high-performance game servers without the technical hassle, whether you're using rented or self-hosted hardware.

The hosted game server manager takes care of everything for you.\
Installing game servers, running updates and recovering from crashes so you can focus on playing, not maintaining.

[See how it works after connecting a machine >](/dashboard/machines/getting_started)

## Where to begin?

### Rent a machine

The easiest way to get started is by renting a machine from a data center. It’s simple, reliable, and (in our opinion) the best option for hosting game servers.

Rented machines tend to offer better reliability than self-hosted ones, thanks to built-in redundancies in data centers. It's a robust and low-maintenance solution.

[Find a dedicated machine provider >](/getting_started/dediconnect/hosting_providers)

### Self-hosted machine

Prefer to use your own setup? You can use a dedicated root machine on your home or office network with DediConnect.

[Using self-hosted machines >](/getting_started/dediconnect/self-hosted_machine)

## What tech do we use?

Here’s a quick overview of the technology that powers DediConnect and how it keeps your servers running smoothly.

### Docker

DediConnect uses [Docker](https://www.docker.com/) to containerize game servers and services. This approach ensures high reliability and stability with minimal downtime.

### SSH

GSA uses SSH to securely connect to your machine.

During installation, GSA automatically switches from `password auth` to `key auth` for better security.

If you prefer, you can start directly with `key auth` by adding [GSA's public key](/getting_started/security#public-ssh-key) to your machine’s `authorized_keys` file.  
If you're unsure how to do this, just stick with password authentication during setup.

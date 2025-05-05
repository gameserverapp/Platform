---
title: Self-hosted machine
sidebar_position: 9999
---

When using a dedicated server connected to a home or office network, there are a few extra configurations you may need to do.

[Installation instructions >](/getting_started/dediconnect/installation)

:::caution Check requirements
Make sure your setup meets the [hardware requirements](/getting_started/dediconnect/requirements#hardware-specifications) and that your machine runs a [supported Operating System (OS)](/getting_started/dediconnect/requirements#supported-operating-systems-os).
:::

:::tip Update machine & drivers
Ensure your machine is fully updated after installing the OS. Outdated drivers can lead to poor performance and system instability.
:::

## Virtualization

DediConnect uses containerization (via Docker) to isolate environments and enhance security against viruses and hacking threats.

For the best performance, install DediConnect directly on a bare-metal machine. While platforms like KVM or Proxmox are supported, they may introduce slight performance degradation for hosted game servers.

Avoid installing DediConnect inside a Hyper-V or Docker container. Doing so can cause issues due to nested containerization, which is not supported.

## Dedicated IP

To ensure connectivity between your machine, users, and GSA, your internet connection must have a dedicated IP address, or at least a dynamic IP that never changes. Reach out to your Internet Service Provider to verify or request this.

## Port Forwards

You must forward [all the ports used by GSA](/getting_started/dediconnect/requirements#network-ports) to the internal IP address of your machine. This is usually configured via your router. If you're unsure how to do this, look up port forwarding instructions specific to your router model.

:::caution Forward all ports
Failure to forward all required ports may result in connection issues. Be sure to forward both TCP and UDP ports.
:::

## Multiple machines on a single IP

If you're running multiple machines on a single IP address (such as in a typical home network), you can still host with GSA. Each machine will use a unique port offset to avoid conflicts.

:::caution Advanced stuff
Only proceed with the setup below if an expert from our [Discord community](https://www.gameserverapp.com/join-discord) has advised you to do so.
:::

#### How does it work?

Each machine is assigned a port offset, which shifts all the ports GSA normally uses. This helps avoid overlap.

:::info Example
For 2 machines:
- Machine A → offset `0`
- Machine B → offset `1000`

For 3 machines:
- Machine A → offset `0`
- Machine B → offset `1000`
- Machine C → offset `2000`
:::

### Windows

Watch this walkthrough by Birdman, covering all necessary steps:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Wqop3OkRREI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 1. Install GSA script

If you haven't already, [install the GSA script on your Windows machine](/getting_started/dediconnect/installation#prepare-a-windows-machine).

#### 2. Open `sshd_config` in Notepad

Go to `C:\ProgramData\ssh` and open the `sshd_config` file using Notepad.

![Locate sshd_config](/img/getting_started/dediconnect/self-hosted_machine/locate_ssh.png)

#### 3. Change the port

In the file, find the line with `Port` and change it to the desired offset value. Refer to [this example](/getting_started/dediconnect/self-hosted_machine#how-does-it-work) for guidance.

![Change port](/img/getting_started/dediconnect/self-hosted_machine/change_port.png)

#### 4. Restart SSH

Open PowerShell and execute the following command to apply the new port setting: `Restart-Service sshd -Force`

![Restart SSH via Powershell](/img/getting_started/dediconnect/self-hosted_machine/restart_ssh.png)

#### 5. Update firewall rule

Open `Windows Defender Firewall` and go to `Advanced settings`.

![Go to Advanced Settings in Windows Defender firewall](/img/getting_started/dediconnect/self-hosted_machine/open_firewall.png)

Under `Inbound Rules`, find `OpenSSH Server (sshd)`. Right-click it and choose `Properties`.

![Find right firewall rule](/img/getting_started/dediconnect/self-hosted_machine/edit_firewall.png)

In the `Protocols and Ports` tab, update the `Local port` to match the offset you configured.

![Change port number](/img/getting_started/dediconnect/self-hosted_machine/update_firewall.png)

Click `OK` to save your changes.

:::info
Use this link to access the special setup page with your offset: [Connect DediConnect with special offset number >](https://dash.gameserverapp.com/order/machine?port_offset=1000)
:::

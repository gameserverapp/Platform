---
title: Self-hosted machine
sidebar_position: 9999
---

When using a dedicated server connected to a home / office network, there are a couple extra things you may need to configure.


:::danger Not supported
Do not run DediConnect inside a Hyper-V, LXC or Docker container.
:::


:::caution Check requirements
Make sure your hardware meets the [hardware requirements](/getting_started/dediconnect/requirements#hardware-specifications) and your machine runs a [supported Operating Systems (OS)](/getting_started/dediconnect/requirements#supported-operating-systems-os).
:::


:::info Update the drivers
Make sure the drivers on the machine are up-to-date after installing the OS. Outdated drivers can cause degraded performance.
:::

## Dedicated IP
In order for people and GSA to connect with your machine, you need to make sure that your internet connection has a dedicated IP (or a dynamic IP that never changes). Contact your Internet Service Provider for more information.

## Port forwards

Make sure you forward [all ports that GSA may use on your machine](/getting_started/dediconnect/requirements#network-ports).

Those ports should be forwarded to the internal IP of your machine. Forwarding is usually done on your router. For instructions about how to forward ports on your router, please use a search engine.

:::caution forward all ports
Missing any ports may cause problems.
Make sure to forward TCP & UDP for all ports.
:::


## Multiple machines on single IP
Learn what you can do when you only have a single IP (usually a home network) to host all your machines from.

:::caution Advanced stuff
We do not recommend following the steps below unless an expert [on our discord](https://www.gameserverapp.com/join-discord) advised you to do so.
:::

#### How does it work?
Each machine will install using a different port offset. It's basically raising [all the port numbers that GSA might use](/getting_started/dediconnect/requirements#network-ports) with the configured offset. 

:::info Example
Here are some offset examples for different configurations:

2 machines:
- Machine A -> use offset `0`
- Machine B -> use offset `1000`

3 machines:
- Machine A -> use offset `0`
- Machine B -> use offset `1000`
- Machine C -> use offset `2000`
:::

### Windows

#### 1. Install GSA script
If you haven't already, ensure you [installed the GSA script on your Windows machine](/getting_started/dediconnect/installation#windows).

#### 2. Open sshd_config in Notepad
Navigate to `C:\ProgramData\ssh`and open `sshd_config` with Notepad.

![Locate sshd_config](/img/getting_started/dediconnect/self-hosted_machine/locate_ssh.png)

#### 3. Change port
Change `Port` to the offset number you want to use (see example [here](/getting_started/dediconnect/self-hosted_machine#how-does-it-work)).

![Change port](/img/getting_started/dediconnect/self-hosted_machine/change_port.png)

#### 4. Restart SSH
Open PowerShell and run `Restart-Service sshd -Force` to restart SSH.

![Restart SSH via Powershell](/img/getting_started/dediconnect/self-hosted_machine/restart_ssh.png)

#### 5. Update firewall rule
Open `Windows Defender Firewall` and click `Advanced settings`.

![Go to Advanced Settings in Windows Defender firewall](/img/getting_started/dediconnect/self-hosted_machine/open_firewall.png)

Then click on `Inbound Rules` and locate the `OpenSSH Server (sshd)` firewall rule.
Right click the `OpenSSH Server (sshd)` and click on `Properties` in the dropdown menu.

![Find right firewall rule](/img/getting_started/dediconnect/self-hosted_machine/edit_firewall.png)

Finally click on `Protocols and Ports` and change `Local port` to the offset number you want to use (see example [here](/getting_started/dediconnect/self-hosted_machine#how-does-it-work)).

![Change port number](/img/getting_started/dediconnect/self-hosted_machine/update_firewall.png)

Hit `OK` to save the port.
You are now ready to [connect Dediconnect with special offset number >](https://dash.gameserverapp.com/order/machine?port_offset=1000)
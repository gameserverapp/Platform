---
title: Access control
sidebar_position: 2
---

Manage access to game servers, using groups. For example for VIP-only servers or RP communities. 
Customize the rules, settings, and requirements for each group.

[Go to Access control >](https://dash.gameserverapp.com/admintools_v2/access-control)

![Admin tools - Access control - overview](/img/dashboard/admin_tools/access_control/access_control_overview.jpg)

## Access groups
In the Access control section you can create groups that can be used to manage access to game servers.

Access groups can be used for a variety of purposes, such as (but not limited to):
- Rule gated servers
- VIP-only servers
- RP communities
- Invite-only servers

There are no limits to the number of groups you can create. So you can create multiple groups for different purposes, such as a "VIP-only" group while also having a group that acts as a Rule gate.

Community with clusters that have different rules, you can create a group for each cluster and apply different [Rule gate](#rule-gate) to each group.


### Create group
Click `+ Add group` in the top-right corner on the [Access control overview page](https://dash.gameserverapp.com/admintools_v2/access-control).

![Admin tools - Access control - Create group 1](/img/dashboard/admin_tools/access_control/create_group_1.jpg)

Enter a name for the new group and click `Create`.

![Admin tools - Access control - Create group 2](/img/dashboard/admin_tools/access_control/create_group_2.jpg)


### Group matching priority
The order in which the groups are listed on the [Access control overview](https://dash.gameserverapp.com/admintools_v2/access-control) determines the priority. Therefor it is recommended to put the `Members only` groups at the top.

When there are multiple groups, GSA will check each group using the priority order. The first group that matches the player is used.
In cases where the player matches no groups, the [default policy](#default-settings) is used.

![Admin tools - Access control - Sorting](/img/dashboard/admin_tools/access_control/access_control_sorting.jpg)



### Archive group
You can archive a group by clicking the `Archive` button, under the dropdown. Archived groups are not visible on the `Active` overview, but can be found on the `Archived` tab.

![Admin tools - Access control - Archive](/img/dashboard/admin_tools/access_control/access_group_archive.jpg)

### Default settings
With the default settings you can configure the default Policy and Kick message.

Click the <Icon icon="fa-solid fa-pencil-alt" size="lg" /> icon to edit any of the default settings.

![Admin tools - Access control - Default settings](/img/dashboard/admin_tools/access_control/access_control_default_settings.jpg)

#### Policy
There are 2 options for the default policy:
- `Everyone can join` = Allows anyone, that is not banned, to join the servers.
- `Members only` = Only members of Access groups can join the servers.

This policy applies to all game servers that do not have a specific access group assigned, and access groups that use the `Use dashboard default` policy.

#### Kick message
Change the default kick message that is shown to players when they are kicked from a server. When an Access group has a custom kick message configured, that one is used instead.

![Admin tools - Access control - Default kick message](/img/dashboard/admin_tools/access_control/access_control_default_kick_message.jpg)


## Members
Players can be added to an Access group manually, or automatically through Tasks, Shop packs, Supporter Tiers, Application forms, or by being a Twitch subscriber.

All players in an Access group are considered `Members`.

#### Search &filters
You can search for specific players and filter members by membership type and [Custom Roles](/dashboard/admin_tools/custom_roles).

![Admin tools - Access control - Members](/img/dashboard/admin_tools/access_control/access_group_members.jpg)

### Add member

Click `+ Add member` to manually add a player to the group.

![Admin tools - Access control - Add member 1](/img/dashboard/admin_tools/access_control/access_group_add_member_1.jpg)

You can search for players by name and select one or multiple players.
Set the membership type and duration, then click `Submit`.

![Admin tools - Access control - Add member 2](/img/dashboard/admin_tools/access_control/access_group_add_member_2.jpg)


### Edit membership
You can edit the membership type and duration per member, by clicking the `Actions` dropdown menu and selecting `Edit`.

![Admin tools - Access control - Edit member 1](/img/dashboard/admin_tools/access_control/access_group_edit_member_1.jpg)

Change the membership type and/or duration, then click `Save`.

![Admin tools - Access control - Edit member 2](/img/dashboard/admin_tools/access_control/access_group_edit_member_2.jpg)


### Delete member
You can delete a player from the group by clicking the `Actions` dropdown menu and selecting `Delete`.

:::info
Deleting a player from an Access group does not remove them from the game server or the dashboard. It only removes them from the Access group.
:::

![Admin tools - Access control - Delete member](/img/dashboard/admin_tools/access_control/access_group_delete_member.jpg)

#### Bulk actions
You can perform bulk actions on multiple members at once, by selecting them and clicking the `Bulk actions` button at the top.

![Admin tools - Access control - Bulk delete members](/img/dashboard/admin_tools/access_control/access_group_bulk_delete_member.jpg)


### Membership types

**Trial**\
When a new player joins a game server linked to a group with a Rule gate, they are automatically added as a trial member. During the trial period the player is reminded to visit the Community website and accept the rules. When the trial expires the player is kicked from the server.

**Member**\
Regular memberships are for players that have been approved to join a group. For example, a player that has applied to join an RP community.

**Priority Member**\
This is currently the same as a regular member. In the future this may be used for priority queuing.

**Twitch subscribers**\
Twitch subscribers are automatically added to the group when they subscribe to your channel. They are removed when their subscription expires. See [Twitch subs](#twitch-subs) for more info.

### Membership duration
The membership can have a specific duration, after which the player is automatically removed from the group. It is also possible to set the duration to `Never`, which means the player will never be removed from the group.


## Rule gate
Tired of players claiming they didn't know the rules?\
With the Rule gate you can require players to accept the rules, if they want to keep playing.

![Admin tools - Access control - Rule gate](/img/dashboard/admin_tools/access_control/access_group_rule_gate.jpg)

### Rule page
The Rule page is the page on the Community website that contains the rules. You can configure which page is used for the Rule gate.

Pages that are configured as the Rule page will automatically have a `Accept rules` button added to the page.

After accepting the rules the player's membership is automatically converted from `trial` to `member`.

![Admin tools - Settings - Rule page example](/img/dashboard/admin_tools/access_control/rule_page_example.jpg)


### Trial period
New players are automatically added as a trial member when they join a game server linked to a group with a Rule gate. You can set a custom trial period for each group.

During the trial period the player is reminded to visit the Community website and accept the rules.
You can configure the reminder message and use variables to include the remaining time and the website URL.

**Variables**
- `%%TIME%%` shows the remaining time in **minutes**.  
- `%%WEBSITE_URL%%` shows the URL of the Community website.

:::info
The trial period is only applied to players that join a game server linked to a group with a Rule gate. Players that join a server not linked to a group are not affected.
:::


![Admin tools - Access control - Rule gate example](/img/dashboard/admin_tools/access_control/access_group_rule_gate_message_example.jpg)


## Form
For situations where you want players to apply before they can join a game server, you can use the Access group form. 

On the form page you can configure the form that players need to fill in before they are added to the group. Per group, you can have a different form and form settings.

### Form builder
If you are familiar with the [Forms](/dashboard/community/forms) feature, then you already know [how to use the Form builder](/dashboard/community/forms#form-builder). 

:::info
After creating a form, you should add it to a page on the Community website. Use the `Create new form page` button in the form settings to automatically create a new page and select the form.


![Admin tools - Access control - Add form to page](/img/dashboard/admin_tools/access_control/access_group_form_add_page.jpg)
:::

### Form settings

![Admin tools - Access control - Form settings](/img/dashboard/admin_tools/access_control/access_group_form_settings.jpg)

#### Who can submit
Determine who can submit the form. You can choose between:
- `Everyone` = Everyone can submit the form.
- `Only accounts with characters` = Players must have a character on any game server to submit the form.

#### Submission limits
Determine how many times a player can submit the form. You can choose between:
- `Unlimited` = Players can submit the form multiple times.
- `1 submission per account` = Players can submit the form only once per account.

#### Application handling
Determine how applications are handled. You can choose between:
- `Manually approve applications` = Applications need to be reviewed before players are added to the group.
- `Automatically approval` = Applications are automatically accepted and players are added to the group.

#### Close date
Set a date after which the form is no longer available.

#### Form submit message
Message that is shown to players when they submit the form.

### Form requirements

You can require players to meet certain requirements before they can submit the form. For example, you can require players to have their Discord linked to their account or an email address.

When players have an email address linked to their account, they will receive an email when their application is approved or rejected. You can customize the email messages on the [Access group settings page](#email--discord-reporting).

![Admin tools - Access control - Form requirements](/img/dashboard/admin_tools/access_control/access_group_form_requirements.jpg)


### Example

![Admin tools - Access control - Example form builder](/img/dashboard/admin_tools/access_control/access_group_form_example_1.jpg)

![Admin tools - Access control - Example form on website](/img/dashboard/admin_tools/access_control/access_group_form_example_2.jpg)


## Applications
After players have submitted the form, you can review the applications.\
All applications are listed on the `Applications` tab, where you can filter for the application status or search for a specific player.

![Admin tools - Access control - Applications](/img/dashboard/admin_tools/access_control/access_group_applications.jpg)

### Review applications

Click the `Review` button to open the application.

![Admin tools - Access control - Review application 1](/img/dashboard/admin_tools/access_control/access_group_review_application_1.jpg)

You can add a note to the application, which will be included in the email sent to the player.
Choose `Approve` or `Reject` to complete the review.

:::tip
Use the `Delete` option to remove any invalid or rule-breaking submissions. This also allows the player to try again if [submission restrictions](#form-settings) are in place.
:::

![Admin tools - Access control - Review application 2](/img/dashboard/admin_tools/access_control/access_group_review_application_2.jpg)

### Processed applications
Reviewed applications are still listed on the `Applications` tab, but are marked as `Approved` or `Rejected`. You can filter for the application status or search for a specific player.

![Admin tools - Access control - Processed application 1](/img/dashboard/admin_tools/access_control/access_group_processed_application_1.jpg)

You can see who reviewed the application, and their note and decision.

![Admin tools - Access control - Processed application 2](/img/dashboard/admin_tools/access_control/access_group_processed_application_2.jpg)


## Resources
You can apply an Access group to specific game servers and/or clusters. These are considered `Resources`.

A game server / cluster can be linked to multiple Access groups. The [sorting of the groups](#sorting--priority) determines which one takes priority.

Resources can be managed on the `Settings` tab.

![Admin tools - Access control - Resources](/img/dashboard/admin_tools/access_control/access_group_resources.jpg)

## Settings

![Admin tools - Access control - Settings](/img/dashboard/admin_tools/access_control/access_group_settings.jpg)

### Status
The status determines whether the group is active or not. You can disable a group to temporarily stop using it.

### Policy
The policy determines who can join the servers linked to the group. There are 3 options:
- `Use dashboard default` = Uses the default policy set in the [Default settings](#default-settings).
- `Everyone can join` = Allows anyone, that is not banned, to join the servers.
- `Members only` = Only members of this Access group can join the servers.

**Members only**\
Players that are not members of the group are kicked from the server immediately.\
This feature is game-dependent, and only works for games that have `kick` (or similar) commands available. GSA is unable to kick players from games that do not support this feature.

### Whitelist
For games that support whitelisting, you can automatically add members to the whitelist. This is done by using the `whitelist` command in the game server's RCON (or similar) console.

For games that do not support whitelisting, but do support Kick & ban commands, you can still use this feature. It will then use the ban command to keep players out of the server. This means the player will be able to join the server, but will be kicked immediately.

#### Existing members
Changing the whitelist setting will automatically add or remove all existing members from the whitelist. Because this can take a while, is there a timeout of 6 hours before you can change the setting again.

![Admin tools - Access control - Settings - Whitelist](/img/dashboard/admin_tools/access_control/access_group_settings_whitelist.jpg)

### Discord role
This setting automatically assigns a Discord role of your choice to members of the group. The role is assigned to the player's linked Discord account.

When a player is removed from the group, the role is automatically removed.

![Admin tools - Access control - Settings - Discord role](/img/dashboard/admin_tools/access_control/access_group_settings_discord_role.jpg)

### Twitch subs
Automatically add / remove Twitch subscribers to the group.
You can add one or more Twitch channels. Players that subscribe to any of the channels are added to the group.

:::info
Players must connect their Twitch account before they can use this feature.
:::

#### Sync
You can manually sync the Twitch subscriptions by clicking the `Sync` button. This will check all subscriptions and add / remove players from the group accordingly. This can only be done once every 30 minutes, for the entire dashboard.

![Admin tools - Access control - Settings - Twitch](/img/dashboard/admin_tools/access_control/access_group_settings_twitch.jpg)

### Kick message
Change the kick message that is shown to players when they are kicked from a server.

![Admin tools - Access control - Settings - Kick message](/img/dashboard/admin_tools/access_control/access_group_settings_kick_message.jpg)

### Email & Discord reporting
At the bottom of the settings page you can configure reporting. This lets you customize the messages sent to players when their application is approved or rejected. You can also enable Discord reporting to receive updates in a specific channel.

![Admin tools - Access control - Settings - Discord reporting](/img/dashboard/admin_tools/access_control/access_group_settings_discord_reporting.jpg)
![Admin tools - Access control - Settings - Email reporting](/img/dashboard/admin_tools/access_control/access_group_settings_email_reporting.jpg)

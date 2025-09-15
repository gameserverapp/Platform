---
title: Access control
sidebar_position: 2
---

Manage access to game servers using groups. For example, restrict access to VIP-only servers or RP communities.  
Customize the rules, settings, and requirements for each group.

[Go to Access control >](https://dash.gameserverapp.com/admintools_v2/access-control)

![Admin tools - Access control - overview](/img/dashboard/admin_tools/access_control/access_control_overview.jpg)

## Access groups

In the Access Control section, you can create groups to manage access to game servers.

Access groups can be used for purposes such as:
- Rule-gated servers
- VIP-only servers
- RP communities
- Invite-only servers

There is no limit to the number of groups you can create. For example, you can have a "VIP-only" group alongside a group that acts as a rule gate.

If your community has clusters with different rules, you can create a group per cluster and assign each a different [Rule gate](#rule-gate).

### Create group

Click `+ Add group` in the top-right corner of the [Access control overview page](https://dash.gameserverapp.com/admintools_v2/access-control).

![Create group 1](/img/dashboard/admin_tools/access_control/create_group_1.jpg)

Enter a name for the group and click `Create`.

![Create group 2](/img/dashboard/admin_tools/access_control/create_group_2.jpg)

### Group matching priority

The order of groups in the [Access control overview](https://dash.gameserverapp.com/admintools_v2/access-control) determines their priority.  
It's recommended to place `Members only` groups at the top.

If multiple groups are configured, GSA will check them in order. The first group that matches a player is used.  
If no group matches, the [default policy](#default-settings) is applied.

![Sorting](/img/dashboard/admin_tools/access_control/access_control_sorting.jpg)

### Archive group

Click the `Archive` button under the dropdown menu to archive a group.  
Archived groups are hidden from the `Active` view but can be found under the `Archived` tab.

![Archive group](/img/dashboard/admin_tools/access_control/access_group_archive.jpg)

### Default settings

The default settings define the fallback policy and kick message.

Click the <Icon icon="fa-solid fa-pencil-alt" size="lg" /> icon to edit them.

![Default settings](/img/dashboard/admin_tools/access_control/access_control_default_settings.jpg)

#### Policy

Two options are available:

- `Everyone can join`: Allows anyone (not banned) to join.
- `Members only`: Only members of an Access group may join.

This applies to:
- Servers without a specific Access group
- Groups using the `Use dashboard default` policy

#### Kick message

Customize the default kick message shown when a player is removed from a server.  
If a group has its own message, that message takes precedence.

![Kick message](/img/dashboard/admin_tools/access_control/access_control_default_kick_message.jpg)

## Members

Players can be added to an Access group manually or automatically via Tasks, Shop packs, Supporter Tiers, Application forms, or Twitch subscriptions.

All players in a group are considered `Members`.

#### Search & filters

Search for players and filter members by membership type or [Custom Roles](/dashboard/admin_tools/custom_roles).

![Members](/img/dashboard/admin_tools/access_control/access_group_members.jpg)

### Add member

Click `+ Add member` to add a player manually.

![Add member 1](/img/dashboard/admin_tools/access_control/access_group_add_member_1.jpg)

Search for players by name, select one or more, set the membership type and duration, and click `Submit`.

![Add member 2](/img/dashboard/admin_tools/access_control/access_group_add_member_2.jpg)

### Edit membership

To change a member's type or duration, use the `Actions` dropdown and select `Edit`.

![Edit member 1](/img/dashboard/admin_tools/access_control/access_group_edit_member_1.jpg)

Update the details and click `Save`.

![Edit member 2](/img/dashboard/admin_tools/access_control/access_group_edit_member_2.jpg)

### Delete member

Use the `Actions` dropdown and select `Delete` to remove a player from the group.

:::info
Removing a player from a group does **not** remove them from the game server or dashboard — only from the Access group.
:::

![Delete member](/img/dashboard/admin_tools/access_control/access_group_delete_member.jpg)

#### Bulk actions

Select multiple members and click `Bulk actions` to apply changes to all of them at once.

![Bulk delete](/img/dashboard/admin_tools/access_control/access_group_bulk_delete_member.jpg)

### Membership types

**Trial**  
Players are automatically added as a trial member when joining a Rule-gated server.  
During the trial, they're prompted to accept the rules. If they don't, they're kicked when their trial expires.

**Member**  
Approved players with standard access. Ideal for RP communities or similar setups.

**Priority Member**  
Functions the same as `Member` for now. May be used for priority queueing later.

**Twitch subscribers**  
Subscribers are automatically added to the group and removed when the sub expires. See [Twitch subs](#twitch-subs) for more details.

### Membership duration

Set how long a membership lasts. After the set time, the player is removed from the group.  
Set to `Never` to make it permanent.

## Rule gate

Tired of players ignoring your rules?  
Rule gate requires them to accept the rules before continuing.

![Rule gate](/img/dashboard/admin_tools/access_control/access_group_rule_gate.jpg)

### Rule page

Choose a page on your Community site that contains your rules.  
This page will automatically include an `Accept rules` button.

Once accepted, the membership type changes from `trial` to `member`.

![Rule page example](/img/dashboard/admin_tools/access_control/rule_page_example.jpg)

### Trial period

New players are added as trial members when joining a Rule-gated server.  
Set a custom trial period per group.

During the trial, players are reminded to visit your website and accept the rules.  
You can configure the reminder message using variables:

**Variables:**
- `%%TIME%%` — remaining time in minutes
- `%%WEBSITE_URL%%` — your website URL

:::info
Only applies to servers linked to a Rule-gated group. Other servers are unaffected.
:::

![Rule gate message example](/img/dashboard/admin_tools/access_control/access_group_rule_gate_message_example.jpg)

## Form

Use Access group forms when players need to apply before joining.

Each group can have its own form and settings.

### Form builder

If you're familiar with [Forms](/dashboard/community/forms), you already know how to use the [Form builder](/dashboard/community/forms#form-builder).

:::info
After creating a form, use `Create new form page` in the form settings to automatically add it to your Community website.

![Add form to page](/img/dashboard/admin_tools/access_control/access_group_form_add_page.jpg)
:::

### Form settings

![Form settings](/img/dashboard/admin_tools/access_control/access_group_form_settings.jpg)

#### Who can submit

Choose who can submit the form:
- `Everyone`
- `Only accounts with characters`

#### Submission limits

Set how many times a player can submit:
- `Unlimited`
- `1 submission per account`

#### Application handling

Choose how applications are handled:
- `Manually approve applications`
- `Automatic approval`

#### Close date

Set a date to disable the form.

#### Form submit message

Message shown after form submission.

### Form requirements

Require players to meet certain conditions before submitting.  
For example, linking their Discord or email address.

Players with an email address receive notifications when their application is approved or rejected.  
Customize these messages in [Access group settings](#email--discord-reporting).

![Form requirements](/img/dashboard/admin_tools/access_control/access_group_form_requirements.jpg)

### Example

![Form example 1](/img/dashboard/admin_tools/access_control/access_group_form_example_1.jpg)

![Form example 2](/img/dashboard/admin_tools/access_control/access_group_form_example_2.jpg)

## Applications

After submission, you can review applications on the `Applications` tab.  
Filter by status or search for players.

![Applications](/img/dashboard/admin_tools/access_control/access_group_applications.jpg)

### Review applications

Click `Review` to open an application.

![Review 1](/img/dashboard/admin_tools/access_control/access_group_review_application_1.jpg)

Add a note (included in the email), then click `Approve` or `Reject`.

:::tip
Use `Delete` to remove invalid submissions. This also lets the player resubmit if restrictions apply.
:::

![Review 2](/img/dashboard/admin_tools/access_control/access_group_review_application_2.jpg)

### Processed applications

Reviewed applications are labeled `Approved` or `Rejected`.  
You can filter by status or search by player.

![Processed 1](/img/dashboard/admin_tools/access_control/access_group_processed_application_1.jpg)

You can also view who reviewed it and their decision/note.

![Processed 2](/img/dashboard/admin_tools/access_control/access_group_processed_application_2.jpg)

## Resources

Access groups can be applied to specific game servers or clusters. These are called `Resources`.

A server/cluster can be linked to multiple groups. The [group order](#sorting--priority) determines which one applies first.

Manage Resources in the `Settings` tab.

![Resources](/img/dashboard/admin_tools/access_control/access_group_resources.jpg)

## Settings

![Settings](/img/dashboard/admin_tools/access_control/access_group_settings.jpg)

### Status

Enable or disable the group.

### Policy

Controls who can join servers linked to the group:
- `Use dashboard default`
- `Everyone can join`
- `Members only`

**Members only**  
Non-members are kicked immediately.  
This requires games that support `kick` (or similar) commands.

### Whitelist

For supported games, members can be added to the server’s whitelist via RCON (or similar).

If a game doesn't support whitelisting but supports Kick/Ban commands, the feature will still work by kicking non-members.

#### Existing members

Changing this setting will update the whitelist for all current members.  
This may take time; the setting has a 6-hour cooldown.

![Whitelist](/img/dashboard/admin_tools/access_control/access_group_settings_whitelist.jpg)

### Discord role

Assign a specific Discord role to group members automatically.  
Roles are removed when the player leaves the group.

![Discord role](/img/dashboard/admin_tools/access_control/access_group_settings_discord_role.jpg)

### Twitch subs

Automatically add/remove Twitch subscribers from the group.  
You can add multiple Twitch channels.

:::info
Players must link their Twitch account to use this.
:::

#### Sync

Click `Sync` to manually update the subscriber list.  
Can only be done once every 30 minutes across the dashboard.

![Twitch settings](/img/dashboard/admin_tools/access_control/access_group_settings_twitch.jpg)

### Kick message

Customize the message shown when kicking players.

![Kick message](/img/dashboard/admin_tools/access_control/access_group_settings_kick_message.jpg)

### Email & Discord reporting

Set up messages for accepted or rejected applications.  
You can also enable Discord reporting for updates in a chosen channel.

![Discord reporting](/img/dashboard/admin_tools/access_control/access_group_settings_discord_reporting.jpg)
![Email reporting](/img/dashboard/admin_tools/access_control/access_group_settings_email_reporting.jpg)

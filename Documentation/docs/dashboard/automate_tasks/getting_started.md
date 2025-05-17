---
title: Getting started
sidebar_position: 0
---

Create custom tasks that execute actions based on player achievements, time schedules, in-game events and more.

[Go to Automations / Tasks >](https://dash.gameserverapp.com/task)

:::tip Browse the marketplace
Find inspiration or jumpstart your workflow using the [Task marketplace >](https://dash.gameserverapp.com/marketplace/market/task_group)
:::

![Automations / Tasks - overview](/img/dashboard/automate_tasks/task_overview.jpg)

## Create automation / task

### 1. Open "Create new task" popup

Click <Icon icon="fa-solid fa-plus-square" size="lg" /> next to "Automations" to start a new task.

![Automations / Tasks - create task 1](/img/dashboard/automate_tasks/create_task_1.jpg)

Choose the type of automation you want and enter a name. Then click `Create` to continue.

:::tip
Use an automation template to get started quickly without building from scratch.
:::

![Automations / Tasks - create task 2](/img/dashboard/automate_tasks/create_task_2.jpg)

### 2. Configure run condition

Set when the task should run.  
[See all conditions per type >](#types)

![Automations / Tasks - create task 3](/img/dashboard/automate_tasks/create_task_3.jpg)

### 3. Add actions

Click `Add action` to open the action menu.  
[See all available task actions >](/dashboard/automate_tasks/actions)

You can add various actions to a task. Each action performs a different function and can be configured to suit your task.

![Automations / Tasks - create task 4](/img/dashboard/automate_tasks/create_task_4.jpg)

Choose the desired action and click `Save settings`.

Note: Some actions are only available for specific task `types`.

![Automations / Tasks - create task 5](/img/dashboard/automate_tasks/create_task_5.jpg)

### 4. Finish task settings

Activate the task and define where it should run (cluster or game server). Click `Save settings` to apply.

[Learn more about the settings tab >](#settings)

![Automations / Tasks - create task 6](/img/dashboard/automate_tasks/create_task_6.jpg)

## Types

### Achievement

Trigger actions when players reach specific achievements, such as playing for a set time or reaching a level milestone.

![Automations / Tasks - type - achievement](/img/dashboard/automate_tasks/task_type_achievement.jpg)

Achievement tasks can be triggered based on the following criteria:
- Player
  - Player played [X] hours in total
  - Player created more than [X] ago
  - Player was banned
  - Player was muted
  - Player is whitelisted for [X]
  - Player has over [X] tokens
  - Player voted [X] times [since]
  - Player voted
  - Player connected other account (any or specific type)
- Character
  - Character reached level [X]
  - Character minutes online above [X]

### Scheduled

Run tasks on a defined schedule such as specific times, days, or intervals.

![Automations / Tasks - type - scheduled](/img/dashboard/automate_tasks/task_type_scheduled.jpg)

Scheduled tasks can be run based on the following criteria:
- Once
  - At specific moment [date & time] (runs once)
- Repeating
  - Every [X] minutes
- Hourly
  - Every hour at minute [X]
  - Every [X] hours at minute [Y]
- Daily
  - Every day at [hour]
- Weekly
  - Weekly at specific day and time
- Monthly
  - Monthly at specific day and time
  - Monthly at [X]nth day and time

### Trigger / event

Run actions based on real-time in-game triggers like player logins or votes.

![Automations / Tasks - type - Trigger / event](/img/dashboard/automate_tasks/task_type_trigger_event.jpg)

Supported events:
- **Character**
  - Comes online/goes offline
  - New character created
  - Wakes up (ARK only)
- **Chat**
  - Contains or exactly matches certain text
- **Vote / Review**
  - Player voted
  - Voted [X] times [since]
  - New review posted
- **Report**
  - Created or closed (any/specific type)
- **Game server**
  - Server comes online

### Webhook

Connect external apps or bots to trigger actions on your dashboard.

![Automations / Tasks - type - Webhook](/img/dashboard/automate_tasks/task_type_webhook.jpg)

Webhook types:
- Generic
- Player
- Character
- Game server

## Settings

![Automations / Tasks - Task settings](/img/dashboard/automate_tasks/task_settings.jpg)

### Activate automation

Turn on the `Automation is active` toggle to enable the task.

### Run for each game server(s)

Decide if the task should run per game server or independently. For tasks like Discord messages, you can disable this setting.

#### Select clusters / game servers

If `Run for each game server(s)` is enabled, you must choose which cluster(s) or server(s) the task will run on.

#### Only run when game server is online

By default, tasks only run when the game server is online. You can disable this to allow execution even if a server is offline.

#### Delay between servers

Add a delay between executions on each server to reduce load.

Options:
- No delay
- 20 seconds
- 40 seconds

### Run actions when player is online

When enabled, actions will wait for the player to be online before executing. This helps avoid issues with actions (e.g. commands) that don’t support offline use. You can disable this if the action does not require a player to be online.

:::caution
Most games do not allow commands to be run on offline players.
:::

## Manage tasks

Manage your tasks from the [Task overview](https://dash.gameserverapp.com/task). Use the quick action buttons to run tests, check history, and more.

To remove a task, deactivate it.

![Automations / Tasks - manage task 1](/img/dashboard/automate_tasks/manage_task_1.jpg)

## Task groups

Use task groups to organize and manage your tasks more efficiently. You can assign existing tasks to a group or move them between groups.

### Create task group

Click <Icon icon="fa-solid fa-plus-square" size="lg" /> next to "Task groups" to add a new group.

![Automations / Tasks - create task group 1](/img/dashboard/automate_tasks/create_task_group_1.jpg)

### Manage task groups

To rename, reorder, or delete groups, click <Icon icon="fa-solid fa-pen-square" size="lg" />.

![Automations / Tasks - manage task group 1](/img/dashboard/automate_tasks/manage_task_group_1.jpg)

![Automations / Tasks - manage task group 2](/img/dashboard/automate_tasks/manage_task_group_2.jpg)

### Submit to Marketplace

You can share your task groups with the community by uploading them to the [marketplace](/dashboard/marketplace).

![Automations / Tasks - Publish task group](/img/dashboard/automate_tasks/publish_task_group.jpg)

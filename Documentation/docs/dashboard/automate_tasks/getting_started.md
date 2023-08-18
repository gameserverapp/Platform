---
title: Getting started
sidebar_position: 0
---

Create custom tasks that execute actions based on player achievements, time schedules, in-game events and more. 

[Go to Automations / Tasks >](https://dash.gameserverapp.com/task)

![Automations / Tasks - overview](/img/dashboard/automate_tasks/task_overview.jpg)


## Create automation / task

### 1. Open "Create new task" popup
Click <icon icon="fa-solid fa-plus-square" size="lg" /> next to "Automations" to create a new task.

![Automations / Tasks - create task 1](/img/dashboard/automate_tasks/create_task_1.jpg)

Select what type of automation you want to create and enter a name. Click `Create` to continue.

:::tip
Use an automation template so you don't have to start from scratch.
:::

![Automations / Tasks - create task 2](/img/dashboard/automate_tasks/create_task_2.jpg)

### 2. Configure run condition
Select when the task should run.
[See all conditions per type >](#types)

![Automations / Tasks - create task 3](/img/dashboard/automate_tasks/create_task_3.jpg)

### 3. Add actions

Click `Add action` to open the popup. [See all available task actions >](/dashboard/automate_tasks/available_actions)

You can add various actions to a task. Each action performs a different task that you can configure.


![Automations / Tasks - create task 4](/img/dashboard/automate_tasks/create_task_4.jpg)

Click the action you want to add to the task. Click `Save settings` to save your changes.

Not every action will be available for each task `type`. 

![Automations / Tasks - create task 5](/img/dashboard/automate_tasks/create_task_5.jpg)

### 4. Finish task settings
Finally head over to the `Settings` tab to activate the task and select where (global, cluster, game server) the task should run. Click `Save settings` to save your changes.

[Learn more about the settings tab >](#settings)

![Automations / Tasks - create task 6](/img/dashboard/automate_tasks/create_task_6.jpg)


## Types

### Achievement

Run actions based on player achievements, like playing for X hours or reaching level Y.

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
- Character
  - Character reached level [X]

### Scheduled

Schedule actions based on a particular day of the week, a specific date, or other intervals.

![Automations / Tasks - type - scheduled](/img/dashboard/automate_tasks/task_type_scheduled.jpg)

Scheduled tasks can be run based on the following criteria:
- Once
  - At specific moment [date & time] (runs once)
- Repeating
  - Every [X] minutes
  - Every hour at minute [X]
  - Every [X] hours at minute [Y]
  - Every day at [hour]
  - Weekly at specific day and time
  - Monthly at specific day and time

### Trigger / event

Execute actions based on in-game events, like when players come online or someone votes.

![Automations / Tasks - type - Trigger / event](/img/dashboard/automate_tasks/task_type_trigger_event.jpg)

Trigger / Events tasks can be run based on the following criteria:
- Character
  - Character comes online
  - Character goes offline
  - New character created
  - Character Wake up (ARK / ATLAS only)
- Player
  - Player chat contains [X] (one or multiple)
  - Player chat exactly matches [X] (one or multiple)
  - Player voted
  - Player voted [X] times [since]
  - New review posted
- Report
  - New report created
  - Report closed
- Game server
  - Game server comes online

## Settings

![Automations / Tasks - Task settings](/img/dashboard/automate_tasks/task_settings_overview.jpg)



### Unrelated to game server or cluster
Avoid running the same task multiple times by checking `Unrelated to game server or cluster`. This is useful for sending Discord message at specific times.

### Activate for server or cluster
Activate the task for specific game servers or all game servers in a cluster.

### Ignore player status
This can be useful in cases where, for example, the player is not online but orders whitelist access from the shop. 

:::caution
Do not use this in combination with in-game deliveries! Most games do not support this and the delivery will get lost.
:::

### Ignore server status
This can be useful in cases where, for example, the game server is offline and should automatically start at a specific time.

## Manage tasks
Change the Task group via the [Task overview](https://dash.gameserverapp.com/task). Use the quick action button to perform Test runs, See history runs and more.

Deactivate a task to delete it.

![Automations / Tasks - manage task 1](/img/dashboard/automate_tasks/manage_task_1.jpg)

## Task groups
Task groups help keep tasks organised and tidy.
You can add existing tasks to a group or change the group for a task.

### Create task group
Click <icon icon="fa-solid fa-plus-square" size="lg" /> next to "Task groups" to create a new task group.

![Automations / Tasks - create task group 1](/img/dashboard/automate_tasks/create_task_group_1.jpg)

### Manage task groups
Reorder, rename or delete template groups by clicking <icon icon="fa-solid fa-pen-square" size="lg" />.

![Automations / Tasks - manage task group 1](/img/dashboard/automate_tasks/manage_task_group_1.jpg)

![Automations / Tasks - manage task group 2](/img/dashboard/automate_tasks/manage_task_group_2.jpg)
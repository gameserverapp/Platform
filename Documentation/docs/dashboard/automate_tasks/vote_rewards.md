---
title: Vote rewards
sidebar_position: 6
---

Automate vote tracking and reward distribution for players who vote for your community game servers. This feature is compatible with most popular vote sites.

[Go to Vote rewards >](https://dash.gameserverapp.com/task/vote-rewards/reward)

![Automations / Tasks - Vote rewards](/img/dashboard/automate_tasks/vote_reward/vote_reward_sites.jpg)

## Setup vote site

### 1. Register your game server with vote sites

Start by registering your game server with one of the supported vote sites. These sites require servers to register and provide a unique API key. GSA uses this API key to verify whether players have voted.

Since each vote site has a different registration process, it's best to contact the specific site for instructions on obtaining an API key compatible with GSA vote rewards.

### 2. Enter the vote site API key

Once you've received the API key, copy it for the corresponding game server.

:::caution
Each game server must use a unique API key. Do not share the same key between multiple servers.
:::

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_api_key.jpg)

Paste the key into the vote site settings on the GSA dashboard for the correct server and click `Save settings`.

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_store_api_key.jpg)

### 3. Done!

GSA will validate the new API key once saved. You may need to reload the page to confirm the key has been verified.

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_validated.jpg)

## Create vote reward

You have two options for setting up automatic vote rewards: using a Task for flexible conditions or the simplified Vote reward feature for quick setup.

### Task

Create a [Trigger task](/dashboard/automate_tasks/getting_started#create-automation--task) and choose either `Player voted` or `Player voted [X] times [Since]` as the condition.

![Automations / Tasks - Create reward task 1](/img/dashboard/automate_tasks/vote_reward/create_reward_task_1.jpg)

Then [add actions to the task](/dashboard/automate_tasks/getting_started#3-add-actions) to define how the player should be rewarded.

### Vote reward

#### 1. Create a vote reward

Click `+ Add Vote reward` on the [Vote rewards page](https://dash.gameserverapp.com/task/vote-rewards/reward).

![Automations / Tasks - Create vote reward 1](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_1.jpg)

Enter a name for the reward in the popup window.

![Automations / Tasks - Create vote reward 2](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_2.jpg)

#### 2. Add a condition

In the `Settings` tab, click `+ Add condition` to define when the reward should be sent to players.

![Automations / Tasks - Create vote reward 3](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_3.jpg)

Use Custom Role requirements to offer enhanced rewards for players with specific roles, such as VIPs.

Click `Add condition` to save your changes.

![Automations / Tasks - Create vote reward 4](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_4.jpg)
![Automations / Tasks - Create vote reward 5](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_5.jpg)

#### 3. Add actions

Define what GSA should do once a player claims a vote by adding actions to the Vote reward. These are similar to Task actions. [Learn more about the available actions](/dashboard/automate_tasks/actions).

![Automations / Tasks - Create vote reward 6](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_6.jpg)

## Claiming votes

To claim a vote, players must first vote for your registered game server through one of the connected vote sites. They can find links to these sites on your Community website or on Discord via `!vote`.

### 1. Locate vote site links

Players can visit the Community website and click `Vote` in the game server section, or use the `!vote` command on Discord.

![Automations / Tasks - Vote for server 1](/img/dashboard/automate_tasks/vote_reward/vote_for_server_1.jpg)
![Automations / Tasks - Vote for server 2](/img/dashboard/automate_tasks/vote_reward/vote_for_server_2.jpg)

### 2. Vote with Steam

On the vote site, players should complete the vote process using their Steam account.

![Automations / Tasks - Vote for server 3](/img/dashboard/automate_tasks/vote_reward/vote_for_server_3.jpg)

### 3. Claim the vote

After voting, players can claim their vote by clicking `Claim` on the game server block on your Community website or typing `!claim` in Discord.

:::tip
You can also create a [Trigger task](/dashboard/automate_tasks/getting_started#trigger--event) that allows players to claim votes directly from in-game chat.
:::

![Automations / Tasks - Vote for server 4](/img/dashboard/automate_tasks/vote_reward/vote_for_server_4.jpg)
![Automations / Tasks - Vote for server 5](/img/dashboard/automate_tasks/vote_reward/vote_for_server_5.jpg)

### 4. Voting log

Only successfully claimed votes are shown on the Voting log page.

![Automations / Tasks - Vote for server 6](/img/dashboard/automate_tasks/vote_reward/vote_for_server_6.jpg)

## Deliveries

All Vote rewards that are sent to players will appear on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual delivery

You can manually send or test Vote rewards by clicking `+ Create delivery` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)
![Monetization - Manual delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

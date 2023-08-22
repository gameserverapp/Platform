---
title: Vote rewards
sidebar_position: 6
---

Automated vote & reward processing for players that vote for the community game servers. Compatible with most popular vote sites.

[Go to Vote rewards >](https://dash.gameserverapp.com/task/vote-rewards/reward)

![Automations / Tasks - Vote rewards](/img/dashboard/automate_tasks/vote_reward/vote_reward_sites.jpg)

## Setup vote site

### 1. Register game server with sites
To begin you need register your game server with one of the supported vote sites. All sites require game servers to register in order to receive a special API key, which GSA uses to check whether players voted.

The registration process is different per vote site. Contact the vote site for more information how to get an API key from their site to work with GSA vote rewards.

### 2. Enter vote site API key
Copy the API key from the vote site for the game server you want to set up.

:::caution
Each server should have a unique key. Do not reuse the API key for multiple game servers.
:::

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_api_key.jpg)

Enter the API key on the GSA vote site settings page for the right game server and click `Save settings`.

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_store_api_key.jpg)

### 3. Done!
GSA validates new API keys after saving. You may need to reload the page to see whether it was validated.

![Automations / Tasks - Vote site API key setup](/img/dashboard/automate_tasks/vote_reward/vote_site_validated.jpg)


## Create vote reward
There are 2 options to automatically reward players for voting on the game servers. The easiest and most straight forward method is using the Vote reward option. With Tasks you can create more flexible vote rewards. 

### Task
Create a [Trigger task](/dashboard/automate_tasks/getting_started#create-automation--task) and select `Player voted` or `Player voted [X] times [Since]` as the condition.

![Automations / Tasks - Create reward task 1](/img/dashboard/automate_tasks/vote_reward/create_reward_task_1.jpg)

[Add actions to the task](/dashboard/automate_tasks/getting_started#3-add-actions) to reward the player.

### Vote reward

#### 1. Create vote reward
Click `+ Add Vote reward` at the [Vote rewards page](https://dash.gameserverapp.com/task/vote-rewards/reward).

![Automations / Tasks - Create vote reward 1](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_1.jpg)

Enter a name in the popup.

![Automations / Tasks - Create vote reward 2](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_2.jpg)

#### 2. Add condition
At the `Settings` tab click `+ Add condition` to determine when the reward should be sent to players.

![Automations / Tasks - Create vote reward 3](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_3.jpg)

Use the Custom role requirements to create special Vote rewards for players with a Custom role. For example to hand out higher rewards to your VIP players.

Click `Add condition` to save the condition.

![Automations / Tasks - Create vote reward 4](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_4.jpg)

![Automations / Tasks - Create vote reward 5](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_5.jpg)

#### 3. Add actions
By adding actions to the Vote reward you determine what GSA should do / send to the player when they claimed a vote. These actions are similar to Task actions. [Learn more about the available actions](/dashboard/automate_tasks/available_actions).

![Automations / Tasks - Create vote reward 6](/img/dashboard/automate_tasks/vote_reward/create_vote_reward_6.jpg)

## Claiming votes
To claim a vote players should first vote for one of the registered game servers on the vote sites. 
Players can find links to all connected vote sites on your community website and Discord (!vote)

### 1. Find links for vote sites
Go to the community website and click `Vote` at the game server block or type `!vote` in Discord.

![Automations / Tasks - Vote for server 1](/img/dashboard/automate_tasks/vote_reward/vote_for_server_1.jpg)
![Automations / Tasks - Vote for server 2](/img/dashboard/automate_tasks/vote_reward/vote_for_server_2.jpg)

### 2. Vote with Steam
At the vote site players should vote using their Steam account.

![Automations / Tasks - Vote for server 3](/img/dashboard/automate_tasks/vote_reward/vote_for_server_3.jpg)

### 3. Claim vote 
Click `Claim` on the game server block at your community website or type `!claim` in Discord.

:::tip
Create a [Trigger task](/dashboard/automate_tasks/getting_started#trigger--event) to claim votes based on in-game chat so players can claim votes while being in-game.
:::

![Automations / Tasks - Vote for server 4](/img/dashboard/automate_tasks/vote_reward/vote_for_server_4.jpg)
![Automations / Tasks - Vote for server 5](/img/dashboard/automate_tasks/vote_reward/vote_for_server_5.jpg)

### 4. Voting log
Only votes there are successfully claimed get listed on the Voting log page.

![Automations / Tasks - Vote for server 6](/img/dashboard/automate_tasks/vote_reward/vote_for_server_6.jpg)

## Deliveries
All Vote rewards sent to players end up on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

### Manual delivery
Test or manually send Vote rewards to players by clicking `+ Create delivery ` on the [Deliveries page](https://dash.gameserverapp.com/monetization/deliveries/v2).

![Monetization - Manual delivery 1](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_1.jpg)
![Monetization - Manual delivery 2](/img/dashboard/monetization/deliveries/deliveries_manual_delivery_2.jpg)

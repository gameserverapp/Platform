---
title: AI tools
sidebar_position: 2
---

The AI tools help monitor the community and quality check incoming data like forms, applications and reports. Chatbots entertain players and answer questions about rules, rates, wiki info and much more.

The AI tools are designed to alert admins when issues are detected, and leave humans to decide.


![AI tools - Chatbot - Chat example](/img/dashboard/ai_tools/ai_tools-chatbot-chat_example.gif)

[Go to AI settings >](https://dash.gameserverapp.com/configure/ai-settings)

:::warning BETA feature

AI tools are currently in beta. If you experience issues, please report on our [Discord](https://www.gameserverapp.com/join-discord).

:::

## Chatbot

The AI Chatbots can help you engage with your community and provide quick answers to common questions or onboard new players. The bot can provide explanations about your rules, rates, search configured wiki sites, and much more.

You can use multiple bots simultaneously.
[Go to AI chatbot >](https://dash.gameserverapp.com/community/chatbot)

:::info
The chatbot only works with games that support chat logging. See [GSA features page](https://dash.gameserverapp.com/features-per-game) for supported games.
:::

![AI tools - Chatbot - Overview](/img/dashboard/ai_tools/ai_tools-chatbot-overview.jpg)

### Settings

To get started, you can configure the `tag / name` of the bot. The bot will respond to this name.
With `personality` and `behavior`, you determine how the bot behaves.

Each bot can be configured with different settings.

![AI tools - Chatbot - Settings](/img/dashboard/ai_tools/ai_tools-chatbot-settings.jpg)


#### Chat settings

![AI tools - Chatbot - Chat Settings](/img/dashboard/ai_tools/ai_tools-chatbot-chat_settings.jpg)

In Chat settings, you can determine how often the bot responds and how inclined the bot is to respond to a message.

##### Chattiness
With `chattiness`, you can configure whether the bot should respond to every message, or, for example, only when you address the bot directly. You can choose from 5 different levels: from `respond only to tags` to `respond to all messages`.

##### Response timeout
The `Response timeout` determines how long the pause should be between responses from the bot. For example: if you select `5 seconds`, the bot will wait 5 seconds after each message before responding again.

A short `Response timeout` ensures that your bot responds more frequently. This generally consumes more credits.

#### Controls

![AI tools - Chatbot - Controls](/img/dashboard/ai_tools/ai_tools-chatbot-controls.jpg)

With the settings in Controls, you can determine where and with whom the bot communicates.

##### Language
You can choose to always have the bot respond in a specific language. You can also choose to have the bot respond in the player's language.

##### Timezone
The bot has information about the current time and date. The timezone setting determines in which timezone the current time and date are displayed.

##### Restrict & Ignore Roles

You can set the bot to only respond to messages from certain roles, or to ignore certain roles instead. This allows you to create bots that, for example, only respond to VIP players. Or you can give players the ability to interact with the bot via opt-in or opt-out.

##### Restrict & Ignore Servers

You have the option to activate a bot on specific servers, or to exclude specific servers for the bot. This is useful, for instance, if you want to test the bot on your test server.


### Context

By giving the bot specific information about your community, or a specific task you want the bot to perform, you can make the bot much smarter and have more knowledge about your community.

By default, your bot already has certain information about your community, and with [tools](/dashboard/ai-tools#tools), the bot gains access to even more information.

:::warning Avoid duplicate info
Avoid duplicate information, as this leaves less room for information that is actually useful. Pay attention to which information is discouraged on the dashboard. The bot already possesses that information.
:::

![AI tools - Chatbot - Context](/img/dashboard/ai_tools/ai_tools-chatbot-context.jpg)

### Tools

Tools give the bot access to more information and other actions. 
You can turn on or off tools individually and provide additional configurations where necessary.

#### Available tools:
For a list of the available tools, please check the Tools page on the dashboard for your chatbot.

![AI tools - Chatbot - Tools](/img/dashboard/ai_tools/ai_tools-chatbot-tools.jpg)


### Memory

An optional feature for the bot is "Memory". Using memory, the bot can remember things. Think of greeting habits in your community, frequently asked questions, and other matters you want the bot to remember.

By default, the bot has instructions to remember useful details, but you can also provide instructions yourself on what the bot should remember. You can also see what the bot's memory currently contains.

![AI tools - Chatbot - Memory](/img/dashboard/ai_tools/ai_tools-chatbot-memory.jpg)

## Analyzers

### Chat violations

Chat violations detect when a player misbehaves in the chat. To detect chat violations, you need to [create a Trigger task](/dashboard/ai-tools#chat-violation-trigger-task).


![AI tools - Chat violations - Trigger levels](/img/dashboard/ai_tools/ai_tools-chat_violations-trigger_levels.jpg)

#### Detection levels
You can choose between 2 different detection levels:
- **Medium** - This involves behavior that crosses the line of healthy gaming rivalry. It focuses on targeted personal negativity, repeated insults, or misconduct between players.
  Recommended for PvE.
- **High** - This is the highest alert level. It is reserved for severe incidents that directly threaten player safety or the core well-being of the community, such as severe hate speech or real-world threats.
  Recommended for PvP.

Chat logs that got flagged will show up on chat logs page under “violations” filter.

![AI tools - Chat violations - Chat log filters](/img/dashboard/ai_tools/ai_tools-chat_violations-chat_log_filter.jpg)


#### Chat violation trigger task

![AI tools - Chat violations - Trigger levels](/img/dashboard/ai_tools/ai_tools-chat_violations-trigger_levels.jpg)

You can decide what should happen when a chat violation is detected. Using [Trigger tasks](/dashboard/automate_tasks/getting_started#trigger--event), you can, for example, send a Discord alert.

Example Discord embed code:
```json
{"embed":{"title":"📋 Chat violation detected,"description":"{variable.chat_message}","color":16738304,"fields":[{"name":"🔍 Reason","value":"{variable.reason}","inline":true},{"name":"📊 Level","value":"{variable.level}","inline":true}],"footer":{"text":"Automated Report"}}}
```

![AI tools - Chat violations - Discord alert](/img/dashboard/ai_tools/ai_tools-chat_violations-discord_alert.jpg)

##### Available variables
You can use the following variables:
- `{variable.reason}` = what the AI detected
- `{variable.level}` = the violation level the AI detected
- `{variable.chat_message}` = the chat message that triggered a violation



### Username violations

The Username violations tool detects offensive usernames. Think of racist elements, hidden swear words, etc.

The detector is capable of detecting various obfuscation methods and deciphering whether the username is offensive.


![AI tools - Username violations](/img/dashboard/ai_tools/ai_tools-username_violations-trigger_levels.jpg)

To detect username violations, you need to [create a Trigger task](/dashboard/ai-tools#username-violation-trigger-task).

#### Detection levels
You can choose between 2 different detection levels:
- **Level 1** - Detects topics like: Sexual, drugs, moderate insults, profanity + all level 2 items.
- **Level 2** - Detects topics like: Hate speech, racism, highly offensive.


#### Username violation trigger task

You can decide what should happen when a username violation is detected. Using [Trigger tasks](/dashboard/automate_tasks/getting_started#trigger--event), you can, for example, send a Discord alert or automatically change the username.

![AI tools - Username violations task example](/img/dashboard/ai_tools/ai_tools-username_violations-task.jpg)

## Summarizers

### Player activity

See what happened on your community at a glance. The AI generated summaries let you quickly read up on what happened, without having to go through all the logs.

![AI tools - Player activity summary](/img/dashboard/ai_tools/ai_tools-player_activity_summary.jpg)

#### Player activity summary trigger task
You can sent summaries to Discord through a [trigger task](/dashboard/ai-tools#chat-violation-trigger-task).



![AI tools - Player activity task example](/img/dashboard/ai_tools/ai_tools-player_activity_summary-trigger_task.jpg)
##### Available variables:
- `{variable.30_mins}` = summary of what happened in the last 30 minutes
- `{variable.4_hours}` = summary of what happened in the last 4 hours
- `{variable.12_hours}` = summary of what happened in the last 12 hours
- `{variable.24_hours}` = summary of what happened in the last 24 hours

### Reviews

The AI Review summary provides a summary of all reviews a community has received over the past 60 days. This allows you to see at a glance what players think of the community.

The review summary is updated automatically every day.

![AI tools - Review summary](/img/dashboard/ai_tools/ai_tools-review_summary.jpg)

## Review Assistants

Review assistants help you process certain incoming data, such as [Forms](/dashboard/community/forms), [Access applications](/dashboard/admin_tools/access_control#applications), and in-game [Reports](/dashboard/admin_tools/reports).

The assistant is intended to perform automatic checks and provide a summary, so you can quickly see what it is about and whether the required information is present. For example, checking if a Role Play form meets the rules of the RP server.


![AI tools - Assistants - Form](/img/dashboard/ai_tools/ai_tools-assistants-form.jpg)

### Review instructions

Click on the <Icon icon="fa-solid fa-cog" size="lg" /> icon in the assistant review to adjust the instructions or to disable the AI review assistant.

![AI tools - Assistants - Request AI review](/img/dashboard/ai_tools/ai_tools-assistants-form-request_review_settings.jpg)

Provide instructions for the AI assistant to follow when reviewing the form, application or report. Click the `Show information / context` to see what information is already available to the AI assistant.

![AI tools - Assistants - AI review instructions](/img/dashboard/ai_tools/ai_tools-assistants-form-request_review_instructions.jpg)


### Request AI review
When a new form, application, or report is created, the AI assistant will automatically generate a review. You can also manually request a review by clicking the `Request AI review` button. This is useful if you have just updated the instructions.

![AI tools - Assistants - Request AI review](/img/dashboard/ai_tools/ai_tools-assistants-form-request_review.jpg)

## AI settings

On the AI settings page you can see your usage, buy credits and pick an AI provider.

If you want to turn off AI, you can disable all AI features on the AI settings page, under the "AI Provider" section.

### Credits

The AI tools work with credits. This way you only pay for what you use and maintain control over your usage.

![AI tools - AI Settings - Credits](/img/dashboard/ai_tools/ai_tools-ai_settings-credit_balance.jpg)

#### Buy credits
You can buy credits by clicking the `+ Add credits` button.

![AI tools - AI Settings - Buy credits](/img/dashboard/ai_tools/ai_tools-ai_settings-buy_credits.jpg)

#### Low balance reminder
You can receive an automatic notification when your credits drop below a certain threshold. You can set this threshold yourself. This allows you to top up your credits in time.

You will always receive an email when you run out of credits.

![AI tools - AI Settings - Low balance reminder](/img/dashboard/ai_tools/ai_tools-ai_settings-low_balance_reminder.jpg)

#### Out of credits
When you run out of credits, the AI tools are automatically disabled.
You will receive an email when you run out of credits.


### Usage
You can view at any time how many AI requests you have sent per feature, and how many credits each request cost you.

![AI tools - AI Settings - Usage](/img/dashboard/ai_tools/ai_tools-ai_settings-usage.jpg)

### Turn AI OFF

You can easily disable all AI features by selecting `Turn AI OFF`. This stops all AI features system-wide.

![AI tools - AI Settings - Turn AI OFF](/img/dashboard/ai_tools/ai_tools-ai_settings-turn_off.jpg)

### AI Providers

You can choose where your AI data is processed.
For each provider, you can see the costs. In most cases, you will see multiple cost tiers per provider; this shows the pricing for the various models being used.

Check the [AI settings page](https://dash.gameserverapp.com/configure/ai-settings) for current offerings.

![AI tools - AI Settings - Providers](/img/dashboard/ai_tools/ai_tools-ai_settings-ai_provider.jpg)

#### GSA Hosted AI
By default, GameServerApp offers its own AI hosting. Your data always stays within GSA and is not sent to a third party. GSA AI hosting takes place within Europe.
The capacity of GSA AI hosting is limited.

#### Public Cloud
When you choose Public Cloud, your AI requests are executed on a Cloud provider. All selected providers are strictly audited and only selected if they DO NOT retain data for training.

In general, Public Cloud providers are cheaper than GSA Hosted AI, and capacity is virtually unlimited. Because Public Cloud is hosted externally, it is possible that your AI request will be processed on the other side of the world.
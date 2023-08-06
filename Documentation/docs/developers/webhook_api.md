---
title: Webhook API
sidebar_position: 4
---


Webhooks can be used to trigger certain actions on your dashboard.

## Authentication
You can find your Webhook API keys here: https://dash.gameserverapp.com/configure/api

:::caution
Never share your API credentials with anyone. GSA will never ask for these credentials.

Handle the API credentials like your password.
:::

### Replace examples
You should manually replace the examples below with live information:

- Replace `{CLIENT_ID}` with the Client ID from your API key page.
- Replace `{GAMESERVER_ID}` with the game server id, from your dashboard.
- Replace `{WEBHOOK_SECRET}` with the Client Secret.


### Required request body
All requests should have `{WEBHOOK_SECRET}` as the request body. Without this you will likely receive a `401` response.

## Available endpoints

### Start game server
Will queue your game server to start as soon as possible.
```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/start?client_id={CLIENT_ID}
```

### Stop game server
Will queue your game server to stop as soon as possible.
```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/stop?client_id={CLIENT_ID}
```

### Restart game server
Will queue your game server to restart as soon as possible.
```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/restart?client_id={CLIENT_ID}
```

### Update game server
Will schedule your game server to update with a 30 minute countdown. You can add a `&countdown=10` at the end to set a custom countdown timer, in minutes.
```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/update?client_id={CLIENT_ID}
```

### Wipe game server
Will queue your game server to wipe as soon as possible.
```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/update?client_id={CLIENT_ID}
```

### Cancel schedule actions
Will cancel all scheduled actions, if the game server is not yet locked.

```
POST https://api.gameserverapp.com/api/v1/server/{GAMESERVER_ID}/cancel-scheduled?client_id={CLIENT_ID}
```
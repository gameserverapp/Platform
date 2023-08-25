---
title: Community API
sidebar_position: 0
---

External sources can tap into the Community website API to retrieve data about online players and much more.

The OAuth API automatically redirects users to authenticate with Steam. This lets GameServerApp verify in-game players on the website, enabling features like in-game purchases and direct messaging.

## API key
Find the OAuth API keys & redirect URL here: https://dash.gameserverapp.com/configure/api

## Request headers
All requests require to have one the following HTTP headers:

```composer log
X-AUTH-GSA-CLIENT-ID: {your Client ID}
Authorization: Bearer {refresh_token}
```

## Libraries
You can find the [Official PHP API wrapper on GitHub](https://github.com/GameserverApp/PHP-API-Wrapper).




---
title: "Soulmask"
---

## Setup cluster

:::tip Migrating existing saves
If you're using a non-clustered server, you must follow [these instructions](https://saraserenity.net/soulmask/server_cluster_guide.php#migrate_existing_save) to migrate your saves.
:::

In order to cluster your Soulmask servers, it is best to use 2 separate config templates. One for your `master` server, one for your `slave` servers.

When your servers are password-protected, all servers in the cluster must use the same password.

### Region settings
Add `-gamedistindex=3` to your config template's `END` section and change it to the region settings you want to use:
> 0: Test (events allowed any time)\
> 1: Asia\
> 2: North America\
> 3: Europe\
> 4: Mainland China\
> 5: South America\
> 6: Oceania\
> 7: Africa

### Enable cluster mode
Search the `GameXishu.json` file on your config templates for `KaiQiKuaFu` and make sure it is set to `1` like so: `"KaiQiKuaFu": 1`.

### Master server
The master server is where the account data is stored.

The following settings must be present on the `END` section for your master server config template:
```
-serverid={container.id} -mainserverport={gameserver.raw_port}
```

### Slave servers
Visit the `Connect` page for your master server, after it was succesfully installed.\
Find the `Raw UDP port`. This will be the `mainserverport` that your slave servers need to connect with.

The following settings must be present on the `END` section for your slave server config template:
```
-serverid={container.id} -clientserverconnect=xxx.xxx.xxx.xxx:pppp
```

Replace `xxx.xxx.xxx.xxx` with the IP address of your master server and `pppp` with the `Raw UDP port` you found on the `Connect` page.
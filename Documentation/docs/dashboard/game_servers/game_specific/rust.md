---
title: "RUST"
---

## Export chat to discord with the BetterChat plugin

If you want to use the `BetterChat` plugin and want to make use of GameServerApp's way of exporting the ingame chat to discord you will have to change some info in the `Data` file of the plugin.

### Adding the plugin

After you have installed you're [GameServer](https://docs.gameserverapp.com/dashboard/game_servers/getting_started), head to the mods/plugins section in you server settings and follow all steps given [Here](https://docs.gameserverapp.com/dashboard/game_servers/mods_plugins).

Once it's all setup install `BetterChat` and start the server (all changes after this can be done while the server is running).

### Getting the Data file

Once the server is started connect to it via FTP using the [FTP Credentials](https://docs.gameserverapp.com/dashboard/game_servers/getting_started/#connect--ftp-info). 
Then head to `/oxide/data`:

![Getting DataFile](/img/dashboard/gameserver/game_specific/Getting_DataFile.png)

Safe the `BetterChat.json`  file on you're pc somewhere you can find it again. 

### Changing the Data File

use a Full-Body text editor like `Visual Studio` and open BetterChat.json it should look like this:

![DataFile VS](/img/dashboard/gameserver/game_specific/DataFile_VS.png)

change the part:

```js
    "Format": {
      "Chat": "{Title} {Username}: {Message}",
      "Console": "{Title} {Username}: {Message}"
    }
```

to

```js
    "Format": {
      "Chat": "{Title} {Username}: {Message}",
      "Console": "{Username} ({ID}): {Message}"
    }
```

And safe the file, you can use `CTRL` + `S` on you're keyboard.

:::info Do this for EVERY group you create 
otherwise GSA wont be able to export the ingame chat for that chat group to Discord! 
:::

### Getting the new file loaded on the server

Go back to your FTP and press `F5` to reload the file you have on you're pc, you will see the Filesize change on the left window (Local Site).
Dubbel click the `BetterChat.json` on the left side to get it back to the server machine.

You will get a pop-up about the file already excisting, press `Apply to current que only` and click `oke` as shown on the picture:

![Target replacing](/img/dashboard/gameserver/game_specific/Target_replacing.png)

When the transfer finished head back to the `overview` page of you're GameServer on the GSA dashboard and scroll down to `Game server console`. Type `o.reload BetterChat` and make sure the dropdown next to it is on Command:

![Reload Plugin](Documentation/static/img/dashboard/gameserver/game_specific/Reload_plugin.png)

Hit enter and that should be all! You're messages should now appear in Discord if that has been setup, chech [Here](https://docs.gameserverapp.com/dashboard/discord-bot#discord--cluster-chat) if you haven't done that yet.

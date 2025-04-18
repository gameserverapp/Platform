---
title: "RUST"
---

## Export chat to Discord with the BetterChat plugin

To use the `BetterChat` plugin and take advantage of GameServerApp's system for exporting in-game chat to Discord, you’ll need to modify the plugin’s `Data` file.

### Adding the plugin

Once you’ve installed your [GameServer](https://docs.gameserverapp.com/dashboard/game_servers/getting_started), go to the **Mods/Plugins** section in your server settings and follow the instructions in this guide: [How to manage Mods/Plugins](https://docs.gameserverapp.com/dashboard/game_servers/mods_plugins).

After the setup is complete, install `BetterChat` and start the server. You can perform the remaining steps while the server is running.

### Getting the Data file

After starting your server, connect via FTP using the [FTP Credentials](https://docs.gameserverapp.com/dashboard/game_servers/getting_started/#connect--ftp-info).  
Navigate to the `/oxide/data` folder:

![Rust- Getting DataFile](/img/dashboard/gameserver/game_specific/Rust-Getting_DataFile.png)

Save the `BetterChat.json` file to your PC in a location where you can easily find it later.

### Changing the Data File

Use a full-featured text editor like `Visual Studio` to open `BetterChat.json`. It should look something like this:

![Rust- DataFile Visualcode](/img/dashboard/gameserver/game_specific/Rust-DataFile_VS.png)

Find this section:

```js
    "Format": {
      "Chat": "{Title} {Username}: {Message}",
      "Console": "{Title} {Username}: {Message}"
    }
```

And change it to:

```js
    "Format": {
      "Chat": "{Title} {Username}: {Message}",
      "Console": "{Username} ({ID}): {Message}"
    }
```

Save the file using `CTRL` + `S` on your keyboard.

:::info  
Do this for **EVERY** group you create.  
Otherwise, GSA won't be able to export in-game chat for that chat group to Discord!  
:::

### Getting the new file loaded on the server

Go back to your FTP client and press `F5` to refresh the view. You should see the updated file size on the left window (Local Site).  
Double-click the updated `BetterChat.json` file to upload it back to the server.

A pop-up will appear warning you the file already exists.  
Select **"Apply to current queue only"** and click **"OK"**, as shown here:

![Rust- Target replacing](/img/dashboard/gameserver/game_specific/Rust-Target_replacing.png)

Once the file is uploaded, go back to the `Overview` page of your GameServer on the GSA dashboard.  
Scroll down to `Game server console`, type: `o.reload BetterChat` and make sure the dropdown next to the input is set to `Command`:

![Rust- Reload Plugin](Documentation/static/img/dashboard/gameserver/game_specific/Rust-Reload_plugin.png)

Hit Enter, and you’re done!  
Your messages should now appear in Discord if that integration has been set up.  
If not, follow this guide to [set up Discord/Cluster chat](https://docs.gameserverapp.com/dashboard/discord-bot#discord--cluster-chat).

---
layout: post
title:  "Getting Started"
categories: Minecraft
icon: <i class="fa-light fa-diagram-project"></i>
tags: Bungeecord
permalink: /minecraft/bungeecord/getting-started/
---

# Getting Started With BungeeCord
![image](../../../assets/images/posts/bungeecord/getting-started/bungeecord.png)

### What Is It?
[BungeeCord](https://www.spigotmc.org/wiki/bungeecord/) (created by the [SpigotMC](https://www.spigotmc.org/XenStaff/) team) is a proxy designed to seamlessly connect multiple Minecraft servers together, allowing players to navigate between them without leaving the game. 

BungeeCord is compatible with Spigot, Purpur, PaperMC, and any Spigot fork. It will **NOT** function on Forge/Fabric or vanilla servers.

### What is it useful for?
BungeeCord is very beneficial for server administrators that want to separate their server's activities (such as minigames, creative, survival, and so on). BungeeCord is utilized and trusted by notable servers such as [Hypixel](https://hypixel.net/), [Mineplex](https://www.mineplex.com/home/), [HiveMC](https://hivemc.com/), and much more.

## Preparing The Fallback Servers
#### What Are Fallback Servers?
Fallback servers are all servers connected to your BungeeCord proxy.

1. Go to the [Game Panel](https://panel.falixnodes.net).
2. Click on any of your fallback servers.
3. Setup your server if it has not been setup before.
4. Go to the file manager.
5. Locate and open `server.properties`.
6. Scroll down and set `online-mode` to `false`.
7. Return to the file manager.
8. Locate and open `spigot.yml`.
9. Set `bungeecord` to `true`.
10. Restart the server.

Repeat the steps above for all your fallback servers.

## Creating And Configuring The Proxy 

1. Go to the [Game Panel](https://panel.falixnodes.net).
2. Click on any server you want.
3. Start the server.
4. Type `7` and click on enter.
5. Type `6` and click on enter.
Wait around 30 seconds, your server should be on.
> Note: Do not rely on the server status at the top left of the page, it does not indicate the status of proxy servers correctly.
6. Click on "Stop", then click "Kill".
7. Click on "File Manager" at the top of the page.
![image](../../../assets/images/posts/bungeecord/getting-started/starting-proxy.png)
8. Locate `config.yml` and open it.
9. Scroll down to `host: 0.0.0.0:25577` and change the numbers after `:` to your BungeeCord's port. You can find your port in the "Network" tab at the top of the page.
10. Scroll down to `priorities:- lobby`, change `lobby` to your default fallback server's name (case sensitive). This will be the default server that users will be redirected to when they join your BungeeCord server.
11. Scroll down and set `IP_forward` to `true`.
12. Scroll down to `servers:` and use the template below:

```
  server-name:
    motd: '&1Just another BungeeCord - Forced Host'
    address: server-IP:PORT
    restricted: false
```
Change `server-name` to the fallback server's name (case sensitive).
Change `server-IP:PORT`  to the fallback server's IP and port.

> Note: restricted does not allow players to join the server unless they have the `bungeecord.server.SERVERNAME` permission.
> If you have multiple fallback servers, duplicate the code above and paste it under your first server.

It should look like this:
![image](../../../assets/images/posts/bungeecord/getting-started/setting-up-proxy.png)

13. Save the file and start your server.

> You can view all BungeeCord configuration options [here](https://www.spigotmc.org/wiki/bungeecord-configuration-guide/).

## BungeeCord Commands
You can find a list of BungeeCord commands [here](https://www.spigotmc.org/wiki/bungeecord-commands/).

### In Game
Players, including you (of course), can easily teleport to the other servers on your network by using the `/server` command in-game. Then they can use their cursor to click on the server they want to go to. They can also do `/server <name>`, like `/server lobby`.

This command requires the `bungeecord.command.server` permission which is granted to everyone by default.
In-game example:

<video class="video-js" controls preload="auto" data-setup="{}"><source
 src="https://media.korbsstudio.com/falix/bungeecord/in-game-command-server.webm" type="video/webm"
 src="https://media.korbsstudio.com/falix/bungeecord/in-game-command-server.mp4" type="video/mp4"
 /></video>
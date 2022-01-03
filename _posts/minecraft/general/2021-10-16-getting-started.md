---
layout: post
title:  "Getting Started"
categories: Minecraft
icon: <i class='fa-light fa-wand-magic-sparkles'></i>
tag: mcgeneral
permalink: /minecraft/general/getting-started/
gitURL: _posts/minecraft/general/2021-10-16-getting-started.md
sticky: true

author: Korbs
authorGitHub: korbsstudio
---

{% include minecraft-edition-picker.html %}

<div style="display: none" id="java" markdown=1>

# Creating a Server
## Creating a Server on your Account
To create a Minecraft Java server, go to your Client Panel. On the left sidebar, choose Create Server. Type in all required information like server name, memory amount, and server location. Once done, click the Create button and wait at least a minute in the Client Panel for the new server to be created for your account.

Now, in the [Game Panel](https://panel.falixnodes.net/) you should see the new server on your server list. If the server list indicates that it is still installing, wait at least 2 to 5 minutes for the installation to be complete. If the installation is taking longer than usual (over 5 to 10 minutes or more), head back to your [Client Panel](https://client.falixnodes.net/) and delete, then re-create the server.

## Starting the Server
 Select your new server and go to the Console tab, usually already selected by default. Click the Start button, located in the upper left corner of the Console tab. You're going to be selecting which type of server you want during the first startup of your new server. In this case, we're creating a Minecraft Java server, to select Minecraft Java, then the type of Minecraft Java server that you want like Vanilla or PaperMC, and select the version of Minecraft Java you want to play on.
 
Click "I Accept" when the **Mojang EULA** pop up appears. The server is turned off for a few moments, then turn back on, and will continue to boot.

During the first boot of any Minecraft server, it may take a while to prepare spawn area.

## Using a Custom Jar
Minecraft uses a <u>.jar</u> file to start your server and setting a custom jar is easy.
If the option you want isn't available on the first boot, a custom jar can be used. Simply upload the .jar file(e.g. <u>paper-1.16.5-774.jar</u>) to your server's root directory in files, then rename it to <u>custom.jar</u>. You can rename the file by clicking or tapping on the three dots on the right side, then clicking Rename.

Falix will automatically detect the <u>custom.jar</u> on the next launch of your server and will use the file to boot.

> You may need to do this for [Bungeecord](https://help.falixnodes.net/falix/general/troubleshooting/#corrupted-bungeecord-jar-file).

# Choosing Your Server Java Version
<!-- # What is Java? (An explanation for noobs will be added later on) -->
## Minecraft Versions
Use **Java 8** for Minecraft 1.12.2 or older

Use **Java 11** for Minecraft 1.13 or newer

Use **Java 16** for Minecraft 1.17 or newer

## Set a Default Version
> Make sure your server is turned off before doing the next steps.

To make a Java version the default one, so that you don't need to select it every time you start your server, visit the [game panel](https://panel.falixnodes.net/), find and click on your server, find the "Startup" page on the top bar, scroll down to "Variables", then find "JAVA VERSION" and type the following for:

## Java8
`adopt@1.8.0-275`

## Java11
`adopt@1.11.0-9`

## Java 16
`adopt@1.16.0-1`

Alternatively, choose it in the "Docker Image" dropdown.

Now, go back to your console, start your server and you'll see it using the Java version you set.

> If the above does not work, manually delete the `.jabba` folder and restart your server.

# Accepting Mojang's EULA
If for whatever reason clicking "I Accept" didn't work when creating your server, you can still accept the EULA manually.

In order to start your server, you must accept [Mojang's EULA](https://account.mojang.com/documents/minecraft_eula). If you agree to it, go to your server's file manager, find and open the file "`eula.txt`", find the "`eula`" string and set it to `true`.

# Optimizing your Server
Optimizing your server is a great way to reduce lag and server load, as it increases the efficiency of the server, letting it process requests quickly. By doing this, you will also increase TPS.

## Pre-requisites
Choosing the right server type is very important. An example of a good server software type is [Purpur](https://purpur.pl3x.net/), as it is very optimized and provides a ton of configuration options.

## How do I optimize my Server?
You can find a detailed guide [here](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) for PaperMC, or you can use [this one](https://github.com/YouHaveTrouble/minecraft-optimization) for Purpur or other PaperMC forks.
These guides give a detailed explanation of all the settings they do on your server. To use them, go to the said files and configure them as the guide shows.

You also have a shortcut. You can check out premade configs by clicking [here](https://github.com/flaxeneel2/pterodactyl-optimized-paper-egg) and then edit the values to your liking (PaperMC).

**Startup Flags**
Startup flags are also very important for optimization and may make a major difference in performance.
1. Go to your server panel.
2. Go to startup tab.
3. Scroll down to `JAVA ARGUMENTS`.
4. Paste the flags [here](https://haste.flaxeneel2.net/raw/java-args) in it.
5. Start your server and you are done!

> Why should I use these startup flags? 
These flags help keep your server run with a stable TPS by tweaking different allocation and garbage collection settings for Minecraft. 
For further information on these flags, check out [this blog](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft).


# Configuring
## Message of the Day
![Message of the Day Example](https://i.imgur.com/ctD8iqS.png)

Also known as MOTD, is the message that shows up below the server name on a multiplayer server list. Usually used to say what's new about the server and/or also displaying what version it supports. Sometimes also used to indicate what games it has to offer or just a short description of the server.

To configure MOTD(Message of the Day), the setting for this is usually found in the server.properties file. Simply just change it to what you want for your Minecraft Java Server.

If you're interested in changing text colors, use these color codes:

| Preview        | Color Code                                      |
|:---------------|:---------------------|:-------------------------|
| <span id="black_color" class="color-block"></span> Black | \u00A70 |
| <span id="dark_blue_color" class="color-block"></span> Dark Blue | \u00A71 |
| <span id="blue_color" class="color-block"></span> Blue | \u00A79 |
| <span id="dark_green_color" class="color-block"></span> Dark Green | \u00A72 |
| <span id="green_color" class="color-block"></span> Green | \u00A7a |
| <span id="dark_aqua_color" class="color-block"></span> Dark Aqua | \u00A73 |
| <span id="aqua_color" class="color-block"></span> Aqua | \u00A7b |
| <span id="dark_red_color" class="color-block"></span> Dark Red | \u00A70 |
| <span id="red_color" class="color-block"></span> Red | \u00A7c |
| <span id="dark_gray_color" class="color-block"></span> Dark Gray | \u00A78 |
| <span id="gray_color" class="color-block"></span> Gray | \u00A77 |
| <span id="dark_purple_color" class="color-block"></span> Dark Purple | \u00A75 |
| <span id="light_purple_color" class="color-block"></span> Light Purple | \u00A7d |
| <span id="gold_color" class="color-block"></span> Gold | \u00A76 |
| <span id="yellow_color" class="color-block"></span> Yellow | \u00A7e |
| <span id="white_color" class="color-block"></span> White | \u00A7f |

## Server Icon
The server icon helps indicate the branding of your Minecraft Java server, it's easy to set one. Simply create an icon that is 64x64 in resolution. Name the server icon as <u>server-icon.png</u> and add it to the root of your Minecraft Java server files.

## Player Limit

By default, Minecraft sets 20 as the max player limit for Minecraft Java servers. You can increase this, or decrease, to any number you want. To configure the player limit, the setting for this is usually found in the server.properties file. Simply, just change the number 20 to something else, you could also set -1 for unlimited.

# Setting Operators
An operator is a player with administrative access to your server, giving them full access to all commands. Even commands like /stop or /restart.
To set an operator, use:

```
/op Username
```

As an example, if you wanted to op Notch, you would use:

```
/op Notch
```

If you ever need to remove a player as operator, you could replace `/op` with `/deop`

Please don't use `/` in the Console tab, or will output as "unknown command". `/` should only be used in-game.

If you want to give some players access to specific admin commands, but not everything, you can use [LuckPerms](https://luckperms.net/) for this, which we all recommend.

# Connecting
## Find your Server IP Address
In your [Game Panel](https://panel.falixnodes.net/) the IP is shown in the upper left on the Console tab. Use this to connect to your server. It should look something like <u>ult##.falix.gg:#####</u>.

If you're looking for the numeric IP, this usually shows up when booting the server.

## Play In-Game
On your Multiplayer server list, click Add Server, then put the IP for your server into the IP Address box. As for the Server Name, this can be set as whatever. Click Add and the server should appear on your list.

</div>

<div style="display: none" id="bedrock" markdown=1>

# Creating a Server
## Creating a Server on your Account
To create a Minecraft Bedrock server, go to your Client Panel. On the left sidebar, choose Create Server. Type in all required information like server name, memory amount, and server location. Once done, click the Create button and wait at least a minute in the Client Panel for the new server to be created for your account.

Now, in the [Game Panel](https://panel.falixnodes.net/) you should see the new server on your server list. If the server list indicates that it is still installing, wait at least 2 to 5 minutes for the installation to be complete. If the installation is taking longer than usual (over 5 to 10 minutes or more), head back to your [Client Panel](https://client.falixnodes.net/) and delete, then re-create the server.

## Starting the Server
 Select your new server and go to the Console tab, usually already selected by default. Click the Start button, located in the upper left corner of the Console tab. You're going to be selecting which type of server you want during the first startup of your new server. In this case, we're creating a Minecraft Bedrock server, to select Minecraft Bedrock, then the type of Minecraft Bedrock server that you want like Vanilla or PMMP, your server will start downloading the required files which should only take a few moments. After installation, start the server again. 

# Configuring
All options are located in the `server.properties` file, this may appear mostly empty with only the port and ip there. The port and ip options you should not touch.

If you need to change an option, just add the line for it. Example, if you want to change the gamemode to creative, then just add:
```
gamemode=creative
```

<table>
        <thead>
            <tr>
                <th>Option name</th>
                <th>Possible values</th>
                <th>Default value</th>
                <th>When is it used</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>gamemode</td>
                <td>survival (0), creative (1), adventure (2)</td>
                <td>survival</td>
                <td>Always or only for new players</td>
                <td></td>
            </tr>
            <tr>
                <td>force-gamemode</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td>
                    <b>force-gamemode=false</b>(or <b>force-gamemode is not defined</b> in the server.properties file)
                    prevents the server for sending to the client gamemode values other
                    than the gamemode value saved by the server during world creation
                    even if those values are set in server.properties file after world creation.<br>
                    <b>force-gamemode=true</b> forces the server to send to the client gamemode values
                    other than the gamemode value saved by the server during world creation
                    if those values are set in server.properties file after world creation.
                </td>
            </tr>
            <tr>
                <td>difficulty</td>
                <td>peaceful (0), easy (1), normal (2), hard (3)</td>
                <td>easy</td>
                <td>Always</td>
                <td></td>
            </tr>
            <tr>
                <td>level-type</td>
                <td>FLAT, LEGACY, DEFAULT</td>
                <td>DEFAULT</td>
                <td>World creation</td>
                <td></td>
            </tr>
            <tr>
                <td>server-name</td>
                <td>Any string</td>
                <td>Dedicated Server</td>
                <td>Always</td>
                <td>This is the server name shown in the in-game server list.</td>
            </tr>
            <tr>
                <td>max-players</td>
                <td>Any integer</td>
                <td>10</td>
                <td>Always</td>
                <td>The maximum numbers of players that should be able to play on the server. <b>Higher values have performance impact.</b></td>
            </tr>
            <tr>
                <td>server-port</td>
                <td>Any integer</td>
                <td>19132</td>
                <td>Always</td>
                <td></td>
            </tr>
            <tr>
                <td>server-portv6</td>
                <td>Any integer</td>
                <td>19133</td>
                <td>Always</td>
                <td></td>
            </tr>
            <tr>
                <td>level-name</td>
                <td>Any string</td>
                <td>level</td>
                <td>Always</td>
                <td>The name of level to be used/generated. Each level has its own folder in <code>/worlds</code>.</td>
            </tr>
            <tr>
                <td>level-seed</td>
                <td>Any string </td>
                <td></td>
                <td>World creation</td>
                <td>The seed to be used for randomizing the world. If left empty a seed will be chosen at random.</td>
            </tr>
            <tr>
                <td>online-mode</td>
                <td>true, false</td>
                <td>true</td>
                <td>Always</td>
                <td>If true then all connected players must be authenticated to Xbox Live.
                    Clients connecting to remote (non-LAN) servers will always require Xbox Live authentication regardless of this setting.
                    If the server accepts connections from the Internet, then it's <b>highly</b> recommended to enable online-mode.</td>
            </tr>
            <tr>
                <td>white-list</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td>If true then all connected players must be listed in the separate <code>whitelist.json</code> file.
                            See the <i>Whitelist</i> section.</td>
            </tr>
            <tr>
                <td>allow-cheats</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td></td>
            </tr>
            <tr>
                <td>view-distance</td>
                <td>Any integer</td>
                <td>10</td>
                <td>Always</td>
                <td>The maximum allowed view distance. <b>Higher values have performance impact.</b></td>
            </tr>
            <tr>
                <td>player-idle-timeout</td>
                <td>Any integer</td>
                <td>30</td>
                <td>Always</td>
                <td>After a player has idled for this many minutes they will be kicked. If set to 0 then players can idle indefinitely.</td>
            </tr>
            <tr>
                <td>max-threads</td>
                <td>Any integer</td>
                <td>8</td>
                <td>Always</td>
                <td>Maximum number of threads the server will try to use.</td>
            </tr>
            <tr>
                <td>tick-distance</td>
                <td>An integer in the range [4, 12]</td>
                <td>4</td>
                <td>Always</td>
                <td>The world will be ticked this many chunks away from any player. <b>Higher values have performance impact.</b></td>
            </tr>
            <tr>
                <td>default-player-permission-level</td>
                <td>visitor, member, operator</td>
                <td>member</td>
                <td>Always</td>
                <td>Which permission level new players will have when they join for the first time.</td>
            </tr>
            <tr>
                <td>texturepack-required</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td>If the world uses any specific texture packs then this setting will force the client to use it.</td>
            </tr>
            <tr>
                <td>content-log-file-enabled</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td>Enables logging content errors to a file.</td>
            </tr>
            <tr>
                <td>compression-threshold</td>
                <td>An integer in the range [0-65535]</td>
                <td>1</td>
                <td>Always</td>
                <td>Determines the smallest size of raw network payload to compress. Can be used to experiment with CPU-bandwidth tradeoffs.</td>
            </tr>
            <tr>
                <td>server-authoritative-movement</td>
                <td>true, false</td>
                <td>true</td>
                <td>Always</td>
                <td>Enables server authoritative movement. If true, the server will replay local user input on
                    the server and send down corrections when the client's position doesn't match the server's.
                    Corrections will only happen if correct-player-movement is set to true.</td>
            </tr>
            <tr>
                <td>player-movement-score-threshold</td>
                <td>Any positive integer</td>
                <td>20</td>
                <td>Always</td>
                <td>The number of incongruent time intervals needed before abnormal behavior is reported.
                    In other words, how many times a player does something suspicious before we take action.
                    Only relevant for server-authoritative-movement.</td>
            </tr>            
            <tr>
                <td>player-movement-distance-threshold</td>
                <td>Any positive float</td>
                <td>0.3</td>
                <td>Always</td>
                <td>The difference between server and client positions that needs to be exceeded before abnormal behavior is registered.
                    Only relevant for server-authoritative-movement.</td>
            </tr>            
            <tr>
                <td>player-movement-duration-threshold-in-ms</td>
                <td>Any positive integer</td>
                <td>500</td>
                <td>Always</td>
                <td>The duration of time the server and client positions can be out of sync (as defined by player-movement-distance-threshold)
                    before the abnormal movement score is incremented. This value is defined in milliseconds.
                    Only relevant for server-authoritative-movement.</td>
            </tr>         
            <tr>
                <td>correct-player-movement</td>
                <td>true, false</td>
                <td>false</td>
                <td>Always</td>
                <td>If true, the client position will get corrected to the server position if the movement score exceeds the threshold.
                    Only relevant for server-authoritative-movement.
                    We don't recommend enabling this as of yet; work is still in progress.</td>
            </tr>           
        </tbody>
    </table>

# Setting Operators
An operator is a player with administrative access to your server, giving them full access to all commands. Even commands like /stop or /restart.
To set an operator, use:

```
/op Username
```

As an example, if you wanted to op Notch, you would use:

```
/op Notch
```

If you ever need to remove a player as operator, you could replace `/op` with `/deop`

Please don't use `/` in the Console tab, or will output as "unknown command". `/` should only be used in-game.

# Connecting
## Find your Server IP Address
In your [Game Panel](https://panel.falixnodes.net/) the IP is shown in the upper left on the Console tab. Use this to connect to your server. It should look something like <u>ult##.falix.gg:#####</u>.

If you're looking for the numeric IP, this usually shows up when booting the server.

## Play In-Game
On your Servers list, click Add Server, then put the IP for your server into the IP Address box, then add the correct port number. As for the Server Name, this can be set as whatever. Click Add and the server should appear on your list.

If your platform of Minecraft Bedrock isn't giving your an option to add a server to your servers list, then you may only have the options for Mineplex, InPvP, and Lifeboat. This is due to platform restrictions. **You may only be able to add a server to your servers list on Windows 10/11**. However, there are workarounds, view here: [https://github.com/Pugmatt/BedrockConnect](https://github.com/Pugmatt/BedrockConnect).

</div>
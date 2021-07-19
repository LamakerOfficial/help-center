---
layout: default
title:  "Enabling Command Blocks"
parent: General
grand_parent: Minecraft
permalink: /minecraft/general/enabling-command-blocks/
tags: minecraft commmand block enable configuration configure server.properties
---

# Command Blocks
## What are they?
Command blocks are mechanical blocks that when powered by redstone will run a command of your choice. To access the command blocks you must be an operator on the server and in creative mode. It cannot be found in your creative inventory. Due to its ability to affect all aspects of the game, command blocks are not accessible in survival mode.

## Different Types
**Impulse**: Runs commands with a redstone signal. That means once powered they will run the command once and then stop. 

**Repeat**: Runs the commands every game tick they are powered by default. Multiple commands can be run in a single tick. You can also set the delay between each tick or list of commands being executed. 

**Chain**: Can only be executed once the previous blocks have gone through their set of commands. 

[Learn More](https://minecraft.fandom.com/wiki/Command_Block) (Wiki)

# Enabling and Obtaining
## Enabling
To enable command blocks for your Minecraft Java server, open the <u>server.properties</u> file and look for `enable-command-block`. This option is usually disabled by default after the server has been generated.
Simply change it from `false` to `true`, then restart your Minecraft Java server.

## Obtaining
In-Game, use the following command to obtain a command for yourself:
```
/give @p command_block
```

If you would like to give someone else a command block, which must be an operator, you can use:
```
/give <username> command_block
```

If you want to give someone a command block from the console, in the [Game Panel](https://panel.falixnodes.net), then use:
```
give <username> command_block
```
Don't use `/` when using the console in the [Game Panel](https://panel.falixnodes.net)

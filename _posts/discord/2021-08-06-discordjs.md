---
layout: post
title:  "Setting Up"
categories: Discord
tags: discordJS
icon: <i class="fa-brands fa-js-square"></i>
permalink: /discord/nodejs-discord-bot/
---

# Creating And Hosting a Discord Bot Using Discord.js
## Creating a Bot
First, simply go to [Discord's Developers Portal](https://discord.com/developers/applications) and login.
Then, click on "New Application" in the top right corner of the screen, give it a name and click on "Create". 
After that, click on bot on the side menu, press add bot and confirm it.
You've successfully created the bot account!

## Coding a Bot

To start coding your Discord bot, please refer to the official [Discord.js guide](https://discordjs.guide) for a detailed step-by-step guide with further information and examples.

## Hosting The Bot

To host your bot on our service, you need a server. 
To create one, follow [this article](https://help.falixnodes.net/falix/general/getting-started/#creating-a-server). 
Head over to the [Game Panel](https://panel.falixnodes.net), log in and select the server you've just created. 
Once you're there, go to your server's file manager. A button for it can be found on the top nav bar. 
Now, simply upload your project files, make sure to include the `package.json`, `package-lock.json`, and your main/start file. Wait for the upload to be complete and navigate back to your server's console, then start your server. 
You'll be shown a bunch of options including Bot hosting. Since we're hosting a Discord bot, type `5` and press enter. 
You will now see 2 options, one for Discord bot hosting, and other for SinusBot hosting. Type `1`, for Discord bot hosting. 
your server will restart and you'll now be shown a new menu with a bunch of new options. This is a NodeJS Discord bot guide, so we're going to choose option `1` to start a NodeJS server. Then, type the name of your bots main/start file, (usually `index.js`).
You'll then be asked for a NodeJS version, its recommended to use the latest stable version. 
Enter the version you'd like, then wait a bit, and your server should be ready!

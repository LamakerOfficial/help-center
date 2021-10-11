---
layout: post
title:  "Setting Up"
parent: Discord
tags: discordJS
permalink: /discord/nodejs-discord-bot/
---

# Creating And Hosting a Discord Bot Using Discord.js
## Creating a Bot
First, simply go to [Discord's Developers Portal](https://discord.com/developers/applications) and login.Then, click on "New Application" in the top right corner of the screen, give it a name and click on "Create". After that, click on bot on the side menu, press add bot and confirm it.
You've successfully created the bot account!

## Coding a Bot
To code your bot and to do the following steps you must have basic knowledge of NodeJS and a code editor installed on your PC such as [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/), but you can use one of your liking.

### Prepare Everything
* Install [NodeJS](https://nodejs.org/) (Latest version) on your local machine;
* Create a folder for your bot and open the terminal in there;
* Create a new file called index.js in the folder. This will be the main bot file;
* Create a `package.json` file by typing `npm init -y` in the terminal, in that folder;
* Type `npm install discord.js` in the terminal, in the same folder, and wait for it to install;

### Essential Coding

Once discord.js is fully installed, open the index.js file and type the following:
```
const Discord = require('discord.js')
const client = new Discord.Client()
```

We have defined the client. Now we will make an event for when the bot is ready. This will print a message in the console when the bot is ready to be used:

```
client.once('ready', () =>{
console.log ('Bot Is Online');
});
```

Now, we will make a simple command

```
 client.on("message", async message => {
 if (message.content === '!ping') {
     message.channel.send('Pong!')
 }
 });
```

We have made a command. Now let's specify to the script our bot TOKEN. This will tell it what account to use.

To get the TOKEN, go to [discord developers](https://discord.com/developers/applications) and in your application, click on Bot, and copy the token
The Token is like a password, so don't share it with anyone!

`client.login('Your Super Secret Token')`

You can refer to this guide for making a complete discord bot with javascript [discordjs.guide](https://discordjs.guide)

## Hosting The Bot

To host your bot in our service, you need a server. To create one, follow [this article](https://help.falixnodes.net/falix/general/getting-started/#creating-a-server). Head over to the [Game Panel](https://panel.falixnodes.net), log in and select the server you've just created. Once you're there, go to your server's file manager. A "button" for it can be found on the top bar. Now, simply upload your 3 bot files (index.js, package.json, package-lock.json) to the main path. Wait for the upload to be complete and navigate back to your server's console, then start your server. You'll be shown a bunch of options including Bot hosting. Since we're hosting a Discord bot, type `5` and press enter. You will now see 2 options, one for Discord bot hosting, and other for SinusBot hosting. Type `1`, for Discord. You'll now be shown a new menu with a bunch of new options. This is a NodeJS Discord bot guide, so we're going to choose option `2` to start a NodeJS server. Choose the NodeJS version (If you downloaded the latest NodeJS version (16.2.0 at the moment) or you're running a version that is not listed there, choose `custom`, and type the version you want) then type the name of bot your main file, in our case, `index.js`. Wait for nodejs to download and install, and start your bot.

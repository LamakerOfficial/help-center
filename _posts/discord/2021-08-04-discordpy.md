---
layout: post
title:  "Discord.py"
parent: Discord
permalink: /discord/python-discord-bot/
tags: Falix discord bot hosting python
---

# Creating And Hosting a Discord Bot Using Discord.py
## Creating a Bot
First, simply go to [Discord's Developers Portal](https://discord.com/developers/applications) and login.Then, click on "New Application" in the top right corner of the screen, give it a name and click on "Create". After that, click on bot on the side menu, press add bot and confirm it.
You've successfully created the bot account!

## Coding a Bot
To code your bot and to do the following steps you must have basic knowledge of Python and a code editor installed on your PC such as [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/), but you can use one of your liking.

### Prepare Everything
* Install [Python](https://www.python.org/) (Latest version) on your local machine;
* Create a folder for your bot;
* Create a new file called index.py in the folder. This will be the main bot file;
* Open your terminal and type "pip install discord.py" and wait for it to install;

### Essential Coding

Once discord.py is fully installed, open the index.py file and type the following:
```
import discord
from discord.ext import commands
client = commands.Bot(command_prefix = 'your new bot prefix here')
```

We have defined the client. Now we will make an event for when the bot is ready. This will print a message in the console when the bot is ready to be used:

```
@client.event
async def on_ready():
    print('The bot is online!')
```

Now, we will make a simple command

```
@client.command
async def ping(ctx):
     await ctx.send('Pong!')
```

We have made a command. Now let's specify to the script our bot TOKEN. This will tell it what account to use.

To get the TOKEN, go to [discord developers](https://discord.com/developers/applications) and in your application, click on Bot, and copy the token
The Token is like a password, so don't share it with anyone!

`client.run('Your Super Secret Token')`

## Hosting The Bot

To host your bot in our service, you need a server. To create one, follow [this article](https://help.falixnodes.net/falix/general/getting-started/#creating-a-server). Head over to the [Game Panel](https://panel.falixnodes.net), log in and select the server you've just created. Once you're there, go to your server's file manager. A "button" for it can be found on the top bar. Now, simply upload your bot's main file, in our case, `index.py`, to the main path. Wait for the upload to be complete and navigate back to your server's console, then start your server. You'll be shown a bunch of options including Bot hosting. Since we're hosting a Discord bot, type `1` and press enter. You'll be shown a new menu with a bunch of new options. This is a Python Discord bot guide, so we're going to choose option `2`, to start a Python server, then choose the python version (If you downloaded the latest python version (3.9.5 at the moment) or you're running a version that is not listed there, choose `custom`, and type the version you want). Wait for it to download and install. Your server should've crashed with a syntax error. Wait for it to start again. Now, we're going to install discord.py. For that, you'll need to choose option `3`, then type `discord.py`, and choose once more your python version. Once the installation process of discord.py has finished, start a python server, option 2, type the name of bot your main file, in our case, `index.py`, and choose the python version.

---
layout: post
title:  "Plugin Management"
categories: Minecraft
tags: plugins
permalink: /minecraft/plugins/management/
---

# Explanation
## What are They?
Plugins are similar to browser extensions in Minecraft. These are used by third-party developers to write additional code and plug it into the server. Since they do not change the game itself, as mods do, they are more constrained in what they can do. This, however, implies that they only need to be installed on the server's side. There are no changes required in your own game files to achieve this result.

Plugins perform a number of functions and do not have a particular purpose. They can add a wide assortment of extra commands to help control the server and add in fun and useful mechanics, such as the ability to set who can access and construct in specific areas, add prefixes and suffixes to names, create different ranks with access to different commands, add RPG elements, add virtual economies, and much more.

To spice up your server, there are thousands of plugins available in the Bukkit and Spigot repositories. However, since most of these plugins are created by different developers, incompatibility issues and bugs can spring up whenever a large number of plugins are installed. Sticking to the most widely known plugins is the right alternative since they've been in development for years, are far more mature, and have no compatibility problems with other plugins.

## Difference Between Plugins and Mods
Plugins are used to modify and/or improve existing Minecraft server content and can be run using CraftBukkit/Spigot/Paper. They are only used on the server, so players will not have to take any extra steps to connect to a server that's already running plugins.

Mods, which are usually run from Forge, are used to add new items/features to Minecraft and/or improve the existing gameplay. Mods are often required from both the client and server sides (for example, "Biomes O' Plenty"), but some mods are only designed for the client (such as "Optifine" or "Damage Indicators"). Mods can also be put together to form what is known as a modpack (such as "All The Mods 3" or "Sky Factory").

Overall, mods and plugins often don't get along, so it's unlikely that you'll be able to successfully start operating a server for both. However, it is possible, notably if you are willing to run an older version of Minecraft (the most popular for plugin/mod compatibility are 1.7.10 or 1.6.4).

# Installation
## Where to Download?
There are a lot of websites that provide plugins for server administrators.

Here's a list of common websites to choose from: 
 - [Spigot](https://www.spigotmc.org/)
 - [Bukkit](https://dev.bukkit.org/)

Some plugins may have their own website.

## Installation to Server
After downloading a plugin, you should have a __.jar__ file to upload to your server, or they can come in a ZIP as a plugin is divided up into multiple __.jar__ files.

These __.jar__ files will be assigned to a specific folder on your Minecraft server, which itself is typically called "plugins." Once added, restart your server; a new folder in the plugins folder should appear, usually contains the plugin's configuration.

# Configuration 
## What is Plugin Configuration?
In order for server administrators to be able to change the settings of a plugin, a configuration file can be used, as previously stated: "a new folder in the plugins folder should appear, usually contains the plugin's configuration."

## Configuring
In the plugins folder, there will be a folder with the plugin's name. You can edit the config file, usually marked as __.yml__ file to change the settings to the plugin.

Some plugins, like LuckPerms, may have a GUI you can use in browser to do configuration and more.
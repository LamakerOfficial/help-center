---
layout: default
title:  "Holographic Displays"
parent: Plugins
grand_parent: Minecraft
permalink: /minecraft/plugins/holographic-displays/
tags: minecraft hologram configure configuring connecting installing
---

<div class="install-plugin">
    <img style="border-radius: 50px;" src="https://media.forgecdn.net/avatars/85/180/636200108824720524.png">
    <p>Holograpgic Displays</p>
    <a href="https://dev.bukkit.org/projects/holographic-displays">Download this Plugin</a>
</div>

# What is Holographic Displays
Using this plugin will allow your players to see holograms through the world.

# Installation Process

Like any other plugin, you’ll need to download the __.jar__ file of Holographic Displays, then add it to your plugins folder. Once you’ve added Holographic Displays to your plugins folder, fully restart the server, and all configuration files will be generated for Holographic Displays.

# How to Use It

In Holographic Displays, you can create text, images, and items holograms.

## Creating a Hologram

To create a hologram, use `/hd create <name>`.

Note that the hologram is going to be created at the position where the player that issued the command is. 

You should be able to see this now:

![image](../../../assets/images/posts/plugins/holographic-displays/default-hologram.png)

## Editing a Hologram

### Setting a Line

To set a line of a hologram, use `/hd setline <hologram name> <line number> <new text>`.

![image](../../../assets/images/posts/plugins/holographic-displays/set-line.png)

### Adding a New Line

To add a new line to the hologram, use `/hd addline <hologram name> <text>`.

![image](../../../assets/images/posts/plugins/holographic-displays/add-line.png)

## Coloring and Formatting

You can make your holograms look better by coloring and formatting them!

![image](../../../assets/images/posts/plugins/holographic-displays/coloring-and-formatting.png)

We achieved this result by using: `/hd setline example 2 &6&lThis is the hologram's second line`

## Moving a Hologram

To move a hologram to a different place, use `/hd movehere <hologram name>` The hologram will be moved to the player's current position.

## Deleting a Hologram

To delete a hologram, use `/hd delete <hologram name>`

## Displaying Images

To display an image in a hologram, upload the image to `/plugins/HolographicDisplays/` and use `/hd readimage <hologram name> <image> <hologram width>`

![image](../../../assets/images/posts/plugins/holographic-displays/displayed-image.png)

## Displaying Items

To display items, use the same command as setting or adding a line, but instead of text, use `ICON: <item>`

![image](../../../assets/images/posts/plugins/holographic-displays/floating-item.gif)

## Using Placeholders

You can also use placeholders on your holograms to make them more dynamic! Below, you can see a table with useful placeholders.

![image](../../../assets/images/posts/plugins/holographic-displays/placeholder.png)
###### Acheived using the placeholder "{player}"

| Placeholder        | What it does  |
|:-------------------|:--------------|
| {online}           | Displays the number of users on the server.       |
| {max_players}            | Displays the number of available player slots.       |
| {time}            | Displays the real world's time.       |
| {player}            | Displays the player name. ([ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) v3.6.4+ required)       |

---
layout: post
title:  "Creating Backups"
categories: Falix
tags: fxgeneral
permalink: /falix/general/creating-backups/
---

# How To Create Backups
Backing up your server is a crucial task when you're a server owner. If anything bad happens to your server, such as griefing and/or unintentional actions, you'll be able to revert those changes. 
In this article, we'll give you a quick and easy explanation of how to create backups for your server within the Game Panel.

1. Make sure you have allocated backups to your server, you can do so in the [client panel](https://client.falixnodes.net).
2. Head over to the [game panel](https://panel.falixnodes.net).
3. Click on your server.
4. Click on "Backups" at the top of the page.
5. Click on "Create backup" at the bottom right of the page.
6. Insert a name into the "Backup name" field.
7. If needed, you can exclude any files/folders by inserting their name into the "Ignored files & directories" field, you can also use wildcards, refer to the table below to learn how.

| Wildcard                   | Function                          |Example                                          				    |
|----------------------------|-----------------------------------|----------------------------------------------------------------------------------|
| *                          | Replaces any number of characters |• `*.jar` excludes all .jar files 						    |
|                            |                                   |• `/home/container/plugins/*` excludes all folders/files in the "plugins" directory |
|			     |					 |• `*ava` excludes all fles/folders that ends with "ava" 			    |
|----------------------------|-----------------------------------|----------------------------------------------------------------------------------|
| ?                          | Replaces a single character       | F`?`ile  = F`o`le / F`i`le / F`a`le / F`e`le / F`u`le 			    |
|----------------------------|-----------------------------------|----------------------------------------------------------------------------------|
| []                         | Specifies a set of characters to match, `-` specifies a range of consecutive characters |• `[Jj]`ava = `J`ava / `j`ava 
|			     |				 	 |• folder`[1-3]` = folder1 / folder2 / folder3 |

> Note: Make sure to type every path, directory, filename or folder name on a separate line.

8. You can choose to lock the backup, locking it will prevent the backup from being unintentionally deleted by a user, you can always unlock it later.

That's it! Your backup has been created!

> Note: You can also delete, restore and download the backup to your device by clicking the 3 dots to the right of the backup!

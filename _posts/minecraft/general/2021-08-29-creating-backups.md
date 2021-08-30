---
layout: post
title:  "Creating backups"
categories: Minecraft
tags: mcgeneral
permalink: /minecraft/general/creating-backups/
---

# How to create backups

1. Make sure you have allocated backups to your server, you can do so in the [client page](https://client.falixnodes.net).
2. Head over to the [panel](https://panel.falixnodes.net).
3. Click on your server.
4. Click on "Backups" at the top of the page.
5. Click on "Create backup" at the bottom right of the page.
6. Insert a name into the "Backup name".
7. You can exclude any files/folders by inserting their name into the "Ignored files & directories" field, you can also use wildcards, refer to the table below to learn how.
| Wildcard                   | Function                          |Example                                           |
|----------------------------|-----------------------------------|--------------------------------------------------|
| *                          | Replaces any number of characters |`*.jar` excludes all .jar files
`/home/container/plugins/*` excludes all folders/files in the "plugins" directory
`*ava` excludes all fles/folders that ends with "ava"
|----------------------------|-----------------------------------|--------------------------------------------------|
| ?                          | Replaces a single character       | F`?`ile  = F`o`le / F`i`le / F`a`le / F`e`le / F`u`le |
|----------------------------|-----------------------------------|--------------------------------------------------|
| []                         | Specifies a set of characters to match, `-` specifies a range of consecutive characters| `[Jj]`ava = `J`ava / `j`ava 
folder`[1-3]` = folder1 / folder2 / folder3 |

> Note: Make sure to type every path/directory/filename/folder name on a separate line

8. You can choose to lock the backup or leave it unlocked, locking it will prevent the backup from being deleted by a user, you can always unlock it later.
9. Your backup has been created!

> Note: You can delete, restore, lock and even download your backup by clicking on the 3 dots to your right!



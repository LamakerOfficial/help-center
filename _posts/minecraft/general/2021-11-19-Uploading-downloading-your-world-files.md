---
layout: post
title:  "Uploading And Downloading Your World Files"
categories: Minecraft
icon: <i class="fa-duotone fa-memo"></i></span>
tags: mcgeneral
permalink: /minecraft/general/uploading-and-downloading-your-world-files/
---

{% include minecraft-edition-picker.html %}

<span id="java"><i class="fab fa-java"></i> Java</span>

# Uploading Your World
This guide explains how to upload a world to your server!

> Make sure your server is turned off while following the steps below.
> Make sure your world is compressed/archived (ending in ".zip", ".rar" or others) before following the steps below.
1. Setup your server. You can create a server on the [Client Panel](https://client.falixnodes.net).
2. Go to the [Game Panel](https://panel.falixnodes.net).
3. Click on your server.
4. Click on "File Manager" at the top of the page.
5. Click on "Upload", it is a big blue button located at the top right of the page.
6. Select your world archive.
7. After it is done uploading, locate your world archive and click on the 3 dots to its right.
8. Click on "Unarchive".
9. Your world should be uploaded!

> Note: You can also use [SFTP](https://help.falixnodes.net/falix/general/sftp/)!

# Downloading Your World
This guide explains how to download a world from your server!

1. Go to the [Game Panel](https://panel.falixnodes.net).
2. Click on your server.
3. Click on "File Manager" at the top of the page.
4. Locate your world folder, it is usually called `world`.
5. Click on the 3 dots to the right of the folder.
6. Click on "Archive".
   ![image](..\..\..\assets\images\posts\minecraft\download-and-upload-your-world-files\steps-3-4-5-6.png)
7. A new file should be created. Locate it and click on the 3 dots to its right.
8. Click on "Download".
   ![image](..\..\..\assets\images\posts\minecraft\download-and-upload-your-world-files\steps-7-8.png)

9. Your world folder should be downloaded!

> Note: If you are using Spigot or any of its forks, you should also have the `world_nether` and `world_the_end` folders. These are also your world files so make sure to download them alongside `world`.
> Note: You can also use [SFTP](https://help.falixnodes.net/falix/general/sftp/)!

<span id="bedrock"><i class="fas fa-mobile-alt"></i> Bedrock</span>

# Uploading Your World
This guide explains how to upload a world to your server!

> Make sure your server is turned off while following the steps below.

1. Open any type of file explorer application on your device.
2. Navigate to your Minecraft Client world folder.<br>

PC (Windows 10 Edition):
```
- \Users\USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```
> Note: "USERNAME" is your own Windows username. <br>

> Android:
```
Internal storage/games/com.mojang/minecraftWorlds
```
IOS:
```
Apps/com.mojang.minecraftpe/Documents/games/com.mojang/minecraftWorlds
```
3. There will be a folder (or multiple folders, one for each world if you have Windows 10 Edition or Pocket Edition) with a random name like "BQUAAIFxEAA=", find the world file you want to put on your dedicated server by checking `levelname.txt`.
4. Archive your world folder.
5. Go to the [Game Panel](https://panel.falixnodes.net) and click on your server.
6. Click on "File Manager" at the top of the page.
7. Navigate to the `worlds` folder and open it.
8. Click on "Upload", it is a big blue button located at the top right of the page.
9. Select your world archive.
10. After it is done uploading, locate your world archive and click on the 3 dots to its right.
11. Click on "Unarchive".
12. Remove the `=` symbol from the world folder name by clicking the "Rename" button from the 3 dots.
12. Open the `server.properties` file on your server. Find the `level-name=` line and enter the name of the folder you uploaded in step 8, (spaces are allowed) so that it looks something like `level-name=My Server Level`. This must match the folder name.
13. Start your server. It should now be running your imported world.

>Note: If you have a compressed/archived world (ending in ".zip", ".rar" or others), then follow steps from step 5.


# Downloading Your World
This guide explains how to download a world from your server!

1. Go to the [Game Panel](https://panel.falixnodes.net).
2. Click on your server.
3. Click on "File Manager" at the top of the page.
4. Navigate to the `worlds` folder, open it.
   ![image](..\..\..\assets\images\posts\minecraft\download-and-upload-your-world-files\step-3-4-bedrock.png)
5. Click on the 3 dots to the right of your world folder.
6. Click on "Archive".
   ![image](..\..\..\assets\images\posts\minecraft\download-and-upload-your-world-files\step-5-6-bedrock.png)
7. A new file should be created, locate it and click on the 3 dots to its right.
8. Click on "Download".
   ![image](..\..\..\assets\images\posts\minecraft\download-and-upload-your-world-files\step-5-6-bedrock.png)
9. Your world folder should be downloaded!

> Note: You can also use [SFTP](https://help.falixnodes.net/falix/general/sftp/)!
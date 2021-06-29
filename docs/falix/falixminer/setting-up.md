---
layout: default
title:  "Setting Up"
nav_order: 1
parent: Miner
grand_parent: Falix
permalink: /falix/falix-miner/setting-up/
tags: Falix miner mining coins falixcoins download installing cpu gpu
---

## Requirements
 - [Curl](https://curl.se/) (Linux)

# Installing Process
> Note: Since most anti-virus software would identify miners as a virus, you will need to whitelist the file or temporarily disable the anti-virus software. You can only mine either with the CPU or the GPU at the same time. Mining can only be performed on one device at a time.

## Windows
Download the miner from [here](https://github.com/FalixInc/FalixCoins-Miner/releases/) and save it to your desktop or perhaps another place into a folder. Open the command prompt, Powershell, or Windows Terminal as administrator.

Change directory to the folder that you downloaded the miner; if you saved the miner to a new folder on your desktop, the command would look something like this:
```
cd C:\Users\Username\Desktop\Folder-Name\
```
 > Replace `Username` with your username and `Folder-Name` with the name you set

### For CPU Mining Only:
Now type the following command:
```
falixnodes_miner-win.exe YourDiscordIDHere Threads
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `Threads` with the numbers of threads you want to allocate for mining.

### For GPU Mining Only:
Now type the following command:
```
falixnodes_gpu_miner-win.exe YourDiscordIDHere MaxGPUUsage
```
> Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `MaxGPUUage` with the max percentage of GPU usage you want from 1 to 100.

## Linux
Download the miner from [here](https://github.com/FalixInc/FalixCoins-Miner/releases/) and save it to your desktop or perhaps another place into a folder.

Open your terminal and change the directory to the folder that you downloaded the miner; if you saved the miner to a new folder on your desktop, the command would look something like this:
```
cd ~/Desktop/Folder-Name
```
 > Replace `Folder-Name` with the name you set

Then run this command:
```
chmod u+x ./falixnodes*
```

### For CPU Mining Only:
Now type the following command:
```
sudo ./falixnodes_miner-linux YourDiscordIDHere Threads
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `Threads` with the numbers of threads you want to allocate for mining.

### For GPU Mining Only:
Now type the following command:
```
./falixnodes_gpu_miner-linux YourDiscordIDHere MaxGPUUsage
```
> Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `MaxGPUUage` with the max percentage of GPU usage you want from 1 to 100.

## macOS
Download the miner from [here](https://github.com/FalixInc/FalixCoins-Miner/releases/) and save it to your desktop or perhaps another place into a folder.

Open your terminal and change the directory to the folder that you downloaded the miner; if you saved the miner to a new folder on your desktop, the command would look something like this:
```
cd ~/Desktop/Folder-Name
```
 > Replace `Folder-Name` with the name you set

Then run this command:
```
chmod u+x ./falixnodes*
```

To run the miner, use:
```
sudo ./falixnodes_miner-macos YourDiscordIDHere Threads
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `Threads` with the numbers of threads you want to allocate for mining.
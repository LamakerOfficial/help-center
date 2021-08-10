---
layout: post
title:  "Setting Up"
categories: Falix
tags: miner
permalink: /falix/falix-miner/setting-up/
---

As promised, here are the VirusTotal scans for every file:

[CPU Miner Linux](https://www.virustotal.com/gui/file/dae27c0dffe83c45504526d564ae0c6454a2dc3de472655c38a1b2fc98a9d9eb/detection)

[CPU Miner Mac](https://www.virustotal.com/gui/file/c2b494b63a72ddf23dfc118c346c3becf91f095f8b50736a4ed0f3031a9c1591/detection)

[CPU Miner Windows](https://www.virustotal.com/gui/file/409a28fc145dacfcb7ac4b863ce53e6c3141b34314c242b364b63504c419925f/detection)



[GPU Miner Linux](https://www.virustotal.com/gui/file/9c0ae1c6f922a69f705074de951655414ac28f0c42b9ef12cbe5e85c006b2412/detection)

[GPU Miner Windows](https://www.virustotal.com/gui/file/5f5f7f013c306b16cf31f461aebd06c7a893e4fee03334611803805813baddfa/detection)

> Do note that the CPU Miner Linux scan detected 1 vulnerability, however that was detected by Microsoft's AntiVirus, which is quite famous for being inaccurate. Also, notice that it detected it as a "coin miner", which is exactly what it is, it mines crypto (in case of CPU, it mines XMR), so it can be ignored.

## Requirements
 - [Curl](https://curl.se/) (Linux)

## Pitfalls with Mining
Mining by itself is not dangerous to your PC, however, mining with an inadequately cooled PC is, so we recommend keeping a close eye on your thermals and lower the amount allocated if your CPU/GPU gets too hot. This is a warning and we shall not be held responsible for any form of damage to one's hardware.

# Usage
## CPU Flags:
```
-t <Threads>           You can use this flag to specify the number of CPU threads you wish to allocate to the miner
-u <User ID>           You can use this flag to specify your discord user ID.
-v                     You can view the time taken by certain tasks using this flag
--timings              Same as -v
-s                     Silence the tips (Recommended if you are already familiar with the program)
--silence              Same as -s
```

## GPU Flags:
```
-p <Percentage>        The percentage of your GPU which the miner should use
-u <User ID>           You can use this flag to specify your discord user ID.
-v                     You can view the time taken by certain tasks using this flag
--timings              Same as -v
```

# Installation

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
falixnodes_cpu_miner-win.exe -u YourDiscordIDHere -t #
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `#` with the numbers of threads you want to allocate for mining.

### For GPU Mining Only:
Now type the following command:
```
falixnodes_gpu_miner-win.exe -u YourDiscordIDHere -p ##
```
> Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `##` with the max percentage of GPU usage you want from 5 to 100.

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
sudo ./falixnodes_cpu_miner-linux -u YourDiscordIDHere -t #
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `#` with the numbers of threads you want to allocate for mining.

### For GPU Mining Only:
Now type the following command:
```
./falixnodes_gpu_miner-linux YourDiscordIDHere -p ##
```
> Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `##` with the max percentage of GPU usage you want from 5 to 100.

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
sudo ./falixnodes_cpu_miner-macos -u YourDiscordIDHere -t #
```
 > Replace `YourDiscordIDHere` with your [Discord ID](https://support.discord.com/hc/en-us/articles/206346498) and replace `#` with the numbers of threads you want to allocate for mining.

# Credits
flaxeneel2#0897 (me) - Developing v2

Lamaker#2005 - API work and CPU tester

TheBeaver#9074 - CPU tester

Mitoxe2#1012 - GPU tester

ShemBaneTheRaccoon#7137 - CPU tester

Korbs#0001 - Documentions
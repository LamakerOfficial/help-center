---
layout: post
title:  "Setting Up"
categories: Falix
tags: desktopsoftware
permalink: /falix/software/setting-up/
---

# Installing Process
Falix Software is built on Electron, meaning it's cross-platform and supports Windows, macOS, Linux, and ChromeOS. The installation is easy to follow and you should of the software installed within at least 2 minutes or less(depending on your internet speed).

## Windows
You can install the exe file provided by the [update server](https://updates.korbsstudio.com/falix-software/falixnodes-software-3.1.0.zip).

## Windows 10
You can install the software easily in the Microsoft Store on Windows 10. Just search "Falix" and the software should show up. Select it and click install.

or you can click here:

<a href="https://www.microsoft.com/en-us/p/Falix-software/9p5mmnfs825p"><img width="135px" src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"></a>

## macOS

Due to restrictions with Apple, the software is not available in the App Store, but we have provided a DMG option instead.

If you're using macOS, click the download button on the software website. A DMG file will be provided. Open the DMG file and simply drag the Falix app into the Applications folder.

## Linux
You can simply to go the software website and download the AppImage file. Then make sure the AppImage file is executable and run it.

## Chromebook
Yes, it's possible to run our desktop software on a Chromebook, this is thanks to ChromeOS being built on Linux.

Press `ctrl` `alt` `t` and then a terminal should appear on screen. Type:
```
sudo apt-get install nautilus
```
> Nautilus, also known as GNOME Files, is a file manager for Linux.

Once installed, look for an application called "Files" in your applicatons. The icon should be a blue file cabinet.

Download the AppImage file from our website and move it to "Linux files".

Open "Files", the application we just installed a few moments ago. You should see the AppImage file in the home folder. Right click on it and to go Properties, then enable "Allow executing file as program" under the Permissions tab.

# Updating
## Windows
When an update is available, Falix Software will start downloading the update in the background from the update server. Once it's done downloading, a notification will appear saying the update is ready, this is when you can safely close Falix Software and the update will silently install in the background.

## Windows 10 - Microsoft Store
Since Falix Software is available in the Microsoft Store, you can easily manage updates.

[Learn how to updates app on Windows 10](https://support.microsoft.com/en-us/account-billing/get-updates-for-apps-and-games-in-microsoft-store-a1fe19c0-532d-ec47-7035-d1c5a1dd464f)

## macOS
Auto updating is still not available for macOS users, you'll need to manually install new updates. When a new update is available, just re-download Falix and install the newer version.
Uninstalling is not required, when manually installing new updates, it will overwrite the existing version.

## Linux
When an update is available, Falix Software will start downloading the update in the background from the update server. Once it's done downloading, a notification will appear saying the update is ready, this is when you can safely close Falix Software and the update will silently install in the background.

# Troubleshooting
## Stuck on advertisement in Game Panel or Client Panel
> Update August 5th 2021, controls are currently being added in the Client Panel on Falix Software v3.2.0 (Not out yet)

If you've misclicked on an advertisement in the Client Panel, there is no way to back out. Controls currently don't work properly in the Client tab, you'll need to reload the software. You can reload the software by pressing Ctrl R or clicking the reload button found at the bottom of the Settings tab.

If you've misclicked on an advertisement in the Game Panel, click the back button. If for whatever reason this isn't working, click the kill button(x button) and load the panel again.

## Software is not opening
For Linux users, assuming you installed from Snap, Snap apps can take a moment to open as they're being sandboxed. The first boot will take longer. Please read and troubleshoot any errors that show up on in your terminal.

For Windows users, please check your task manager and see if Falix Software is running. Since it's built on Electron, you may see a few instances of it running. You can kill the process and try again, if it's not working on the second try, you can try re-installing the software.

## ~~Falix Software caused BSOD on Windows~~
~~This issue has been reported a few times, but has not been seen by Korbs(developer). If for whatever reason this does happen, please let us know.~~
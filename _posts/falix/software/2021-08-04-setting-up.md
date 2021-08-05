---
layout: post
title:  "Setting Up"
categories: Falix
tags: desktopsoftware
permalink: /falix/software/setting-up/
---

# Installing Process
Falix Software is built on Electron, meaning it's cross-platform and supports Windows, macOS, Linux, and ChromeOS. The installation is easy to follow and you should of the software installed within at least 2 minutes or less(depending on your internet speed).

## Windows 10
You can install the software easily in the Microsoft Store on Windows 10. Just search "Falix" and the software should show up. Select it and click install.

or you can click here:

<a href="https://www.microsoft.com/en-us/p/Falix-software/9p5mmnfs825p"><img width="135px" src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"></a>

## macOS

Due to restrictions with Apple, the software is not available in the App Store, but we have provided a DMG option instead.

If you're using macOS, click the download button on the software website. A DMG file will be provided. Open the DMG file and simply drag the Falix app into the Applications folder.

## Linux
On Linux, there are many ways to install software like apt, [deb](https://en.wikipedia.org/wiki/Deb_(file_format)), [rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager), [pacman](https://en.wikipedia.org/wiki/Arch_Linux#Pacman), etc. 
Simply go to our [software website](https://software.falixnodes.net), click Download, then select your distro.


# Updating
## Windows 10
Since Falix Software is available in the Microsoft Store, you can easily manage updates.

[Learn how to updates app on Windows 10](https://support.microsoft.com/en-us/account-billing/get-updates-for-apps-and-games-in-microsoft-store-a1fe19c0-532d-ec47-7035-d1c5a1dd464f)

## macOS
Auto updating is still not available for macOS users, you'll need to manually install new updates. When a new update is available, just re-download Falix and install the newer version.
Uninstalling is not required, when manually installing new updates, it will overwrite the existing version.

## Linux
Auto updating is no longer available for Linux users, you'll need to manually install new updates. When a new update is available, just re-download Falix and install the newer version.
Uninstalling is not required, when manually installing new updates, it will overwrite the existing version.

# Troubleshooting
## Stuck on advertisement in Game Panel or Client Panel
If you've misclicked on an advertisement in the Client Panel, there is no way to back out. Controls currently don't work properly in the Client tab, you'll need to reload the software. You can reload the software by pressing Ctrl R or clicking the reload button found at the bottom of the Settings tab.

If you've misclicked on an advertisement in the Game Panel, click the back button. If for whatever reason this isn't working, click the kill button(x button) and load the panel again.

## Software is not opening
For Linux users, assuming you installed from Snap, Snap apps can take a moment to open as they're being sandboxed. The first boot will take longer. Please read and troubleshoot any errors that show up on in your terminal.

For Windows users, please check your task manager and see if Falix Software is running. Since it's built on Electron, you may see a few instances of it running. You can kill the process and try again, if it's not working on the second try, you can try re-installing the software.

## Falix Software caused BSOD on Windows
This issue has been reported a few times, but has not been seen by Korbs(developer). If for whatever reason this does happen, please let us know.

# Troubleshooting - Building
These are issues you may get while building the software from GitHub

## Glasstron not found or not defined
Glasstron is widely used in the software, you'll need to make sure you've installed it's dependency. To install Glasstron, use the following command:

```
npm install glasstron
```

## Electron Builder has errors while installing
We're not sure what's causing the issue either, please try installing an older version of Electron Builder instead. In our case, we just use:

```
npm install electron-builder@20.0.0
```

Electron Builder v20 still has all the features we need to build Falix Software, with no issues.

## Appx file won't open
If you've built a APPX file on Windows 7 or Windows 8.1, this file can't be used. APPX file is built for Windows 10 only.

[What's an APPX file?](https://help.falixnodes.net/article/falix/software/faq-for-developers/)

## Appx file won't let me install on Windows 10
We recommend that you actually EXE format instead of APPX. Please change the target under Windows to "nsis". NSIS will provide a EXE setup file.

If you want to use Appx, keep reading:

Assuming you've tried to build a Appx file with Electron Builder, we didn't use this. We use Electron Windows Store dependency instead, we use the following command to build:

```
electron-windows-store --input-directory C:\Users\YOURUSERNAMEHERE\Documents\Desktop-App\dist\win-unpacked  --output-directory C:\Falix-Software\ --package-version 2.3.31.1 --package-name Falix --publisher-display-name "Korbs Studio" --identity-name "32203KorbsStudio.FalixSoftware" --package-display-name "Falix Software" --assets C:\Users\YOURUSERNAMEHERE\Documents\assets
```

You'll need to setup and change some of these paths and download assets for the Windows 10 version. Also, please do use Electron Builder to unpack the app(usually creates a win-unpacked folder)
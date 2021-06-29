---
layout: default
title:  "Using SFTP"
parent: General
grand_parent: Falix
permalink: /falix/general/sftp/
tags: minecraft java bedrock ip address sftp rcon file transfer rcon remote console edit editing ssh sshd filezilla wscp scp 
---

<!-- RCON is being added later -->
<!-- In Progress
{: .label .label-yellow } -->

<video controls poster="https://i.imgur.com/p9rgs15.png" src="https://files.catbox.moe/vavkhu.mp4"></video>

## SFTP
### What is SFTP
In computing, the SSH File Transfer Protocol is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force as an extension of the Secure Shell protocol version 2.0 to provide secure file transfer capabilities. [Wikipedia](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol){:target='_blank'}

This allows you to manage files remotely through a SFTP client, without having to access our game panel.

### Choosing a SFTP Client
A SFTP client is required:

SFTP Clients:

| Software | Platform Support                               |
|:---------|:---------------------|:-------------------------|
| [Filezilla](https://filezilla-project.org/download.php?type=client) | Windows, macOS, and Linux |
| [Cyberduck](https://cyberduck.io/download/) | Windows and macOS |
| [WinSCP](https://winscp.net/eng/download.php) | Windows |
| [Swish](https://sourceforge.net/projects/swish/) | Windows |

NOTE: Linux usually has SFTP integration built into the file manager.

### Logging in
To find your SFTP login, click on your server in the [Game Panel](https://panel.falixnodes.net/). Go to the Settings tab and SFTP login is shown.

The password for your SFTP is the same as your Game Panel login.
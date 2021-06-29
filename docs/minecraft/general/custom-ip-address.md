---
layout: default
title:  "Registering a Custom IP Address"
parent: General
grand_parent: Minecraft
permalink: /minecraft/general/custom-ip/
tags: minecraft java bedrock ip address custom domain cloudflare dns srv port nameservers faq namecheap freenom godaddy hover bluehost
---

# Registering a Domain
Why a domain? A custom IP address like <u>hypixel.net</u> is a domain and you need one to create a custom IP address for your Minecraft server. 

## Choosing a Domain Provider
There are a lot of places where you can register a domain.
Here's a list of where you can register a paid domain:

* [Namecheap](https://www.namecheap.com/)
* [GoDaddy](https://www.godaddy.com/)
* [bluehost](https://www.bluehost.com/)
* [Google](https://domains.google/)
* [Hover](https://www.hover.com/)

If you're wanting to register a free domain, please use [Freenom](https://www.freenom.com/).

### Quick FAQ for Domains
**Do I own the domain permanently?**

No, you have to renew the domain yearly. However, you can pay up to more than one year. As an example, you can pay a domain up to 10 years or less if would like to. 

**How do I keep my domain safe?**

If you continue reading down below, we'll explain how to add your domain to Cloudflare. Cloudflare offers free SSL and DDOS protection.
If you're not interested in using Cloudflare, you'll need to pay extra money to your domain provider for SSL and DDOS protection.

**What if I don't renew it?**

Once the domain has expired, it will be available again for purchase to the public. 

## Adding to Cloudflare
Why Cloudflare? You're required to use an SRV Record which some domain providers like Freenom don't offer in their DNS settings. 
What is DNS? Learn about that [here](https://www.cloudflare.com/learning/dns/what-is-dns/).

Create a Cloudflare account, afterwards, click Add Site.
Add your domain like <u>example.com</u>, do not add *http://*.

Select the free plan option, click next.

When reviewing your DNS, just click continue, we will set this up later.


Cloudflare will then display the two nameservers, which you will need to add to your domain on your domain provider. 

If you're unsure how to change your nameservers, select the help article for this, for your domain provider:

* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/)
* [GoDaddy](https://www.godaddy.com/help/change-nameservers-for-my-domains-664)
* [bluehost](https://www.bluehost.com/help/article/custom-nameservers)
* [Google](https://support.google.com/domains/answer/3290309?hl=en)
* [Hover](https://help.hover.com/hc/en-us/articles/217282477--Changing-your-domain-nameservers)
* [Freenom](https://my.freenom.com/knowledgebase.php?action=displayarticle&id=3)

Once done, wait around 20 - 45 minutes for Cloudflare to confirm your site has been added.

# Manage Domain
## Creating an A Record
In the DNS settings, of your domain, add a new A Record. For the name, use `@`. Then use the numeric IP address for the IPv4 Address, do not include the port number.

It should look like this:

| Record Type | Name      | IPv4 Address |
| ----------- | --------- | ------------ |
| A           | @         | 00.000.00.00 |

## Creating a SRV Record
In the DNS settings, of your domain, add a new A Record. For the name use `@`.

For Service, use `_minecraft`.

For Priority, use `0` and for Weight use `5`.

Then, use your server's port number for Port.

Lastly, set your Target as `@`.

It should look like this:

| Record Type | Name      | Service      | Priority | Weight | Port   | Target |
| ----------- | --------- | ------------ | -------- | ------ | ------ | ------ |
| SRV         | @         | _minecraft   | 0        | 5      | 000000 | @      |

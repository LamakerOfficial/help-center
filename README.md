# Falix Help Center - Design Refresh
![preview](https://i.imgur.com/Gs8dTZ5.png)

A new design of the help center is being worked on along with adding a few other things like filters, search, author, and options(Copy Link, Report, and Edit)

# Creating a New Article
Want to help contribute to the Help Center? Write or update an article!

## 🛡️ Requirements 
 - The communication must be clear and well explained for the user to understand
 - Fact check and make sure the information you're providing is accurate
 - Good grammar, we check our grammar using [Grammarly](https://grammarly.com/)
 - Valid syntax, make sure there are no syntax errors
 - Proper metadata

## ✍️ Creating an Article
By following the file structure, create a `.md` file under the correct category. As an example, if you were to create an article that explains on how to install and use a plugin on Minecraft Java, the file would be created like `docs/minecraft/plugins/plugin-name.md`. Then start writing the article in [Markdown](https://www.markdownguide.org/getting-started/). Writing in Markdown is very easy to do, if you need help understanding how to do certain task like creating a link, inserting an image, creating a list look [here](https://guides.github.com/features/mastering-markdown/).

## 📃️ Metadata
Make sure the metadata is setup properly, this is usually at the top of every article.
It should look like this:
```
---
layout: default
title:  "Article Title"
parent: Sub-Category
grand_parent: Category
permalink: /category/sub-category/article-title/
tags: Falix
---
```

## Content
### Video
I personally like seeing `<video>` in the help center over a YouTube embed, but you're allowed to use a YouTube embed if you want to.
[Learn how to embed a YouTube video](https://support.google.com/youtube/answer/171780?hl=en)

If you're going to use `<video>`, I would like to see at least a thumbnail set for it, which is also called a `poster` in HTML. Also make sure you do add the `controls` option so users can control the video.

Would go something like this:
```
<video poster="https://example.com/thumbnail.png" src="https://example.com/video.mp4" controls>
```

## 📢️ Publishing
Create a pull request on this repo and title it like this "New Post: Name of Article" or if you're editing an article, title it like "Edit: Name of Existing Article".

We use [Cloudflare Pages](https://pages.cloudflare.com/) to host the Help Center, so when the pull requested is merged, Cloudflare will rebuild the Help Center and then update if the rebuild was success.

Your edit will be reviewed by [Korbs](https://github.com/KorbsStudio/) along with your code to check for any syntax error.

*We use the [Just the Docs](https://pmarsceill.github.io/just-the-docs/docs/ui-components) theme with [slight modifications to styling](https://github.com/FalixNodes-Software/help-center/blob/main/_sass/custom/custom.scss).*

# Building
If you're interested in learning on how to build the Help Center locally, maybe to preview that your article does show up properly, just follow the instructions below.

Since the Help Center is powered by Jeykll, you'll need to install [Ruby](https://www.ruby-lang.org/en/) for your operating system.
 - [Download for Windows](https://rubyinstaller.org/)
 - [Download for macOS](https://www.ruby-lang.org/en/downloads/)
 - [Install Instructions for Linux](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems)

After installation of Ruby, run the following commands:
*NOTE: Use `sudo` on Linux
```
gem install bundler jekyll
```

Then change directory to the help center, and use:
```
gem install just-the-docs
bundle install
```

To run a localhost server, run:
```
jekyll serve
```

After using `jekyll serve`, try going to http://localhost:4000/.

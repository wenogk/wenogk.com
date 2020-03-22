---
layout: post
title: Redesigning this website
published: true
author: wenogk
comments: false
date: 2020-03-22 06:04:01
categories:
    - engineer
tags:
    - jekyll
    - website
---

I've completely redesigned and revamped my website. The stack used is Jekyll with ruby on rails and is now hosted on Github pages.

All of the previous versions of my website ran on Wordpress which was hosted on Hostinger. Let me list out the problems I had with it to explain why I needed this redesign. <!--more-->

 * I paid for shared VPS hosting, which wasn't the best therefore the website was rather slow to load.
 * Wordpress doesn't give me enough control of my own website, I found myself installing a thousand plugins to do everything I wanted whereas I could have done it in a couple of minutes if I had complete access to the code rather than having to make a PHP workaround on Wordpress's already designed system.
 * Too many dependancies, there's databases for literally everything stored in MySQL, even the wordpress admin password so when I want to backup and restore I need to restore not only all the wordpress files but also all the SQL files.

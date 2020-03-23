---
layout: post
title: Redesigning this website
published: true
author: wenogk
comments: true
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
 * Wordpress is heavy, which I think is another factor that made the website slow to load.

I was intrigued by Jekyll when I first read about it.

>Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites. Written in Ruby by Tom Preston-Werner, GitHub's co-founder, it is distributed under the open source MIT license. ~ <a href="https://en.wikipedia.org/wiki/Jekyll_(software)" >Wikipedia</a>

I also got a free Github pro account because of the Github student program that gives free pro accounts to college students. Github pages is usually for simple static webpages but jekyll just changed the game. For simple blogs, jekyll provides everything you need and gives you full control

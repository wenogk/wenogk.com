---
layout: post
title: Life or Death Data Visualization (video)
published: true
author: wenogk
comments: false
date: 2018-04-07 06:04:01
tags: [ ]
categories:
    - thoughts
image:
    feature: lifeOrDeath.jpeg
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/wOcuzDV05fk" frameborder="0" allowfullscreen></iframe>
So for this project I wanted to do some data visualization that could be regarded, “live”. I got some interesting rates of from http://www.ecology.com/birth-death-rates/ where I found that the rate of birth worldwide is about 4 every second and the rate of death as 1.78 every second.

The idea was to basically show the user how many people have born and died since they opened the application and perhaps make them understand the importance of life by its fragility and beauty. <!--more-->

 I used this data to implement a simple data visualization which you can see in the video above.

 I randomly switched from the ‘lifeMode’ to the ‘deathMode’ with a 0.02 probability every 1/60th of a second and played a heart beat sound when it changes to give this visualization a more rushed feel.

 I used the simple black and white color scheme to make it simple for the user to understand what is death and being born as it can be commonly derived that white represents life and black represents death.

 The user can switch to and fro from death and life by clicking anywhere. And as some type of easter egg I implemented a system where it recognizes how long you stay in either the life or death by clicking and displays it in a pie chart if you press any key on your keyboard (as you can see towards the end of the youtube video). This basically is a type of personality test which shows the user whether they focus of life or death more. &nbsp;

---
layout: post
date: 2018-02-17 12:36
title: "LIGHT ORGAN PROJECT."
description: Basic information about the Steve.
comments: false
category: 
- engineer
tags:
- arduino
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/fpGOgDTAFmc" frameborder="0" allowfullscreen></iframe>

I started tapping on my desk to a beat, and felt like I wanted to make a “beat boxing machine”. But, I didn’t have a proximity sensor to detect movements and I didn’t want to use buttons as that seemed counterintuitive. What I did find in my kit though, was a photo resistor. I figured if I could connect it and detect when the light intensity is low(when you wave ur hand over the resistor) I could set up some arbitrary values and make the buzzer make some sounds.



It was relatively straightforward setting up the breadboard with all the components with the help of the tutorials. I learned that we need a potentiometer for an LCD to adjust the brightness so that it can be made visible in any light environment.

 

So I wanted to make use of the dusty LCD Display that we had in our kits, I searched for some tutorials on how to connect it, and did a simple hello world.

The next day, I started tapping on my desk to a beat, and felt like I wanted to make a “beat boxing machine”. But, I didn’t have a proximity sensor to detect movements and I didn’t want to use buttons as that seemed counterintuitive. What I did find in our kit though, was a photo resistor. I figured if I could connect it and detect when the light intensity is low(when you wave ur hand over the resistor) I could set up some arbitrary values and make the buzzer make some sounds.

It was relatively straightforward setting up the breadboard with all the components with the help of the tutorials. I learned that we need a potentiometer for an LCD to adjust the brightness so that it can be made visible in any light environment.



I found a function on the sparkfun website that converts frequencies into keys so I could actually play organ keys on the buzzer which was really cool. I also used code from the sparkfun examples to detect the light intensity from the photo resistor.

https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino—v32/experiment-11-using-a-piezo-buzzer 

https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino—v32/experiment-6-reading-a-photoresistor

I initially started with a system where I had to manually check the maximum light intensity and then manually enter it as the, ‘startVal’ variable. Then every decrease by 5 units from the startVal frequency would result in a different note being played in the buzzer. Later I improved the function so it keeps detecting the light intensity and updating a, ‘high’ variable so I knew the max intensity without the need of manually entering it. So now it had auto calibration.

Here’s a video of how it worked displaying the note it’s currently playing on the LCD display (I used my phone to bring it closer and further from the photo resistor to vary the light intensity):

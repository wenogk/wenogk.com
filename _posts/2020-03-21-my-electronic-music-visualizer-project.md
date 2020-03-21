---
layout: post
title: My Electronic Music Visualizer Project
published: true
author: wenogk
comments: false
date: 2018-04-02 01:04:50
tags: [ ]
categories:
    - engineer
    - music
image:
    feature: Screen-Shot-2018-04-02-at-5.06.07-PM.png
---
[xyz-ihs snippet="musicCircle"] So for my project this week I wanted to recreate some of the music videos for electronic music on youtube such as this one: https://www.youtube.com/watch?v=mBHTXQo65p8 I was interested in doing this a few months back and when I searched for tutorials they all had to do with getting some video editing software(Sony Vegas Pro) and putting in some scripts. However, now with my knowledge of processing I felt I could do it from scratch with code only and no video editing software, which is what I attempted. It isn't as seamless as the one above but the general concept is there and it can be improved. https://www.youtube.com/watch?v=-hSvjxxIrNk I also added some small features such as click to move the circle, added some text on the very right hand side so you can only see it when you move the circle and like the trapNation video has a logo in the circle, I added a logo that can be triggered by clicking the space bar. 

* * *

The Code is written in Java specifically for the processing environment: I created a, 'circleThing' class which is the circle in the middle that increases its size depending on the Amplitude (note:not frequency). I got the snow effect code from a website online that had a 'Particle' class and the rest of that snow code was procedural code. I enhanced it by making a 'Snow' class that created 'Particle' objects and was generalized so it was customizable. The speed of the snow fall depended on the Amplitude and when it was low I made it reverse the 'gravity' with a negative value. 

import processing.sound.*;

Amplitude amp2;
AudioIn in2;
CircleThing mainCircle;
Snow snowfall;
float ears= 0;
boolean movable=false;
PImage bg,nyu;
boolean logoDisplay=false;

class CircleThing {
public int circleX, circleY,defColor;
CircleThing(int cX, int cY,int defaultColor) {
circleX=cX;
circleY=cY;
defColor=defaultColor;
}

void draw(int cX, int cY, float soundVal,int scaling,PImage nyuImage,boolean displayImage) {
if(soundVal&gt;0.025) {
fill(random(255), random(255), random(255));
} else {
//fill(random(255), random(255), random(255));
fill(defColor);
}
strokeWeight(10);
ellipse(cX, cY,(200+ soundVal*scaling), (200+soundVal*scaling));
imageMode(CENTER);
//rotate(45);
if(displayImage) {
pushMatrix();
imageMode(CENTER);
translate(cX,cY);
rotate(-PI/8);
image(nyuImage,0,0);
popMatrix();
}

String s = "Made by Romeno Wenogk Fernando. wenogk@nyu.edu";
fill(255);
textSize(16);
text(s, cX+500, cY, 200, 150);
}
}

class Particle {

float x; // adds x position property
float y; // adds y position property
float xVel; // adds xvel property
float yVel; // adds yvel property
float partsize; // adds a size property


//Constructor = function// float says where it is xpos/ypos
Particle(float xpos, float ypos) {
// assigning the values
x = xpos = random (0,600);
y = ypos;
xVel = random (-2, 2); // random,(the length of the random)
yVel = random (0, 5); // controls the speed that the snow falls
partsize = random (5, 10);
}

}

class Snow {
Particle[] particles = new Particle[0];
int maxParticles =100;

Snow() {
}
void setMax(int val) {
maxParticles=val;
}
void draw(float ears) {
particles = (Particle[]) append(particles, new Particle(300, 0));
if (particles.length&gt;maxParticles) {
particles = (Particle[]) subset(particles, 1);
}
for (int i=0; i&lt;particles.length; i++) {
particles[i].partsize *=0.975; //make the snow stay reduce size
particles[i].x += particles[i].xVel;
particles[i].y += particles[i].yVel;
if(ears&gt;0.03) {
particles[i].yVel +=0.2; 
} else if(ears&gt;0.05) {
particles[i].yVel +=0.4;
}
else if(ears&gt;0.07) {
particles[i].yVel +=0.6;
} else if(ears&gt;0.09) {
particles[i].yVel +=0.8;
} else {
particles[i].yVel-=0.1; //reverse gravity

}
ellipse(particles[i].x, particles[i].y, particles[i].partsize, particles[i].partsize);
}
}
}

void setup() {
size(640, 440);
background(90);
amp2 = new Amplitude(this);
in2 = new AudioIn(this, 0);
in2.start();
amp2.input(in2); 
mainCircle= new CircleThing(width/2,height/2,45);
snowfall= new Snow();
//bg = loadImage("bg.jpg");
//bg.resize(width,height);
//nyu=loadImage("nyu.png");
//nyu.resize(int(nyu.width*0.5),int(nyu.height*0.5));
}

void draw() {
background(0);
ears=amp2.analyze();
stroke(255);
strokeWeight(1);
println(ears);
fill(255);
snowfall.draw(ears);
stroke(75); 
if(!movable) {

mainCircle.draw(width/2,height/2,ears,190,nyu,false); 
} else {
mainCircle.draw(mouseX,mouseY,ears,190,nyu,false); 
}

}

void mousePressed() {
movable=!movable;
}

void keyPressed() {
logoDisplay=!logoDisplay;
}
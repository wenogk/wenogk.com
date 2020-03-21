---
layout: post
title: Air Music Player
published: true
author: wenogk
comments: false
date: 2018-09-28 02:09:32
tags: [ ]
categories:
    - engineer
    - music
image:
    feature: Air-Music-Player.jpeg
---
&nbsp;
<iframe width="560" height="315" src="https://www.youtube.com/embed/wM-iwOhMG2k" frameborder="0" allowfullscreen></iframe>

I took my previous project where I visualized music through the microphone and reversed it. I wanted to in some form visualize the music with my hands and play it on the computer. <!--more-->  I had to make some big changes to the code as I hadn't generalized the classes enough in my previous project which is something I have to make sure I do next time. I used a library called Minim as the processing sound library didn't allow pausing which was a vital feature in my project. I selected Fur Elise from Beethoven and the Wonder Woman soundtrack for the two songs because they are so drastic in genre, tone and the way it sounds that it almost feels like a remix mashup in a way.

**Arduino Code (C++)**
{% highlight c++ linenos %}
int lightLevel;

void setup()
{
 Serial.begin(9600);
}
void loop()
{

  int knob = analogRead(A0);
  delay(1);
  lightLevel = analogRead(A1);
  delay(1);
  Serial.print(lightLevel);
  Serial.print(",");
  Serial.println(knob);


}
{% endhighlight %}

**Processing Code (Java)**
{% highlight java linenos %}
import processing.serial.*;
import processing.sound.*;
import ddf.minim.*;
Minim       minim;
Minim       minim2;
Minim       minim3;
AudioPlayer song2;
AudioPlayer song3;
AudioPlayer song4;
SoundFile song;
Amplitude amp2;
Serial myPort;
AudioIn in2;
CircleThing mainCircle;
Snow snowfall;
float ears= 0;
boolean movable=false;
PImage bg,nyu;
boolean logoDisplay=false;
float lightValue;
float knobValue;
float highLight=100;
float lowLight=0;
float knobScaling=1.5;
class CircleThing {
  public int circleX, circleY,defColor;
  public float prevRad=0;
  CircleThing(int cX, int cY,int defaultColor) {
    circleX=cX;
    circleY=cY;
    defColor=defaultColor;
  }
  void draw(float cX, float cY, float soundVal,int scaling,PImage nyuImage,boolean displayImage) {

    fill(map(soundVal,0,100,0,255)-100);
    strokeWeight(10);
    float radi=200+(100-soundVal)*knobScaling;
    //float radi =(200+soundVal*scaling);
    ellipse(cX, cY,radi, radi);
    //line(0,0,radi/2,radi/2);
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
prevRad=200+soundVal*scaling;
  }
}

class Particle {

  float x;          // adds x position property
  float y;          // adds y position property
  float xVel;       // adds xvel property
  float yVel;       // adds yvel property
  float partsize;   // adds a size property


  //Constructor = function// float says where it is xpos/ypos
  Particle(float xpos, float ypos) {
    // assigning the values
    x = xpos = random (0,600);
    y = ypos;
    xVel = random (-2, 2);   // random,(the length of the random)
    yVel = random (0, 5);    // controls the speed that the snow falls
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
void draw(float ears2) {
  float ears =100- ears2;
particles = (Particle[]) append(particles, new Particle(300, 0));
  if (particles.length&gt;maxParticles) {
    particles = (Particle[]) subset(particles, 1);
  }
  for (int i=0; i&lt;particles.length; i++) {
      particles[i].partsize *=0.975;  //make the snow stay reduce size
      particles[i].x += particles[i].xVel;
      particles[i].y += particles[i].yVel;
     if(ears&gt;30) {
      particles[i].yVel +=0.2;   
     } else if(ears&gt;50) {
       particles[i].yVel +=0.3;
     }
     else if(ears&gt;70) {
       particles[i].yVel +=0.4;
     } else if(ears&gt;90) {
       particles[i].yVel +=0.6;
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
  bg = loadImage("bg.jpg");
  bg.resize(width,height);
  nyu=loadImage("nyu.png");
  nyu.resize(int(nyu.width*0.5),int(nyu.height*0.5));
  printArray(Serial.list());
String portname=Serial.list()[6];
println(portname);
myPort = new Serial(this,portname,9600);
myPort.clear();
myPort.bufferUntil('\n');
 //song = new SoundFile(this, "ww.mp3");

  // Loop the sound forever
  // (well, at least until stop() is called)
  //song.loop();

  minim = new Minim(this);
  minim2 = new Minim(this);
  minim3 = new Minim(this);
  song2 = minim.loadFile("ww.mp3", 1024);
  song3 = minim2.loadFile("bee.mp3", 1024);
  song4 = minim2.loadFile("fetty.mp3", 1024);
  song2.play();
  song3.play();
  song4.play();
}      

void draw() {
  background(bg);
  //ears=amp2.analyze();
  ears=map(lightValue,lowLight,highLight,0,100);
  if((100-ears)&gt;45) {
  song4.play();
  song2.pause();
  song3.pause();
  }
  else if((100-ears)&gt;25) {
  song3.play();
  song2.pause();
  song4.pause();
  }  else if((100-ears)&gt;10) {
  song3.pause();
  song2.play();
  song4.pause();
  } else {
  song2.pause();
  song3.pause();
  song4.pause();
  }

  println(100-ears);
   stroke(255);
  strokeWeight(1);
  //println(ears);
  fill(255);
  snowfall.draw(ears);
  stroke(75);
  float xpos,ypos;
  if(!movable) {
    xpos=lerp(width/2,mouseX,0.01);
    ypos=lerp(height/2,mouseY,0.01);
  } else {
  //mainCircle.draw(mouseX,mouseY,ears,290,nyu,logoDisplay);
   xpos=lerp(mouseX,width/2,0.01);
    ypos=lerp(mouseY,height/2,0.01);
  }
  mainCircle.draw(xpos,ypos,ears,290,nyu,logoDisplay);

highLight();
knobScaling=map(knobValue,0,255,0,1);
}

void mousePressed() {
movable=!movable;
}

void keyPressed() {
logoDisplay=!logoDisplay;

}

void serialEvent(Serial myPort){
String s=myPort.readStringUntil('\n');
s=trim(s);
//println(s);
if (s!=null){
int values[]=int(split(s,','));
lightValue=values[0];
knobValue=values[1];
}
}

void highLight() {
if(lightValue&gt;highLight) {
highLight=lightValue;
}
if(lightValue&lt;lowLight) {
lowLight=lightValue;
}
}
{% endhighlight %}

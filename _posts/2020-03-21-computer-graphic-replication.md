---
layout: post
title: Computer Graphic Replication Based On Probability
published: true
author: wenogk
comments: false
date: 2018-04-02 01:04:45
tags: [ ]
categories:
    - uncategorized
image:
    feature: 9867f4e24df393dc9512c65229c7492041686311.png
---
&nbsp; So I wanted to replicate this Gaussian Distribution Art without all the fancy equations:

[][1] After starting to recreate it, I realized there were some obstacles to overcome. I needed a way to use probability to place small circles in certain areas of the screen. I started by creating an array with a bunch of 1's and 0's and randomly selecting an item from the array and varying the probability by changing the ratio of the 1's to 0's in the array. As I kept going, this seemed repetitive so I thought why not make a function that does just this and returns a boolean value of true or false based on a float argument which represents the probability. I made the probability function which is in my code below. I also realized that when I did it the changes in probability were seen as clear cut lines in the graphic so I added randomly from -20 to +20 to all the y-values for some extra randomness. &nbsp; This was my version which is being dynamically created in your browser(click it to regenerate): &nbsp; [xyz-ihs snippet="prob"] &nbsp; **The code** is written in Java specifically for the processing environment: 

boolean randomProbability(float prob) {
  int outOfHundred=int(prob*1000);
 int vals[]=new int[1000];
 for (int x=0;x&lt;1000;x++) {
   if(x&lt;outOfHundred) {
 vals[x]=1;
   } else {
   vals[x]=0;
   }
 }
 int rand=vals[int(random(vals.length))];
 if (rand==0) {
 return false;
 } else {
 return true;
 }
 
}

void setup() { size(1200,600);background(255);fill(0);int xSize=1200; int ySize=600;
for(int x=0;x&lt;xSize;x++){
  for(int y=0;y&lt;ySize;y++) {
    float percent=((float(y)/float(ySize)))*100.0;
    int xN=x+int(random(5));
    int yN=y+int(random(-20,20));
    if((percent&lt;3) &amp;&amp; (randomProbability(0.003))) {
      ellipse(xN,yN,3,3);
    } 
    if((percent&lt;15)&amp;&amp;(percent&gt;3)&amp;&amp; (randomProbability(0.025))) {
      ellipse(xN,yN,3,3);
    }
        if((percent&lt;25)&amp;&amp;(percent&gt;15)&amp;&amp; (randomProbability(0.045))) {
      ellipse(xN,yN,3,3);
    }
        if((percent&lt;65)&amp;&amp;(percent&gt;25)&amp;&amp; (randomProbability(0.08))) {
      ellipse(xN,yN,3,3);
    }
    if((percent&lt;68)&amp;&amp;(percent&gt;65)&amp;&amp; (randomProbability(0.045))) {
      ellipse(xN,yN,3,3);
    }
    if((percent&lt;75)&amp;&amp;(percent&gt;68)&amp;&amp; (randomProbability(0.01))) {
      ellipse(xN,yN,3,3);
    }
        if((percent&lt;80)&amp;&amp;(percent&gt;75)&amp;&amp; (randomProbability(0.005))) {
      ellipse(xN,yN,3,3);
    }
      if((percent&lt;83)&amp;&amp;(percent&gt;80)&amp;&amp; (randomProbability(0.002))) {
      ellipse(xN,yN,3,3);
    }
  } 
}

rect(0,580,1200,600);
}
 &nbsp;

 [1]: http://wenogk.com/wp-content/uploads/2018/04/screenshot-www.triangulation.jp-2018.03.26-10-55-13-300x151.png
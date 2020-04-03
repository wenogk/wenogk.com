---
layout: post
title: My IOS Development journey
published: true
author: wenogk
comments: true
date: 2020-04-03 06:04:01
categories:
    - engineer
tags:
    - swift
    - IOS
---
<img src="{{site.baseurl}}/assets/images/iphones.gif" style="padding:5px;align:center;width:200px;" />
I have made the decision to learn Native IOS development using the Swift programming language and produce a portfolio of apps. This page would therefore be updated with everything I learn daily. I am primarily doing this to keep myself accountable to my progress.   <!--more-->

## Day 1 
_3rd April 2020_
  * Learned that Swift is a type-safe programming language like Javascript.
  * Multiline strings would be coded like this
{% highlight swift %}
var str1 = """
This goes
over multiple
lines
"""
{% endhighlight %}
  * String interpolation works like this :
{% highlight swift %}
var score = 85
var str = "Your score was \(score)"
{% endhighlight %}
  * As opposed to Javascript, the "let" keyword defines constants that cannot be changed after declared.
  * Type inference is possible by :
{% highlight swift %}
let album: String = "Reputation"
let year: Int = 1989
let height: Double = 1.78
let taylorRocks: Bool = true
{% endhighlight %}
## Day 2
_4th April 2020_
    * Learned array declaration
    * Learned Set declaration:
{% highlight swift %}
let colors2 = Set(["red", "green", "blue", "red", "blue"])
{% endhighlight %}
    * Tuples allow you to store several values together in a single value. 
        * You can’t add or remove items from a tuple; they are fixed in size. 
        * You can’t change the type of items in a tuple; they always have the same types they were created with.
{% highlight swift %}
var name = (first: "Taylor", last: "Swift")
name.0
name.first
{% endhighlight %}       

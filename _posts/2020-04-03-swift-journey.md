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
<img src="{{site.assetbaseurl}}/assets/images/iphones.gif" style="padding:5px;align:center;width:200px;" />
I have made the decision to learn Native IOS development using the Swift programming language and produce a portfolio of apps. This page would therefore be updated with everything I learn daily. I am primarily doing this to keep myself accountable to my progress. I'll be updating my progress in reverse chronological order below:   <!--more-->

## Update 4
_5th April 2020_
  * Learned the weird for loop syntax:
  {% highlight swift %}
let count = 1...10
for number in count {
    print("Number is \(number)")
}

print("Players gonna ")

for _ in 1...5 { //without using a constant
    print("play")
}
{% endhighlight %}  
  * Learned the _repeat_ loop which is basically the same as a do-while loop in other languages:
{% highlight swift %}
repeat {
    print("This is false")
} while false
{% endhighlight %}  
  * Learned that it is possible to label for loops and use the break keyword with labels to break outerLoops:
{% highlight swift %}
outerLoop: for i in 1...10 {
    for j in 1...10 {
        let product = i * j
        print ("\(i) * \(j) is \(product)")

        if product == 50 {
            print("It's a bullseye!")
            break outerLoop
        }
    }
}
{% endhighlight %}

## Update 3
_4th April 2020_
  * Learned about range operators. Swift gives us two ways of making ranges: the ..< and ... operators. The half-open range operator, ..<, creates ranges up to but excluding the final value, and the closed range operator, ..., creates ranges up to and including the final value.
  * Range operators are useful in switch statements:
  {% highlight swift %}
let score = 85

switch score {
case 0..<50:
    print("You failed badly.")
case 50..<85:
    print("You did OK.")
default:
    print("You did great!")
}
{% endhighlight %}  

## Update 2
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
  * Dictionaries can be declared like:
{% highlight swift %}
let heights = [
    "Taylor Swift": 1.78,
    "Ed Sheeran": 1.73
]
heights["Eminem", default: "Unknown"] //will give unknown instead of "nil"
{% endhighlight %}  
  * Learned about enums and enum associated values:
{% highlight swift %}
  enum Activity {
    case bored
    case running(destination: String)
    case talking(topic: String)
    case singing(volume: Int)
}
{% endhighlight %}  


## Update 1
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

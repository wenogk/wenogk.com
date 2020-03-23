---
layout: post
title: "How I found a loophole in Facebook's messaging system when I was 14"
published: true
author: wenogk
comments: true
date: 2019-01-20 10:01:23
tags: [ ]
categories:
    - hacker
image:
    feature: Bug-report-2013-Romeno-Wenogk.jpeg
---


I was watching the news one day and I saw a report on a Palestinian man who found a bug on Facebook that allowed anyone to post on anyone's Facebook wall but wasn't taken seriously by Facebook so he posted on Mark Zuckerberg's (the CEO of Facebook) account to prove himself. When I saw this I started to get interested in Computer Security and the idea of Ethical Hacking. Even though they never revealed how he did it, I was pretty sure I knew how and was intrigued in how simple it was and why I didn't think of it - this then led me to a nonstop search for loopholes on facebook for the next few days. I was surprised when I actually did find a loophole, and it was a more serious one than the one that was reported on the news. I found a way to send a message as anyone, to anyone - meaning a hacker could send a message to your parent's facebook as if it was you with anything they wanted to.


<iframe width="560" height="315" src="https://www.youtube.com/embed/j1zibaV-dp0" frameborder="0" allowfullscreen></iframe>

<!--more-->









The video above is a demo proof of the loophole in action all the way back in 2013. Let me explain how I did it:





To understand how the loophole worked you need to understand Facebook's Email System that was introduced in 2010.





>"In February 2010,&nbsp;TechCrunch&nbsp;reported that Facebook was working to rewrite its messaging service to turn it into a "fully featured webmail product", dubbed "Project Titan".&nbsp;The feature, unofficially dubbed a "Gmail&nbsp;killer" internally, was launched on November 15, 2010,&nbsp;and allowed users to directly communicate with each other via Facebook using several different methods. Users could create their own "username@facebook.com"&nbsp;email address&nbsp;to communicate, use text messaging, or through the Facebook website or mobile app's instant messaging chat. All messages were contained within single&nbsp;threads&nbsp;in a unified inbox.&nbsp;The email service was terminated in February 2014 because of low uptake." ~ <a href="https://en.wikipedia.org/wiki/List_of_Facebook_features#Email">Wikipedia</a>





So everyone on facebook had an email called yourusername@facebook.com, as my username on facebook was iwenogk my email was iwenogk@facebook.com. A feature that was really interesting to me in this email system was that you have two emails basically the email you used to sign up to facebook, lets say for me that was wenogk1999@gmail.com and the new facebook email, iwenogk@facebook.com and if I send an email from the email that I signed up with (wenogk1999@gmail.com) to one of my friend's facebook email's such as sam@facebook.com - it would go to Sam's facebook account as a PRIVATE FACEBOOK MESSAGE from my FACEBOOK account and NOT my email and this is the feature that I exploited.





In the PHP language and basically any server scripting language, theres a mailing system where you can, "spoof" the headers of the email which is the sender, receiver, name, email content information. So I wrote a simple PHP script which spoofs a fake email from my account to my sister's account with the email message as the message I want to send to my sister and created a small user interface to do this so I could send it to facebook.





I then submitted a Facebook Bug report:











>-----Original Message to Facebook-----<br/>From:&nbsp;xxxxxxx@gmail.com<br />To: xxxx&nbsp;<br />Subject: Mobile app&nbsp;bug&nbsp;on iOS and Android .<br />                                               Name: Romeno Wenogk Fernando<br />E-Mail:&nbsp;xxxxxxxx@gmail.com<br />Type: privacyScope<br />Description: Facebook has been made in order to support the social infrastructure needed to help in connecting people around the world. But, unintentional&nbsp;bugs&nbsp;like the one I found by Remote Code Execution would be a problem in the wrong hands. Please read till the end.The&nbsp;bug&nbsp;I found would allow a hacker to send a message as someone other than himself to another person without even logging in to another person's account.Take this example, John and Melissa are FRIENDS on facebook. A hacker can send a message as John to Melissa without logging into John's account - The hacker would just need John's email and Melissa's facebook username. I know that Facebook products that integrate with SMTP validate the authenticity of email messages whenever possible (with SPF, DKIM, and/or DMARC). In the absence of these authentication signatures, Facebook will display a visible warning to the user indicating that the sender of the message could not be verified - ONLY ON THE MAIN SITE (FACEBOOK.COM) .The&nbsp;bug&nbsp;works flawlessly on the phone/tablet FACEBOOK APPS on both IOS and Android.&nbsp;I did not use real accounts while testing the&nbsp;bug&nbsp;out, I used the test accounts provided by the Facebook Whitehat Program.This could impact people in many different ways, hackers can abuse the system to either spam people as if they were friends, a hacker can lead a person to a phishing site or a site with malware/viruses. All I'm saying is that this&nbsp;bug&nbsp;is worth fixing and that it WILL be abused if it goes to the wrong hands, I think the best thing to do is to fix this problem as soon as possible. You cannot say this is not a&nbsp;bug&nbsp;since anyone can send a message as anyone and on the mobile app the messages look very authentic and show no signs of fraud - so if you think a hacker sending a message as anyone to someone else is not a wrong thing, then this is not a&nbsp;bug. REMEMBER THAT THIS IS A&nbsp;BUG&nbsp;REPORTED SPECIFICALLY FOR THE MOBILE FACEBOOK APP - IT IS NOT A&nbsp;BUG&nbsp;FOR THE MAIN SITE. AND THE&nbsp;BUG&nbsp;WORKS FLAWLESSLY.Contact me at&nbsp;xxxxxxxxx@gmail.comProof:In order to prove this to you properly, I have recorded by iPad (which is NOT jailbroken) with iTools and uploaded a video,&nbsp;http://www.youtube.com/watch?v=j1zibaV-dp0





Due to my bad luck I suppose, someone had apparently already emailed them about the same loophole. However, this didn't bother me as I now had validation that this indeed was a real loophole and someone else thought of the exact same loophole I did.











>Hi, We have previously been made aware of this issue and are in the process of investigating it. Thank you for submitting it to us. Please send along any additional security issues you encounter. Jeff Security Facebook







I got a bit hot-headed about the short reply to my bug report and inquired further about it and got this reply:




















>Hi Romeno,I replied to all of your previous&nbsp;reports.The root issue is the same in all of your&nbsp;reports&nbsp;as you have shown you can send spoofed mail and a spoofed message warning may not appear when using the mobile version of the site. The issue was reported to us by another researcher prior to your submission and is still in the process of being resolved. Sometimes a researcher will&nbsp;report&nbsp;a&nbsp;bug&nbsp;and another researcher will discover the same&nbsp;bug&nbsp;and&nbsp;report&nbsp;it to us and while a fix is being developed. This is one of those cases. If you have any other questions or concerns, please let me know and I will try to address them.Thanks,JeffSecurityFacebook







What shocked me however, is how the loophole was fixed within a day of my report, and my method never worked again. I felt accomplished even though I wasn't given credit for the loophole, I felt as though I had made a change to Facebook, a billion dollar company, myself, being the mischievous 14 year old boy I was sitting in my bedroom after school with my mini laptop.

---
layout: post
title: 'Experience: Winning an international hackathon'
published: true
author: wenogk
comments: false
date: 2018-07-07 02:07:05
tags: [ ]
categories:
    - hacker
    - thoughts
image:
    feature: 3135769716568397810964174088322769983373312o.jpg
---
![profile]({{site.baseurl}}/assets/images/hackathon_3.jpg)

It was 8pm the day before the Hackathon, my suitemate knocks on my door and challenges me.....for a table tennis match. We play table tennis, **seriously**. By seriously I mean playing for six hours straight, sweating, aching legs, and raising our voices causing random students who pass by to look at us weird. It's 2am when I go back to my room, I just fall on my bed and think of the hackathon(which starts at 6am) the next day, _'No way I'm going to go for that, I'm way too tired'_, and I doze off in a flash.

 **Knock knock.** I hear banging on my door, "Get up you have your hackathon!". <!--more--> I bolted as soon as my roommate said that and checked my phone for the time, 5:50am. Got up. Brushed my teeth. Washed my face. Ran.

 I was lucky it was close as the Hackathon was held my university, New York University Abu Dhabi. "The 2018 7th ANNUAL NYUAD HACKATHON FOR SOCIAL GOOD IN THE ARAB WORLD", a mouthful that does do justice to the prestige of the Hackathon with students coming from prestigious universities such as MIT, Princeton and mentors from companies like Google.

 I entered. I see a group of people standing and listening to one figure in the middle, deep in conversation so I sneaked in to their little circle. Everyone looked at me. I tried to fake a smile back and as I do it, I catch a glance at the ID Card one of the congregates and saw it, Mentors. I now turn my intention from faking a smile to hiding my utter surprise. I slide myself away from the group feeling the peering eyes lasering me. I find another door and was glad to find the hackathon finally.

 The initial set up was honestly very weird. There were sets of tables arranged with labels on them such as, "Education", "Security & Logisitcs","Refugees" etc. I was told to sit at any table I preferred so I just went to the Security one as it seemed fine to me as I am (kind of) interested in the field. I met a few people on my table, one of whom was another student from NYUAD and the rest were from other universities from all around the globe. We had mentors too, with us on our table. Our task was to brainstorm ideas that relate to our table topic, Security & Logistics or at least use it in our ideas. We started blurting out our half thought ideas and came up with ideas from Mental Health apps to Driving Assistants. Suddenly, someone (I can't remember who) mentioned an idea which was something like this:

 >An sms system(probably using Twilio) where people could report themselves safe in a natural disaster, just in case their families were worried.

 This idea grew on us and we kept improving on it,

 >What if someone was lost and sends our system an sms with his name, age location, small message, and their family at any time could again sms our system with their loved one's name and age and  his family will be notified that he is safe and they will be able to get in contact. This would work well for refugees who don't have their own phone numbers or contact methods.

![profile]({{site.baseurl}}/assets/images/hackathon_5.jpg)

 That was basically one of our final ideas that we submitted. Yes, we had to submit a set of ideas and get one of it approved by the judges to actually work on it. This rule was annoying but surprisingly worked well for us.

 It was time to get the results of the judges, our sms idea was approved, with a **small** change. The judge who came to tell us this told it to us in a Steve Jobs, "One More Thing" fashion. He said at the end of saying it was approved, "You guy's should remove the idea of the lost person sending an sms and use video cameras and facial recognition to detect their faces and match them with a photo that the families provide.". WOW. We were all gobsmacked. It was a brilliant idea that had our concept in its skeleton but it opened up a whole new aspect to the idea.

 The first thing we did was research on what the possible ways to do it was. It was a 3 day hackathon so we had time to try things. We started with OpenCV for image processing and realized it wouldn't be effective as it was used for facial recognition of images which meant we'd have to split a video into frames and run OpenCV on ever single frame which was inefficient as OpenCV wasn't optimized for this. As I did some future research I found Amazon AWS Rekognition (Yes, spelled like that). It used a convolutional neural network and did exactly what we needed it to do, find faces in a video. We knew what we needed to do so we went all in. We divided the work we needed to do, some worked on UI and Design, some on the presentation and some (including me) on the backend and the integration with Amazon AWS.

 We worked really hard with our mentors for two sleepless nights, going home at around 3am to sleep a few hours only to come back and work. The morning of the final day of the hackathon, we had a full working prototype of a system where a family could upload a picture of their loved one and our system would go through thousands of hours of refugee camp videos that were widely available and find where this individual is and inform the family where exactly he/she is.

![profile]({{site.baseurl}}/assets/images/hackathon_4.jpg)

 We presented and demoed our project and weren't too confident about the final outcome. Just a second before the final winner announcement comes up, our mentor looked back in us and said, "Tough luck guys, I don't think we got this." and I was flabbergasted. The next second, "And the winner of the7th ANNUAL NYUAD HACKATHON FOR SOCIAL GOOD IN THE ARAB WORLD is Boosala". "Boosala" means find in arabic, which we felt did justice to our app. One thing that hit me though, after all the excitement of winning, was that if my roommate didn't wake me up, things would've been a little different.

 You can find our code and presentation here: 

  The hackathon was featured on many press articles:

  **English Press**

  <ul>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.wamda.com/2018/05/apps-locate-missing-refugees-tackle-counterfeit-medicine-win-nyu-abu-dhabi-international-hackathon" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.wamda.com/2018/05/apps-locate-missing-refugees-tackle-counterfeit-medicine-win-nyu-abu-dhabi-international-hackathon&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNF80aL9UlttIJwW3Q-FFz6jDWsOqQ">WAMDA</a></li>
  <li style="font-weight: 400;">Entrepreneur ME magazine – attached</li>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.adwonline.ae/hackers-good-world/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.adwonline.ae/hackers-good-world/&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNGUAM2BeFGjqcvI-x5EndSJ5D1PDA">Abu Dhabi World magazine (English)</a>&nbsp;– attached</li>
  <li style="font-weight: 400;"><a target="_blank" href="https://communicateonline.me/digital/can-machines-help-humanity-these-apps-are-the-answer/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://communicateonline.me/digital/can-machines-help-humanity-these-apps-are-the-answer/&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNGWtK5uUwAaSo2Xt13ELQ4VaJEPTQ">Communicate magazine</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.albawaba.com/business/pr/apps-locate-missing-refugees-win-nyu-abu-dhabi%E2%80%99s-international-hackathon-1125156" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.albawaba.com/business/pr/apps-locate-missing-refugees-win-nyu-abu-dhabi%25E2%2580%2599s-international-hackathon-1125156&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNHfgz8EXz-rGEACWCVF7BF3QQs6cA">Al Bawaba</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://world.einnews.com/article_detail/445066136?lcode=Se6ntNGtkkbJAO1bPC01L4LRlx41W5ZD5NK3HIFg2-Q%3D" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://world.einnews.com/article_detail/445066136?lcode%3DSe6ntNGtkkbJAO1bPC01L4LRlx41W5ZD5NK3HIFg2-Q%253D&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNE7oOB3pPE21xvrYsAwa2mGojR0TQ">world.einnews</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.tahawultech.com/news/nyu-abu-dhabi-hackathon-awards/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.tahawultech.com/news/nyu-abu-dhabi-hackathon-awards/&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNFaY-WMxPYFuApLOqfptyCTHsBpMg">Tahawul tech</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.al-press.com/index.php/en/2013-02-20-08-59-23/technology/19905-apps-to-locate-missing-refugees-and-tackle-counterfeit-medicine-win-nyu-abu-dhabi-s-international-hackathon" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.al-press.com/index.php/en/2013-02-20-08-59-23/technology/19905-apps-to-locate-missing-refugees-and-tackle-counterfeit-medicine-win-nyu-abu-dhabi-s-international-hackathon&amp;source=gmail&amp;ust=1531060164719000&amp;usg=AFQjCNEbQrjIaKWruIDe3Z52mVGU5fu-lA">Al-press</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://dubaiforum.me/apps-to-locate-refugees-and-tackle-fake-medicine-win-nyuad-awards/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://dubaiforum.me/apps-to-locate-refugees-and-tackle-fake-medicine-win-nyuad-awards/&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNF2uq8IXBnWS7AirRIaUwtevsGBqQ">Dubai Forum</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://tonernews.com/glype/browse.php?u=y8zUQfTBYym7H8lcea9VXJ0ArUK7MlLwGTV6JLvRW4aoHRJQXgfFFibzVc%2BnmIXJZ9V5if1f7OgQ5LZaewuDz1GvFIsSWdKt7XbJXn8QIlYtoqdao4K4B65p3WVa6P%2BiM6GNAP7ssPBXtxU4OwPtVyE1tW4hvMExhJwfLQ%3D%3D&amp;b=29" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://tonernews.com/glype/browse.php?u%3Dy8zUQfTBYym7H8lcea9VXJ0ArUK7MlLwGTV6JLvRW4aoHRJQXgfFFibzVc%252BnmIXJZ9V5if1f7OgQ5LZaewuDz1GvFIsSWdKt7XbJXn8QIlYtoqdao4K4B65p3WVa6P%252BiM6GNAP7ssPBXtxU4OwPtVyE1tW4hvMExhJwfLQ%253D%253D%26b%3D29&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNHgPuKn3155K6WeRskmRNI-rA4btA">Toner News</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://mynews.is/tech+blogs?s=4413&amp;l=1" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://mynews.is/tech%2Bblogs?s%3D4413%26l%3D1&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNFJyhV605x3DIXSkbtXgZp15e4Naw">MyNews.is</a></li>
  </ul>
  **Arabic**
  <ul>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.alittihad.ae/details.php?id=33408&amp;y=2018" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.alittihad.ae/details.php?id%3D33408%26y%3D2018&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNEl4pS2_EuUfS-60S8vDz6MFzVJ5A">Al Ittihad</a>&nbsp;– attached</li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.albayan.ae/across-the-uae/education/2018-05-02-1.3253801" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.albayan.ae/across-the-uae/education/2018-05-02-1.3253801&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNEYZFL9i2h2KSrE3UvQvF-a4WFrrg">Al Bayan</a>&nbsp;– attached</li>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.alkhaleej.ae/alkhaleej/page/7b554881-569e-4d12-8887-3ed441743172" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.alkhaleej.ae/alkhaleej/page/7b554881-569e-4d12-8887-3ed441743172&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNGJKjbvjKEaHLepvpgbXl50PMuZeg">Al Khaleej</a>&nbsp;– attached</li>
  <li style="font-weight: 400;"><a target="_blank" href="https://al-ain.com/article/newyork-abudhabi-students-application-innovation" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://al-ain.com/article/newyork-abudhabi-students-application-innovation&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNEJZWD1Qchl7JrjlnPkX8fgYLjNPA">Al-Ain.com</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://24.ae/article/438972/86/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D9%86%D9%8A%D9%88%D9%8A%D9%88%D8%B1%D9%83-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AA%D9%83%D8%B1%D9%85-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A-%22%D8%A8%D9%88%D8%B5%D9%84%D8%A9%22-%D9%88%22%D8%AF%D9%88%D8%A7%D8%A1%22" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://24.ae/article/438972/86/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9-%25D9%2586%25D9%258A%25D9%2588%25D9%258A%25D9%2588%25D8%25B1%25D9%2583-%25D8%25A3%25D8%25A8%25D9%2588%25D8%25B8%25D8%25A8%25D9%258A-%25D8%25AA%25D9%2583%25D8%25B1%25D9%2585-%25D8%25AA%25D8%25B7%25D8%25A8%25D9%258A%25D9%2582%25D9%258A-%2522%25D8%25A8%25D9%2588%25D8%25B5%25D9%2584%25D8%25A9%2522-%25D9%2588%2522%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1%2522&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNF2VpgBS2v84DXSUydXrs0dMIypnA">24.ae</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.zawya.com/mena/ar/story/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D9%86%D9%8A%D9%88%D9%8A%D9%88%D8%B1%D9%83_%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A_%D8%AA%D8%B3%D8%AA%D8%B6%D9%8A%D9%81_%D9%85%D8%B3%D8%A7%D8%A8%D9%82%D8%A9_%D8%A7%D9%84%D9%87%D8%A7%D9%83%D8%A7%D8%AB%D9%88%D9%86_%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9_%D9%84%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D9%85%D8%AC%D8%AA%D9%85%D8%B9_%D9%81%D9%8A_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D9%84%D9%84%D8%B9%D8%A7%D9%85_%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86-ZAWYA20180501121705/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.zawya.com/mena/ar/story/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9_%25D9%2586%25D9%258A%25D9%2588%25D9%258A%25D9%2588%25D8%25B1%25D9%2583_%25D8%25A3%25D8%25A8%25D9%2588%25D8%25B8%25D8%25A8%25D9%258A_%25D8%25AA%25D8%25B3%25D8%25AA%25D8%25B6%25D9%258A%25D9%2581_%25D9%2585%25D8%25B3%25D8%25A7%25D8%25A8%25D9%2582%25D8%25A9_%25D8%25A7%25D9%2584%25D9%2587%25D8%25A7%25D9%2583%25D8%25A7%25D8%25AB%25D9%2588%25D9%2586_%25D8%25A7%25D9%2584%25D8%25AF%25D9%2588%25D9%2584%25D9%258A%25D8%25A9_%25D9%2584%25D8%25A5%25D9%2581%25D8%25A7%25D8%25AF%25D8%25A9_%25D8%25A7%25D9%2584%25D9%2585%25D8%25AC%25D8%25AA%25D9%2585%25D8%25B9_%25D9%2581%25D9%258A_%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585_%25D8%25A7%25D9%2584%25D8%25B9%25D8%25B1%25D8%25A8%25D9%258A_%25D9%2584%25D9%2584%25D8%25B9%25D8%25A7%25D9%2585_%25D8%25A7%25D9%2584%25D8%25AB%25D8%25A7%25D9%2585%25D9%2586-ZAWYA20180501121705/&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNF_3aaOkDV7TsoFUxWs_Z8-OvUArw">Zawya</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://gate.ahram.org.eg/News/1902654.aspx" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://gate.ahram.org.eg/News/1902654.aspx&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNGWt53WHJp1Bid-ddGkZ6QZBEas-A">Gate.ahram</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://uae.shafaqna.com/AR/AE/309650" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://uae.shafaqna.com/AR/AE/309650&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNEfp86JvGxqhMpz04TzCAAX_44Haw">UAE shafaqna</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.rjeem.com/406774-2/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.rjeem.com/406774-2/&amp;source=gmail&amp;ust=1531060164720000&amp;usg=AFQjCNEVS06Kx4fEYfoInSFa_VYoQtJ_6g">Rjeem</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.freepen.co/1102417.html" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.freepen.co/1102417.html&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNE3gTFa1QFVnwDMbji7U7BwL72ARg">Free Pen</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.dotemirates.com/ar/details/104673237?from=dot" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.dotemirates.com/ar/details/104673237?from%3Ddot&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNHWMN4o5i08BZKGXh3XEVBMK9rXeg">DOT Emirates</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://lomazoma.com/tech/359997/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%AD%D8%B5%D8%B1%D9%8A%D8%A7--%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D9%86%D9%8A%D9%88%D9%8A%D9%88%D8%B1%D9%83-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AA%D9%83%D8%B1%D9%85-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A-%D8%A8%D9%88%D8%B5%D9%84%D8%A9-%D9%88%D8%AF%D9%88%D8%A7%D8%A1" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://lomazoma.com/tech/359997/%25D8%25AA%25D8%25B7%25D8%25A8%25D9%258A%25D9%2582%25D8%25A7%25D8%25AA-%25D8%25AD%25D8%25B5%25D8%25B1%25D9%258A%25D8%25A7--%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9-%25D9%2586%25D9%258A%25D9%2588%25D9%258A%25D9%2588%25D8%25B1%25D9%2583-%25D8%25A3%25D8%25A8%25D9%2588%25D8%25B8%25D8%25A8%25D9%258A-%25D8%25AA%25D9%2583%25D8%25B1%25D9%2585-%25D8%25AA%25D8%25B7%25D8%25A8%25D9%258A%25D9%2582%25D9%258A-%25D8%25A8%25D9%2588%25D8%25B5%25D9%2584%25D8%25A9-%25D9%2588%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNFuLw8w3G8Yu3DQB1hfhW9zGiAt2g">Lomazoma</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://bedayya.com/competitions/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D9%86-%D9%84%D9%85%D8%AD%D8%A7%D8%B1%D8%A8%D8%A9-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%BA%D8%B4%D9%88%D8%B4%D8%8C-%D9%88%D9%85%D8%B3%D8%A7/" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://bedayya.com/competitions/%25D8%25AA%25D8%25B7%25D8%25A8%25D9%258A%25D9%2582%25D8%25A7%25D9%2586-%25D9%2584%25D9%2585%25D8%25AD%25D8%25A7%25D8%25B1%25D8%25A8%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1-%25D8%25A7%25D9%2584%25D9%2585%25D8%25BA%25D8%25B4%25D9%2588%25D8%25B4%25D8%258C-%25D9%2588%25D9%2585%25D8%25B3%25D8%25A7/&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNEUNAslHqbZ3rNKBtKjwYvKb5MpZQ">Bedayya</a></li>
  </ul>



  **Broadcast**

  <ul>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.abudhabitv.ae/vod/for0041315-16830/%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.abudhabitv.ae/vod/for0041315-16830/%25D8%25B5%25D8%25A8%25D8%25A7%25D8%25AD-%25D8%25A7%25D9%2584%25D8%25AF%25D8%25A7%25D8%25B1&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNGGM-CDSl5ZedFyyqi06OYqgYPppQ">Abu Dhabi TV – Sabah Al Dar program</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="http://www.abudhabitv.ae/vod/lp00029057-16714/%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.abudhabitv.ae/vod/lp00029057-16714/%25D8%25B9%25D9%2584%25D9%2588%25D9%2585-%25D8%25A7%25D9%2584%25D8%25AF%25D8%25A7%25D8%25B1&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNGKZr_D9FU03OZYttQRVcTPp47H-Q">Abu Dhabi TV – Oloom Al Dar program</a></li>
  </ul>



  **Social media**

  <ul>
  <li style="font-weight: 400;"><a target="_blank" href="https://twitter.com/WamdaME/status/99200990756513792" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://twitter.com/WamdaME/status/99200990756513792&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNHJY-JHhfBqVknAFeMo05wTNzanFg">Wamda – Twitter</a></li>
  <li style="font-weight: 400;"><a target="_blank" href="https://www.instagram.com/p/BiJ7zCFlYzK/?r=wa1" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.instagram.com/p/BiJ7zCFlYzK/?r%3Dwa1&amp;source=gmail&amp;ust=1531060164721000&amp;usg=AFQjCNGARJa6Or1tzWCAS_DP5elXMNmL6w">Abu Dhabi TV – Instagram</a></li>
  </ul>


![profile]({{site.baseurl}}/assets/images/hackathon_1.png)

![profile]({{site.baseurl}}/assets/images/hackathon_2.jpg)

![profile]({{site.baseurl}}/assets/images/hackathon_6.jpg)

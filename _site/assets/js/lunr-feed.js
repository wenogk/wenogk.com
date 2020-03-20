var hostname = "http://localhost:4000/wenogk.com";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "LIGHT ORGAN PROJECT.",
      category: ["engineer"],
      content: "\n\nI started tapping on my desk to a beat, and felt like I wanted to make a “beat boxing machine”. But, I didn’t have a proximity sensor to detect movements and I didn’t want to use buttons as that seemed counterintuitive. What I did find in my kit though, was a photo resistor. I figured if I could connect it and detect when the light intensity is low(when you wave ur hand over the resistor) I could set up some arbitrary values and make the buzzer make some sounds.\n\n\n\nIt was relatively straightforward setting up the breadboard with all the components with the help of the tutorials. I learned that we need a potentiometer for an LCD to adjust the brightness so that it can be made visible in any light environment.\n\nSo I wanted to make use of the dusty LCD Display that we had in our kits, I searched for some tutorials on how to connect it, and did a simple hello world.\n\nThe next day, I started tapping on my desk to a beat, and felt like I wanted to make a “beat boxing machine”. But, I didn’t have a proximity sensor to detect movements and I didn’t want to use buttons as that seemed counterintuitive. What I did find in our kit though, was a photo resistor. I figured if I could connect it and detect when the light intensity is low(when you wave ur hand over the resistor) I could set up some arbitrary values and make the buzzer make some sounds.\n\nIt was relatively straightforward setting up the breadboard with all the components with the help of the tutorials. I learned that we need a potentiometer for an LCD to adjust the brightness so that it can be made visible in any light environment.\n\nI found a function on the sparkfun website that converts frequencies into keys so I could actually play organ keys on the buzzer which was really cool. I also used code from the sparkfun examples to detect the light intensity from the photo resistor.\n\nhttps://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino—v32/experiment-11-using-a-piezo-buzzer\n\nhttps://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino—v32/experiment-6-reading-a-photoresistor\n\nI initially started with a system where I had to manually check the maximum light intensity and then manually enter it as the, ‘startVal’ variable. Then every decrease by 5 units from the startVal frequency would result in a different note being played in the buzzer. Later I improved the function so it keeps detecting the light intensity and updating a, ‘high’ variable so I knew the max intensity without the need of manually entering it. So now it had auto calibration.\n\nHere’s a video of how it worked displaying the note it’s currently playing on the LCD display (I used my phone to bring it closer and further from the photo resistor to vary the light intensity):\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100\n101\n102\n103\n104\n105\n106\n107\n108\n109\n110\n111\n112\n113\n114\n115\n116\n#include &lt;LiquidCrystal.h&gt;\n\nconst int jumpVal=5;\n\n\nconst int sensorPin = 0;\nconst int buzzerPin = 9;\nconst int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;\nint lightLevel, high = 0, low = 1023;\n\nconst int songLength = 1;\nint starterVal;\n\nchar notes[] = \"c\";//dfda ag cdfdg gf \"; \n\nint beats[] = {1,1,1,1,1,1,4,4,2,1,1,1,1,1,1,4,4,2};\n\nint tempo = 113;\n\nLiquidCrystal lcd(2,3,4,5,6,7);\n\nvoid setup() {\n \n  lcd.begin(16, 2);\n  pinMode(sensorPin, INPUT);\n  pinMode(buzzerPin, OUTPUT);\n  \n \n}\n\nvoid loop() {\n\n   lightLevel = analogRead(sensorPin);\n   manualTune();\n   starterVal=map(high, 0, 1023, 0, 255);\n   lcd.setCursor(0, 0);\n   lcd.print(lightLevel);\n   lcd.setCursor(0, 1);\n    \n    int i,j, duration, prox;\n    char noteNames[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n    if(lightLevel&lt;(starterVal-(jumpVal))) {\n  for (j = 0; j &lt; 8; j++)\n  {\n    int num=starterVal-(jumpVal*j);\n    if (lightLevel&lt;num) {\n      notes[0]=noteNames[j-1];\n      lcd.clear();\n      lcd.setCursor(0, 0);\n   lcd.print(lightLevel);\n   lcd.setCursor(0, 1);\n      lcd.print(noteNames[j-1]);\n      \n      } \n    }\n  for (i = 0; i &lt; songLength; i++) \n  {\n    duration = beats[i] * tempo;  \n\n    if (notes[i] == ' ')          \n    {\n      delay(duration);            \n    }\n    else                          \n    {\n      tone(buzzerPin, frequency(notes[i]), duration);\n      delay(duration);            \n    }\n    delay(tempo/5);              \n  }\n} else {\n        lcd.clear();\n      lcd.setCursor(0, 0);\n   lcd.print(lightLevel);\n   delay(100);\n        }\n \n}\n\nvoid manualTune()\n{\n if (lightLevel &lt; low)\n  {\n    low = lightLevel;\n  }\n\n \n  if (lightLevel &gt; high)\n  {\n    high = lightLevel;\n  }\n  lightLevel = map(lightLevel, 0, 1023, 0, 255);\n  lightLevel = constrain(lightLevel, 0, 255);\n\n} \n\nint frequency(char note) \n{\n \n  int i;\n  const int numNotes = 8;  \n  char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n  int frequencies[] = {262, 294, 330, 349, 392, 440, 494, 523};\n\n\n\n  for (i = 0; i &lt; numNotes; i++)  \n  {\n    if (names[i] == note)        \n    {\n      return(frequencies[i]);    \n    }\n  }\n  return(0);  \n              \n}\n",
      tags: ["arduino"],
      id: 0
    });
    

    index.add({
      title: "Sample Data",
      category: ["docs"],
      content: "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.\n\nHeadings\n\nHeading 1\n\nHeading 2\n\nHeading 3\n\nHeading 4\n\nHeading 5\n\nHeading 6\n\nBlockquote\n\n\n  No more databases, comment moderation, or pesky updates to install—just your content.\n\n\nUnordered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nOrdered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nLink\n\nThis is an example inline link.\n\nParagraph w/ strong, em, etc.\n\nThese are just a few of the available configuration options. Many configuration options can either be specified as flags on the command line, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will automatically use the options from this file when run. For example, if you place the following lines in your _config.yml file.\n\nImage\n\n\t\n\tPhoto by Rachel Davis.\n\n\nVideo\n\n\n\nDefault Code Block\n\nThis is code blog.\n\n\nStyled Code Block\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n#!/usr/bin/ruby\n\n$LOAD_PATH &lt;&lt; '.'\nrequire \"support\"\n\nclass Decade\ninclude Week\n   no_of_yrs=10\n   def no_of_months\n      puts Week::FIRST_DAY\n      number=10*12\n      puts number\n   end\nend\nd1=Decade.new\nputs Week::FIRST_DAY\nWeek.weeks_in_month\nWeek.weeks_in_year\nd1.no_of_months\n\nDefinition Lists\n\n\n    Definition Title\n    Definition Description\n\n\nParagraphs w/ Aligned Images\n\nThe Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.\n\n\n\t\n\tPhoto by Dustin Lee.\n\n\nThis site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.\n\nJekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.\n\n\n\t\n\tPhoto by LoboStudio Hamburg.\n\n\nThroughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.\n\nIf you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.\n\nThe front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.\n",
      tags: [],
      id: 1
    });
    


var store = [{
    "title": "LIGHT ORGAN PROJECT.",
    "link": "/engineer/light-organ-project.html",
    "image": null,
    "date": "February 17, 2018",
    "category": ["engineer"],
    "excerpt": "I started tapping on my desk to a beat, and felt like I wanted to make a “beat boxing machine”...."
},{
    "title": "Sample Data",
    "link": "/docs/sample-data.html",
    "image": null,
    "date": "March 11, 2016",
    "category": ["docs"],
    "excerpt": "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment. Headings Heading 1 Heading..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});
Pocket plot draws data in a single DOM text element. [Demo](https://samid737.github.io/pocketplot/)

# Description

A quick and convenient way to display graph data over time.

A graph is text only and consists of scanlines:

```javascript
   _________*_*_____________*____ scanLine 0 (32 bit number)
   _______*_____*_________*______ scanLine 1
   _____*_________*__*_*_________ etc....
   _*_*__________________________ ....
   ______________________________ ..
```

# Requirements:

A browser

# Usage

```javascript
var pingplot; // for example you want to plot ping data over time
pingplot=new PocketPlot(refreshRate,maxY,label);

//arguments :
//  refreshRate     : draw graph every refreshRate ms
//  maxY (in dev)   : the highest value of your input variable
//  label (in dev)  : the label of your input variable

```
then supply your variable to pingplot.draw(), which returns the string:

```javascript
var ping =0;
setInterval(changeping,50);

function changeping(){
    ping+=1
    yourHTMLelement.textContent=pingplot.draw(ping);
}

```

# Dev

the src folder contains a commented version.


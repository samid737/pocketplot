plot = new PocketPlot(100,60,"acceleration");
plot2 = new PocketPlot(50,3000,"ping google.com");

pre1=document.getElementsByClassName("test1")[0];
pre2=document.getElementsByClassName("test2")[0];

var acceleration=0;
var ping=1000;
var direction =1;

setInterval(accelerate,80);
setInterval(change,2400);

function change(){
direction=-direction;
}

function accelerate(){
  acceleration+=2*direction;
  ping+=80*direction;
}

setInterval(function(){pre1.textContent=plot.draw(acceleration);},plot.refreshRate);
setInterval(function(){pre2.textContent=plot2.draw(ping);},plot2.refreshRate);

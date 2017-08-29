//a PocketPlot consists five scanlines concatenated to a single string
//
//   _________*_*_____________*____ scanLine 0
//   _______*_____*_________*______ scanLine 1
//   _____*_________*__*_*_________ scanLine 2
//   _*_*__________________________ scanLine 3
//   ______________________________ scanLine 4
//
//arguments :
//  refreshRate     : draw graph every refreshRate ms
//  maxY (in dev)   : the highest value of your input variable
//  label (in dev)  : the label of your input variable

var PocketPlot = function (refreshRate,maxY,label){
  this.refreshRate=refreshRate,this.label=label,this.maxY=maxY;
  this.scanBinary=this.shiftCount=0;this.zeros= Array(37).join("0");//       
  this.line0=new Scanline(this,0);this.line1=new Scanline(this,1);
  this.line2=new Scanline(this,2);this.line3=new Scanline(this,3);
  this.line4=new Scanline(this,4);
  return this;
}
//graph drawing, concatenates Scanline.draw() outputs, then displays the string
PocketPlot.prototype.draw =function(input){
  this.input=input;
  //the rownumber determines which scanline to draw on
  this.rownumber=~~((this.input)/(this.maxY/5));
  //scanbinary is a reference number (zero lag binary).if reached MSB, reset to zero, else shift by one bit
  this.scanBinary=1>>this.scanBinary==0?0:1<<( this.shiftCount);
  //accumulator, used for scanBinary (see Scanline.js at line 10); 
  this.shiftCount=this.shiftCount-1;
  //concatenate and display resulting string
  this.result=this.line4.draw()+this.line3.draw()+this.line2.draw()+this.line1.draw()+this.line0.draw();
  this.result+=this.input+" "+this.label;
  return this.result;
};
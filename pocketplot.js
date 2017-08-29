var PocketPlot = function (refreshRate,maxY,label){
  this.refreshRate=refreshRate,this.label=label,this.maxY=maxY;
  this.scanBinary=this.shiftCount=0;this.zeros= Array(37).join("0");//       
  this.line0=new Scanline(this,0);this.line1=new Scanline(this,1);
  this.line2=new Scanline(this,2);this.line3=new Scanline(this,3);
  this.line4=new Scanline(this,4);
  return this;
}

PocketPlot.prototype.draw =function(input){
  this.input=input;
  this.rownumber=~~((this.input)/(this.maxY/5));
  this.scanBinary=1>>this.scanBinary==0?0:1<<( this.shiftCount);
  this.shiftCount=this.shiftCount-1;
  this.result=this.line4.draw()+this.line3.draw()+this.line2.draw()+this.line1.draw()+this.line0.draw();
  this.result+=this.input+" "+this.label;
  return this.result;
};

var Scanline=function(gr,linenumber){
  this.gr=gr,this.linenumber=linenumber,this.binary=0;
  return  this;      
} 

Scanline.prototype.draw=function(){
  this.binary=1>> this.gr.scanBinary==0?0:(this.gr.rownumber== this.linenumber?(this.gr.scanBinary^this.binary):(this.binary&~this.gr.scanBinary));//this.binary=this.gr.scanBinary; 
  this.n=this.binary.toString(2); 
  this.n=(this.gr.zeros.substr( this.n.length)+ this.n).replace(/0/g, "_").replace(/1/g, '*');
  return this.n+'\n';
}

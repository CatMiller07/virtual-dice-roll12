function dieRoll(){
	 //rolls a die and returns a number bet 1 and 12
   var die0 = Math.random() * 11;  	
   var  roll = Math.round( die0 ) + 1; 	 
	 
   return roll;
	 
 }  

var virtDie0 = document.getElementById("anim-die0");
var virtDie1 = document.getElementById("anim-die1");
var virtDie2 = document.getElementById("anim-die2");
var virtDie3 = document.getElementById("anim-die3");

virtDie0.onclick=function()
{   var dieFace = document.getElementById("roll-val0");
    	dieFace.innerHTML = dieRoll();

}
virtDie1.onclick=function()
{   var dieFace = document.getElementById("roll-val1");
    	dieFace.innerHTML = dieRoll();

}
virtDie2.onclick=function()
{   var dieFace = document.getElementById("roll-val2");
    	dieFace.innerHTML = dieRoll();

}
virtDie3.onclick=function()
{   var dieFace = document.getElementById("roll-val3");
    	dieFace.innerHTML = dieRoll();

}
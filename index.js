function dieRoll(){
	 //rolls a die and returns a number bet 1 and 12
   var die0 = Math.random() * 11;  	
   var  roll = Math.round( die0 ) + 1; 	 
	 
   return roll;
	 
 }  

var virtDie = document.getElementById("anim-die");
virtDie.onclick=function()
{   var dieFace = document.getElementById("roll-val");
    	dieFace.innerHTML = dieRoll();
    
	

}
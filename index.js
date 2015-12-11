function dieRoll(){
	 //rolls a die and returns a number bet 1 and 12
   var die0 = Math.random() * 11;  	
   var  roll = Math.round( die0 ) + 1; 	 
	 
   return roll;
	 
 }  

function displayDiceRoll(iDice,iDieFace){
	
   	iDieFace.innerHTML = "";
	
    //console.log("here i am");
	
   iDice.src = "Dodecahedron.gif";	
   setTimeout(function(){
	    iDice.src = "dodecahedron-frame1.png";
    	iDieFace.innerHTML = dieRoll();     			
		},1000);
   
	
       	
}
var virtDie0 = document.getElementById("anim-die0");
var dieFace0 = document.getElementById("roll-val0");
var virtDie1 = document.getElementById("anim-die1");
var dieFace1 = document.getElementById("roll-val1");
var virtDie2 = document.getElementById("anim-die2");
var dieFace2 = document.getElementById("roll-val2");
var virtDie3 = document.getElementById("anim-die3");
var dieFace3 = document.getElementById("roll-val3");
/*****
virtDie0.onclick=function(){   
	var dieFace = document.getElementById("roll-val0");
   console.log("here i am");
    virtDie0.src = "Dodecahedron.gif";	
   setTimeout(function(){
	      virtDie0.src = "dodecahedron-frame1.png";
    	dieFace.innerHTML = dieRoll();     			
		},1000);
}
 
 ****/  
   
virtDie0.onclick=function(){
	
	displayDiceRoll(virtDie0,dieFace0); 
};
	 
     
virtDie1.onclick=function(){
	displayDiceRoll(virtDie1,dieFace1); 

};

virtDie2.onclick=function() {
	displayDiceRoll(virtDie2,dieFace2);

};
virtDie3.onclick=function(){
	displayDiceRoll(virtDie3,dieFace3);
}


 document.addEventListener('DOMContentLoaded',function(){
   //Width and height for our canvas
var canvasWidth = 650;
var canvasHeight = 500;

//the with and height of our spritesheet
var spriteWidth = 864;
var spriteHeight =500;

//we are having two rows and 8 cols in the current sprite sheet
var rows = 2;
var cols = 8;

//The 0th (first) row is for the right movement
var trackRight = 0;

//1st (second) row for the left movement (counting the index from 0)
var trackLeft = 1;

//To get the width of a single sprite we divided the width of sprite with the number of cols
//because all the sprites are of equal width and height
var width = spriteWidth;

//Same for the height we divided the height with number of rows
var height = spriteHeight;

//Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
var curFrame = 0;

//The total frame is 8
var frameCount = 8;

//x and y coordinates to render the sprite
var x=0;
var y=0;

//x and y coordinates of the canvas to get the single frame
var srcX=0;
var srcY=0;

//tracking the movement left and write
var left = false;

                       //Assuming that at start the character will move right side
var right = true;

//Speed of the movement
var speed = 12;

//Getting the canvas
var canvas = document.getElementById('canvas');

//setting width and height of the canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;

//Establishing a context to the canvas
var ctx = canvas.getContext("2d");

//Creating an Image object for our character
var character = new Image();

//Setting the source to the image file
character.src = "../static/sprites/png/cat/deadCat.png";

function updateFrame(){
 //Updating the frame index
 curFrame = ++curFrame % frameCount;

 //Calculating the x coordinate for spritesheet
 srcX = curFrame * width;
 //ctx.clearRect(x,y,width,height);
}

function draw(){
 //Updating the frame
 updateFrame();
 //Drawing the image
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}

character.onload = function(){
  ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}
//setInterval(draw,100);

//---------------------------------------------------------------------//
     //Variables
	 	//Pet's stats are health, vitamin M, and vitamin R
     var ctMaxH =       25,
         ctMaxF =      25,
         ctMaxI =      25,

         ctCurH =       ctMaxH,
         ctCurF =      ctMaxF,
         ctCurI =      ctMaxI,

         intervalH =    1000,
         intervalF =   2000,
         intervalI =   3000,

		 	//When vitamins fall below threshold, pet starts losing health
         threshold =    ctMaxH * 0.6,
         points =       2,
         widther =      4,

		 	//When conditions are dangerous, affected stat bars will be hilited in red
		 alive =		true,
         dangerH =      false,
         dangerF =     false,
         dangerI =     false,

		 	//Get meters to change width and border color
         getMtrH =      document.getElementById('mtrH'),
         getMtrF =     document.getElementById('mtrF'),
         getMtrI =     document.getElementById('mtrI'),

		 getStyleH =    getMtrH.style,
         getStyleF =   getMtrF.style,
         getStyleI =   getMtrI.style,
		 bdrStart =		"1px solid ",

		 	//Colors for meter borders
		 clrDfltH =     "#81F781",  //green
         clrDfltF =    "#FAAC58",  //orange
         clrDfltI =    "#5882FA",  //blue

         clrCurH =      clrDfltH,
         clrCurF =     clrDfltF,
         clrCurI =     clrDfltI,

         clrWarn =      "#FF0040", //red

		 	//Get buttons for click events
         getBtnF =     document.getElementById('btnF'),
         getBtnI =     document.getElementById('btnI'),

		 	//Get eyes to express status
		 /*getEyes =		document.getElementById('petEyes'),
		 eyesOK =		"o....o",
	 	 eyesSick = 	"@....@",
		 eyesDead =		"x....x",*/

		 	//Get style for the feedback div
	 	 getStyleFb = 	document.getElementById('feedback').style;


	 getStyleFb.display = 'none';
	 meterWidth();

     //At set intervals, vitamin M decreases.
     setInterval(function(){
		 if(alive == true){
				loseF();
			 	checkDangerF();
	 	}
  },intervalF);

     //At set intervals, vitamin R decreases.
     setInterval(function(){
		 if(alive == true){
				loseI();
			 	checkDangerI();
		 }
   },intervalI);

     /*
	 What happens in this nest:
	 Health starts to drop if vitamin M or vitamin R are too low.
	 Meter graphics are adjusted as applicable.
	 If the pet is dead, then the ending events trigger.
	 */
     setInterval(function(){

		 meterWidth();
		 checkDangerH();

		 //Adjust graphics
		 if(dangerH == true)
             {
				warnH();
				loseH();
             }
		 else
		 	{
				okH();
			}

		 if(dangerF == true)
             {
				 warnF();
             }
		 else
			 {
				 okF();
			 }

		 if(dangerI == true)
             {
				 warnI();
             }
		 else
			 {
				 okI();
			 }

	 //When your pet runs out of health, it will be a gonner.
	 if(ctCurH < 0){
		 alive = false;
	 }

     if(alive == false)
        {
            ending();
        }

     },intervalH);


     //Clicking on a "Feed" button will restore vitamin and health to your pet.
     getBtnF.addEventListener("click",function(){
		 if(alive == true){
			 if(ctCurF + points <= ctMaxF)
			 	{
					ctCurF = ctCurF + points;

					if(ctCurH + points < ctMaxH)
						{
							ctCurH = ctCurH + points;
						}

					meterWidth();

					//Check conditions and adjust graphics as appropriate.
					checkDangerH();
					checkDangerF();
					checkDangerI();

					if(dangerH == false)
					{okH();}
					if(dangerF == false)
					{okF();}
					if(dangerI == false)
					{okI();}
			 }
		 }
	 });

     getBtnI.addEventListener("click",function(){
		 if(alive == true){
		 	if(ctCurI + points <= ctMaxI)
				{
					ctCurI = ctCurI + points;

					if(ctCurH + points < ctMaxH)
						{
							ctCurH = ctCurH + points;
						}

					meterWidth();

					//Check conditions and adjust graphics as appropriate.
					checkDangerH();
					checkDangerF();
					checkDangerI();

					if(dangerH == false)
						{okH();}
					if(dangerF == false)
						{okF();}
					if(dangerI == false)
						{okI();}
             }
		 }
	 });


     //Functions

	 function meterWidth(){
		 //This updates the width of the meters.
			getStyleH.width = ctCurH * widther + "%";
		 	getStyleF.width = ctCurF * widther + "%";
		 	getStyleI.width = ctCurI * widther + "%";
	 }

	 function checkDangerF(){
		 		if(ctCurF < threshold)
					{
						dangerF = true;
					}
		 		else
					{
						dangerF = false;
					}
	 }

	 function checkDangerI(){
		 		if(ctCurI < threshold)
					{
						dangerI = true;
					}
		 		else
					{
						dangerI = false;
					}
	 }

	 function checkDangerH(){
		 if((ctCurF < threshold || ctCurI < threshold)  && alive == true)
             {
                 dangerH = true;
             }
		 else
			 {
				 dangerH = false;
			 }
	 }

     function loseF(){
         ctCurF = ctCurF - points;
     }

     function loseI(){
         ctCurI = ctCurI - points;
     }

     function loseH(){
          ctCurH = ctCurH - points;
     }

	 function warnF(){
		 //getEyes.innerHTML = eyesSick;
		 getStyleF.border = bdrStart + clrWarn;
	 }

	 function warnI(){
		 //getEyes.innerHTML = eyesSick;
		 getStyleI.border = bdrStart + clrWarn;
	 }

	 function warnH(){
		 //getEyes.innerHTML = eyesSick;
		 getStyleH.border = bdrStart + clrWarn;
	 }

	 function okF(){
		 getStyleF.border = bdrStart + clrDfltF;
	 }

	 function okI(){
		 getStyleI.border = bdrStart + clrDfltI;
	 }

	 function okH(){
		 //getEyes.innerHTML = eyesOK;
		 getStyleH.border = bdrStart + clrDfltH;
	 }

     function ending(){
		 //getEyes.innerHTML = eyesDead;
		 getStyleFb.display = 'block';
     }

  });

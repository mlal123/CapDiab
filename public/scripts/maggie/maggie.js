class Avatar {
  constructor(){
    this.name = "maggie";
  }

  display(){
    ellipse(100, 100, 150, 150);
  }
}
//-----------------------------------------------------------------------------------------//
let maggie;
  function setup() {
    var canvas = createCanvas(200, 200);
    canvas.parent("petImage");
    maggie = new Avatar();
  }

  function draw() {
    background(50, 89, 100);
    maggie.display();
  }

 document.addEventListener('DOMContentLoaded',function(){

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

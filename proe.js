var sea, seaImg;
var barco, barco_running;

function preload(){
  seaImg = loadImage('sea.png');
  barco_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

    function setup(){          
      createCanvas(400,400);

      sea = createSprite(200,200);
      sea.addImage(seaImg);
      sea.scale = 0.3;
      
      barco = createSprite(100, 200, 20, 50);
      barco.addAnimation("running",barco_running);
      barco.scale = 0.2,5;



    }
  
  


function draw() {
  background("blue");

  if(sea.x < 0){
   sea.x = sea.width/2;
  }
  
  drawSprites();
}


function preload(){
  bg= loadImage("images/iss.png");
  sleep =loadAnimation("images/sleep.png");
  brush =loadAnimation("images/brush.png");
  gym =loadAnimation("images/gym1.png","images/gym2.png");
  eat =loadAnimation("images/eat1.png","images/eat2.png");
  drink =loadAnimation("images/drink1.png","images/drink2.png");
  move =loadAnimation("images/move.png","images/move1.png");

}


function setup() {

  createCanvas(800,400);
// createSprite(400, 200, 50, 50);
  //createSprites(astronat);
  //createSprites(edgeSprite)

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  
  if(keyDown("UP_ARROW")){
    astronaut. addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
  }
  
  if(keyDown("Down_ARROW")){
    astronaut. addAnimation("Gymming",brush)
    astronaut.changeAnimation("Gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut. addAnimation("EATING",brush)
    astronaut.changeAnimation("EATING");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut. addAnimation("BATHING",brush)
    astronaut.changeAnimation("BATHING");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
  }
  
  if(keyDown("m")){
    astronaut. addAnimation("MOVING",brush)
    astronaut.changeAnimation("MOVING");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
  }
  
  
  
  
  
  
  
  
  
}          


  

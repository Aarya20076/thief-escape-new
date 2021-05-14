var laser1 = createSprite(90,200,200,5);
 laser1.shapeColor = "red";
var laser2 = createSprite(310,200,200,5);
 laser2.shapeColor = "red"
var theif = createSprite(200,400,30,30)
theif.shapeColor = "lightgreen"
var diamond = createSprite(390,10,20,20);
 diamond.shapeColor = "lightBlue"
 
var gameState = "serve"


function draw() {
  background("black")
  
  if(gameState === "serve")
  {
    textSize(30)
    fill("orange")
    textFont("impact")
    text("PRESS 'SPACE' TO SERVE",80,240);
  }
  if(keyDown("space"))
  {
    laser1.velocityY = 8
    laser2.velocityY = -8
    gameState = "play"
  }
  
  if(keyDown("space")&&(gameState === "serve"))
  {
    gameState="play"
  }
  
  if(theif.bounceOff(laser1))
  {
   gameState="over"
  }
  if(theif.bounceOff(laser2))
  {
   gameState="over"
  }
  
  if(gameState === "over")
  {
     theif.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    textSize(30) 
    fill("lightgreen")
    textFont("impact")
    text("THIEF IS CAUGHT!!",90,240);
    theif.visible = false
    laser1.visible = false
    laser2.visible = false
    textSize(20)
    fill("orange")
    textFont("impact")
    text("PRESS 'R' TO RESET",150,350);
    theif.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
  }
  if (theif.isTouching(diamond))
 {
  theif.setVelocity(0,0);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  gameState = "win"
 }  
  
  if(gameState === "win")
  {
  textSize(30);
  textFont("IMPACT");
  fill("lightGreen");
  text("THEIF TOOK THE DIAMOND!!",60,200);
  textSize(20);
  fill("orange");
  text("PRESS 'R' TO RESET",150,350);
  laser1.x = 90
  laser1.y = 210
  laser2.x = 310
  laser2.y = 210
  }
  if(keyDown("r"))
  {
    gameState = "reset"
  }
  if(gameState === "reset")
  {
    gameState = "serve"
    laser1.visible = true
    laser2.visible = true
    theif.visible = true
    laser1.x = 90
    laser1.y = 200
    laser2.x = 310
    laser2.y = 200
    theif.x = 200
    theif.y = 400
  }
  
  createEdgeSprites()
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  theif.bounceOff(edges);
  theif.bounceOff(laser1);
  theif.bounceOff(laser2);
  if(gameState === "play")
 {
  if (keyDown("UP_ARROW")) {
   theif.velocityX = 0
   theif.y =theif.y-15
   ;
    
  }
  if (keyDown("DOWN_ARROW")) {
    theif.velocityX = 0;
   theif.y = theif.y+15;
    
  }
   if (keyDown("RIGHT_ARROW")) {
    theif.x = theif.x+15;
    theif.velocityY = 0;
    
  }
  if (keyDown("LEFT_ARROW")) {
   theif.x =theif.x-15;
   theif.velocityY = 0;
  }
}
  
  drawSprites();
}



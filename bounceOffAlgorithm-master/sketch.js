var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object3 = createSprite(200,200,50,50);
  object4 = createSprite(200,400,50,50);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  object3.x = World.mouseX;
  object3.y = World.mouseY;

  if (isTouching(object3,object4)){
    object4.shapeColor = "blue";
    object3.shapeColor = "blue";
  }
  else{
    object3.shapeColor = "grey";
    object4.shapeColor = "grey";
  }

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

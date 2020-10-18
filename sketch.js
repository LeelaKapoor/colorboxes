var fixedRect, movingRect;
var dog


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300,200,50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  fixedRect.velocityX=-5
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  dog=createSprite(200,200,30,80);
  dog.velocityX=5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  text(movingRect.x-fixedRect.x,100,100)
  text(fixedRect.width/2+movingRect.width/2,200,100)
  /*if (isTouching(movingRect,dog)){
    movingRect.shapeColor = "pink";
    dog.shapeColor = "pink";
  } else{
    movingRect.shapeColor = "blue";
    dog.shapeColor = "blue";
  
  }
  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  } else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  
  }*/
  bounceOff(fixedRect,dog)
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true 

}
else {
 return false 
}
}
function bounceOff(object1,object2){

if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
&& object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}
var bullet, wall;
var speed,weight,thickness;

function preload(){
 
}

function setup() {
  createCanvas(1600,400);

  speed = random(220,321);
  weight = random(30,52);
  thickness = random(22,83);

bullet= createSprite(50, 200, 50, 50);
  
 bullet.velocityX = speed;

  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)

}

function draw() {
  background(255,255,255);  

  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){
   if(wall.x - bullet.x <= (wall.width + bullet.width)/2){
    return true;
  }
  return false;
}
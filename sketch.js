
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
monkey = createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/200;
  ground.visible = false;
  FoodGroup = new Group();
  score = 0;
  obstaclesGroup = new Group();
  
}


function draw() {
background("black");
if(ground.x<0){
 ground.x = ground.width/200;
  }
  spawnobstacles();
  spawnfood();
 drawSprites();
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1)
     FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1)
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,200,50);
  
  
}
function spawnfood(){
  if(frameCount%85 === 0){
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth+1;
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    FoodGroup.add(banana);
  }
}
function spawnobstacles(){
  if(frameCount%100 === 0 ){
    obstacles= createSprite(600,330,40,10);
    
    obstacles.velocityX = -5;
    obstacles.lifetime = 300;
    monkey.depth = obstacles.depth+1;
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.1;
    obstaclesGroup.add(obstacles);
  }
}






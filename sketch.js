const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var bgimg;
var game1;
var wall1 , wall2 , wall3 , wall4;
var snake;
var food;
var Score = 0;

function preload(){
  
  bgimg = loadImage("bg of snake game.PNG");
  game1 = new Audio("Theme.mp3");
  food = loadImage

}


function setup() {  
  createCanvas(600, 600);
  
  engine = Engine.create();
  world = engine.world;
 
  // Create a snake
  //snake = new SNAKE(300 , 300 , 15);
  
  snake = createSprite(300,300,15,15);
  fill("black");
 // Create a food 
  //food = new FOOD(505, 400, 25, 25);                                  
  food = createSprite(505, 400, 25, 25);
  food.addImage("food.png");
  fill("black");
  // Create a wall for a border for playing area
 wall1 = createSprite(42,300,5,510);
 wall2 = createSprite(560,300,5,510);
 wall3 = createSprite(300,50,510,5);
 wall4 = createSprite(302,555,510,5);
 
 // for do invisible of wall
 wall1.visible = false;
 wall2.visible = false;
 wall3.visible = false;
 wall4.visible = false;


}

function draw() {
  background(bgimg);
  Engine.update(engine);


  if (keyDown("UP_ARROW")) {
    snake.velocityX = 0;
    snake.velocityY = -4;
  }
  
  if (keyDown("DOWN_ARROW")) {
    snake.velocityX = 0;
    snake.velocityY = 4;
  }
  
 if (keyDown("LEFT_ARROW")) {
    snake.velocityX = -4;
    snake.velocityY = 0;
  }
   
  if (keyDown("RIGHT_ARROW")) {
    snake.velocityX = 4;
    snake.velocityY = 0;
  }


  if(keyWentDown("P")){
    game1.play();
  }
  if(keyWentDown("S")){
    game1.pause();
  }
 // var food = createSprite(55,Math.round(random(60, 550)), 15, 15);
  //food.lifetime = 65;
  //food.velocityX = 3 
  
  
 
 if(snake.isTouching(wall1) || snake.isTouching(wall2)){
  game1.pause();
  snake.velocityX = 0;
  snake.velocityY = 0;
  textSize(24);
  fill("black");
  text("Game Over" , 250,300)

}
if(snake.isTouching(wall3) || snake.isTouching(wall4)){
  game1.pause();
  snake.velocityX = 0;
  snake.velocityY = 0;
  textSize(24);
  fill("black");
  text("Game Over" , 250,300)
  
}


 fill("white")
 //strokeWeight("4")
 textSize(20)
 text("Score:- "+Score,450,40);
 //text("Score= "+Score,450,20,50,50);
 if(snake.isTouching(food)){
  Score=Score+1;
  food.visible = false;
 }
 snake.display(); 
 food.display();
 

  drawSprites();
  
}
/*function keyPressed(){
  if (keyCode === LEFT_ARROW) {
   snake.velocityX = -4;
   snake.velocityY = 0;
   //game1.play();
   // Matter.Body.setPosition(snake.body,{x:48,y:0});
  }
  
  if (keyCode === RIGHT_ARROW) {
   snake.velocityX = 4;
   snake.velocityY = 0;
    //Matter.Body.setPosition(snake.body,{x:500,y:0});
  } 
  
  if (keyCode === UP_ARROW) {
   snake.velocityX = 0;
   snake.velocityY = -4;
    //Matter.Body.setPosition(snake.body,{x:0,y:370});
  }
  
  if (keyCode === DOWN_ARROW) {
   snake.velocityX =0;
   snake.velocityY = 4;
    //Matter.Body.setPosition(snake.body,{x:0,y:123});
  } 
}*/
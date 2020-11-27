var monkey_running, bananaImage, jungleImage, stoneImage;

var BCK, MNK, STN, BNAN, INVIGRND;

var score, Gamestate, PLAY, END;

PLAY = 1;
END = 0;


function preload(){
 monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
   bananaImage = loadImage("banana.png");
  
   jungleImage = loadImage("jungle.jpg");
  
   stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  score = 0;
  
  
  BCK = createSprite(200, 200, 400, 400);
  BCK.addImage(jungleImage);
  BCK.velocityX = -4;
  
  
  INVIGRND = createSprite(200, 370, 400, 10)
  INVIGRND.visible = false;
  
  MNK = createSprite(50, 350, 40, 40)
  MNK.addAnimation("running", monkey_running);
  MNK.scale = 0.1;
  
  foodGroup = new Group();
  stoneGroup = new Group();
  
  Gamestate = PLAY;
}


function draw() {
  background(220);
  
  if(Gamestate == PLAY){
  
  if(BCK.x < 200){
    BCK.x = BCK.width/2
  }
  
  if(keyDown("space") && MNK.collide(INVIGRND) == true){
    MNK.velocityY = -20;
  }
  
  MNK.velocityY = MNK.velocityY + 0.8;
  
  MNK.collide(INVIGRND);
  //console.log(MNK.y)
  
  if(MNK.isTouching(foodGroup)){
    score = score + 2;
    foodGroup.destroyEach();  
  }
  
  createFood();
  
  createObstacles();
  
  sizeIncrease();
  
  }
  
  if(Gamestate == PLAY && MNK.isTouching(stoneGroup) && MNK.scale > 0.1){
    MNK.scale = MNK.scale - 0.1;
    stoneGroup.destroyEach();
    
  }
  
  drawSprites();
  if(Gamestate == PLAY){
    stroke("blue")
    fill("blue")
    textSize(20);
    text("Score :" + score, 180, 50);
  }
  
  if(MNK.isTouching(stoneGroup) && MNK.scale == 0.1){
    Gamestate = END;
    //stoneGroup.destroyEach();
  }
  
  if(Gamestate == END){
    background(0);
    textSize(20);
    fill("yellow");
    text("GameOver", 160, 200);
    text("press 'r' to continue", 130, 250);
    
    if(keyDown("r")){
      Gamestate = PLAY;
      MNK.y = 320;
      score = 0;
    }
    
  }
}


//Adding a function to create Food
function createFood(){
  if(frameCount % 120 == 0){
    var Food = createSprite(600, Math.round(random(216 , 336), 40, 40));
    Food.scale = 0.05;
    Food.velocityX = -4;  
    Food.addImage(bananaImage);
    foodGroup.add(Food);
  }
}

//adding a function to create Obstacles
function createObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(stoneImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    stoneGroup.add(obstacle);
  }
}


function sizeIncrease(){
    switch(score){
    case 6 : MNK.scale = 0.2;
      break;
    case 12 : MNK.scale = 0.3;
      break;
    case 18 : MNK.scale = 0.4;
      break;
    case 24 : MNK.scale = 0.5;
        break;
    case 30 : MNK.scale = 0.6;
        break;
    case 36 : MNK.scale = 0.7;
        break;
    case 42 : MNK.scale = 0.8;
        break;
    case 48 : MNK.scale = 0.9;
        break; 
    case 54 : MNK.scale = 1;
        break;
    case 60 : MNK.scale = 1.1;
        break;
    case 66 : MNK.scale = 1.2;
        break;
    case 72 : MNK.scale = 1.3;
        break;
    case 78 : MNK.scale = 1.4;
        break;
    case 84 : MNK.scale = 1.5;
        break;
    case 90 : MNK.scale = 1.6;
        break;
    case 96 : MNK.scale = 1.7;
        break;
    case 102 : MNK.scale = 1.8;
        break;
    case 108 : MNK.scale = 1.9;
        break;
    case 114 : MNK.scale = 2;
        break;
    case 120 : MNK.scale = 2.1;
        break;
    case 126 : MNK.scale = 2.2;
        break;
    case 132 : MNK.scale = 2.3;
        break;
      
  }
}

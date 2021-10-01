var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon=1
var arrowGroup, redB, blueB, greenB, pinkB;
var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;

   arrowGroup = createGroup();
   redB = createGroup();
   blueB = createGroup();
   greenB = createGroup();
   pinkB = createGroup();

}

function draw() {
  background("green");

  text("Score: "+ score, 320,50);

   // moving ground
    scene.velocityX = (3 + 5* score/5); 

  
   //moving bow
   bow.y = World.mouseY;
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
      createArrow();    
  }
   
    select_balloon = Math.round(random(1,4));
    select_balloon = random(1,4);
    select_balloon = Math.round(random());
    select_balloon = Math.round(random(1,4,2));
  
   if (World.frameCount % 100 == 0) {


      switch(select_balloon ){
            case 1: redBalloon();
                    break;
            case 2:blueBalloon();
                    break;
            case 3:pinkBalloon();
                    break;
            case 4:greenBalloon();
                    break;
            default:break;
  }

}

  if (arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;

  }

  if (arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;

  }

  if (arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }

  }


  scene.depth = score.depth;
  score.depth = score.depth + 1;

  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -(30 + 5* score/20);
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.setCollider("rectangle",0,0,100,50);
  arrow.debug = false;
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = (3 + 5* score/5);
  red.lifetime = 150;
  red.scale = 0.1;
  red.setCollider("circle",0,0,200);
  red.debug = false;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = (3 + 5* score/5);
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue.setCollider("circle",0,0,100);
  blue.debug = false;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = (3 + 5* score/5);
  green.lifetime = 150;
  green.scale = 0.1;
  green.setCollider("circle",0,0,200);
  green.debug = false;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = (3 + 5* score/5);
  pink.lifetime = 150;
  pink.scale = 1
  pink.setCollider("circle",0,0,50);
  pink.debug = false;
  pinkB.add(pink);
}
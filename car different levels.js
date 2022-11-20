var level = 0;
var speed = 5;
var forward = 1;

var background1 = createSprite(0, 0); // Change: add background sprite
background1.setAnimation("space2");
background1.scale = 2;

var level1btn = createSprite(120, 70);
level1btn.setAnimation("dieRed1_1");

var level2btn = createSprite(250, 70);
level2btn.setAnimation("dieRed2_1");

var car = createSprite(50, 200);
car.setAnimation("ufo"); // Change: car sprite to ufo
car.scale = 0.15;

var badGuySprite1 = createSprite(1000, 1000);
badGuySprite1.setAnimation("badguy1"); // Change: add bad guy 1
badGuySprite1.scale = 0.085;

var badGuySprite2 = createSprite(1000, 1000);
badGuySprite2.setAnimation("badguy2"); // Change: add bad guy 2 
badGuySprite2.scale = 0.085;

var badGuySprite3 = createSprite(1000, 1000);
badGuySprite3.setAnimation("badguy3"); // Change: add bad guy 3
badGuySprite3.scale = 0.085;

var frame = 0;
var score = 0; // Change: add score

function draw() {
  if (mousePressedOver(level1btn)) {
    level = 1;
  }
  if (mousePressedOver(level2btn)) {
    level = 2;
  }
  
  if (level == 1) {
    speed = 7; // Change: car speed levels
  } else if (level == 2) {
    speed = 10;
  }
  
  if (level != 0) {
    // Change: add bad guy velocity
    if (badGuySprite1.y > 400) {
      badGuySprite1.x = randomNumber(20, 380);
      badGuySprite1.y = 0;
      badGuySprite1.velocityY = randomNumber(3, 5);
    }
    if (badGuySprite2.y > 400) {
      badGuySprite2.x = randomNumber(20, 380);
      badGuySprite2.y = 0;
      badGuySprite2.velocityY = randomNumber(3, 5);
    }
    if (badGuySprite3.y > 400) {
      badGuySprite3.x = randomNumber(20, 380);
      badGuySprite3.y = 0;
      badGuySprite3.velocityY = randomNumber(3, 5);
    }
  }
  
  if (car.x >= 400) {
    forward = -1;
    score = score + 1; // Change: update score when hit wall
  } else if (car.x <= 0) {
    forward = 1;
    score = score + 1;
  }
  
  // Change: end game when bad guy touches car
  if (badGuySprite1.isTouching(car) || badGuySprite2.isTouching(car) || badGuySprite3.isTouching(car)) {
    car.setVelocity(0, 0);
    badGuySprite1.setVelocity(0, 0);
    badGuySprite2.setVelocity(0, 0);
    badGuySprite3.setVelocity(0, 0);
    
    textSize(50);
    fill("white");
    text("GAME OVER", 40, 200);
    
    return 1;
  }
  
  // Change: stop car when pressing space
  if (keyDown("space")) {
    car.velocityX = 0;
  } else {
    car.velocityX = forward * speed;
  }
    
  drawSprites();
  
  // Change: draw text after sprites
  if (level == 0) {
    textSize(30);
    fill("white");
    text("choose a level", 90, 150);
  } else if (level == 1) {
    textSize(30);
    fill("white");
    text("level 1", 150, 300);
    text("score: " + score, 10, 30);
  } else if (level == 2) {
    textSize(30);
    fill("white");
    text("level 2", 150, 300);
    text("score: " + score, 10, 30);
  }
  
  frame = frame + 1;
}

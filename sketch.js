var car, wall, car2, wall2, car3, wall3, car4, wall4, speed, weight, line1, line2, line3;

function setup() {
  createCanvas(1600,600);

  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);
  weight = random (400,1500);

 car = createSprite(100, 60, 70, 30);
 car.velocityX=speed;
 wall = createSprite(1550,60,30,100);
 line1 = createSprite(1600,130,22000,10);

 car2 = createSprite(100,200,70,30);
 car2.velocityX=speed2;
 wall2 = createSprite(1550,200,30,100);
 line2 = createSprite(200,300,22000,10);

 car3 = createSprite(100,380,70,30);
 car3.velocityX=speed3;
 wall3 = createSprite(1550,380,30,100);
 line3 = createSprite(200,450,22000,10);

 car4 = createSprite(100,520,70,30);
 car4.velocityX=speed4;
 wall4 = createSprite(1550,520,30,100);

 }

function draw() {
  background(255,255,255);  

  // stopping the cars
  if (car.isTouching(wall)){
    car.velocityX=0;
  }

  if (car2.isTouching(wall2)){
    car2.velocityX=0;
  }

  if (car3.isTouching(wall3)){
    car3.velocityX=0;
  }

  if (car4.isTouching(wall4)){
    car4.velocityX=0;
  }

//car 1
if (wall.x-car.x < (car.width+wall.width)/2){
  var deformation =0.5*weight*speed*speed/22509;

  if (deformation > 180){
    car.shapeColor=color(255,0,0)
  }
  if (deformation<180 && deformation > 100){
    car.shapeColor=color(230,230,0)
  }
  if (deformation<100){
    car.shapeColor=color(0,255,0)
  }
}

//car 2
if (wall2.x-car2.x < (car2.width+wall2.width)/2){
  var deformation =0.5*weight*speed2*speed2/22509;

  if (deformation > 180){
    car2.shapeColor=color(255,0,0)
  }
  if (deformation<180 && deformation > 100){
    car2.shapeColor=color(230,230,0)
  }
  if (deformation<100){
    car2.shapeColor=color(0,255,0)
  }
}

//car 3
if (wall3.x-car3.x < (car3.width+wall3.width)/2){
  var deformation =0.5*weight*speed3*speed3/22509;

  if (deformation > 180){
    car3.shapeColor=color(255,0,0)
  }
  if (deformation<180 && deformation > 100){
    car3.shapeColor=color(230,230,0)
  }
  if (deformation<100){
    car3.shapeColor=color(0,255,0)
  }
}
  
// car 4
if (wall4.x-car4.x < (car4.width+wall4.width)/2){
  var deformation =0.5*weight*speed4*speed4/22509;

  if (deformation > 180){
    car4.shapeColor=color(255,0,0)
  }
  if (deformation<180 && deformation > 100){
    car4.shapeColor=color(230,230,0)
  }
  if (deformation<100){
    car4.shapeColor=color(0,255,0)
  }
}
  
  drawSprites();
}
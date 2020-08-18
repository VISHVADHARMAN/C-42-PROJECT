var hr, mn, sc;


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  
  

}

function draw() {
  background(0);  
  angleMode(DEGREES);
  hr = hour();
  mn = minute();
  sc = second();
  camera.position.x =200;
  camera.position.y = 200;
  
  translate(0,0);
  
  
 
  //line(200,200,100,0);
 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  
  
  
  
  
  arc(0, 0, 280,280,30, hrAngle,fill("green"));
  arc(0,0,265,265,4,mnAngle,fill("blue"));
  arc(0, 0, 250,250,0, scAngle,fill("red"));
  //arc(0, 0, 250,250,2, scAngle,fill("black"));
 
 
  

  ellipseMode(RADIUS);
  fill("black");
  ellipse(0,0,120,120);
  
  

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(80,0,3,0);
  pop();
  

  push();
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(60,0,4,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(45,0,3,0);
  pop();
  
 
  

  

  
  //arc(200, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
  
  drawSprites();
}
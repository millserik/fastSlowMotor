function setup() {
  createCanvas(480, 272);
  angle1 = 0;
  click = 0;
  a = 1;
  delAng = 0.03;
  cst = 1;
  alphaV = [255,255,255,255,255,255,255,255];
}

function draw() {
  background(220);
  
  push()
  fill(255)
  strokeWeight(3)
  if(click==1){
    stroke(21,161,60)
  }else{
    stroke(220,0,0)
  }
  rectMode(CENTER)
  rect(240,40,60,40,5)
  
  strokeWeight(1)
  if(click==1){
    stroke(21,161,60)
    fill(21,161,60)
  }else{
    stroke(220,0,0)
    fill(220,0,0) 
  }
  
  textAlign(CENTER,CENTER)
  textSize(18)
  g = cst*10 + '%'
  text(g,240,40)
  

  // create buttons
  push()
  fill(10)
  noStroke()
  //up
  fill(10,alphaV[0])
  ellipse(120,60,40)
  
  //down
  fill(10,alphaV[1])
  ellipse(120,130,40)
  
  //left
  fill(10,alphaV[2])
  ellipse(80,95,40)
  
  //right
  fill(10,alphaV[3])
  ellipse(160,95,40)
  
  //x
  fill(10,alphaV[4])
  ellipse(360,60,40)
  
  //b
  fill(10,alphaV[5])
  ellipse(360,130,40)
  
  //y
  fill(10,alphaV[6])
  ellipse(320,95,40)
  
  //a
  fill(10,alphaV[7])
  ellipse(400,95,40)
  pop()
  
    // create buttons
  push()
  //fill(191, 34, 34)
  //stroke(191, 34, 34)
  fill(220, 0, 0)
  stroke(220, 0, 0)
  strokeWeight(1)
  
  //up
  //ellipse(120,60,40)
  triangle(112,65-a,128,65-a,120,52-a)
  
  //down
  //ellipse(120,130,40)
  triangle(112,125+a,128,125+a,120,138+a)
  
  //left
  //ellipse(80,95,40)
  triangle(85-a,87,85-a,103,72-a,95)
  
  //right
  //ellipse(160,95,40)
  triangle(155+a,87,155+a,103,168+a,95)
  
  
  textAlign(CENTER,CENTER)
  textSize(22)
  //x
  //ellipse(360,60,40)
  text('X',360,60)
  
  //b
  //ellipse(360,130,40)
  text('B',360,130)
  
  
  //y
  //ellipse(320,95,40)
  text('Y',320,95)
  
  
  //a
  //ellipse(400,95,40)
  text('A',400,95)
  
  
  pop()
  
  
  //create axle model
    push();
    rectMode(CENTER);
    fill(125);
    stroke(20);
    strokeWeight(3);
    translate(240,200);
    rotate(angle1);
    rect(0,0,50,50,10);
    pop();
  
  if (click == 1){
    angle1 = angle1 + cst*delAng;
  } else {
    angle1 = angle1;    
  }
  
  
  //highlight cursor over
  push()
  
  noFill()
  stroke(220, 0, 0)
  strokeWeight(3)
    //up button
  if(dist(mouseX,mouseY,120,60)<20){
    ellipse(120,60,40);
  }
  //down button
  if(dist(mouseX,mouseY,120,130)<20){
    ellipse(120,130,40);
  }
  //left button
  if(dist(mouseX,mouseY,80,95)<20){
    ellipse(80,95,40);
  }
  //right button
  if(dist(mouseX,mouseY,160,95)<20){
    ellipse(160,95,40);
  }
  //x button
  if(dist(mouseX,mouseY,360,60)<20){
    ellipse(360,60,40);
  }
  //b button
  if(dist(mouseX,mouseY,360,130)<20){
    ellipse(360,130,40);
  }
  
  //y button
  if(dist(mouseX,mouseY,320,95)<20){
    ellipse(320,95,40);
  }
  
  //a button
  if(dist(mouseX,mouseY,400,95)<20){
    ellipse(400,95,40);
  }
  pop()
}

function mousePressed(){
  //up button
  if(dist(mouseX,mouseY,120,60)<20){
    alphaV[0] = 150;
    cst = cst + 1;
    if(cst > 10){
      cst = 10;
    }
  }
  //down button
  if(dist(mouseX,mouseY,120,130)<20){
    alphaV[1] = 150;
    cst = cst - 1;
    if(cst < -10){
      cst = -10
    }
  }
  //left button
  if(dist(mouseX,mouseY,80,95)<20){
    alphaV[2] = 150;
  }
  //right button
  if(dist(mouseX,mouseY,160,95)<20){
    alphaV[3] = 150;
  }
  //x button
  if(dist(mouseX,mouseY,360,60)<20){
    alphaV[4] = 150;
  }
  //b button
  if(dist(mouseX,mouseY,360,130)<20){
    alphaV[5] = 150;
    click = 0;
  }
  
  //y button
  if(dist(mouseX,mouseY,320,95)<20){
    alphaV[6] = 150;
    
  }
  
  //a button
  if(dist(mouseX,mouseY,400,95)<20){
    click = 1;
    alphaV[7] = 150;
  }
  
  
}

function mouseReleased(){
  //click = 0;
  alphaV = [255,255,255,255,255,255,255,255];
  
}
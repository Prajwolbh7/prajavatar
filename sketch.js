// press in any eye to see the change
let b = false;
let c = false;
let RightEar;
let LeftEar;
let RightEar1;
let LeftEar1;


let LeftRect = false;
//let RightRect = false;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  RightEar = new Ring(360,260,0.4);
  LeftEar = new Ring(87,260,.7);
  RightEar1 = new Ring(30,260,2);
  LeftEar1 = new Ring(200,260,.07);

}

function draw() {

 // background(134);
  
  
  
  
  
  if(b == true){
    //background(0);
  }else if( b == false){
    
    background(134);
    textSize(13);
   text('Choose One Eye',150,150);
    //background('#F4EFB1');
    
    
  }
  //drawEarRing(310,260);
  //drawEarRing(87,260);
  
  RightEar.display();
  LeftEar.display();
  
  RightEar1.display();
  LeftEar1.display();
  
  RightEar.move();
  LeftEar.move();
   
  RightEar1.move();
  LeftEar1.move();
  
  drawRightEar();
  drawLeftEar();
  drawTopHead();
  drawBottomHead();
  drawLeftEye(LeftRect);
  drawRightEye();
  drawLeftPupil();
  drawRightPupil();
  drawMouth();
  drawAntena();
  

  // left eye
  if (LeftRect == true) {

    push();
    fill(0);
    noStroke();
    circle(150, 190, 56);
    fill('#8CD9DE');
    ellipse(150, 189, width * .07, height * .07);
    fill('#027613');
    ellipse(150, 189, width * .04, height * .04);
     fill(0);
    noStroke();
    circle(245, 190, 56);
    fill('#8CD9DE');
    ellipse(245, 189, width * .07, height * .07);
    fill('#027613');
    ellipse(245, 189, width * .04, height * .04);
    pop();
  }

  
  // this code be used individually by using RightRect
  /*// right eye
  if (RightRect == true) {

    push();
    fill(0);
    noStroke();
    circle(245, 190, 56);
    fill('#8CD9DE');
    ellipse(245, 189, width * .07, height * .07);
    fill('#027613');
    ellipse(245, 189, width * .04, height * .04);
    pop();
  }
  */

}

function mousePressed() {
  // if the moused is preesed in this region then do this

  if (mouseX > width * 0.33 && mouseX < width * 0.42) {
    console.log("mouse is here");
    LeftRect = true;
  c = false;
   background('#F4EFB1');

  } else if (mouseX > width * 0.56 && mouseX < width * 0.66) {
    console.log("mouse is here");
    b = true;
    LeftRect = true;
    background(0);
    textSize(50);
    text('Opps !!',140,150);
    text('I AM GLITCHED',10,253);
     
  }

}

function drawRightEar() {

  fill(5);
  line(290, 245, 325, 245);
  line(325, 200, 325, 245);
  line(325, 200, 290, 200)
}


function drawLeftEar() {
  // left ear
  fill(255);
  line(105, 200, 70, 200);
  line(70, 200, 70, 245);
  line(70, 245, 105, 245);
}

function drawTopHead() {

  //top head
  fill(255);
  line(105, 200, 105, 110);
  line(105, 110, 290, 110);
  line(290, 110, 290, 200);
}


function drawBottomHead() {

  //bottom head  
  fill(255);
  line(105, 245, 105, 310);
  line(105, 310, 290, 310);
  line(290, 310, 290, 245);
}


function drawLeftEye() {
  // left eyes
  push();
  noStroke();
  fill(255);
  ellipseMode(CORNER);
  rect(130, 170, 40, 40);
  pop();
}


function drawRightEye() {
  // right eyes
  push();
  noStroke();
  fill(255);
  ellipseMode(CORNER);
  rect(225, 170, 40, 40);
  pop();
}

function drawLeftPupil() {
  //left pupil
  push();
  noStroke();
  //fill(89, 0, 0);
  fill('#8CD9DE');
  ellipse(150, 189, width * .07, height * .07);
  fill('#027613');
  ellipse(150, 189, width * .04, height * .04);
  pop();
}


function drawRightPupil() {
  //right pupil
  push();
  noStroke();
  //fill(89, 0, 0);
  fill('#8CD9DE');
  ellipse(245, 189, width * .07, height * .07);
  fill('#027613');
  ellipse(245, 189, width * .04, height * .04);
  pop();
}

function drawMouth() {
  //mouth 
  push();
  // strokeWeight(1);
  stroke(1);
  noFill();
  fill('#ED6C27');
  ellipse(190, 270, 80, 20);
  noStroke();
  fill('#E10902');
  ellipse(190, 270, 70, 15);
  pop();
}


function drawAntena() {
  // antena
  push();
  strokeWeight(1);
  fill(100);
  line(200, 109, 200, 70);
  fill('#E0D604');
  ellipse(200, 94, 60, 35);
  fill(0, 102, 0);
  textSize(9);
  text('oCtane', 187, 97);
  fill(255, 204, 0);
  circle(200, 58, 30);
  fill(0);
  circle(200, 58, 15);
  pop();
}


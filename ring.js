class Ring{
  
  constructor( _xPos, _yPos, _size){
    
    this.xPos = _xPos;
    this.yPos = _yPos; 
    this.size = _size;
    
  }
  
  display() {
    
    
  // ear ring
  push();
  translate(this.xPos,this.yPos)
  scale(this.size);
 // rotate(rotation);  
  //rectMode(Center);
  //strokeWeight(1.5);
    //fill(255);
  fill('#F4EFB1')
  ellipse(225, this.yPos, 15, 40);
  pop();
  
   push();
  translate(this.xPos,this.yPos)
    scale(this.size);
 // rotate(rotation);  
  //rectMode(Center);
  //strokeWeight(1.5);
    //fill(255);
  fill('#F4EFB1')
  ellipse(2, this.yPos, 15, 40);
  pop();
    
  }
  
move ()
  {
  if (this.yPos <= 520){
    
    this.yPos += 2;
  }else {
    this.yPos = -32;
  }
  }
  
  


}
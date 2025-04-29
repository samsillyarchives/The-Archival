let x = 0;

function setup() {

  let element=createCanvas(400, 400);
  element.parent("P5canvas");
  strokeWeight(.75); 
}

function draw() {
 // background('#9f815b')
  background('#e7ded9')
  noFill() // so you can see the space between repeating lines
  translate(200,200)
  angleMode(DEGREES) 
  
  let middleX = 0
  let middleY= 0
  
  
  for(let i=0; i < 50; i++){
  beginShape()
 // stroke('#e681ab') 
    stroke('#3f5a4e')
  vertex(middleX,middleY-175+(i*5)); //top corner
  vertex(middleX+175-(i*5),middleY); //left corner
  vertex(middleX,middleY+175-(i*5)); //bottomm corner
  vertex(middleX-175+(i*5),middleY); //right corner
  vertex(middleX,middleY-175+(i*5)); //top corner
  endShape()
  }
  

  x+= .50; // allows for contious rotation
  rotate(x)// x variable determines how fast is spins
  
  for (let i=0; i < 50; i++){
  beginShape()
  //stroke('#3f5a4e')
    stroke('#e681ab') 
  vertex(middleX-120+(i*5),middleY-120+(i*5)); //top left
  vertex(middleX+120-(i*5),middleY-120+(i*5)); //top right
  vertex(middleX+120-(i*5),middleY+120-(i*5)); //bottom right
  vertex(middleX-120+(i*5),middleY+120-(i*5)); //bottom left
  vertex(middleX-120+(i*5),middleY-120+(i*5)); //top left
  endShape()
     }
}
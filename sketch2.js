let colorArray;

function setup() {
   frameRate(3);
   let elemente=createCanvas(400, 1300);
    elemente.parent('P5canvas2');

    colorArray=[color('#3f5a4e'),color('#efb9cd'),color('#1f1814'),color('#9f815b'), color('#e7ded9')]
  }
  
  function draw() {
    
    background(231, 222, 217);
    
   drawCircles(0,0);
    
   // drawCircles(mouseX,0);
    
  }
  
  function drawCircles(x_,y_){
  for(let x = 20; x<width; x+=20){
        for (let y = 20; y<height; y+= 20) {
        fill(colorArray[int(Math.random() * colorArray.length)]);
        ellipse(x+x_,y+y_,15);
        }
  }
  }
  
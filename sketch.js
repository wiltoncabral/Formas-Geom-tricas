var x = 0;
var y = 400;
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  fill("red");
  noStroke()
  square(10, 20, 50);

  fill("yellow");
  circle(x, y, 50);

  stroke('green');
  strokeWeight(3)
  line(0, 400, 400, 0);

  if( x<=400){
    x++;
  }
  
  if(y>0){
      y--;
    }
      
      
}
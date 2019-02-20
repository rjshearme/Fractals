let dragon = new Dragon();

function setup() {
  createCanvas(1000, 1000);
  background(0);
  stroke(255);
  strokeWeight(1);
  translate(width/2, height/2)
  scale(1,-1);

  a = createVector(0, 0);
  b = createVector(0, 5);
  dragon.segs[0] = new Segment(a, b);
  dragon.show();
}

function mousePressed() {
  stroke(random(255),random(255),random(255));
  dragon.generate();

  dragon.show();

}

let segments = [];
let limit = 14;
let count = 0;

function addAll(arr, list) {
  for (let s of arr) {
    list.push(s);
  }
}

function setup() {
  createCanvas(600, 600);
  let a = createVector(0, 0);
  let b = createVector(50, 0);
  let s1 = new Segment(a, b);
  segments.push(s1);
}

function mousePressed() {
  if (count < limit) {
    let nextGeneration = [];
    for (let s of segments) {
      let children = s.generate();
      addAll(children, nextGeneration);
    }
    segments = nextGeneration;
    count++;
  }
}


function draw() {
  background(0);
  stroke(255);
  translate(300, 300);
  for (let s of segments) {
    s.show();
  }
}

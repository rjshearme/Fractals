var dims = document.body.clientWidth;
let rainbowMode = false;

function rainbowTime() {
  rainbowMode = (rainbowMode) ? false : true;
}

function randomColour() {
  if (rainbowMode) {
    stroke(random(255),random(255),random(255));
  }
}

// function reset() {
//   setup();
//   kochCount = 0;
//   mandelCount = 0;
//   triCount = 0;
//   treeCount = 0;
//   dragonCount = 0;
// }

function addAll(arr, list) {
  for (let s of arr) {
    list.push(s);
  }
}

function drawGrid() {
  stroke("white");
  strokeWeight(2);
  line(dims/3, 0, dims/3, dims);
  line(2*dims/3, 0, 2*dims/3, dims);
  line(0, dims/3, dims, dims/3);
  line(0, 2*dims/3, dims, 2*dims/3);
  strokeWeight(1);
}

function setup() {
  createCanvas(dims,dims);
  background("black");
  stroke("white");
  fill("black");
  drawGrid();
  translate(0, dims);
  scale(1, -1);


  spinskiSetup();
  dragonSetup();
  kochSetup();
  mandelSetup();
  treeSetup();
  levySetup();
}

function mousePressed() {
  if (rainbowMode) {
    randomColour();
  } else {
    stroke("white");
  }
  if (mouseX < dims/3 && mouseY > dims*2/3) {
    mandelPressed();
  } else if (mouseX < dims/3 && mouseY < dims/3 && mouseY > 0) {
    spinskiPressed();
  } else if (dims/3 < mouseX && mouseX < dims*2/3 &&
      dims/3 < mouseY && mouseY < dims*2/3) {
    levyPressed();
  } else if (dims/3 > mouseX && dims/3 < mouseY && mouseY < dims*2/3) {
    dragonPressed();
  } else if (dims*2/3 < mouseX && mouseY < dims/3 && mouseY > 0) {
    kochPressed();
  } else if (mouseY < dims/3 && dims/3 < mouseX && mouseX < dims*2/3) {
    treePressed();
  }
  drawGrid();
}

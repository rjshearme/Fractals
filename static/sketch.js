var dims = document.body.clientWidth;

function addAll(arr, list) {
  for (let s of arr) {
    list.push(s);
  }
}

function setup() {
  createCanvas(dims,dims);
  background("black");
  stroke("white");
  fill("black");
  line(dims/3, 0, dims/3, dims);
  line(2*dims/3, 0, 2*dims/3, dims);
  line(0, dims/3, dims, dims/3);
  line(0, 2*dims/3, dims, 2*dims/3);
  translate(0, dims);
  scale(1, -1);


  spinskiSetup();
  dragonSetup();
  kochSetup();
  mandelSetup();
}

function mousePressed() {
  if (mouseX < dims/3 && mouseY > dims*2/3) {
    mandelPressed();
  }
  if (mouseX < dims/3 && mouseY < dims/3 && mouseY > 0) {
    spinskiPressed();
  }
  if (dims/3 < mouseX && mouseX < dims*2/3 &&
      dims/3 < mouseY && mouseY < dims*2/3) {
        dragonPressed();
  }
  if (dims*2/3 < mouseX && mouseY < dims/3 && mouseY > 0) {
    kochPressed();
  }
}

//Maybe get it so that it automatically scales?

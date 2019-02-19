let dragons = [];
let dragonLimit = 16;
let dragonCount = 0;

function dragonSetup() {
  let a = createVector(dims/3 + dims/12, dims/2);
  let b = createVector(dims*2/3 - dims/12, dims/2);
  let d1 = new Dragon(a, b);
  dragons.push(d1);
  d1.show();
}

function dragonPressed() {
  if (dragonCount < dragonLimit) {
    let nextGeneration = [];
    let inorout = true;
    rect(dims/3, dims/3, dims/3, dims/3);
    for (let d of dragons) {
      let children = d.generate(inorout);
      inorout = (inorout) ? false : true;
      addAll(children, nextGeneration);
    }
    dragons = nextGeneration;
    for (let d of dragons) {
      d.show();
    }
    dragonCount++;
  }
}

class Dragon {

  constructor(a, b) {
    this.a = a.copy();
    this.b = b.copy();
  }

  generate(inorout) {
    let children = [];

    let v = p5.Vector.sub(this.b, this.a);
    v.x = v.x / sqrt(2);
    v.y = v.y / sqrt(2);

    if (inorout) {
      v.rotate(PI/4);
    } else {
      v.rotate(-PI/4)
    }
    let d = p5.Vector.add(this.a,v);

    children[0] = new Dragon(this.a, d);
    children[1] = new Dragon(d, this.b);
    return children;
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

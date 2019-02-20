let levys = [];
let levyLimit = 13;
let levyCount = 0;

function levySetup() {
  let a = createVector(dims/3 + dims/11, dims/2);
  let b = createVector(dims*2/3 - dims/11, dims/2);
  let d1 = new Levy(a, b);
  levys.push(d1);
  d1.show();
}

function levyPressed() {
  if (levyCount < levyLimit) {
    let nextGeneration = [];
    rect(dims/3, dims/3, dims/3, dims/3);
    for (let d of levys) {
      let children = d.generate();
      addAll(children, nextGeneration);
    }
    levys = nextGeneration;
    for (let d of levys) {
      d.show();
    }
    levyCount++;
  }
}

class Levy {

  constructor(a, b) {
    this.a = a.copy();
    this.b = b.copy();
  }

  generate() {
    let children = [];

    let v = p5.Vector.sub(this.b, this.a);
    v.x = v.x / sqrt(2);
    v.y = v.y / sqrt(2);
    v.rotate(-PI/4)

    let d = p5.Vector.add(this.a,v);

    children[0] = new Levy(this.a, d);
    children[1] = new Levy(d, this.b);
    return children;
  }

  show() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

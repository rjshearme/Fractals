let spinskis = [];
let triLimit = 7;
let triCount = 0;

function spinskiSetup() {
  let h = dims/3 * sqrt(3) / 2;
  let diff = dims/3 - h;
  let a = createVector(dims/81, dims*2/3 + diff + dims/81);
  let b = createVector(dims*26/81, dims*2/3 + diff + dims/81);

  let c = createVector(dims/6, dims);

  let t1 = new Triangle(a, b, c);
  spinskis.push(t1);
  t1.show();
}

function spinskiPressed() {
  if (triCount < triLimit) {
    let nextGeneration = [];

    for (let t of spinskis) {
      let children = t.generate();
      addAll(children, nextGeneration);
    }
    spinskis = nextGeneration;
    triCount++;
    for (let t of spinskis) {
      t.show();
    }
  }
}

class Triangle {

  constructor(a, b, c) {
    this.a = a.copy();
    this.b = b.copy();
    this.c = c.copy();
  }

 generate() {
    let children = [];

    let ab = p5.Vector.sub(this.b, this.a);
    let ac = p5.Vector.sub(this.c, this.a);
    let bc = createVector(ab.x * 1.5, ac.y);
    ab.div(2);
    ac.div(2);
    bc.div(2);
    ab = p5.Vector.add(ab, this.a);
    bc = p5.Vector.add(bc, this.a);
    ac = p5.Vector.add(ac, this.a);

    children[0] = new Triangle(this.a, ab, ac);
    children[1] = new Triangle(ab, this.b, bc);
    children[2] = new Triangle(ac, bc, this.c);

    return children;
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    line(this.a.x, this.a.y, this.c.x, this.c.y);
    line(this.b.x, this.b.y, this.c.x, this.c.y);
  }
}

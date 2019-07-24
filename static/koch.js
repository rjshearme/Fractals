let kochs = [];
let kochLimit = 6;
let kochCount = 0;

function kochSetup() {
  let len = dims/3
  let h = len * sqrt(3) / 2;

  let a = createVector(dims*2/3 + 1/36 * dims, dims * 33/36);
  let b = createVector(dims - 1/36 * dims, dims*33/36);
  let c = createVector(dims*5/6, dims*2/3 + dims/36);

  let k1 = new Koch(a, b);
  let k2 = new Koch(b, c);
  let k3 = new Koch(c, a);
  kochs.push(k1);
  kochs.push(k2);
  kochs.push(k3);
  for (let k of kochs) {
    k.show();
  }
}

function kochPressed() {
  if (kochCount < kochLimit) {
    let nextGeneration = [];
    for (let k of kochs) {
      let children = k.generate();
      addAll(children, nextGeneration);
    }
    kochs = nextGeneration;
    rect(dims*2/3, dims*2/3, dims/3, dims/3);
    for (let k of kochs) {
      k.show();
    }
    kochCount++;
  }
}



class Koch {

  constructor(a, b) {
    this.a = a.copy();
    this.b = b.copy();
  }

 generate() {
    let children = [];

    let v = p5.Vector.sub(this.b, this.a);
    v.div(3);

    let b1 = p5.Vector.add(this.a, v);
    children[0] = new Koch(this.a, b1);

    let a1 = p5.Vector.sub(this.b, v);
    children[3] = new Koch(a1, this.b);

    v.rotate(PI/3);
    let c = p5.Vector.add(b1,v);

    children[1] = new Koch(b1, c);
    children[2] = new Koch(c, a1);
    return children;
  }

  show() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

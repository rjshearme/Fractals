class Tree {
  constructor(height) {
    this.leaves = [];
    this.angle = (-Math.PI/7);
    this.shrink = 0.75;
    this.len = height;
    this.layer = 1;
  }
  show() {
    for (let leaf of this.leaves) {
      leaf.show();
    }
  }
  generate() {
    let new_leaves = []
    for (let leaf of this.leaves) {
      let v = p5.Vector.sub(leaf.b, leaf.a);
      v.rotate(this.angle);
      let l1 = new Branch(leaf.b.x, leaf.b.y, leaf.b.x + v.x * this.shrink, leaf.b.y + v.y * this.shrink);
      v.rotate(-2 * this.angle);
      let l2 = new Branch(leaf.b.x, leaf.b.y, leaf.b.x + v.x * this.shrink, leaf.b.y + v.y * this.shrink);

      new_leaves.push(l1);
      new_leaves.push(l2);
    }
    this.leaves = new_leaves;
  }
}

class Branch {
  constructor(ax, ay, bx, by) {
    this.a = createVector(ax, ay);
    this.b = createVector(bx, by);
  }
  show() {
    let len = Math.hypot(this.a.x - this.b.x, this.a.y - this.b.y)
    let stroke = map(len, 0, 200, 1, 25)
    strokeWeight(stroke);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    strokeWeight(1);
  }
}

let tree = new Tree(dims/15);
let treeLimit = 13;
let treeCount = 0;

function treeSetup() {
  let h = dims/3 * sqrt(3) / 2;
  let diff = dims/3 - h;
  let b1 = new Branch(dims/2,dims*2/3 + diff ,dims/2,dims*2/3 + tree.len + diff);
  b1.show()
  tree.leaves.push(b1);
}

function treePressed() {
  if (treeCount < treeLimit) {
    tree.generate();
    tree.show();
    treeCount++;
  }
}

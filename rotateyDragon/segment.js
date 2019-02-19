class Segment {

  constructor(a, b) {
    this.a = a.copy();
    this.b = b.copy();
  }

  generate() {
    let children = [];
    children[0] = new Segment(this.a, this.b);
    let c = this.a.rotate(-PI/2);
    let d = this.b.rotate(-PI/2);
    children[1] = new Segment(this.c, this.d);


    return children;
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

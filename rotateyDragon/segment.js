class Segment {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  show() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

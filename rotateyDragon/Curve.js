class Curve {

  constructor(arr) {
    this.parts = arr;
  }

  generate() {
    newarr;
    for (let segment in curve) {
      newarr.push(segment);
      segment.rotate(-PI/4);
      segment add last arr element position
      newarr.push(segment);
    }
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

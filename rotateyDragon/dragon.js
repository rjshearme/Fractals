let factor = -1;

class Dragon {

  constructor() {
    this.segs = [];
  }

  generate() {
    let centre = this.segs[this.segs.length-1];
    let mr = centre;
    let children = [];
    for (let s of this.segs) {
      let s1 = createVector(s.a.x, s.a.y);
      let s2 = createVector(s.b.x, s.b.y);
      s1.rotate(factor * PI*3/4);
      s2.rotate(factor * PI*3/4);
      s1.add(centre.b);
      s2.add(centre.b);
      // let new_seg = new Segment(s1, s2)
      children.push(new Segment(s1, s2));
    }
    for (let c of children) {
      this.segs.push(c);
    }
    console.table(children);



  }

  show() {
    for (let s of this.segs) {
      s.show();
    }
  }
}

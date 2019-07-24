mandelCount = 0.75;
mandelLimit = 35;
let nLim = 44;
let points = []
let rHue = Math.floor(Math.random()*360);
// let rHue = 200;

function mandelSetup() {
  fill("black");
  rect(0,0,dims/3, dims/3);
  mandelMap();
}

function mandelPressed() {
  if (mandelCount < mandelLimit) {
    colorMode(HSB);
    mandelCount = mandelCount * 1.5;
    console.log(rHue);
    for (let p of points) {
      let hue = map(p.n, 0, mandelCount, rHue, 360+rHue) % map(p.n, 0, mandelCount, 0, rHue); //issue when rHue is low
      let bri = map(p.n, 0, mandelCount, 0, 255);

      stroke(hue, 100, bri);
      point(p.x, p.y)
    }
    colorMode(RGB);
  }
}

function check(x, y) {
  var real = x;
  var imag = y;
  var n = 0;
  while(n < nLim) {
    var tempReal = (real * real) - (imag * imag) + x;
    var tempImag = (2 * real * imag) + y;
    real = tempReal;
    imag = tempImag;
    if (real * real + imag * imag > 4) {
      return n;
    }
    n++
  }
  return n;
}

function mandelMap() {
    for(var x=0; x < width/3; x =  x + 1) {
       for(var y=0; y < height/3; y = y + 1) {
          let a = map(x, 0, width/3, -2, 0.47);
          let b = map(y, 0, width/3, -1.12, 1.12);
          let n = check(a,b);
          points.push({x:x, y:y, n:n});
      }
    }
  }

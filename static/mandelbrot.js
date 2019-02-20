mandelCount = 0.75;
mandelLimit = 35;
var xSet = new Set();
var ySet = new Set();


function mandelSetup() {
  fill("black");
  rect(0,0,dims/3, dims/3);
}

function check(x, y) {
  var real = x;
  var imag = y;
  var n = 0;
  while(n < mandelCount) {
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


function mandelPressed() {
  if (mandelCount <= mandelLimit) {
    fill("white");
    rect(0, 0, dims/3, dims/3);
    mandelCount = mandelCount * 1.3;
    stroke("black");
    for(var x=0; x < width/3; x++) {
       for(var y=0; y < height/3; y++) {
         if (xSet.has(x) && ySet.has(y)){
           continue;
         } else {
          let a = map(x, 0, width/3, -2, 0.47);
          let b = map(y, 0, width/3, -1.12, 1.12);
          let n = check(a,b);
          let value = map(n, 0, mandelCount, 255, 0);
          stroke(value);
          if (n > 0) {
              point(x,y);
           }
         }
       }
    }
  }
fill("black");
stroke("white");
}

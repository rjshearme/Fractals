function setup() {
  createCanvas(1000, 800);
  pixelDensity(1);
}

function draw() {
  var maxiterations = 35;

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, -2, 2);
      var b = map(y, 0, height, -1.12, 1.12);

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < maxiterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + map(mouseX, 0, width, -1, 1);
        b = bb + map(mouseY, 0, width, -1, 1);
        if (a * a + b * b > 2) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiterations, 0, 255);

      if (n == maxiterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright* 0.5;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

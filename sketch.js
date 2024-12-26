function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  background(30, 30, 50); // Subtle background color
  fill(200, 100, 255);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50); // Circle that follows the mouse
}

class State2 {
  constructor(){
    this.dots = [];
    this.numDots = 10;
  }

setup() {
  createCanvas(800, 600);

  // Create random dots
  for (let i = 0; i < this.numDots; i++) {
    let dot = createVector(random(width), random(height));
    this.dots.push(dot);
  }
}

drawConstellation() {
  // Draw lines between dots
  for (let i = 0; i < this.dots.length; i++) {
    for (let j = i + 2; j < this.dots.length; j++) {
      stroke(255); // White lines
      line(this.dots[i].x, this.dots[i].y, this.dots[j].x, this.dots[j].y);
    }
  }
  
  // Draw dots
  for (let dot of this.dots) {
    fill(255); // White dots
    noStroke();
    ellipse(dot.x, dot.y, 10, 10);
  }
}

draw() {
  background(0);
  this.drawConstellation(); // Draw the constellation
}
}
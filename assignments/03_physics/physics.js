function setup() {
  createCanvas(400, 400);  // Set canvas size (replace with desired dimensions)
  mover = new Mover();    // Create a Mover object
}

function draw() {
  background(0,30);   // Clear the background
  mover.update();  // Update the mover's position
  mover.display(); // Draw the mover
}

class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);  // Use createVector instead of new PVector
    this.velocity = createVector(0, 0);
    this.topspeed = 5;
  }

  update() {
    const mouse = createVector(mouseX, mouseY);
    const acceleration = p5.Vector.sub(mouse, this.location);  // Use p5.Vector for vector operations
    acceleration.setMag(0.1);
    this.velocity.add(acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  }

  display() {
    noStroke();
    fill(255,244,124);
    ellipse(this.location.x, this.location.y, 5, 5);
  }
}
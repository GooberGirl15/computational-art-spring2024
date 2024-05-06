let flowField;
let vehicles = [];
  


function setup() {
  createCanvas(600,440);
  colorMode(HSB);
  flowField = new FlowField(30);
  
  for (let i = 0; i < 120; i++) {
    let x = width;
    let y = random(height);
    vehicles.push(new Vehicle(x, y, flowField));
  }
}

function draw() {
  background(214,99,54,0.1);
  flowField.display();
  flowField.calculateFlow();
  flowField.mirrorFlow();
  
  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.edges();
    vehicle.display();
  }
}

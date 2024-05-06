class FlowField {
    constructor(resolution) {
      this.resolution = resolution;
      this.cols = floor(width / this.resolution);
      this.rows = floor(height / this.resolution);
      this.flowfield = new Array(this.cols * this.rows);
      this.calculateFlow();
      this.mirrorFlow(); // Mirror the flowfield
    }
  
    calculateFlow() {
      let center = createVector(width / 2, height / 2);
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          let index = x + y * this.cols;
          let pos = createVector(x * this.resolution, y * this.resolution);
          let dir = p5.Vector.sub(center, pos).normalize();
          let angle = atan2(pos.y - center.y, pos.x - center.x) * frameCount * 0.1;
          this.flowfield[index] = dir.rotate(angle / 10);
        }
      }
    }
  
    mirrorFlow() {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols / 2; x++) {
          let index1 = x + y * this.cols;
          let index2 = (this.cols - 1 - x) + y * this.cols; // Mirror index
          this.flowfield[index2] = this.flowfield[index1].copy().mult(-1); // Mirror flowfield
        }
      }
    }
    
    lookup(pos) {
      let column = floor(constrain(pos.x / this.resolution, 0, this.cols - 1));
      let row = floor(constrain(pos.y / this.resolution, 0, this.rows - 1));
      let index = column + row * this.cols;
      return this.flowfield[index];
    }
  
    display() {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          let index = x + y * this.cols;
          let v = this.flowfield[index];
          push();
          translate(x * this.resolution, y * this.resolution);
          rotate(v.heading());
          stroke(214,99,56);
          strokeWeight(0.5);
          line(0, 0, this.resolution, 0);
          pop();
        }
      }
    }
  }
  
  
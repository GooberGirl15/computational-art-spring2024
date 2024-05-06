class detailFuncs{
    constructor(){
        this.xoff = 0;
        this.yoff = 0;
        this.da = PI/150;
        this.dx = 0.1;

    }

    setup(){
        frameRate(10);
    }

    draw1(){
        background(0,0,0);
        stroke(0,0,100);
        for (let a = 0; a < TWO_PI; a += 0.01) {
            let r1 = width;
            let x1 = r1 * cos(a);
            let y1 = r1 * cos(a);
        
            let r2 = map(noise(this.xoff), 0, 1, -width / 4, width);
            let x2 = r2 * cos(a);
            let y2 = r2 * sin(a);
        
            line(x1, y1, x2, y2);
            this.xoff += this.dx;
          }
        
    }

    draw2(){
        translate(width/2,height/2)
        background(0,0,0);
        stroke(0,0,100);
        for (let a = 0; a < TWO_PI; a += 0.01) {
            let r1 = width;
            let x1 = r1 * cos(a);
            let y1 = r1 * sin(a);
        
            let r2 = map(noise(this.xoff), 0, 1, -width / 2, width);
            let x2 = r2 * cos(a) * frameCount * 0.01;
            let y2 = r2 * sin(a) * frameCount * 0.01;
        
            line(x1, y1, x2, y2);
            this.xoff += this.dx;
          }
    }

    draw3(){
        translate(width/2,height/2);
        background(0,0,0.1);
        var r = 300;
        stroke(0, 0, 100);
        strokeWeight(1);
  
  push();
  beginShape();
  fill(10,30,100)
  stroke(20,35,46)
  fill(10,27.84);
  for (var a = PI ; a <= TWO_PI ; a += this.da){
    var n = noise (this.xoff, this.yoff);
    var x = r * cos(a);
    var y = sin(millis()/100 * 0.05) * r * cos(a);
    rect(x*n,y,r*n,r*n)
    this.xoff -= this.dx;
    r--
  }
  endShape();
  pop();
  
   push();
  
}

    }
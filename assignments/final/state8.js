class State8{
    constructor(){
        this.scaled;
        this.size = 300;

    }

    setup(){
        // frameRate(45);
    }
    drawCircle(){
      background(0,0,0)
        let color1 = color(19, 83, 96); // Orange
        let color2 = color(264, 57.1, 34.1); // Blue 
        let palatte = [color1, color2]
        // Using that palette to create gradient maps
        let lerpAmount = map(this.size, 300, 2, 0, 1); 
        let currentColor = lerpColor(palatte[0], palatte[1], lerpAmount);
        let oppColor = lerpColor(palatte[1],palatte[0], lerpAmount);
        stroke(oppColor);
  
  
    let xoff = 0;
    let yoff = 0;
    
    currentColor.setAlpha((frameCount * 0.01) * (sin(millis()/100))/5);
    fill(currentColor);
  
    push();
    beginShape();
    for (let a = 0; a < TWO_PI; a+=0.01){
      let r = map(noise(xoff,yoff),0,1,300,this.size * this.scaled);
      // let r = this.size;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x,y);
      xoff += 0.01* (frameCount* 0.01);
      yoff += 0.01 * (frameCount *0.05);
    }
    endShape();
    pop();
  
  //   base case
    this.size *= 0.7;
     if (this.size > 2){
      this.drawCircle(this.size);
    }

    }

    draw(){
        background(100,0,0,0);
        translate(width/2,height/2)
        this.scaled = abs(2 * sin(frameCount * 0.01))
        this.drawCircle(width/2);
        // clear();

    }
}

    
  
  
  

  
  
  
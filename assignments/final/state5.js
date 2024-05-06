class State5{
    constructor(){

    }

    setup(){
        
    }

    draw(){
      noStroke();
        background(338,92,85);
        translate(width * 0.5, height * 0.5);
      
        for (let x = -530; x <= 530; x += 5) {
          for (let y = -330; y <= 330; y += 10) {
            let size = map(noise(x * (0.25 * frameCount * 0.001) , y * 0.0025, frameCount * 0.05), 0, 1, 1, 15);
            
            fill(244,28,24);
            ellipse(x, y, size);
          }
        }
      }
}


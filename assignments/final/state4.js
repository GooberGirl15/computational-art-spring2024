class State4{
    constructor(){
        this.c1;
        this.c2;
    }

    setup(){
        this.c1 = color(310,66,29)
        this.c2 = color(144,54,53)
        frameRate(40);
        
    }

    draw(){
        background(0,0,0)
        textSize(70);
        textFont("Arial");
        fill(0, 0, 100);
        noStroke(); 

        for (let bg = 0; bg < height; bg++){
            this.n = map(bg,0,width,0,1);
            let gradCol = lerpColor(this.c1,this.c2,this.n);
            stroke(gradCol);
            line(0,bg,height,bg);
          }

          let note = "IT'S SO HOLY";
          let spacing = 40;
          
          for (let i = 0; i < note.length; i++) {
            let x = 250 + i * spacing;
            let y = 300 + sin(frameCount * 0.01 + i) * 30;
            text(note.charAt(i), x, y-200);
            text(note.charAt(i), x, y-100);
            text(note.charAt(i),y-200,x-108);
            push();
            fill(0,0,0);
            text(note, x+150,x+180);
            text(note.charAt(i), x+5, y-105);
            text(note.charAt(i), x+5, y-200);
            text(note.charAt(i), y-200, x);
            pop();
          }
    }
}
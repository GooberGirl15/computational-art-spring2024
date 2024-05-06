// Adapted from Daniel Shiffman's https://www.youtube.com/watch?v=O_0fRV4MTZo 

class State7 {
    constructor() {
        this.yoff = 0;

    }

    draw() {
        background(63, 21, 61, 21, 50);
        translate(width / 2, height / 2);
        rotate(PI / 2);



        stroke(65, 19, 211);
        fill(65, 19, 211, 90, 32);
        strokeWeight(2);

        let ca = PI / 100;
        let cx = 0.1;
        let xoff = 0;

        beginShape();
        stroke(0, 0, 100);
        fill(10, 30, 21);

        push();
        beginShape();
        for (var a = -TWO_PI; a <= TWO_PI; a += ca) {
            var n = noise(xoff, yoff);
            var r = sin(2 * a) * map(n, 0, 1, 200, 300);
            var x = r * cos(a);
            var y = sin(frameCount * 0.01) * r * sin(a);
            xoff += cx;
            //point(x, y);
            vertex(x, y);
            r--;
        }
        pop();
        endShape();

        push();
        beginShape();
        fill(10, 30, 100)
        stroke(20, 35, 46)
        fill(10, 27.84);
        for (var a = TWO_PI; a <= 3 * TWO_PI; a += ca) {
            var n = noise(xoff, yoff);
            var r = sin(2 * a) * map(n, 0, 1, 40, 300);
            var x = r * cos(a);
            var y = cos(frameCount * 0.01) * r * sin(a);
            xoff -= cx;
            vertex(x, y); 
        }
        endShape();
        pop();

    }




}
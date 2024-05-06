
let grid = [];
padding = 0;
let cellSize = 10;
let rows;
let cols;



function setup(){
    let rows = width/cellSize;
    let cols = height/cellSize;

    createCanvas(100,100);
    colorMode(HSB);

    for (let x = 0; x < rows; x++){
        grid[x] =[];
        for (let y = 0; y < cols; y++){
            
          grid[x][y] = floor(random(2));
 
        }

}
}

function draw(){
    background(0,0,100);

    for (let x = 0; x < rows; x++){
        grid[x] = [];
        for (let y = 0; y < cols; y++){
            let left = (x * cellSize);
            let top = (y * cellSize);
            grid[x][y] = rect(left,top,cellSize,cellSize);
            if (grid[x][y] == 1){
                fill(0,0,0);
                grid[x][y] = rect(left,top,cellSize,cellSize);
            }
        //   console.log(x);  
        }



}
}

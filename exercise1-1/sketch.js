function setup(){
    createCanvas(400,400);
}

function draw(){
background(255);

//circle(mouseX,200,20);   

let x= 0
while(x<=mouseX){
    fill(0,0,255);
    circle(x,200,20);
    x+=20;
}
}
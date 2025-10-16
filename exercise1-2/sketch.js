
function setup(){
    createCanvas(400,400);
}

function draw(){
background(255);

//circle(mouseX,200,20);   
//blue
let x=10;
while(x<=mouseX){
    fill(0,0,255);
    circle(x,200,20);
    x+=20;
}
//white
while(x<=width){
    fill(255);
    circle(x,200,20);
    x=x+20;

//let x= 0

}
}


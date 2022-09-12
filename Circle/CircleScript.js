var x = 95;
var y = 40;

var dx = -2;
var dy = -2;

var canvas = document.getElementById("canvas");
canvas.height = 300;
canvas.width = 500;
var ctx = canvas.getContext('2d');

function draw() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(x,y,25,0,Math.PI * 2);
    ctx.stroke();
    if (dy > canvas.height-25 || y + dy < 25){
        dy = -dy;
    }
    if (dx > canvas.width-25 || x + dx < 25){
        dx = -dx;
    }
    
    
    x += dx;
    y += dy;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.stroke();
}
setInterval(draw,100);

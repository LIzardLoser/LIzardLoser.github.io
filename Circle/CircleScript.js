var ivdt = Math.floor(Math.random() * 20) + 1;

var x = Math.floor(Math.random() * 200) + 1;
var y = Math.floor(Math.random() * 200) + 1;

console.log("Start X: " + x + "\n" + "Start Y: " + y + "\n" + "Milliseconds: " + ivdt);

var dx = Math.floor(Math.random * 2) + 1;
var dy = Math.floor(Math.random * 2) + 1;

if (dx > 1){
    dx = 2
}else{
    dx = -2
}
if (dy > 1){
    dy = 2
}else{
    dy = -2
}

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var ballradius = 25;

function draw() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(x,y,ballradius,0,Math.PI * 2);
    ctx.stroke();
    if (y + dy > canvas.height-25 || y + dy < ballradius){
        dy = -dy;
    }
    if (x + dx > canvas.width-25 || x + dx < ballradius){
        dx = -dx;
    }
    
    
    x += dx;
    y += dy;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.stroke();
}
setInterval(draw,ivdt);

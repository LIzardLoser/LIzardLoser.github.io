const cav = document.getElementById("cav");
const ctx = cav.getContext('2d');
cav.width = 700;
cav.height = 500;
var ballradius = 10;
var x = 25;
var y = 25;
var dx = 2;
var dy = -2;
var px = 350;
var py = 450;
var pwidth = 67;
var pheight = 20;
var adown = false;
var ddown = false;

var score = 0;

function drawBorder(){
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(0,0,cav.width,cav.height)
    ctx.stroke();
}

function drawBall() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(x,y,ballradius,0,Math.PI * 2);
    ctx.stroke();
    if (y + dy < ballradius){
        dy = -dy;
    }else if (y + dy > cav.height - ballradius){
        clearInterval(timer);
        ctx.fillText('Game Over Score Was: '+ score, 300, 250)
    }
    if (x + dx > cav.width - ballradius || x + dx < ballradius){
        dx = -dx;
    }
    if (y - cav.height > py - cav.height && x - cav.width > px - cav.width && x - cav.width < px - cav.width + pwidth) {
        dy = -dy;
        score += 1
        console.log(score);
    }

    
    x += dx;
    y += dy;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(px,py,pwidth,pheight);
    ctx.fillStyle = "white";
    ctx.fill();

    if (adown) {
        px -= 2
    }
    if (ddown) {
        px += 2
    }

    document.onkeydown = (key) => {
        if (key.key == 'a') {
            adown = true;
        }
        if (key.key == 'd') {
            ddown = true;
        }
    }
    document.onkeyup = (key) => {
        if (key.key == 'a') {
            adown = false;
        }
        if (key.key == 'd') {
            ddown = false;
        }
    }
}

function draw() {
    ctx.clearRect(0,0,cav.width,cav.height);
    drawBorder();
    drawBall();
    drawPaddle();

}
const timer = setInterval(draw,10);

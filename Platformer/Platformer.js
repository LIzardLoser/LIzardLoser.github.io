var adown = false;
var ddown = false;
var wdown = false;

//player params
var pposx = 350;
var pposy = 450;
var pheight = 50;
var pwidth = 35;
var canJump = true;

const c = document.getElementById('c');
c.width = 700;
c.height = 500;
//canvas context (drawing)
ctx = c.getContext('2d');

function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    drawPlayer();
    drawBorder();
}

function drawBorder() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(0,0,c.width,c.height);
    ctx.stroke();
}

function drawPlayer(){
    ctx.beginPath();
    ctx.rect(pposx,pposy,pwidth,pheight);
    ctx.fillStyle = "white";
    ctx.fill();

    if (adown){
        pposx -= 3;
    }
    if (ddown){
        pposx += 3;
    }
    if (wdown){
        pposy -= 3;
        setTimeout(() => {
            pposy += 3;
            wdown = false;
            canJump = true;
        }, 250);
    }

    document.onkeydown = (key) => {
        if (key.key == "a"){
            adown = true;
        }
        if (key.key == "d"){
            ddown = true;
        }
        if (key.key == "w" && canJump || key.key == " " && canJump){
            wdown = true;
            canJump = false;
        }
    }

    document.onkeyup = (key) => {
        if (key.key == "a"){
            adown = false;
        }
        if (key.key == "d"){
            ddown = false;
        }
    }
}


const timer = setInterval(draw, 10)

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var p = {x: 100, y: 50 };
var velo = 3;
var corner = 47;
var rad = 15;
var ball = {x: p.x, y: p.y };
var moveX = Math.cos(Math.PI / 180 * corner) * velo;
var moveY = Math.sin(Math.PI / 180 * corner) * velo;
var rectY = 100;
var rectHeight = 75;
var rectWidth = 12;
var rectX = 25;
var color = '(0,0,255)';
function colorRandomizer(){
    red = Math.floor((Math.random()* 255));
    blue = Math.floor((Math.random()* 255));
    green = Math.floor((Math.random()* 255));

    color = "(" + red + "," + green + "," + blue + ")";
    console.log(color);
}
var red = 0;
var blue = 255;
var green = 0;

function draw(){
    //ctx.clearRect(0, 0, 1000, 500);

    if (ball.x > canvas.width - rad || ball.x < rad) {
    moveX = -moveX; 
    colorRandomizer();
    }
    if (ball.x > rectX - rad && ball.y > rectY + (rectHeight/2)){
        moveX = -moveX;
    }
    if (ball.y > canvas.height - rad || ball.y < rad){
     moveY = -moveY;
     colorRandomizer();
    }
    
   

    ball.x += moveX;
    ball.y += moveY;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    
   //for (var i = 0; i < balls.length; i++){
    ctx.fillStyle = 'rgb' + color;
    ctx.arc(ball.x, ball.y, rad, 0 , Math.PI * 2, false);
    ctx.fill()
    ctx.closePath()
    ctx.fillStyle = 'White';
   ctx.fillRect(rectX, rectY, rectWidth, rectHeight)
    
}
setInterval(draw, 10);
document.onmousemove = function(event) {
	rectY = event.pageY;
}



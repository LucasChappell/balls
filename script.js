
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rectY = 100;
var rectHeight = 75;
var rectWidth = 12;
var rectX = 25;




function colorRandomizer(){
    red = Math.floor((Math.random()* 155) + 100);
    blue = Math.floor((Math.random()* 155) + 100);
    green = Math.floor((Math.random()* 155) + 100);

    color = "(" + red + "," + green + "," + blue + ")";
    
}

function angleRandomizer(){
    angle = Math.floor(Math.random()* 30 + 35)
}
function startYRandomizer(){
    startY = Math.floor(Math.random()* 200 + 50)
}function speedRandomizer(){
    speed = Math.floor(Math.random()* 6 + 3)
}function startXRandomizer(){
    startX = Math.floor(Math.random()* 400 + 50)
}
function ballz(){
for (let i = 0; i < 50; i++){
   angle = 50;
   startX = 50;
   startY = 50;
   speed = 3;
    angleRandomizer();
    startXRandomizer();
    startYRandomizer();
    speedRandomizer();
    
     draw(angle, startX, startY, speed);
}}
function clearScreen(){
    setInterval(clean, 10)
    function clean(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    }
}

function draw(angle, startX, startY, speed){
    var red = 140;
    var blue = 200;
    var green = 0;
    var p = {x : startX, y : startY} 
    var velo = speed;
    var corner = angle;
    var rad = 15;
    var color = '(0,0,255)';
    var ball = {x: p.x, y: p.y };
    var moveX = Math.cos(Math.PI / 180 * corner) * velo;
    var moveY = Math.sin(Math.PI / 180 * corner) * velo;
    setInterval(circle, 10)
    function circle(){
    if (ball.x > canvas.width - rad || ball.x < rad) {
        moveX = -moveX; 
       colorRandomizer();
    }
    if (ball.y > canvas.height - rad || ball.y < rad){
        moveY = -moveY;
        colorRandomizer();
    }
    ball.x += moveX;
    ball.y += moveY;
   // ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    
    ctx.fillStyle = 'rgb' + color;
    ctx.arc(ball.x, ball.y, rad, 0 , Math.PI * 2, false);
    ctx.fill()
    ctx.closePath()}

    function colorRandomizer(){
        red = Math.floor((Math.random()* 155) + 100);
        blue = Math.floor((Math.random()* 155) + 100);
        green = Math.floor((Math.random()* 155) + 100);
    
        color = "(" + red + "," + green + "," + blue + ")";
        
    }
}
ballz();
clearScreen();
/*center of the circle + radius of both circles6
function draw2(){
    var p = {x: 500, y: 300};
    var velo = 3;
    var corner = 60;
    var rad = 15;
    var red = 140;
    var blue = 200;
    var green = 0;
    var color = '(0,0,255)';
    var moveX = Math.cos(Math.PI / 180 * corner) * velo;
    var moveY = Math.sin(Math.PI / 180 * corner) * velo;    
    var rad = 15;
    var ball = {x: p.x, y: p.y };
    setInterval(circle, 12);
    function circle(){
    if (ball.x > canvas.width - rad || ball.x < rad) {
        moveX = -moveX; 
        colorRandomizer();
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
    
    ctx.fillStyle = 'rgb' + color;
    ctx.arc(ball.x, ball.y, rad, 0 , Math.PI * 2, false);
    ctx.fill()
    ctx.closePath()}
    function colorRandomizer(){
        red = Math.floor((Math.random()* 155) + 100);
        blue = Math.floor((Math.random()* 155) + 100);
        green = Math.floor((Math.random()* 155) + 100);
    
        color = "(" + red + "," + green + "," + blue + ")";
        
    }
}function draw3(){
    var p = {x: 200, y: 400};
    var velo = -3;
    var corner = 40;
    var rad = 15;
    var red = 140;
    var blue = 200;
    var green = 0;
    var color = '(0,0,255)';
    var moveX = Math.cos(Math.PI / 180 * corner) * velo;
    var moveY = Math.sin(Math.PI / 180 * corner) * velo;    
    var rad = 15;
    var ball = {x: p.x, y: p.y };
    setInterval(circle, 12);
    function circle(){
    if (ball.x > canvas.width - rad || ball.x < rad) {
        moveX = -moveX; 
        colorRandomizer();
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
    
    ctx.fillStyle = 'rgb' + color;
    ctx.arc(ball.x, ball.y, rad, 0 , Math.PI * 2, false);
    ctx.fill()
    ctx.closePath()}
    function colorRandomizer(){
        red = Math.floor((Math.random()* 155) + 100);
        blue = Math.floor((Math.random()* 155) + 100);
        green = Math.floor((Math.random()* 155) + 100);
    
        color = "(" + red + "," + green + "," + blue + ")";
        
    }
}

draw2()
draw3()
*/

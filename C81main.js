canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx. arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    console.log("x =" + mousex + "y ="+ mousey);
    circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx. arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
     
}
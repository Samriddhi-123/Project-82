canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
colour="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_Y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=document.getElementById("colour").value;
    ctx.lineWidth=document.getElementById("Line_Width").value;
   /* ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_Y);*/
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_Y,20,0,2*Math.PI);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_Y;
}
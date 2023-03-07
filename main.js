var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;


     canvas = document.getElementById("myCanvas");
   ctx = canvas.getContext("2d");
   color = "blue";
   widthOfLine = 5;
   canvas.addEventListener("mousedown",my_mousedown);
   function  my_mousedown(e)
   {
    color = document.getElementById("color").value;
    withOfLine = document.getElementById("widthOfLine").value;
    mouseEvent = "mousedown";
   }
   canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
currentPositionOfMouseX = clientx-canvas.ofsetleft;
currentPositionOfMouseX = clientx-canvas.ofsettop;

if (mouseEvent == "mousedown") 
    { ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    }

    console.log("Ultima posicao das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
        }
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}
    
    


   
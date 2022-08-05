mouseevent="";
var last_x_pos,last_y_pos ;

canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");
color="black";
line_width=1;

canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value ;
    line_width=document.getElementById("line_width").value ;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseleave" ,my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mouseup" ,my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mousemove" ,my_mousemove);
function my_mousemove(e){
    current_x_pos = e.clientX - canvas.offsetLeft;
    current_y_pos = e.clientY - canvas.offsetTop;

    
    if(mouseevent=="mousedown"){
        cntx.beginPath();
        cntx.strokeStyle=color;
        cntx.lineWidth=line_width;    

        console.log("----------Last X and Y Cordinates ----------");
        console.log("X="+last_x_pos+" Y="+last_y_pos);
        cntx.moveTo(last_x_pos,last_y_pos);

        console.log("----------Current X and Y Cordinates ----------");
        console.log("X="+current_x_pos+" Y="+current_y_pos);
        cntx.lineTo(current_x_pos,current_y_pos);
        cntx.stroke();

    } 
    last_x_pos=current_x_pos;
    last_y_pos=current_y_pos;
}
var last_position_of_x , last_position_of_y; 
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("line_width").value;
    //Addictonal Activity ends

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    cntx.beginPath();
    cntx.strokeStyle = color;
    cntx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    cntx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    cntx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    cntx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function cleararea(){
    cntx.clearRect(0,0,canvas.width,canvas.height);
}
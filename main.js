var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var roverwidth=100;

var roverheight=90;

var rover_x=10;

var rover_y=10;

var background_image="mars.jpg";

var rover_image="rover.png";

function add() {
     var background_imgTag=new Image();
     background_imgTag.onload=uploadBackground;
     background_imgTag.src=background_image;

     var rover_imgTag=new Image();
     rover_imgTag.onload=uploadRover;
     rover_imgTag.src=rover_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
     var keypressed=e.keyCode;
     console.log(keypressed);
     if (keypressed=="38") {
         up();
         console.log("up");
     }    

     if (keypressed=="40") {
        down();
        console.log("down");
    }    

    if (keypressed=="37") {
        left();
        console.log("left");
    }   
    
    if (keypressed=="39") {
        right();
        console.log("right");
    }    
}
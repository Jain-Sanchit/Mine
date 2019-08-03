var canvas=document.getElementById("myCanvas")

var ctx = canvas.getContext("2d");


// ctx.fillStyle = "#FFF000";
// ctx.fillRect(0, 0, 200, 100);


// ctx.moveTo(0, 0);            // start of line
// ctx.lineTo(200, 100);   //end point of  // for line


// ctx.beginPath();  // circle
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);  //circle
// ctx.stroke();

// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80); 


// // Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80); 


// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);   // filled text


// ctx.font = "30px Arial";
// ctx.strokeText("Hello World", 10, 50);   // no fill text


// ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width/2, canvas.height/2); 



window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
   ctx.drawImage(img, 10, 10);
};
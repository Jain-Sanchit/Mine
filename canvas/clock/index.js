var canvas=document.getElementById("myCanvas")

var ctx = canvas.getContext("2d");

var radius=canvas.height/2;

ctx.translate(radius,radius)

radius=radius*.9;

clock();


function clock(){
    
    drawFace(ctx,radius);
    drawNum(ctx,radius);
    drawTime(ctx,radius);
    setInterval(clock, 1000);
}



function drawFace(ctx,radius){
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI)
    ctx.fillStyle="white"
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0 ,radius * 0.92, 0, 0, radius * 1.05);
    grad.addColorStop(0,"white")
    grad.addColorStop(0.5,"black")
    grad.addColorStop(1,"white")
    ctx.strokeStyle=grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0,0,radius*.1,0,2*Math.PI)
    ctx.fillStyle="black"
    ctx.fill();
}


function drawNum(ctx,radius){
    ctx.font=radius*.15+"px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    var ang;
    var num;
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);                    //step1
        ctx.translate(0, -radius * .85);    //step2         // shifting pointer to the place whr we need to write the no.
        ctx.rotate(-ang);                   // step3
        ctx.fillStyle="red"
        ctx.fillText(num.toString(), 0, 0);                 // writing no.
        
        ctx.rotate(ang);                    //step1
        ctx.translate(0, radius * 0.85);    //step2     // shifting back the pointer
        ctx.rotate(-ang);                   //step3
      } 

}

function drawTime(ctx,radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();



    //hour
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.05);
  console.log(hour);
  
  //minute
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.7, radius*0.04);
  console.log(minute);
  // second
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.8, radius*0.01);
  console.log(second);
}

function drawHand(ctx,pos,length,width){
    ctx.strokeStyle="#483936";
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
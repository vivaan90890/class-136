objects=[];
status="";
function preload(){
video=createVideo('video.mp4');
}
function setup(){
canvas=createCanvas(550,450);
canvas.center();
video.hide();
}
function start(){
object_Detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}
function draw(){
image(video,0,0,550,450);
}
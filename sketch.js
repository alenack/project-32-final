const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg(); 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   

}

function draw(){
 if(backgroundImg){
 background (backgroundImg);
 }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }else {
        ampm = "PM";
    };

    textSize(50);
    text("TIME : " + hour + ampm,50,50);



}
console.log("hi");
async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
/*if(hour>=04 && hour<=06){
    bg = "sunrise1.png";
}else if(hour>=06 && hour<=08){
    bg = "sunrise2.png";
}else if(hour>=08 && hour<=011){
        bg = "sunrise3.png"

}else if(hour>=23 && hour==0){
    bg = "sunset10.png";
}else if(hour==0 && hout<=3){
    bg = "sunset11.png";
}else {
    bg = "sunrise12.png";
}*/
if(hour <= 8 && hour >= 6){
    var bg = "sunrise1.png";
 }else if(hour <= 10 && hour >= 8){
    var bg = "sunrise2.png";
 }else if(hour <= 12 && hour >= 10){
    var bg = "sunrise4.png";
 }else if(hour <= 14 && hour >= 12){
    var bg = "sunrise5.png";
 }else if(hour <= 15 && hour >= 14){
    var bg = "sunset7.png";
 }else if(hour <= 17 && hour >= 15){
    var bg = "sunset10.png";
 }else if(hour <= 20 && hour >= 17){
    var bg = "sunset11.png";
 }else {
     var bg = "sunset12.png";
 }



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}

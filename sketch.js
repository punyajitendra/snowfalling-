const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var back;
var snowfall;
var snowfalling = [];


function preload(){
back = loadImage("snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  if(frameCount%20 === 0){
    snowfalling.push(new Snowfall(random(50,750),0,70,70))
  }
  
  background(back);  
  Engine.update(engine);
  
  for (var p = 0; p < snowfalling.length; p++) {
    snowfalling[p].display();
  }
}
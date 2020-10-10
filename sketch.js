const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bird
var log1,log2,log3,log4;
var pigs1,pig2;
var engine, world;
var box1,box2,box3,box4,box5;
var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,390,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pigs1 = new Pig (810,350);
    log1  =new Log (810,250,300,PI/2);

    box3= new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pigs2 = new Pig (810,220);
    log2 =new Log (810,180,300,PI/2);

    box5=new Box(810,160,70,70);
    log3=new Log(760,120,150,PI/7)
    log4=new Log(870,120,150,-PI/7)
    bird=new Bird(100,100)
}
    

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pigs1.display();
    log1.display();
    box3.display();
    box4.display();
    pigs2.display();
    log2.display();
    log4.display();
    log3.display();
    box5.display();
    bird.display();
}

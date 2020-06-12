const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,200,60,40)
    ball = new Ball(100,100);
    chain = new Chain(ball.body, ground.body)

}

function draw(){
    background("White")
    Engine.update(engine);
    ball.display();
    ground.display();
    chain.display();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, ComputerBase, ComputerPlayer,player, PlayerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   PlayerBase=new PlayerBase(300,random(450,height -300),180,150)
   player=new player(285,PlayerBase.body.position.y-153,50,180)
   ComputerBase=new ComputerBase(700,random(450,height-300),180,150)
   ComputerPlayer=new ComputerPlayer(485,ComputerBase.bosy.position.y-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   PlayerBase.display();
   player.display();
   ComputerBase.display();
   ComputerPlayer.display();
   //display Player and computerplayer

 
}

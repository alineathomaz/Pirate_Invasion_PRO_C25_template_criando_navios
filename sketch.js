const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg,boat;
var canvas, angle, tower, ground, cannon;
var balls = [];
//crie a matriz boats (navios) vazia → var boats = [];


function preload() 
{
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() 
{
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  boat = new Boat(width-79, height - 60, 170, 170,-80);
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
 
  push();  
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  //comente o código abaixo após chamar a função showBoats()
  Matter.Body.setVelocity(boat.body,{x:-0.9, y:0});
  //comente o código abaixo após chamar a função showBoats()
  boat.display();
  //chame a função showBoats() → showBoats();
  
  for (var i = 0; i < balls.length; i++) 
  {
    showCannonBalls(balls[i], i);
  }

  cannon.display();
}

function keyPressed() 
{
  if (keyCode === DOWN_ARROW) 
  {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, index) 
{
  if (ball) 
  {
    ball.display();
  }
}

function keyReleased() 
{
  if (keyCode === DOWN_ARROW) 
  {
    balls[balls.length - 1].shoot();
  }
}

//função showBoats
function showBoats() 
{
  if (boats.length > 0) 
  {
    if 
    (boats[boats.length - 1] === undefined || boats[boats.length - 1].body.position.x < width - 300) 
    {
      //crie a matriz positions com os valores -40, -60, -70 e -20 → var positions = [-40, -60, -70, -20];
      
      //crie a variável position e  lhe atribu um valor aleatório da matriz positions → var position = random(positions);
      
      //crie um novo objeto da classe Boat → var boat = new Boat(width, height - 100, 170, 170, position);

      
      //insira boat na matriz boats → boats.push(boat);

    }

    for (var i = 0; i < boats.length; i++) 
    {
      if (boats[i]) 
      {
        //atribua velocitade aos navios → Matter.Body.setVelocity(boats[i].body, {x: -0.9, y: 0});

        //exiba os navios → boats[i].display();

      } 
    }
  } 
  else 
  {
    //crie um novo objeto da classe Boat → var boat = new Boat(width, height - 60, 170, 170, -60);
    
    //insita um boat na matriz boats → boats.push(boat);

  }
}
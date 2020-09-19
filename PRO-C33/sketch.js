const Engine = Matter.Engine;
const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var count=0;
var particles;
var plinkos = [];
var divisions=[];
var PLAY=1;
var END=1;
var gamestate=PLAY;

var divisionHeight=300;
var score =0;



function mouseReleased(){
  
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,5);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   
}


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particles!=null){
    particles.display();
    if(particles.body.position.y>770){
      if(particles.body.position.x>301&&particles.body.position.x<600){
        particles=null;
        if(count>=5){gamestate="END"}
      }
    }
  }

  if(particles!=null){
    particles.display();
    if(particles.body.position.y>770){
      if(particles.body.position.x>601&&particles.body.position.x<900){
        particles=null;
        if(count>=5){gamestate="END"}
      }
    }
  }
  if(gamestate=="END"){
    textSize(50)
    text("GameOver",300,350);
  }


   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-300, width/2+250), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gamestate!=="END"){
    count++; 
    particles=new Particle(mouseX,10,10);
       console.log(particles.body.position.x);
       console.log(score);
      if(particles.body.position.x>=0 && particles.body.position.x<=80 && particles.body.position.y>400){
        score=score+100
                  }
      else if(particles.body.position.x>=81 && particles.body.position.x<=160 && particles.body.position.y>400){
        score=score+200
                  }      
      else if(particles.body.position.x>=161 && particles.body.position.x<=240 && particles.body.position.y>400){
        score=score+300
                  }      
      else if(particles.body.position.x>=241 && particles.body.position.x<=320 && particles.body.position.y>400){
        score=score+400
                  }  
      else if(particles.body.position.x>=321 && particles.body.position.x<=400 && particles.body.position.y>400){
        score=score+500
                  }  
      else if(particles.body.position.x>=401 && particles.body.position.x<=480 && particles.body.position.y>400){
        score=score+500
                  } 
      else if(particles.body.position.x>=481 && particles.body.position.x<=560 && particles.body.position.y>400){
        score=score+400
                  }
      else if(particles.body.position.x>=0 && particles.body.position.y>400){
        console.log("checking")
        score=score+300
                  }
      else if(particles.body.position.x>=641 && particles.body.position.x<=720 && particles.body.position.y>400){
        score=score+200
                  }
      else if(particles.body.position.x>=721 && particles.body.position.x<=800 && particles.body.position.y>400){
         score=score+100
                  }
  }
}


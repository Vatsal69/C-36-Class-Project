var Ball, database;
var position;


function setup(){

database = firebase.database();

  console.log(database);
  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  var ballInDb = database.ref("ball/position");
  ballInDb.on("value",readPosition);

}
function writePosition(x,y){
  database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
  });
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}



function readPosition(data){
  position = data.val();
  console.log(position);
  Ball.x = position.x;
  Ball.y = position.y;
}

function showError(){

}

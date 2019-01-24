// // Begin the game.
//
//
var gameModel;

function setup() {
    gameModel = new Model();
}

function draw() {
  if ( frameCount % 60 == 0) {
  gameModel.generateSugars();
 }
}

function mousePressed() {
  gameModel.addFood_Item(mouseX,mouseY,10,10)
}

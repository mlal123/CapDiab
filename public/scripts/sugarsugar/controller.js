// // Begin the game.
//
//
var gameModel;

function setup() {
    gameModel = new Model();
    gameModel.addFood_Item(300,300,10,10)
}

function draw() {
  if ( frameCount % 120 == 0) {
  gameModel.generateSugars();
 }
}

function mousePressed() {


}

onEvent("Draw", "click", function( ) {
  setScreen("DrawScreen");
  moveForward(50);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  moveForward(50);
  turnLeft(90);
  moveForward(50);
  turnLeft(90);
  moveForward(50);
  turnLeft(90);
  moveForward(50);
});
onEvent("tobugbtn", "click", function( ) {
  setScreen("BugScreen");
  var buglocation;
onEvent("Start", "click", function( ) {
  var x = randomNumber(1, 2);
  setProperty("blueTile", "hidden", false);
  setProperty("redTile", "hidden", false);
  if (x == 1) {
    setPosition("findMe", getXPosition("redTile") + 30, getYPosition("redTile") + 30, 100, 100);
    buglocation = 1;
  } else {
setPosition("findMe", getXPosition("blueTile") + 30, getYPosition("blueTile") + 30, 100, 100);
  buglocation = 2;
  }
});
onEvent("redTile", "click", function( ) {
  setProperty("redTile", "hidden", true);
  setProperty("blueTile", "hidden", true);
  setProperty("Start", "text", "Try again!");
  if (buglocation == 1) {
    setProperty("titleLabel", "text", "You Win");
  } else {
    setProperty("titleLabel", "text", "You Lose");
  }
});
onEvent("blueTile", "click", function( ) {
  setProperty("redTile", "hidden", true);
  setProperty("blueTile", "hidden", true);
  setProperty("Start", "text", "Try again!");
  if (buglocation == 2) {
        setProperty("titleLabel", "text", "You Win");
  } else {
        setProperty("titleLabel", "text", "You Lose");
  }
});
});
onEvent("random_button", "click", function( ) {
  setScreen("RandomScreen");
  onEvent("number", "click", function() {
    setText("label2", randomNumber(1, 10));
  });
});
onEvent("animalsbutton", "click", function( ) {
  setScreen("AnimalScreen");
  onEvent("Lobster", "click", function( ) {
    setProperty("image1", "image", "Skunk.png");
  });
  onEvent("skunk", "click", function( ) {
    setProperty("image1", "image", "Skunk.png");
  });
  onEvent("deer", "click", function( ) {
    setProperty("image1", "image", "deer.png");
  });
  onEvent("Lobster", "click", function( ) {
    setProperty("image1", "image", "lobster.png");
  });
  onEvent("skunk", "click", function( ) {
    setProperty("image1", "image", "Skunk.png");
  });
  onEvent("deer", "click", function( ) {
    setProperty("image1", "image", "deer.png");
  });
});







/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 450; // y-positie van speler

var vijandX = 600; // x-positie van speler
var vijandY = 420; // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (spelerX >= 10) {
    if (keyIsDown(LEFT_ARROW)) {
      spelerX -= 5;
    }
  }

  if (spelerX <= 1250) {
    if (keyIsDown(RIGHT_ARROW)) {
      spelerX += 5;
    }
  }

  if (spelerY >= 10) {
    if (keyIsDown(UP_ARROW)) {
      spelerY -= 5;
    }
  }

  if (spelerY <= 680) {
    if (keyIsDown(DOWN_ARROW)) {
      spelerY += 5;
    }
  }
  //vijand
  vijandY = vijandY + 10;
  if (vijandY > 690) {
    function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const newPos = randomIntFromInterval(10, 1250)
    vijandY = vijandY - 700;
    vijandX = newPos;
  }


  if (spelerY == vijandY) {
     if (vijandX - spelerX < 50 && vijandX - spelerX > 50) {
      console.log("botsing");
     }
  }


  


};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  clear();
  fill("#805532");
  ellipse(spelerX + 12, spelerY + 10, 15, 15);

  fill("#66d16e");
  rect(spelerX, spelerY + 18, 25, 17);
  fill("#271394");
  rect(spelerX + 15, spelerY + 35, 10, 15);
  fill("#271394");
  rect(spelerX, spelerY + 35, 10, 15);


  fill("#271394");
  rect(vijandX, vijandY + 25, 20, 25);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt ????n keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  background("blue");
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  }
}

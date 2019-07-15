import Phaser from "phaser";
import cardImage from "./assets/cards.gif";
import logo from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);
var positions = [];
var emptyCard = {};
var selectedValue = emptyCard;
var remainingPairs = 9;
var score = 0;
var scoreBoard;

function preload() {
  this.load.spritesheet("card", cardImage, { frameWidth: 81, frameHeight: 117 });
  this.load.image("logo", logo);
}

function handler(points){
  score += points;
  scoreBoard.setText('score: ' + score);
  if(remainingPairs == 0){
    this.add.image(400, 300, 'logo');
  }
}

function create() {
  scoreBoard = this.add.text(700,20, 'score: 0', { color: '#00ff00' });
  let emmiter = new Phaser.Events.EventEmitter();
  emmiter.on('updateScore', handler, this);
  createPositions();
  while (positions.length > 0) {
    let randomValue = Phaser.Math.Between(0, 51);
    let position1 = getRandomPosition();
    let position2 = getRandomPosition();
    createCard(this, position1.x, position1.y, randomValue, emmiter);
    createCard(this, position2.x, position2.y, randomValue, emmiter);
  }
}

function createPositions() {
  positions = [
    { x: 150, y: 150 },
    { x: 250, y: 150 },
    { x: 350, y: 150 },
    { x: 450, y: 150 },
    { x: 550, y: 150 },
    { x: 650, y: 150 },
    { x: 150, y: 280 },
    { x: 250, y: 280 },
    { x: 350, y: 280 },
    { x: 450, y: 280 },
    { x: 550, y: 280 },
    { x: 650, y: 280 },
    { x: 150, y: 410 },
    { x: 250, y: 410 },
    { x: 350, y: 410 },
    { x: 450, y: 410 },
    { x: 550, y: 410 },
    { x: 650, y: 410 }
  ];
}

function getRandomPosition() {
  let randomIndex = Phaser.Math.Between(0, positions.length - 1);
  return positions.splice(randomIndex, 1)[0];
}

function createCard(scene, xPosition, yPosition, cardValue, emmiter) {
  scene.add.image(xPosition, yPosition, 'card', cardValue);
  let card = scene.add.image(xPosition, yPosition, 'card', 52).setInteractive();
  card.value = cardValue;
  card.inGame = true;
  card.isFlipping = false;
  
  card.animationShow = scene.tweens.add({
    targets: card,
    scaleX:0,
    scaleY:0,
    duration:400,
    ease: 'none'
  });
  
  card.animationShow.pause();

  card.on('pointerdown', function () {
    card.animationShow.restart();
    if (selectedValue === emptyCard) {
      selectedValue = card;
    } else {
      if (selectedValue.value === card.value && !(selectedValue === card)) {
        remainingPairs -= 1;
        emmiter.emit('updateScore', 20);
      } else {
        emmiter.emit('updateScore', -5);
        scene.tweens.add({
          delay:1000,
          targets: [card, selectedValue] ,
          scaleX:1,
          scaleY:1,
          duration:400,
        });
      }
      selectedValue = emptyCard;
    }
  });
}
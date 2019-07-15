// import Phaser from "phaser";
// import cardImage from "./assets/cards.gif";
// import Board from "./model/Board";
// import Card from "./model/Card";

// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);
// var cards = [];
// function preload() {
//   this.load.spritesheet("logo", cardImage, { frameWidth: 81, frameHeight: 117});
// }

// function create() {
//   let board = new Board();
//   while(!board.isEmpty){
//     let randomValue = Phaser.Math.Between(0, 51);
    
//     cards.push(new Card(randomValue, board.popRandomPosition()));
//     cards.push(new Card(randomValue, board.popRandomPosition()));
//   }
//   cards.forEach(card => {
//     this.add.sprite(card.x, card.y, 'logo',card.value);
//     game.input.onDown.add(function(){
//       if(!card){

//       }
//     })
//   });
// }

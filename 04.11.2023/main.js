'use strict'
const Game = new Phaser.Game(1400, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    Game.load.image('mountain', 'Images/mountainimage.png') // load image into the game
}

function create() {
    console.log('Hello there :)')
    Game.add.image(0, 0, 'mountain') // display said image
}

function update() {

}
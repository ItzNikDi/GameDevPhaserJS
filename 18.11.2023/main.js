'use strict'
const Game = new Phaser.Game(1600, 900, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    Game.load.image('background-l1', 'Images/spacefont.png') // load image into the game
    Game.load.image('background-l2', 'Images/starsOverlay.png')
    Game.load.image('pizza-steve', 'Images/pizzasteve.png')
}

function create() {
    const background_l1 = Game.add.sprite('0', '0', 'background-l1')
    background_l1.width = Game.width
    background_l1.height = Game.height
    const background_l2 = Game.add.sprite('0', '0', 'background-l2')
    background_l2.alpha = 0.7
    const pizzaSteve_1 = Game.add.sprite('0', '0', 'pizza-steve')
    pizzaSteve_1.scale.setTo(0.2, 0.2)
    const pizzaSteve_2 = Game.add.sprite(Game.width / 2, Game.height / 2, 'pizza-steve')
    pizzaSteve_2.scale.setTo(0.4, 0.2)
    pizzaSteve_2.anchor.setTo(0.5, 0.5)
    const pizzaSteve_3 = Game.add.sprite(Game.width, Game.height, 'pizza-steve')
    pizzaSteve_3.scale.setTo(0.2, 0.4)
    pizzaSteve_3.anchor.setTo(1, 1)
}

function update() {

}
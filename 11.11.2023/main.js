'use strict'
const Game = new Phaser.Game(1500, 694, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    Game.load.image('background', 'Images/fortnite-bg.jpg') // load image into the game
    Game.load.image('player', 'Images/defaultfn.png')
}

function create() {

    const background = Game.add.sprite('0', '0', 'background')
    background.width = Game.width
    background.height = Game.height
    const player1 = Game.add.sprite('0', '0', 'player')
    player1.anchor.setTo(0, 0)
    const player2 = Game.add.sprite(Game.world.width, '0', 'player')
    player2.anchor.setTo(1, 0)
    const player3 = Game.add.sprite('0', Game.world.height, 'player')
    player3.anchor.setTo(0, 1)
    const player4 = Game.add.sprite(Game.world.width, Game.world.height, 'player')
    player4.anchor.setTo(1, 1)
    const player5 = Game.add.sprite(Game.world.width / 2, Game.world.height / 2, 'player')
    player5.anchor.setTo(0.5, 0.5)
}

function update() {

}
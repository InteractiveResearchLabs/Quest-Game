"use strict";

var currentMap;
var currentLayer;
var cursors;

function QuestGame() {
	this.initEngine();
	this.initGame();
	this.connect();
}

QuestGame.prototype.preloadGame = function() {
	Logger.info('Preloading Quest Game');

	// Load demo map
	this.game.load.tilemap('demomap', '../assets/maps/Demo.json', null, Phaser.TILED_JSON);
	this.game.load.image('demomaptiles', '../assets/maps/Demo.png');
};

QuestGame.prototype.initGame = function() {
	Logger.info('Initialize Quest Game Client');
};

QuestGame.prototype.initEngine = function(callback) {
	Logger.info('Initialize Phaser Game Engine');

	// Create Phaser Game
	this.game = new Phaser.Game(
		640, // Width
		480, // Height
		Phaser.AUTO, // Renderer
		'quest-game', // Parent DOM Node for Canvas
		{ // States
			preload: this.preloadGame,
			create: this.create,
			update: this.update,
			render: this.render
		},
		false, // Transparent Background
		false, // Antialias
		null // Physics config
	);
};

QuestGame.prototype.update = function() {
	// Game Updates
};

QuestGame.prototype.render = function() {
	// Show camera debug info
	this.game.debug.cameraInfo(this.game.camera, 20, this.game.height - 80);
};

QuestGame.prototype.create = function() {
	currentMap = this.game.add.tilemap('demomap', 32, 32);
	currentMap.addTilesetImage('PathAndObjects_0', 'demomaptiles');

	currentLayer = currentMap.createLayer(0);
	currentLayer.resizeWorld();

	cursors = this.game.input.keyboard.createCursorKeys();
};

QuestGame.prototype.connect = function() {
	Logger.info("Connecting to Quest Server");
};
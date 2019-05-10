// Draw the canvas 

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 850;
canvas.height = 450;
// canvas.x = 0;
// canvas.y = 0;
document.body.appendChild(canvas);

// Global variables

// The Arrays
var allFoods = [];
var allTowers = [];
var allNapkins = [];
var mouseCoords = [0, 0];
var keysDown = {};

// The other stuff 
foodWave(wave);
var wave = 1;
var waveNumber = 1;
var money = 0;
var lives = 10;
var playing = false;
var keysDown = {};
// var food;

// Draw the stuff on the screen 


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
	// console.log("background loaded successfully");
};
bgImage.src = "../Images/mapOne.png";

// Fork image
var forkReady = false;
var forkImage = new Image();
forkImage.onload = function () {
	forkReady = true;
	// console.log("fork image loaded successfully");
};
forkImage.src = "../Images/fork.png";

// Spaghetti image
var spaghettiReady = false;
var spaghettiImage = new Image();
spaghettiImage.onload = function () {
	spaghettiReady = true;
	// console.log("spaghetti image loaded successfully");
};
spaghettiImage.src = "../Images/spaghetti.png";

// Napkin image
var napkinReady = false;
var napkinImage = new Image();
napkinImage.onload = function () {
	napkinReady = true;
	// console.log("napkin image loaded successfully");
};
napkinImage.src = "../Images/napkin.png";

// Napkin image
var startScreenReady = false;
var startScreenImage = new Image();
startScreenImage.onload = function () {
	startScreenReady = true;
	console.log("startscreen image loaded successfully");
};
startScreenImage.src = "../Images/openingScreen.png";


// Make random numbers
var randNum = function (x) {
	return Math.floor(Math.random() * x);
};

// The functions for the game objects
// The towers 

function Tower(x, y) {
	this.types = ["fork", "spoon", "knife"];
	this.type = this.types[range(0, 2)];
	this.width = 100;
	this.height = 100;
	this.x = x
	this.y = y
	this.hitspeed = 2
	this.state = "ready"
	allTowers.push(this);
}

function Napkin(x, y) {
	this.width = 100;
	this.height = 100;
	this.state = "empty"
	this.x = x;
	this.y = y;
	allNapkins.push(this);
}

// The food
function Food() {
	// this.types = ["spaghetti", "lobster"];
	// this.type = this.types[range(0, 0)];
	this.speed = 5;
	this.width = 100;
	this.height = 56;
	this.x = (randNum(canvas.width) - 1850);
	this.y = 200;
	allFoods.push(this);
}

// // The function for the tower killing the food
// function Hit() {

// }


// Fills an array with values
function range(start, end) {
	var arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

// Get the wave of food
function foodWave(max) {
	for (food in range(1, max)) {
		food = new Food();
		// food.type = food.types[randNum(1)];
	}
}

// Create the group of towers

// // Function for spawning a tower
// var createTower = function(x, y, type){
// 	tower = new Tower(x, y, type);
// }

// Start the game
var start = function () {

	// Spawn the wave of food
	foodWave(wave);

	// Spawn the towers
	var tower = new Tower(200, 270);
	tower.type = "fork";
	// createTower(100, 100, "fork");

	// Spawn the napkins
	var napkin = new Napkin(200, 270);
	var napkin = new Napkin(400, 270);
	var napkin = new Napkin(600, 270);

}

// Next wave

var reset = function () {
	// Call another wave if everybody was killed
}

// The key controls

addEventListener("keydown", function (e) {
	keysDown[e.key] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.key];
}, false);

var input = function () {
	if (
		" " in keysDown &&
		allTowers[tower].state == "ready"
	) {
		hit();
	}
}

// Click on area of screen to buy
addEventListener('mousedown', mouseClick);

function mouseClick(e) {
	mouseCoords = [e.clientX, e.clientY];
	// console.log(mouseCoords);
	if (mouseCoords[0] >= 400 &&
		mouseCoords[0] <= 500 &&
		mouseCoords[1] >= 275 &&
		mouseCoords[1] <= 375 &&
		// allNapkins[napkin].state == "empty" &&
		playing == "true") {
		var tower = new Tower(400, 275);
	}

	if (mouseCoords[0] >= 600 &&
		mouseCoords[0] <= 700 &&
		mouseCoords[1] >= 275 &&
		mouseCoords[1] <= 375 &&
		// allNapkins[napkin].state == "empty" &&
		playing == "true") {
		var tower = new Tower(600, 275);
	}

	if (mouseCoords[0] >= 600 &&
		mouseCoords[0] <= 700 &&
		mouseCoords[1] >= 275 &&
		mouseCoords[1] <= 375 &&
		// allNapkins[napkin].state == "empty" &&
		playing == "true") {
		var tower = new Tower(600, 275);
	}

	if (mouseCoords[0] >= 310 &&
		mouseCoords[0] <= 530 &&
		mouseCoords[1] >= 175 &&
		mouseCoords[1] <= 415) {
		var playing = "true";
		console.log("woo");
		start();
		reset();
		main();
	}

	console.log(mouseCoords);
	console.log(playing);
	// var tower = new Tower();
	// allTowers[tower].x = allNapkins[napkin].x;
	// allTowers[tower].y = allNapkins[napkin].y;
	// allTowers[tower].type = "fork";
	// allNapkins[napkin].state = "empty";
}

// mouseCoords[0] >= allNapkins[napkin].x &&
// mouseCoords[0] <= (allNapkins[napkin].x + allNapkins[napkin].width) &&
// mouseCoords[1] >= allNapkins[napkin].y &&
// mouseCoords[1] <= (allNapkins[napkin].y + allNapkins[napkin].height) &&


// The Update Function
var update = function () {

	// for (food in allFoods) {
	// console.log(allFoods.length);
	// }

	// for (food in allFoods) {
	// var reset = function() {
	if (allFoods.length == 0) {
		// console.log("next wave is ready!");
		++wave;
		foodWave(wave);
		++waveNumber;
		// allFoods[food].speed = 0;
	}
	// }


	// Move the food across the screen
	for (food in allFoods) {
		allFoods[food].x += allFoods[food].speed;
	}

	for (tower in allTowers) {
		// console.log(allTowers[tower].x);
	}

	// Make the tower hit if a food is detected

	// for (tower in allTowers) {
	// 	if (
	// 		allTowers[tower].x <= (allFoods[food].x + 10) &&
	// 		allFoods[food].x <= allTowers[tower].x +allTowers[tower].width 
	// 		// allTowers[tower].state == "ready"
	// 		// (allFoods[food].y - allTowers[tower].y) || 
	// 	) {
	// 		allTowers[tower].y -= allTowers[tower].hitspeed;
	// 		allTowers[tower].state = "hitting";
	// 		// console.log("going up");
	// 	}
	// }

	// Collision between tower and food

	for (tower in allTowers) {
		if (
			allTowers[tower].x <= (allFoods[food].x + allFoods[food].width) &&
			allFoods[food].x <= (allTowers[tower].x + allTowers[tower].width) &&
			allTowers[tower].y <= (allFoods[food].y + allFoods[food].height) &&
			allFoods[food].y <= (allTowers[tower].y + allTowers[tower].height) &&
			allTowers[tower].state == "hitting"
		) {
			eat();
			allTowers[tower].state = "ready";
			allTowers[tower].y = 270;
			// console.log("BAM!");
			// console.log(food);
			++money;
		}
	}

	// Take away a food if it's off the screen
	for (food in allFoods) {
		if (
			allFoods[food].x > 850
		) {
			eat();
			--lives;
		}
		// console.log(allFoods[food].x)
	}

	// console.log(allNapkins[napkin].x);
	// console.log(allNapkins.length);
	// console.log(allFoods[food].x);
}

var eat = function () {
	allFoods.splice(food, 1);
}

var hit = function () {
	do {
		allTowers[tower].y -= allTowers[tower].hitspeed;
	} while (
		allTowers[tower].y < 170
	)
	// allTowers[tower].y -= allTowers[tower].hitspeed;
	// allTowers[tower].state = "hitting";
}

// Render the menu screen
var firstRender = function () {
	if (startScreenReady == true) {
		ctx.drawImage(startScreenImage, 0, 0);
		console.log("we did it");
	}
	else {
		console.log("oh boy");
	}
}
// console.log(startScreenReady);
// console.log("background drawn successfully")


// Render the stuff 
var render = function () {


	if (bgReady == true) {
		ctx.drawImage(bgImage, 0, 0);
		// console.log("background drawn successfully")
	}

	if (napkinReady == true) {
		for (napkin in allNapkins) {
			ctx.drawImage(napkinImage, allNapkins[napkin].x, allNapkins[napkin].y);
			// console.log("napkin drawn successfully")
		}
	}

	if (forkReady == true) {
		for (tower in allTowers) {
			ctx.drawImage(forkImage, allTowers[tower].x, allTowers[tower].y);
			// console.log("fork drawn successfully")
		}
	}

	if (spaghettiReady == true) {
		for (food in allFoods) {
			ctx.drawImage(spaghettiImage, allFoods[food].x, allFoods[food].y);
		}
	}

	// Write the map number
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Wave " + waveNumber, 10, 10);

	// Write the money stuff
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("You have " + money + " foodbucks", 820, 10);

	// Write the lives 
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("You have " + lives + " lives", 820, 40);


}

// Resize the game based on the browser 
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	// foodWave(wave);

	update(delta / 1000);

	then = now;

	render();
	input();

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

firstRender()

var then = Date.now();
if (playing == true) {
	start();
	reset();
	main();
}

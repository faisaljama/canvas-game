function Game() {
	this.canvas = document.getElementById('game');
	this.context = this.canvas.getContext('2d');
	this.width = this.canvas.width = window.innerWidth;
	this.height = this.canvas.height = window.innerHeight;
	this.keysDown = {};

	var self = this;

	function loop(){
	requestAnimationFrame(loop)

	self.update();
	self.draw(self.context);
}
	this.createListeners();
	loop();
}

Game.prototype.createListeners = function(){
	var self = this;

	window.addEventListener('keydown', function(event) {
	  self.keysDown[event.keyCode] = true;

	  console.log(self.keysDown);

	  if (event.keyCod >= 37 && event.keyCode <= 40) {
	  	event.preventDefault();
	  }
	});

	window.addEventListener('keyup', function(event) {
		delete self.keysDown[event.keyCode];
	});
}

Game.prototype.update = function(){
	box.update(this.keysDown);
}

Game.prototype.draw = function(context) {
	// console.log('draw');
	context.fillStyle = '#d34e21';
	context.fillRect(0,0, this.width, this.height);

	box.draw(context)
}

function Box(options) {
	this.x = options.x;
	this.y = options.y;
	this.width = options.width;
	this.height = options.height;
	this.color = options.color;
	this.speed = options.speed || 5; 
}

Box.prototype.update = function(keysDown){
	//left
	if (37 in keysDown) {
		this.x -= this.speed;

	}
	//right
	if (39 in keysDown) {
		this.x += this.speed;
	}
	//up
	if (38 in keysDown) {
		this.y -= this.speed;
	}
	//down
	if (40 in keysDown) {
		this.y += this.speed;
	}
}

Box.prototype.draw = function(context){
	context.fillStyle = this.color
	context.fillRect(this.x, this.y, this.width, this.height);

}

var box = new Box({
	x: 100,
	y: 100,
	width: 10,
	height: 10,
	color: '#000000'
	});







var astroids = new Game();

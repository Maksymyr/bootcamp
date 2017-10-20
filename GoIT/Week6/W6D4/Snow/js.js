let canvas = document.getElementById('canvas');
let ctx=canvas.getContext('2d');
//size  canvas
window.onresize=size;
function size(){
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.width=w-6;
	canvas.height=h-6 ;
// console.dir(canvas)
}
size();

//---
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();
//--
function drawIt() {
	window.requestAnimationFrame(drawIt);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for (var i = 0; i < snowArray.length; i ++){
		snowArray[i].moving();
	}
}

class Snowball {
	constructor (x, speed) {
		this.x = x;
		this.y = 0;
		this.speed = speed;
		this.radius = Math.floor(Math.random()*7+5);
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
	}
	moving() {
		this.draw();
		this.y += this.speed;
		if (this.y > h) {
			this.y = 0;
			this.x = Math.floor(Math.random() * w);
			this.speed = Math.floor(Math.random() * 3+2);
		}
		if (this.x > w){
			this.x = 0;
			this.y = Math.floor(Math.random() * w);
			this.speed = Math.floor(Math.random() * 3+2);
		}
		if (this.x < 0){
			this.x = w;
			this.y = Math.floor(Math.random() * w);
			this.speed = Math.floor(Math.random() * 3+2);
		}
		if (this.y < 0) {
			this.y = h;
			this.x = Math.floor(Math.random() * w);
			this.speed = Math.floor(Math.random() * 3+2);
		}
	}
}
var snowArray = [];

for (var n = 0; n < 100; n++) {
	setTimeout(function () {
		snowArray.push(new Snowball(Math.floor(Math.random() * w), Math.floor(Math.random() * 3 + 2)));
		// console.log(snowArray);
	}, 100*n);
}


ctx.fillStyle = "white";
window.requestAnimationFrame(drawIt);


var lastX = 0;
var lastY = 0;
document.onmousemove = function (e) {
	console.log(e.pageX + " : " + e.pageY);
	if (e.pageX <= lastX && e.pageY <= lastY) {
		for (var i = 0; i < snowArray.length; i++) {
			snowArray[i].x = snowArray[i].x+(e.pageX - lastX);
			snowArray[i].y = snowArray[i].y+(e.pageY - lastY);
		}
	}
	else if (e.pageX >= lastX && e.pageY <= lastY) {
		for (var i = 0; i < snowArray.length; i++) {
			snowArray[i].x = snowArray[i].x-(lastX - e.pageX);
			snowArray[i].y = snowArray[i].y+(e.pageY - lastY);
		}
	}
	else if (e.pageX >= lastX && e.pageY >= lastY) {
		for (var i = 0; i < snowArray.length; i++) {
			snowArray[i].x = snowArray[i].x-(lastX - e.pageX);
			snowArray[i].y = snowArray[i].y-(lastY - e.pageY);
		}
	}
	else if (e.pageX <= lastX && e.pageY >= lastY) {
		for (var i = 0; i < snowArray.length; i++) {
			snowArray[i].x = snowArray[i].x+(e.pageX - lastX);
			snowArray[i].y = snowArray[i].y-(lastY - e.pageY);
		}
	}
	lastX = e.pageX;
	lastY = e.pageY;
};
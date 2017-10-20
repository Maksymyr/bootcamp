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
	constructor (x, y) {
		this.x = x;
		// this.y = 0;
		this.y = y;
		this.radius = Math.floor(Math.random()*3+1);
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
	}
	moving() {
		this.draw();
		if (this.y > h) {
			this.y = Math.floor(Math.random() * h/4);
			this.x = Math.floor(Math.random() * w);
		}
		if (this.x > w){
			this.x = Math.floor(Math.random() * w/4);
			this.y = Math.floor(Math.random() * h);
		}
		if (this.x < 0){
			this.x = w*0.75 + Math.floor(Math.random() * (1+w*0.25));
			this.y = Math.floor(Math.random() * h);
		}
		if (this.y < 0) {
			this.y = h*0.75 + Math.floor(Math.random() * (1+h*0.25));
			this.x = Math.floor(Math.random() * w);
		}
	}
}
var snowArray = [];

for (var n = 0; n < 300; n++) {
	setTimeout(function () {
		snowArray.push(new Snowball(Math.floor(Math.random() * w), Math.floor(Math.random() * h)));
		console.log(snowArray);
	}, 10*n);
}


ctx.fillStyle = "white";
window.requestAnimationFrame(drawIt);

var checkbox = true;

var lastX = 0;
var lastY = 0;
canvas.onmouseover = function (e) {
	lastX = e.pageX;
	lastY = e.pageY;
};
document.onmousemove = Dragging;


function Dragging (e) {
	// if(checkbox) {
	// 	checkbox = false;
	// document.onmousemove = null;
		var changeX = (e.pageX - lastX)/10;
		var changeY = (e.pageY - lastY)/10;
		// console.log(e.pageX + " : " + e.pageY);
	var interval = setInterval(function () {
		
		if (e.pageX <= lastX && e.pageY <= lastY) {
			for (var i = 0; i < snowArray.length; i++) {
				console.log(i);
				snowArray[i].x = snowArray[i].x + changeX;
				snowArray[i].y = snowArray[i].y + changeY;
			}
		}
		else if (e.pageX >= lastX && e.pageY <= lastY) {
			for (var i = 0; i < snowArray.length; i++) {
				snowArray[i].x = snowArray[i].x + changeX;
				snowArray[i].y = snowArray[i].y + changeY;
			}
		}
		else if (e.pageX >= lastX && e.pageY >= lastY) {
			for (var i = 0; i < snowArray.length; i++) {
				snowArray[i].x = snowArray[i].x + changeX;
				snowArray[i].y = snowArray[i].y + changeY;
			}
		}
		else if (e.pageX <= lastX && e.pageY >= lastY) {
			for (var i = 0; i < snowArray.length; i++) {
				snowArray[i].x = snowArray[i].x + changeX;
				snowArray[i].y = snowArray[i].y + changeY;
			}
		}
		},100);

	// }
	setTimeout(function () {
		clearInterval(interval);
		// checkbox=true;
		// document.onmousemove = Dragging;
	}, 1000);
	lastX = e.pageX;
	lastY = e.pageY;
};
setInterval(function () {
		snowArray.splice(Math.floor(Math.random()*10),3);
		console.log(snowArray);
}, 300);
setInterval(function () {
	snowArray.push(new Snowball(Math.floor(Math.random() * w), Math.floor(Math.random() * h)));
	console.log(snowArray);
}, 100);
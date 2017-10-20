let canvas = document.getElementById('canvas');
let ctx=canvas.getContext('2d');
window.onresize=size;
function size(){
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.width=w-6;
	canvas.height=h-6 ;
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
	for (var i = 0; i < starArray.length; i ++){
		starArray[i].moving();
	}
}



class Star {
	constructor (x, y) {
		this.x = x;
		this.y = y;
		this.radius = Math.floor(Math.random()*3+1);
		// this.opacity = [0.7, 1,1,1,0.7,0.7,1,1,1,1,1,1,1,0.2,1,1,1,1,1,1,1,1,1];
	}
	draw() {
		ctx.beginPath();
		console.log(this);
		// ctx.globalAlpha=this.opacity[Math.floor(Math.random()*(this.opacity.length+1))];
		
		ctx.fillStyle = "white";
		
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
var starArray = [];

for (var n = 0; n < 100; n++) {
	starArray.push(new Star(Math.floor(Math.random() * w), Math.floor(Math.random() * h)));
}
for (var m = 0; m < 100; m++) {
	setTimeout(function () {
		starArray.push(new Star(Math.floor(Math.random() * w), Math.floor(Math.random() * h)));
	}, 10*m);
}

window.requestAnimationFrame(drawIt);

// var checkbox = true;

var lastX = 0;
var lastY = 0;
canvas.onmouseover = function (e) {
	lastX = e.pageX;
	lastY = e.pageY;
};
canvas.onmousemove = Dragging;


function Dragging (e) {
	clearInterval(interval);
	// if(checkbox) {
	// 	checkbox = false;
	// document.onmousemove = null;
	var changeX = (e.pageX - lastX)/60;
	var changeY = (e.pageY - lastY)/60;
	console.log(e.pageX + " : " + e.pageY);
	var interval = setInterval(function () {
		
		if (e.pageX <= lastX && e.pageY <= lastY) {
			for (var i = 0; i < starArray.length; i++) {
				// console.log(i);
				starArray[i].x = starArray[i].x + changeX;
				starArray[i].y = starArray[i].y + changeY;
			}
		}
		else if (e.pageX >= lastX && e.pageY <= lastY) {
			for (var i = 0; i < starArray.length; i++) {
				starArray[i].x = starArray[i].x + changeX;
				starArray[i].y = starArray[i].y + changeY;
			}
		}
		else if (e.pageX >= lastX && e.pageY >= lastY) {
			for (var i = 0; i < starArray.length; i++) {
				starArray[i].x = starArray[i].x + changeX;
				starArray[i].y = starArray[i].y + changeY;
			}
		}
		else if (e.pageX <= lastX && e.pageY >= lastY) {
			for (var i = 0; i < starArray.length; i++) {
				starArray[i].x = starArray[i].x + changeX;
				starArray[i].y = starArray[i].y + changeY;
			}
		}
	},10);
	
	// }
	setTimeout(function () {
		clearInterval(interval);
		// checkbox=true;
		// document.onmousemove = Dragging;
	}, 1200);
	lastX = e.pageX;
	lastY = e.pageY;
};
// setInterval(function () {
// 		starArray.splice(Math.floor(Math.random()*95),3);
// 		// console.log(starArray);
// }, 300);
// setInterval(function () {
// 	starArray.push(new Star(Math.floor(Math.random() * w), Math.floor(Math.random() * h)));
// 	// console.log(starArray);
// }, 100);
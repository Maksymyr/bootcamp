var canvas = document.getElementById('canvas');
var zp = document.getElementById("zp");
var draw = document.getElementById("draw")
var x = 0;
var y = 0;

ctx=canvas.getContext('2d');

draw.onclick = function(){
	console.log(zp.value)

	drawer();
	function drawer(){
		ctx.strokeStyle="red";
	    ctx.lineWidth=2;
	    ctx.fillStyle="blue";	 
	    start((x+60),zp.value);
		/*ctx.fillRect(50, 400, 20, zp.value);*/
		function start(newx, newy){
			console.log(x+" : "+ y);
			console.log(newx+" : "+ newy);
			ctx.moveTo(x,y);
			ctx.lineTo(newx,newy);
			ctx.stroke();
			x = newx;
			y = newy;
		}
	}
}



/*function line(){
    ctx.strokeStyle="red";
    ctx.lineWidth=10;
    ctx.fillStyle="blue";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,50);
ctx.lineTo(300,300);
ctx.lineTo(100,400);
ctx.fillRect(500, 400, 100, 100);
ctx.closePath();
ctx.stroke();
ctx.fill();
}*/



/*var x=300;
var y=300;

function rect(){
    
    ctx.strokeStyle="pink";
ctx.fillStyle="green";
ctx.beginPath();

ctx.strokeRect(x,y,100,100);

x+=10;

}
rect()

var isPath = ctx.isPointInPath(250,250);
console.log(canvas.width, canvas.height)

function Draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);

line();
rect();

}
setInterval(Draw,100);*/
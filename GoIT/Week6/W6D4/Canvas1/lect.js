var canvas = document.getElementById('canvas');

ctx=canvas.getContext('2d');

w = window.innerWidth;
h = window.innerHeight;

var circle={
	x:700,
	y:275,
	fill:function(c){ctx.fillStyle=c},
	draw:function (color){
		this.fill(color);
		ctx.beginPath();
		ctx.arc(this.x,this.y,150,0,Math.PI*2);
		ctx.stroke();
		
		ctx.fill();
	},
	touch:function(x, y){
		var isPath = ctx.isPointInPath(x,y);
		if(isPath){
			console.log(this);
			this.draw('red')}
	}
};
circle.draw('green');

canvas.onclick = function(){
	circle.touch(event.pageX, event.pageY)
};
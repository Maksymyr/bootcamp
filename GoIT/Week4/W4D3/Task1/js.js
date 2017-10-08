
var x=0;//left
var y=200;//top
var stepX=2;
var stepY=2;
function move(){ 
if(x>=550){stepX=-2;x=x+stepX;}
if(x<=0){stepX=2;x=x+stepX;}
if(y>=350){stepY=-2;y=y+stepY;}
if(y<=0){stepY=2;y=y+stepY;}



box.style.left=x+'px';
box.style.top=y+'px';
x=x+stepX;
y=y+stepY;

}
box.onclick=function(){ 
this.style.background="green"}
setInterval(move,10)
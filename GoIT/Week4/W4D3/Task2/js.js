// document.oncontextmenu=function(){ 
// event.preventDefault();
// alert('hello')
// }
/*
document.oncontextmenu=function(){
	alert('no look');
		return false
	}

document.ondblclick=function(){ 
event.preventDefault();

}


document.body.onselectstart=function(){return false};
document.body.onmousedown=function(){return false} ;
document.body.ondblclick=function(){return false} ;

box.onclick=function(){ 
//this.removeAttribute('id');
this.classList.add('width');
setTimeout(color,100)

}

function color(){ 
box.style.background="green"

}

box.addEventListener('transitionend',aa);*/
/*function aa(){alert('hello')}
//box.onclick=null

var a=document.querySelector('a');



function hhh(){ 
event.preventDefault();
alert('hhhhhh')
}



function ggg(){
	alert('gggg')
	
}
a.addEventListener('click',hhh);
a.addEventListener('click',ggg);
*/
/*
var w=0;
box.onmouseover=function(){ 
w=w+300;
this.style.width=w+"px"
}
*/

var left=0;
var t=140;
var x=5;
document.onkeydown=function(e){
e=e||event;//event=event||window.event	
var k=e.keyCode;
console.log(k);
if(k==39){
	block.style.left=left+'px';left=left+x;
	}
	if(k==37){
	block.style.left=left+'px';left=left-x;
	}
	if(k==38){
	block.style.top=t+'px';t=t-x;
	}
	if(k==40){
	block.style.top=t+'px';t=t+x;
	}
	if(k==123){return false}



}
/*
window.onload=function(){
console.dir(event)
}
*/
// var x,y,obj;
// document.onmousemove=function(event){
//
//  x=event.clientX;
//  y=event.clientY;
// block.style.left=x+'px';
// block.style.top=y+'px';
//
//}



	

	
// 	function prov(){ obj=block.getBoundingClientRect();
// 	if(Math.abs(obj.x-x)<=3 &&  Math.abs(obj.y-y)<=3){console.log(x);console.log(obj.x);alert('caught')}
// 	}
//
// setInterval(prov,100)
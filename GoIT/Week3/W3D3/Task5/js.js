// var vq = prompt("quantity of vertical blocks:");
// var gq = prompt("quantity of gorizontal blocks:");
//
// for (var i = 0; i < vq; i++) {
// 	for (var j = 0; j < gq; j++) {
//
// 		var divSize = 50;
// 		var space = 10;
//
//
// 		var div = document.createElement('div');
// 		div.className = "block";
// 		div.style.top = ${divSize*j + space*j}px;
// 		div.style.left = ${divSize*i + space*i}px;
// 		document.body.appendChild(div);
//
//
//
// 	}
// }
//
var xx = prompt('horizontal');
var yy = prompt('vertical');

var main = document.getElementById('main');
// var x = 70*quantityX,
// 	y = 70*quantityY;
// console.log(x);
// container.style.width = `${x}px`;
// container.style.height = `${y}px`;

var size = 50,
	margin = 10;
// container.style.width = '100px';

for (i=0; i<xx; i++) {
	for (j=0; j<yy; j++) {
		
		var block = document.createElement('div');
		block.classList.add('block-style');
		block.style.top = j*size + j*2*margin + 'px';
		block.style.left = i*size + i*2*margin + 'px';
		main.appendChild(block);
		
		// var outerCubic = document.createElement('div');
		// outerCubic.classList.add('cubic-outer');
		// outerCubic.style.top = `-${margin}px`;
		// outerCubic.style.left = `-${margin}px`;
		// innerCubic.appendChild(outerCubic);
		
		
	}
	
}
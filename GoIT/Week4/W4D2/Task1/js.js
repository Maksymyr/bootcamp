var menu = document.getElementById('menu');
var menu2 = document.getElementById('menu2');

for (var i = 0; i < 5; i++) {
		var li = document.createElement('li');
		li.classList.add('block-style');
		menu.appendChild(li);
}

var spec = menu.children[3];
spec.style.backgroundColor = 'green';

spec.onclick = open;

function open () {
	var lim = menu.children.length;
	for (var i = 0; i < lim; i++) {
		menu.lastChild.remove();
	}
	for (var i = 0; i < 13; i++) {
		var li = document.createElement('li');
		li.classList.add('block-style');
		menu2.appendChild(li);
	}
	var spec2 = menu2.lastChild;
	spec2.style.backgroundColor = 'green';
}

//
//
// spec2.onclick = open2;
//
// function open2() {
// 	menu2.remove();
// }


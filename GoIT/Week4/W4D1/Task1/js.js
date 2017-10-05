/*
с помощью джава скрипта создайте в боди список ol> li> button.
*/
var main = document.getElementById('container');

var ol = document.createElement('ol');
main.appendChild(ol);

for (var i = 0; i < 3; i++) {
	var li = document.createElement('li');
	li.style.backgroundColor = 'red';
	ol.appendChild(li);
}

for (var i = 0; i < 3; i++) {
	var button = document.createElement('button');
	button.style.backgroundColor = 'black';
	ol.children[i].appendChild(button);
}


/*
Задача 9. Вывести превернутую пирамидку:
****
***
**
*
высота пирамидки задается в инпуте
*/
var container = document.getElementById('container');
var inp = document.getElementById('in');
var but = document.getElementById('but');
but.onclick = function () {
	for (var i = inp.value; i >= 1; i--) {
		for (var j = i; j > 0; j--) {
			var span = document.createElement('span');
			span.innerHTML = "*";
			container.appendChild(span);
		}
		var br = document.createElement('br');
		container.appendChild(br);
	}
}

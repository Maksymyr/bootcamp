/*
Задача 8. вывести на екран пирамидку:
*
**
***
высота пирамидки задается в инпуте
*/
var container = document.getElementById('container');
var inp = document.getElementById('in');
var but = document.getElementById('but');
but.onclick = function () {
	for (var i = 1; i <= inp.value; i++) {
		for (var j = 0; j < i; j++) {
			var span = document.createElement('span');
			span.innerHTML = "*";
			container.appendChild(span);
		}
		var br = document.createElement('br');
		container.appendChild(br);
	}
}

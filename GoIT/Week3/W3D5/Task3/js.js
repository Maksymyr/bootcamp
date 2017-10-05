/*
Задача 3. Вводите в инпут значение, отобразите
это значение как значение другого инпута.
*/


var elem = document.getElementById('elem');

elem.onclick = function () {
	var input = document.getElementById('in').value;
	var input2  = document.getElementById('in2');
	input2.value = input;
}

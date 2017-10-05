/*
Задача 2. Вводите в инпут число.
Вывоите на страницу указаное количество тегов див .
*/


var elem = document.getElementById('elem');

elem.onclick = function () {
	var input = document.getElementById('in').value;
	var main = document.getElementById('container');
	for (var i = 0; i < input; i++) {
		var block = document.createElement('div');
		block.classList.add('block-style');
		block.innerHTML = "text";
		main.appendChild(block);
	}
}

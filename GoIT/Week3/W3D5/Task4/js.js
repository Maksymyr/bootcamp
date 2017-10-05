/*
Задача 4. Задайте в js <div> position :absolute ,
создайте два инпута и кнопку . Вводите в инпут числа
(координаты top & left) при нажатии отображайте блок
в указаных координатах.
*/
var main = document.getElementById('container');
var elem = document.getElementById('elem');
var block = document.createElement('div');
block.style.position = "absolute";
block.style.width = "50px";
block.style.height = "50px";
block.style.backgroundColor = "red";
block.innerHTML = "text";
main.appendChild(block);

elem.onclick = function () {
	block.style.top = document.getElementById('in').value + "px";
	block.style.left = document.getElementById('in2').value + "px";
}

/*
Задача 5. При нажатии на div меняйте его цвет
с красного на зеленый, при втором нажатии меняйте цвет обратно.
*/
var main = document.getElementById('container');
var block = document.createElement('div');
block.style.width = "50px";
block.style.height = "50px";
block.style.backgroundColor = "red";
main.appendChild(block);

block.onclick = function () {
	if (block.style.backgroundColor == "red") {
		block.style.backgroundColor = "green"; }
	else {
		block.style.backgroundColor = "red"; }
}

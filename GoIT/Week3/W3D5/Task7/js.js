/*
Задача 7. наполните массив 10  цветами. при нажатии на
блок окрашивайте его в цвет из массива. цвет из массива
выбирается случайно. Цвет не должен повторятся пока не
переберем весь массив цветов.
*/
var color = ['red','green','blue','gold','black', 'pink', 'silver', 'yellow', 'brown', 'orange'];
var main = document.getElementById('container');
var block = document.createElement('div');
block.style.width = "50px";
block.style.height = "50px";
block.style.backgroundColor = 'red';
main.appendChild(block);
var count = 0;
var arrayOfIndex = [0];

block.onclick = function () {
	if (arrayOfIndex.length == 10)
		arrayOfIndex = [0];
	else {
		count = random();
		arrayOfIndex.push(count);
	}
	block.style.backgroundColor = color[count];
}
function random () {
		var r = Math.floor(Math.random()*color.length);
		var result;
		for (var i = 0; i < arrayOfIndex.length; i++) {
			if (r == arrayOfIndex[i]) {
				break;
			}
			else {
				if (i == arrayOfIndex.length - 1) {
					result = r;
				}
			}
		}
		if (!!result)
			return result;
		else
			return random();
}
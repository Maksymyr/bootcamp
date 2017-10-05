/*
Задача 6. нажимайте на див и окрашивайте его в цвет указаный
в масиве var color=['red','green','blue','gold','black'], по очередно.
По окончанию массива начинайте с первого.
*/
var color = ['red','green','blue','gold','black'];
var main = document.getElementById('container');
var block = document.createElement('div');
block.style.width = "50px";
block.style.height = "50px";
block.style.backgroundColor = "red";
main.appendChild(block);
var count = 0;


	block.onclick = function () {
		if (count == 4)
			count = 0;
		else
			count++;
		block.style.backgroundColor = color[count];
		
}

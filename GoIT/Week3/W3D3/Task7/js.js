/*Задача на использование флагов. Дан массив с числами.
Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть - выведите 'да', а если нет - выведите 'нет'
*/
var a =+ prompt("Enter array length:");
var min =+ prompt("Enter min for array:");
var max =+ prompt("Enter max for array:");
var arr = new Array(a);


for (var i = 0; i < arr.length; i ++) {
	arr[i] = randomInteger(min, max);
}
alert(arr);
var no = 0;
for (var i = 0; i < arr.length-1; i++) {
	
	if (arr[i]==arr[i+1]) {
		alert('YEA!');
		no++;
		break;
	}
}
	
	if (no == 0) {
		alert('NO-O-O!');
}

function randomInteger(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}



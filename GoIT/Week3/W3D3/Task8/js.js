/*
задача на массивы Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
*/

var p =+prompt("enter num from 1-7");
if(p >= 1 && p <= 7){
	alert(Something(p));
}
else{
	alert("enter smaller number");
}


function Something(day) {
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	return week[day - 1];
}

/*
задача на двумерный масив Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
*/

var array = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
for (var i = 0; i < array.length; i++) {
	for (var j = 0; j < array[i].length; j++) {
		sum = sum + array[i][j];
	}
}

alert(sum);
/*
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
*/

var num = [1, 2, 3, 4, 5, 6];

var sum2 = 0;

for (var i = 0; i < num.length; i++) {
	sum2 = sum2 + num[i];
}

alert(sum2);
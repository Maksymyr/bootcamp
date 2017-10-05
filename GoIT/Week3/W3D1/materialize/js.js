/*Задача №1*/

var a = "a1";

if (isNaN(a)) {
	console.log("not a number");
}
else {
	console.log("number");
}

/*
Задача №2
Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
	Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите
в переменную result. Выведите на экран значение переменной result.
	*/
var x = 17;
var y = 10;

var z = x-y;
var q = 7;
var result = z+q;
 console.log(result);

// Задача №3
// Введите 2 числа , найдите большее.

var f = prompt("first number", 1);
var h = prompt("second number", 2);
if (f > h) {
	console.log("max is " + f);
}
else {
	console.log("max is " + h);
}

// Задача №4
// Введите 3 числа найдите большее и меншее из них.

var n1 = prompt("first number", 1);
var n2 = prompt("second number", 2);
var n3 = prompt("third number", 3);


console.log("max = " + (n1 > n2 & n1 > n3 ? n1 : ((n2 > n3) ? n2 : n3)) + " min = " + (n1 < n2 & n1 < n3 ? n1 : ((n2 < n3) ? n2 : n3)));

/*
Задача №5
В переменной min лежит число от 0 до 59.
Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
*/

var min = prompt("minute", 60);

if ((min >= 0) & (min <= 15)) {
	alert("1");
}
else if ((min > 15) & (min <= 30)) {
	alert("2");
}
else if ((min > 30) & (min <= 45)) {
	alert("3");
}
else if ((min > 45) & (min < 60)) {
	alert("4");
}
else {
	alert("not in interval 0-60!")
}



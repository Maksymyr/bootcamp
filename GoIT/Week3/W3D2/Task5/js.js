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



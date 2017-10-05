/*Задача №1
Переменная num может принимать 4 значения: 1, 2, 3 или 4.
Если она имеет значение '1', то в переменную result запишем
'зима', если имеет значение '2' – 'весна' и так далее.
Решите задачу через switch-case.*/

var num = prompt("от 1 до 4", 0);

// switch (num) {
// 	case '1' :
// 		alert('winter');
// 		break;
// 	case '2' :
// 		alert('spring');
// 		break;
// 	case '3' :
// 		alert('summer');
// 		break;
// 	case '4' :
// 		alert('autumn');
// 		break;
// }

if (num == 1) {
	alert('winter');}
else if (num == 2) {
	alert('spring');}
else if (num == 3){
	alert('summer');}
else if (num == 4){
	alert('autumn');}
else {
	alert('not a season');}
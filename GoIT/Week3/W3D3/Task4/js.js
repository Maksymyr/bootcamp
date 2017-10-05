/*Задача №3
Даны два массива. Объедините их вместе.. */

var arr = ['a', 'b', 'c'];
var num = [1, 2, 3, 4, 5];

var len = arr.length;

for (var i = 0; i < num.length; i++) {
		arr[i+len] = num[i];
}

alert(arr);
// (arr.length > num.length) ? arr.length : num.length
/*Задача №3
1) создать функцию, которая создает массив с указанной длиной и случайными элементами,
для которых указывается минимальное и максимальное значение.
2) с помощью функции, которая уже существует, нужно написать третью функцию,
которая может найти совпадение элементов(умеет их проверять). Когда
совпадающий элемент найден - указывает, что это за элемент. Можно еще для
каждого указать индекс, под которым она была найдена. Так же можно указать количество раз. */

var a =+ prompt("Enter array #1 length:");
var b =+ prompt("Enter array #2 length:");
var min =+ prompt("Enter min for array #1:");
var max =+ prompt("Enter max for array #1:");
var min2 =+ prompt("Enter min for array #2:");
var max2 =+ prompt("Enter max for array #2:");

var arr = new Array(a);
var arr2 = new Array(b);


for (var i = 0; i < arr.length; i ++) {
	arr[i] = randomInteger(min, max);
	}
for (var i = 0; i <arr2.length; i++) {
	arr2[i] = randomInteger(min2, max2);
}

console.log(arr);
console.log(arr2);


for (var i = 0; i < arr.length; i++) {
	var dd = 0;
	var inner = new Array(0);
	for (var j = 0; j < arr2.length; j++) {
		if (arr[i] == arr2[j]) {
			dd++;
			inner[inner.length] = j+1;
		}
	}
	if (dd > 0) {
		alert("\"" + arr[i]  + "\" element #" + (i+1) + " from arr #1 has " + dd + " times repeat in array #2 (elements #" + inner + ")");
		
	}
}





function randomInteger(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

/*
Задача1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
*/
var a = [1, 2, 3];
var b = [4, 5, 6];

alert(a.concat(b));

/*
Задача2     Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
*/

var a2 = [1, 2, 3];
var b2 = [4, 5, 6];

for (var i = 0; i < b2.length; i++) {
	a2.push(b2[i]);
}

alert(a2);

/*
Задача3  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
*/

var a3 = [1, 2, 3];
var b3 = [4, 5, 6];

for (var i = b3.length-1; i >= 0 ; i--) {
	
	a3.unshift(b3[i]);
}

alert(a3);

/*
Работа с shift, pop
*/
/*
Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
*/

var sp = ['js', 'css', 'jq'];
alert(sp.shift());

/*
Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
*/

alert(sp.pop());

/*
Задача4     Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
*/

var a4 = [1, 2, 3, 4, 5];
var b4 = a4.slice(0,3);
alert(b4);

/*
Задача5 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
*/

var a5 = [1, 2, 3, 4, 5];
var b5 = a5.slice(3);
alert(b5);

/*
Работа с splice
*/
/*
Задача 6 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
*/

var a6 = [1, 2, 3, 4, 5];
var b6 = a6.splice(1, 2);
alert(a6);

/*
Задача 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
*/

var a7 = [1, 2, 3, 4, 5];
var b7 = a7.splice(1, 3);
alert(b7);

/*
Задача 8 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/

var a8 = [1, 2, 3, 4, 5];
a8.splice(3, 0, 'a', 'b', 'c');
alert(a8);


/*
Задача 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
*/

var a9 = [1, 2, 3, 4, 5];
a9.splice(1, 0, 'a', 'b');
a9.splice(6, 0, 'c');
a9.splice(8, 0, 'e');
alert(a9);

/*
Задача 10     Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
*/

a10 = [3, 4, 1, 2, 7];
alert(a10.sort());


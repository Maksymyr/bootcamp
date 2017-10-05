// Задача №4
// Введите 3 числа найдите большее и меншее из них.

var n1 = prompt("first number", 1);
var n2 = prompt("second number", 2);
var n3 = prompt("third number", 3);


alert(«max = " + (n1 > n2 & n1 > n3 ? n1 : ((n2 > n3) ? n2 : n3)) + " min = " + (n1 < n2 & n1 < n3 ? n1 : ((n2 < n3) ? n2 : n3)));

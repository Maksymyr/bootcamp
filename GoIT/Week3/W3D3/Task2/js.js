/*Задача № */
var a =+ prompt("__");
var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var array2 = new Array(2, 4, 6, 8, 10);
var array3 = new Array(1, 3, 5, 7, 9);
var array4 = new Array(3, 6, 9);
search(array, a);
search(array2, a);
search(array3, a);
search(array4, a);

function search (arrName, itemName) {
	var l=0;
	for (var i= 0; i < arrName.length; i++) {
		if (arrName[i] == itemName) {
			alert("element " + arrName[i] + " is # " + i + " in array " + arrName);
			l=1
		}
	}
	
	if (l == 0) {
		alert("no such element in array " + arrName);
	}
}
/*Задача №5
Дан массив
var m =[{“mts”: “+38050556677”, “life”: “+093445566”}, {“mts”: “+38050665544”, “life”: “+093112233”} ]
С помощью цикла for выведите на экран все телефоны mts. Затем, все life и mts.
*/
var m =[{"mts": "+38050556677", "life": "+093445566"}, {"mts": "+38050665544", "life": "+093112233"} ];

for (var i = 0; i < m.length; i++) {
	alert("mts is: " + m[i].mts);
	alert("life is: " + m[i].life);
	
}


/*
Задание 6
Дан массив
var m ={
“phone1” : {“mts”: “+38050556677”, “life”: “+093445566”},
“phone2”: {“mts”: “+38050665544”, “life”: “+093112233”}
}
С помощью цикла for выведите на экран все телефоны mts.
Затем, все life и mts.
*/

var m2 ={
"phone1" : {"mts": "+38050556677", "life": "+093445566"},
"phone2": {"mts": "+38050665544", "life": "+093112233"}
};

for (var i in m2) {
	alert("mts is: " + m2[i].mts);
	alert("life is: " + m2[i].life);
}

/*
Задание 7
Дан массив
var m =[[ “+38050556677”, “+093445566”], [ “+38050665544”, “+093112233”]]
С помощью цикла for выведите на экран все телефоны.
 */

var m3 =[["+38050556677", "+093445566"], ["+38050665544", "+093112233"]];
Fun(m3);

function Fun(array) {
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			Fun(array[i]);
		}
		else {
			alert(array[i]);
		}
	}
}

	
	

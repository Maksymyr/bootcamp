var numRand = [];
var fontSizeRand = [];
var colorRand = [];
var number = '';
/* Генеруємо рандомний масив кольорів colorRand */
function runColor(){
	for (var a=['red','green','blue','gold','black','red','green','blue','gold','black','lime','brown','pink','indigo','peach-puff','red','green','blue','gold','black','lime','brown','pink','indigo','peach-puff'], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	colorRand.push(random);
	}
	
}
runColor();

/* Генеруємо рандомний масив висоти шрифтів runFontSize */
function runFontSize(){
	for (var a=[40,38,18,20,22,24,26,28,30,32,34,40,38,18,20,22,24,26,28,30,32,34,36,38,40], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	fontSizeRand.push(random);
	}
}
runFontSize();

/* Генеруємо рандомний масив чисел */
function runNumRand(){
	for (var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	numRand.push(random);
	}
}
runNumRand();

/* Створюємо блоки та запихуємо туди цифри */
for(i=0;i<numRand.length;i++){
		number += '<div id="'+i+'" class="numHolder">'; // добавила еще и класс, чтобы мне в коде легче было цеплять
	// событие
		number += '<p>'+numRand[i]+'</p>';
		number += '</div>';
}
document.getElementById('wrap').innerHTML = number;

/* Змінюємо властивості блоків по кольору та висоті шрифту */
for(i=0;i<colorRand.length;i++){
	var a = document.getElementById(''+i+'');
	a.style.color = ''+colorRand[i]+'';	
	a.style.fontSize = ""+fontSizeRand[i]+"px";	
}


// Maya's code

var numHolders = document.getElementsByClassName("numHolder");// берем класс
for(var i=0; i<numHolders.length; i++){
	numHolders[i].addEventListener("click", function () { // далее будем использовать this
        var minNumber = Math.min.apply(null, numRand);// нашли минимальное значение массива, т.к он перемешан уже
        var clickedNumber = +this.firstChild.innerHTML; //взяли текст внутри p
        if(minNumber === clickedNumber){ // сравниваем минимальное число, которое вывели раньше, с числом, которое
			// нажали
        	var numIndex = numRand.indexOf(clickedNumber); // выводим индекс нажатого числа
            numRand.splice(numIndex, 1); //вырезаем после нажатия, чтобы не повторялось
            this.style.backgroundColor = "#b2dfdb";
        }
        else{
            this.style.backgroundColor = "#ffab91";
        }
        console.log(numRand);
    });
}
// Maya's code ends


console.log(numRand);
console.log(colorRand);
console.log(fontSizeRand);


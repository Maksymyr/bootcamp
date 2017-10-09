/* Однорукий код */
var col1=document.getElementById('col-1'),
col2=document.getElementById('col-2'),
col3=document.getElementById('col-3'),
wrap=document.getElementById('main-wrapper'),
line = document.getElementsByClassName('line'),

bonusForLine = 1,
wallet = 2000,
prize = 0,
index_gen_count = 0,
last_index = [],
visualCounting1 = false,
visualCounting2 = true,

rateInp = document.getElementById('rate'),
rate = 100;
rateInp.value = 100;
rateInp.oninput = function() {
	rate = parseInt(rateInp.value);
	if (!rate)
		rate = 1;
	rateInp.value = rate;
};

var inp = document.getElementById('money');
inp.value = wallet;

var inp2 = document.getElementById('wallet');
inp2.value = prize;

var array1 = array_creating(), array2 = array_creating(), array3 = array_creating();

item_creating(col1, array1);
item_creating(col2, array2);
item_creating(col3, array3);

var button = document.getElementById('start');
var checkpoint = true;
var gameOver = false;
var checkLine = true;

/* Кнопка "Ставка максимум" */

var button1 = document.getElementsByClassName('btn');
button1[0].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		rate = wallet+prize;
		rateInp.value = rate;
	checkpoint = true;
	}
};

/* Кнопка "Все линии" */

var button2 = document.getElementsByClassName('btn');
button2[1].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		checkLine = true;
		checkpoint = true;
		bonusForLine = 1;
		for (var i = 0; i < 2; i++) {
			line[i].style.display = 'none';
		}
	}
};
/* Кнопка "Одна линия" */

var button3 = document.getElementsByClassName('btn');
button3[2].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		checkLine = false;
		checkpoint = true;
		bonusForLine = 15;
		var line = document.getElementsByClassName('line');
		for (var i = 0; i < 2; i++) {
			line[i].style.display = 'block';
		}
	}
};

/* Кнопка "Стол рассчет" */

var button4 = document.getElementsByClassName('btn');
button4[3].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		wallet = 0;
		inp.value = wallet;
		rate = 0;
		rateInp.value = rate;
	}
};

/* Кнопка "Ставка минимум" */

var button5 = document.getElementsByClassName('btn');
button5[4].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		rate = 1;
		rateInp.value = rate;
		checkpoint = true;
	}
};

/* Кнопка "Переключение скорости начисления баллов" */

var button6 = document.getElementsByClassName('black-btn');
button6[0].onclick = function () {
	if (checkpoint && !gameOver) {
		checkpoint = false;
		if (!visualCounting1) {
			visualCounting1 = true;
			visualCounting2 = false;
		}
		else if (!visualCounting2) {
			visualCounting1 = false;
			visualCounting2 = true;
		}
		checkpoint = true;
	}
};

/* Кнопка "Все линии" */
/* Кнопка "Вертим" */

button.onclick = function () {
	
	if (checkpoint && !gameOver) {
		checkpoint = false;
		if (rate <= 0) {
			rate = 1;
			rateInp.value = 1;
		}
		if (rate > 1000 && (rate !== wallet+prize)) {
			rate = 1000;
			rateInp.value = 1000;
		}
		if (rate > wallet) {
			rate = wallet+prize;
			rateInp.value = rate;
		}
		wallet += prize;
		prize = 0;
		wallet -= rate;
		inp.value = wallet;
		inp2.value = 0;
		
		var index1 = random_index();
		var index2 = random_index();
		var index3 = random_index();
		
		max_counts(array1, array2, array3, index1, index2, index3);
		
		var delay_for_count = 4000;
		if (prize > 0) {
			delay_for_count = TimeCount();
			Counting();
		}
		

		Animate(index1, col1);
		Animate(index2, col2);
		Animate(index3, col3);
		setTimeout(function () {
			checkpoint = true;
			if (wallet+prize <= 0) {
				var red = document.createElement('div');
				red.className = 'red';
				red.innerHTML = "GAME OVER!";
				wrap.appendChild(red);
				col1.style.display = 'none';
				col2.style.display = 'none';
				col3.style.display = 'none';
				for (var i = 0; i < 2; i++) {
					line[i].style.display = 'none';
				}
				gameOver = true;
			}
		}, delay_for_count);
	}
};

/* Анимация прокрутки */

function Animate(index, col){
	var t = 0;
	if(t<-2240) {
		t=index*(-70);
	}
	else
		t=index*(-70);
	col.firstElementChild.style.marginTop=t+"px";
	
}

 /* Функции генерации массивов и их элементов */

function item_creating(father, array) {
    for (var i = 0; i < 32; i++) {
        var block = document.createElement('div');
        block.className = 'arr';
        block.style.backgroundImage = "url(images/" + array[i] + ".png)";
        father.appendChild(block);
    }
}

function array_creating(){
    var array = [];
    for (var a=[8,7,3,4,5,6,7,8,8,7,6,5,4,3,2,1,5,6,7,8,4,3,2,8,1,2,3,4,5,6,7,8], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        array.push(random);
    }
    console.log(array);
    return array;
}

	/* Функции генерации рандомных индексов для выборки из массивов */
		
function random_index() {
	index_gen_count++;
	var index = 0;
	if (last_index.length > 3) {
		index = index_new();
	}
	else {
		index = index_new();
		// index = Math.floor(Math.random() * 29);
		// if (index === 0) {
		// 	index = Math.floor(Math.random() * 29);
		// }
	}
	function index_new () {
		index = Math.floor(Math.random() * 29);
		if (index === last_index[last_index.length-3]) {
			index = index_new();

		}
		else if (index === 0) {
			index = index_new();
	
		}
		return index;
	}
	last_index.push(index);
	return index;
}

 /* Функция расчет выигрыша */

function max_counts(ar1, ar2, ar3, i1, i2, i3) {
	
	/* Выборка из массивов элементов, которые выпали на табло */
	
	var
		a1 = ar1[i1],     a2 = ar2[i2],     a3 = ar3[i3],     // первый ряд
		b1 = ar1[i1 + 1], b2 = ar2[i2 + 1], b3 = ar3[i3 + 1], // второй ряд
		c1 = ar1[i1 + 2], c2 = ar2[i2 + 2], c3 = ar3[i3 + 2]; // третий ряд
	
	/* Переборка всех возможных выиграшных коомбинаций */
	
	if (a1 === a2 && a2 === a3 && checkLine) {
		prize = prize + Math.floor(max_score(a1));
		var hr = document.getElementById('hor3-1');
		stickAnim(hr);
	}
	if (b1 === b2 && b2 === b3) {
		prize = prize + Math.floor(max_score(b1));
		var hr2 = document.getElementById('hor3-2');
		stickAnim(hr2);
	}
	if (c1 === c2 && c2 === c3 && checkLine) {
		prize = prize + Math.floor(max_score(c1));
		var hr3 = document.getElementById('hor3-3');
		stickAnim(hr3);
	}
	if (a1 === b2 && b2 === c3 && checkLine) {
		prize = prize + Math.floor(max_score(a1));
		var hr4 = document.getElementById('diag1');
		stickAnim(hr4);
	}
	if (c1 === b2 && b2 === a3 && checkLine) {
		prize = prize + Math.floor(max_score(c1));
		var hr5 = document.getElementById('diag2');
		stickAnim(hr5);
	}
	if ((a1 === a2) && (a3 !== a1) && checkLine) {
		prize = prize + Math.floor(max_score_small(a1));
		var hr6 = document.getElementById('hor12-1');
		stickAnim(hr6);
	}
	if ((a2 === a3) && (a1 !== a2) && checkLine) {
		prize = prize + Math.floor(max_score_small(a2));
		var hr7 = document.getElementById('hor23-1');
		stickAnim(hr7);
	}
	if ((b1 === b2) && (b3 !== b1)) {
		prize = prize + Math.floor(max_score_small(b1));
		var hr8 = document.getElementById('hor12-2');
		stickAnim(hr8);
	}
	if ((b2 === b3) && (b1 !== b2)) {
		prize = prize + Math.floor(max_score_small(b2));
		var hr9 = document.getElementById('hor23-2');
		stickAnim(hr9);
	}
	if ((c1 === c2) && (c3 !== c1) && checkLine) {
		prize = prize + Math.floor(max_score_small(c1));
		var hr10 = document.getElementById('hor12-3');
		stickAnim(hr10);
	}
	if ((c2 === c3) && (c1 !== c3) && checkLine) {
		prize = prize + Math.floor(max_score_small(c2));
		var hr11 = document.getElementById('hor23-3');
		stickAnim(hr11);
	}
	if ((c1 === b2) && (b2 !== a3) && checkLine) {
		prize = prize + Math.floor(max_score_small(c1));
		var hr12 = document.getElementById('diag2_12');
		stickAnim(hr12);
	}
	if ((b2 === a3) && (c1 !== a3) && checkLine) {
		prize = prize + Math.floor(max_score_small(b2));
		var hr13 = document.getElementById('diag2_23');
		stickAnim(hr13);
	}
	if ((a1 === b2) && (b2 !== c3) && checkLine) {
		prize = prize + Math.floor(max_score_small(a1));
		var hr14 = document.getElementById('diag1_12');
		stickAnim(hr14);
	}
	if ((b2 === c3) && (b2 !== a1) && checkLine) {
		prize = prize + Math.floor(max_score_small(b2));
		var hr15 = document.getElementById('diag1_23');
		stickAnim(hr15);
	}
	/*дополнительние диагонали*/
	// if (b1 == a2) {
	// 	wallet = wallet + max_score_small(b1);
	// 	var hr16 = document.getElementById('diag1_1');
	// 	stickAnim(hr16);
	// }
	// if (a2 == b3) {
	// 	wallet = wallet + max_score_small(a2);
	// 	var hr17 = document.getElementById('diag1_2');
	// 	stickAnim(hr17);
	// }
	// if (b3 == c2) {
	// 	wallet = wallet + max_score_small(b3);
	// 	var hr18 = document.getElementById('diag1_3');
	// 	stickAnim(hr18);
	// }
	// if (c2 == b1) {
	// 	wallet = wallet + max_score_small(c2);
	// 	var hr19 = document.getElementById('diag1_4');
	// 	console.log(hr19);
	// 	stickAnim(hr19);
	// }
}

/* Функция анимация победивших комбинаций */

function stickAnim (stick) {
	setTimeout(function(){
		var timer = setInterval(function(){
			stick.classList.toggle('stick-block');
		},240);
		setTimeout(function(){
			clearInterval(timer);
		},1000)
		
	},3000)
	
}

/* Функция рассчет выигрыша за тип комбинации
max_score - за тройную комбинацию
max_score_small - за двойную комбинацию
 */

function max_score(num) {
    var value = 0;
    switch(num) {
        case 1:value = 50*rate;break;
        case 2:value = 35*rate;break;
        case 3:value = 30*rate;break;
        case 4:value = 20*rate;break;
        case 5:value = 15*rate;break;
        case 6:value = 12*rate;break;
        case 7:value = 10*rate;break;
        case 8:value = 5*rate;break;
    }
    return value*bonusForLine;
}
function max_score_small(num) {
    var value = 0;
    switch(num) {
        case 1:value = rate*1.2;break;
        case 2:value = rate*0.8;break;
        case 3:value = rate*0.6;break;
        case 4:value = rate*0.4;break;
        case 5:value = rate*0.3;break;
        case 6:value = rate*0.2;break;
        case 7:value = rate*0.1;break;
        case 8:value = rate*0.08;break;
    }
    return value*bonusForLine;
}

 /* Алгоритм расчета задержки для начисления очков */

function TimeCount() {
	var delay = 4000;
	
	/* Алгоритм №1 - по единицам, медленнее */
	
	if (visualCounting1) {console.log('1');
			var fff = prize;
			var capacity = fff.toString().length;
			var timeCount = fff;
			var setTime = 0;
			while (capacity > 1) {
				setTime += Math.floor(timeCount / Math.pow(10, capacity - 1));
				timeCount = timeCount % Math.pow(10, capacity - 1);
				capacity--;
			}
			setTime = (setTime + timeCount) * 100;
			delay += setTime + 700;
	}
	
	/* Алгоритм №2 - по разрядам, быстрее */
	
	if (visualCounting2) {console.log('2');
		delay += prize*4 + 700;}
	console.log(delay);
	return delay;
}

/* Алгоритм визуализации начисления очков */

function Counting() {
	var getPrize = 0;
	inp2.value = getPrize;
	/* Алгоритм №1 - по единицам, медленнее */
	if (visualCounting1) {
		setTimeout(function () {
			var counting = setInterval(function () {
				if (getPrize <= prize - 1000) {
					getPrize += 1000;
					inp2.value = getPrize;
				}
				else if (getPrize <= prize - 100) {
					getPrize += 100;
					inp2.value = getPrize;
				}
				else if (getPrize <= prize - 10) {
					getPrize += 10;
					inp2.value = getPrize;
				}
				else if (getPrize < prize) {
					getPrize++;
					inp2.value = getPrize;
				}
				else
					clearInterval(counting);
			}, 100);
			var getWallet = wallet;
			inp.value = getWallet;
			var walletCounting = setInterval(function () {
				if (getWallet <= wallet + prize - 1000) {
					getWallet += 1000;
					inp.value = getWallet;
				}
				else if (getWallet <= wallet + prize - 100) {
					getWallet += 100;
					inp.value = getWallet;
				}
				else if (getWallet <= wallet + prize - 10) {
					getWallet += 10;
					inp.value = getWallet;
				}
				else if (getWallet < wallet + prize) {
					getWallet++;
					inp.value = getWallet;
				}
				else
					clearInterval(walletCounting);
			}, 100);
		}, 4000);
	}
	
	/* Алгоритм №2 - по разрядам, быстрее */
	
	if (visualCounting2) {
		setTimeout(function () {
			var counting = setInterval(function () {
				if (getPrize < prize) {
					getPrize++;
					inp2.value = getPrize;
				}
				else
					clearInterval(counting);
			}, 1);
			
			var getWallet = wallet;
			inp.value = getWallet;
			var walletCounting = setInterval(function () {
				if (getWallet < wallet + prize) {
					getWallet++;
					inp.value = getWallet;
				}
				else
					clearInterval(walletCounting);
			}, 1);
		}, 4000);
	}
}



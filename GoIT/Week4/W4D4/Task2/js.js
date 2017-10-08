var h = 0;
var w = 0;
var flag = 0;
var check = true;
var lim = 3;

var box = document.getElementById('block');
var inp = document.getElementById('inp');

var colors = ['red', 'blue', 'yellow', 'green', 'black', 'grey', 'pink', 'orange', 'violet', 'purple'];

box.onmousemove= function() {
	inp.value = event.clientX + ':' + event.clientY;
	h = event.clientY;
	w = event.clientX;
}

	box.onclick = function () {
		if (check) {
			var d = document.createElement('div');
			d.classList.add('style');

			d.style.top = h - 15 + 'px';
			d.style.left = w - 15 + 'px';
			d.style.backgroundColor = colors[Math.floor(Math.random()*10)];
			box.appendChild(d);
			flag++;
			if (flag >=100)
				check = false;
		}
	}

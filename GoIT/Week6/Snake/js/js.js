side = 30;
wrap = document.getElementById('wrap');
wrap.style.width = side * 20 + 'px';
wrap.style.height = side * 20 + 'px';
creatingOfNet();

snake = document.createElement('div');
snake.setAttribute("id", "snake");
document.getElementsByClassName("blockNet")[side*(side+1)/2].appendChild(snake);



function creatingOfNet(){
	var colClass = 1;
	var rowClass = 1;
	for(var i = 1; i < side*side+1; i++) {
		var block = document.createElement('div');
		block.classList.add('blockNet', 'col' + colClass, 'row' + rowClass);
		colClass++;
		if (colClass > side) {
			colClass = 1;
			rowClass++;
		}
		wrap.appendChild(block);
	}
}
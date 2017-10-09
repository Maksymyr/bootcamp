var buttonTask = document.getElementById('addTask'),
inputTask = document.getElementById('textTask'),
wrap = document.getElementById('fastTask'),
taskNum = 1;

buttonTask.onclick = function () {
	var task = document.createElement('div');
	task.classList.add('tasks');
	task.setAttribute('number', ""+ taskNum);
	wrap.appendChild(task);
	var li = document.createElement('li');
	li.classList.add('taskLi');
	li.innerHTML = inputTask.value;
	inputTask.value = "";
	task.appendChild(li);
	
	var btn1 = document.createElement('button');
	btn1.classList.add('btn1');
	btn1.setAttribute('number', ""+ taskNum);
	btn1.onclick = TaskDelete;
	task.appendChild(btn1);
	var btn2 = document.createElement('button');
	btn2.classList.add('btn2');
	btn2.setAttribute('number', ""+ taskNum);
	btn2.onclick = TaskEdit;
	task.appendChild(btn2);
	var btn3 = document.createElement('button');
	btn3.classList.add('btn3');
	btn3.setAttribute('number', ""+ taskNum);
	btn3.onclick = TaskDone;
	task.appendChild(btn3);

	
	taskNum++;
};
// var btns1 = document.getElementsByClassName('btn1');
// for (var i = 0; i < btns1.length; i++) {
// 	btns1[i].onclick = TaskDeleting;
// }

function TaskDelete() {
	console.log(this.getAttribute('number'));
	var divs = document.getElementsByClassName('tasks');
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].getAttribute('number') === this.getAttribute('number')) {
			divs[i].style.backgroundColor = 'red';
			setTimeout( function () {
				divs[i].remove();
			}, 1000);
			break;
		}
	}
}

function TaskEdit() {
		console.log(this.getAttribute('number'));
		var divs = document.getElementsByClassName('tasks');
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute('number') === this.getAttribute('number')) {
				divs[i].style.backgroundColor = 'yellow';
				var taskRedact = divs[i].firstChild.innerHTML;
				divs[i].firstChild.innerHTML = '';
				var textArea = document.createElement('textarea');
				textArea.classList.add('taskLiEdit');
				textArea.setAttribute('autofocus', true);
				textArea.style.resize = 'none';
				divs[i].firstChild.appendChild(textArea);
				textArea.value = taskRedact;
				var btnForEditOk = document.createElement('button');
				var btnForEditNo = document.createElement('button');
				btnForEditNo.classList.add('btnforeditno');
				btnForEditOk.classList.add('btnforeditok');
				divs[i].append(btnForEditOk, btnForEditNo);
				this.onclick = null;
				btnForEditNo.onclick = function () {
					textArea.value = taskRedact;
					SubmitEdit();
				};
				btnForEditOk.onclick = SubmitEdit;
				function SubmitEdit () {
					var newTask = textArea.value;
					textArea.remove();
					divs[i].style.backgroundColor = 'whitesmoke';
					divs[i].firstChild.innerHTML = newTask;
					btnForEditOk.remove();
					btnForEditNo.remove();
					divs[i].children[2].onclick = TaskEdit;
				}
				break;
			}
		}
}
function TaskDone() {
	console.log(this.getAttribute('number'));
	var divs = document.getElementsByClassName('tasks');
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].getAttribute('number') === this.getAttribute('number')) {
			divs[i].style.backgroundColor = 'lawngreen';
			setTimeout( function () {
				divs[i].remove();
			}, 1000);
			break;
		}
	}
}
$(function () {
	/* 4-------------------------------

Дан массив объектов

var arr = [
    {title:'Заголовок1', paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', style:'background:green;'},
    {title:'Заголовок2', paragraph : 'Amet architecto, autem distinctio eveniet explicabo', style:'background:red;'},
    {title:'Заголовок3', paragraph : 'illo ipsa iure minus non perferendis perspiciatis quasi velit vitae!', style:'background:yellow;'},
    {title:'Заголовок4', paragraph : 'Alias dolores itaque molestiae quasi reiciendis.', style:'background:blue;'},
    {title:'Заголовок5', paragraph : 'dolor sit amet, consectetur adipisicing elit', style:'background:orange;'}
];

необходимо преобразовать в HTML такого вида */
	
	var arr = [
		{title:'Заголовок1', paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', style:'background:green;'},
		{title:'Заголовок2', paragraph : 'Amet architecto, autem distinctio eveniet explicabo', style:'background:red;'},
		{title:'Заголовок3', paragraph : 'illo ipsa iure minus non perferendis perspiciatis quasi velit vitae!', style:'background:yellow;'},
		{title:'Заголовок4', paragraph : 'Alias dolores itaque molestiae quasi reiciendis.', style:'background:blue;'},
		{title:'Заголовок5', paragraph : 'dolor sit amet, consectetur adipisicing elit', style:'background:orange;'}
	];
	
	arr.forEach(function (obj, num, array) {
		console.log(obj + " # " + num +" in arr" + array);
		
		var div = document.createElement('div');
		document.getElementById("cont").appendChild(div);
		var color = obj.style.split(/\:+/)[1].slice(0,-1);
		console.log("'"+color+"'");
		div.style.backgroundColor = color;
		div.innerHTML = "<h1>" +obj.title+ "</h1><p>" + obj.paragraph+ "</p>";
		
		
	})
	
});
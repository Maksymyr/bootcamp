$(function () {
	/* 2------------------------------------
	есть массив var arr = ['usd100','uah2000', 'usd200', 'uah200'];
	нужно вернуть массив только с usd
	используйте метод includes() и filter() */
	
	var arr = ['usd100','uah2000', 'usd200', 'uah200'];
	
	var newArr = arr.filter(function(usd) {
		return usd.includes('usd');
	});
	
	console.log(newArr);
	
});
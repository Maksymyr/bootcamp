$(function () {
	/* 5-----------------------------------------
Дан массив var arr = ['usd150','uah2000', 'usd250', 'uah200'];
проверить его на содержание usd. Если usd есть, то преобразовать весь массив в гривни */
	
	var arr = ['usd100','uah2000', 'usd200', 'uah200'];
	
	arr.forEach(function (value, key, array) {

		if (value.includes('usd')) {
			value = value.replace("usd", "uah");
			var t = value.match(/\d+/);
			value = value.replace(t+"", (t*27) + "");
			array[key] = value;
		}
	});
		console.log(arr);
	
});
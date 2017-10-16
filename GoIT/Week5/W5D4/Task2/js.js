$(function () {
	/* 3--------------------------------------------------------------
Получить новый массив, в котором суммы в долларах из результата второго задания
будут переведены в гривны по текущему курсу (возьмем 27 грн) для того, чтобы
получить со строки только цифры, используйте str.match(/\d+/) */
	
	var arr = ['usd100','uah2000', 'usd200', 'uah200'];
	
	var newArr = arr.filter(function(usd) {
		return usd.includes('usd');
	});
	
	console.log(newArr[0].match(/\d+/));
	console.log(newArr[1].match(/\d+/));
});
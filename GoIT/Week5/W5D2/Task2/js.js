/*

Задача 2.Узнайте ширину и высоту первого, второго и третьего дивов <div> (по очереди) непосредственно внутри
#wrapper без учета padding и границы.
То же самое с учетом padding.
То же самое с учетом padding и границы.
информацию вывести в ети блоки.

*/

$(function () {
	for (var i = 0; i < 3; i++) {
		$("div").eq(i).append("<br>" +$("div").eq(i).width() + "<br>");
		$("div").eq(i).append($("div").eq(i).height()+ "<br>");
		
		$("div").eq(i).append($("div").eq(i).innerWidth()+ "<br>");
		$("div").eq(i).append($("div").eq(i).innerHeight()+ "<br>");
		
		$("div").eq(i).append($("div").eq(i).outerWidth()+ "<br>");
		$("div").eq(i).append($("div").eq(i).outerHeight());
		
	}
});
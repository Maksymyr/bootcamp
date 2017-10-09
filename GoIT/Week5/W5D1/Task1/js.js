$(function () {
var block = document.getElementById('father');
block.style.left = 0 + 'px';
var flag = 1;

$('#left').click(function(){
	if (flag > 1) {
		$('#father').animate({left:'+=800px'}, 790);
		flag--;
	}
});

$('#right').click(function () {
	if (flag < 3) {
		$('#father').animate({left:'-=800px'}, 790);
		flag++;
	}
});
});
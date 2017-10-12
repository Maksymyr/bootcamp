
$(function () {
	var flag = true;
	// for (var i = 0; i < 9; i++) {
	// 	$("#wrapper").append("<div class='empty-box box'></div>");
	// }
	$(".empty-box").on("click", function () {
		if (flag) {
			flag = false;
			$(this).addClass("tic").attr("data", 1);
			$(this).removeClass("empty-box");
			$(this).off();
			setTimeout(function () {
			for (var i = 1; i < 9; i++) {
				if (check($(".comb"+i)))
				$("#wrapper").html("");
			}
			}, 500);
			setTimeout(function () {
				$(".empty-box").eq(Math.floor(Math.random() * $(".empty-box").length)).addClass("tac").attr("data", 2).removeClass("empty-box").off();
				setTimeout(function () {
					for (var i = 1; i < 9; i++) {
						if (check($(".comb"+i)))
							$("#wrapper").html("");
					}
				}, 500);
			}, 1000);
			setTimeout(function () {
				flag = true;
			}, 1300);
		}
	});
});

function check(array) {
	console.log($(array).eq(0).attr("data"));
	if ($(array).eq(0).attr("data") === $(array).eq(1).attr("data") && $(array).eq(1).attr("data") === $(array).eq(2).attr("data")) {
		if($(array).eq(0).attr("data") == 2) {
			alert("comp win");
			return true;
		}
		else if($(array).eq(0).attr("data") == 1) {
			alert("YOU win");
			return true;
		}
		return false;
	}
}
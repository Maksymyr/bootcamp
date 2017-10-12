$(function () {

	for (var i = 1; i < 9; i++)
	{
		$(".forImg").eq(i-1).html("<img class='imager' src='"+i+".jpg'>").attr("data", i).on("click", function () {
			if (event.target.tagName == "IMG") {
				for (var i = 1; i < 9; i++)
				{
					$(".forImg").removeClass("red-box");
				}
				$(event.target).parent().addClass("red-box");
				$("#form").html("<img id='big-imager' src='" + $(event.target).parent().attr("data") + ".jpg'>").css("display", "block");
			}
		});
	}
});
$(function(){
	

	
	var flag = 1;
	$("#slide-left").on("click", function(){
		if (flag <= 2) {
			$("#slider_container").animate({right: '+=1200px'}, 400);
			flag++
		}
	});
	
	$('#slide-right').on('click', function(){
		if (flag >= 2) {
			$('#slider_container').animate({right: '-=1200px'});
			flag--
		}
	});
	
	
	slider.onmousedown = function(){
		
		var coords = getCoords(event.target);
		var shiftX = event.pageX - coords.left;
		var shiftY = event.pageY - coords.top;
		if(event.target.className === "item"){
			$(event.target).clone().appendTo("body").attr("id", "clone");
			var clone = document.getElementById("clone");
				console.log(clone);
			clone.style.position = 'absolute';
			clone.style.zIndex = 1000;
		}
		document.onmousemove = function(e) {
			clone.style.left = e.pageX - shiftX + 'px';
			clone.style.top = e.pageY - shiftY + 'px';

			clone.onmouseup = function () {
				document.onmousemove = null;
				clone.onmouseup = null;
				var mouseTop = e.clientY;
				var mouseLeft = e.clientX;
				console.log(getCoords(document.getElementById("element-1")).top);
				if (mouseTop > 200 && mouseTop < 320 && mouseLeft > 420 && mouseLeft < 540) {
					document.getElementById("element-1").appendChild(clone);
					clone.style.left = 0;
					clone.style.top = 0;
					clone.style.width = "100%";
					clone.style.height = "100%";
					$("#clone").removeAttr("id");
				}
				else if (mouseTop > 200 && mouseTop < 320 && mouseLeft > 720 && mouseLeft < 840) {
					document.getElementById("element-2").appendChild(clone);
					clone.style.left = 0;
					clone.style.top = 0;
					clone.style.width = "100%";
					clone.style.height = "100%";
					$("#clone").removeAttr("id");
				}
				else {
					clone.remove();
				}
			}
		}
	};
	
	
	function getCoords(elem) { // кроме IE8-
		var box = elem.getBoundingClientRect();
		
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
		
	}
	
});
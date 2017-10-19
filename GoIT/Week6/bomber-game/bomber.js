$(function(){ 
	var pos=9;
	var pos2=90;
	var side = 10;
	$('#start').on('click',function(){

		var wrap = document.getElementById("game");
		wrap.style.width = side*50 + "px";
		wrap.style.height = side*50 + "px";

		$(this).attr('disabled',true);
		var str='';
		for(var i=0;i<side*side;i++){ 
			str+='<div class="item"></div>';
		}
		$('#game').html(str);
		
		/* Level 1 generation */
		
		side = 10;
		
		for (var x = 0; x < $(".item").length; x++) {
			$('.item').eq(x).addClass('brick-wall');
		}

		var arr = [11,12,13,21,31,18,17,16,28,38,88,87,86,78,68,81,82,83,71,61,63,53,43,33,34,36,46,56,66,65];
		
		$('.item').eq(pos).addClass('hero').removeClass('brick-wall');
		$('.item').eq(pos2).addClass('hero2').removeClass('brick-wall');
		$('.item').eq(pos-1).removeClass('brick-wall');
		$('.item').eq(pos+side).removeClass('brick-wall');
		$('.item').eq(pos2+1).removeClass('brick-wall');
		$('.item').eq(pos2-side).removeClass('brick-wall');
	

		for (var j = 0 ; j < arr.length; j++) {
			$('.item').eq(arr[j]).addClass('steel-wall').removeClass('brick-wall');
			// console.log(j);

		}
		document.onkeydown=move;


	});
	//----move
	function move(ev){
		var e=ev||event;
		var k=e.keyCode;

		/*PLAYER 1 moves-----------*/
		if(k==39){
			var posright = $(".item").eq(pos+1);
			if((pos+1)%side===0 || $(posright).hasClass("brick-wall") || $(posright).hasClass("steel-wall")
				|| $(posright).hasClass("hero2") || $(posright).hasClass("bomb")) {
			}
			else {
			$('.item').eq(pos).removeClass('hero');
			pos=pos+1;
			$('.item').eq(pos).addClass('hero');
			boom();}
		}
		if(k==37){
			var posleft = $(".item").eq(pos-1);
			if((pos)%side===0 || $(posleft).hasClass("brick-wall") || $(posleft).hasClass("steel-wall")
				|| $(posleft).hasClass("hero2") || $(posleft).hasClass("bomb")) {
			}
			else {
			$('.item').eq(pos).removeClass('hero');
			pos=pos-1;
				$('.item').eq(pos).addClass('hero');

			boom();
		}
		}
		if(k==38) {
			var postop = $(".item").eq(pos - side);
			if (pos-side < 0 || $(postop).hasClass("brick-wall") || $(postop).hasClass("steel-wall")
				|| $(postop).hasClass("hero2") || $(postop).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos).removeClass('hero');
				pos = pos - side;
				$('.item').eq(pos).addClass('hero');
				boom();
			}
		}
		if(k==40){
			var posdown = $(".item").eq(pos+side);
			if(pos+side>=side*side || $(posdown).hasClass("brick-wall") || $(posdown).hasClass("steel-wall")
				|| $(posdown).hasClass("hero2") || $(posdown).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos).removeClass('hero');
				pos=pos+side;
				$('.item').eq(pos).addClass('hero');
				boom();
			}
		}
		/*PLAYER 2 moves-----------*/
		if(k==68) {
			var pos2right = $(".item").eq(pos2 + 1);
			if ((pos2 + 1) % side === 0 || $(pos2right).hasClass("brick-wall") || $(pos2right).hasClass("steel-wall")
				|| $(pos2right).hasClass("hero") || $(pos2right).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos2).removeClass('hero2');
				pos2 = pos2 + 1;
				$('.item').eq(pos2).addClass('hero2');
				boom();
			}
		}
		if(k==65) {
			var pos2left = $(".item").eq(pos2 - 1);
			if (pos2 % side === 0 || $(pos2left).hasClass("brick-wall") || $(pos2left).hasClass("steel-wall")
				|| $(pos2left).hasClass("hero") || $(pos2left).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos2).removeClass('hero2');
				pos2 = pos2 - 1;
				$('.item').eq(pos2).addClass('hero2');
				boom();
			}
		}
		if(k==87) {
			var pos2top = $(".item").eq(pos2 - side);
			if ((pos2 - side) < 0 || $(pos2top).hasClass("brick-wall") || $(pos2top).hasClass("steel-wall")
				|| $(pos2top).hasClass("hero") || $(pos2top).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos2).removeClass('hero2');
				pos2 = pos2 - side;
				$('.item').eq(pos2).addClass('hero2');
				boom();
			}
		}
		if(k==83) {
			var pos2down = $(".item").eq(pos2 + side);
			if ((pos2 + side) >= side * side || $(pos2down).hasClass("brick-wall") || $(pos2down).hasClass("steel-wall")
				|| $(pos2down).hasClass("hero") || $(pos2down).hasClass("bomb")) {
			}
			else {
				$('.item').eq(pos2).removeClass('hero2');
				pos2 = pos2 + side;
				$('.item').eq(pos2).addClass('hero2');
				boom();
			}
		}
		if(k==13){
			setBomb(pos);
			
		}
		if(k==69){
			setBomb(pos2);
			
		}

		/*player2 move end-------*/
	}//--move
	

	function setBomb(position){
		$('.item').eq(position).addClass('bomb');
		var bombpos = position;
		// console.log(position)
		setTimeout(function addExp(){

			$(".item").eq(bombpos).removeClass('bomb');
			$(".item").eq(bombpos).addClass('explosion');

			var explotionLength = 1;
			var rCh = true, tCh = true, dCh = true, lCh = true;
			for (var i = 1; i <= explotionLength; i++) {
				if ((bombpos+i)%side < bombpos%side) {
				}
				else if (rCh) {
					
					if ($(".item").eq(bombpos + i).hasClass("steel-wall")) {
						rCh = false;
					}
					else {
						
						$(".item").eq(bombpos + i).addClass('explosion');
					if ($(".item").eq(bombpos + i).hasClass("brick-wall")) {
						rCh= false;
					}
					}
				}
				if (((bombpos - i) % side > bombpos%side) || (bombpos-i) < 0) {
				
				}
				else if (lCh) {
						if ($(".item").eq(bombpos - i).hasClass("steel-wall")) {
							lCh = false;
						}
						else {
							console.log((bombpos - i));
							$(".item").eq(bombpos - i).addClass('explosion');
							if ($(".item").eq(bombpos - i).hasClass("brick-wall")) {
								lCh= false;
							}
						}
					}
				if ((bombpos - side*i) < 0) {
				}
				else if (tCh) {
					if ($(".item").eq(bombpos - side*i).hasClass("steel-wall")) {
						tCh = false;
					}
					else {
						$(".item").eq(bombpos - side*i).addClass('explosion');
						if ($(".item").eq(bombpos - side*i).hasClass("brick-wall")) {
							tCh= false;
						}
					}
				}
				if ((bombpos + side*i) < 0) {
				}
				else if (dCh) {
					if ($(".item").eq(bombpos + side*i).hasClass("steel-wall")) {
						dCh = false;
					}
					else {
						$(".item").eq(bombpos + side*i).addClass('explosion');
						if ($(".item").eq(bombpos + side*i).hasClass("brick-wall")) {
							dCh= false;
						}
					}
				}
			}
			boom();
			setTimeout(function removeExp(){
				var limit = $(".explosion").length;
				for (var i = 1; i <= limit; i++) {
					$(".explosion").eq(-1).removeClass('explosion');
				}
			}, 250)
		}, 2000)
	}
	function boom(){
		if ($('.explosion').hasClass('hero')) {setTimeout("alert('Hero1 Die')", 200) }
		if ($('.explosion').hasClass('hero2')) {setTimeout("alert('Hero2 Die')", 200)}
		if ($('.explosion').hasClass('brick-wall')){$('.explosion.brick-wall').removeClass('brick-wall')}
		}
});
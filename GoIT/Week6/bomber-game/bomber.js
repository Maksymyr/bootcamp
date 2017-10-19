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
	function move(e){
		var e=e||event;
		var k=e.keyCode;
		// console.log(k);
		/*PLAYER 1 moves-----------*/
		if(k==39){	
			$('.item').eq(pos).removeClass('hero');
			pos=pos+1;
			if(pos%side==0){pos=pos-1}
			if ($(".item").eq(pos).hasClass("brick-wall")){pos=pos-1}
			if ($(".item").eq(pos).hasClass("steel-wall")){pos=pos-1}
				$('.item').eq(pos).addClass('hero');
			boom();
		}
		if(k==37){
			$('.item').eq(pos).removeClass('hero');
			pos=pos-1;
			if((pos+1)%side==0){pos=pos+1}
			if ($(".item").eq(pos).hasClass("brick-wall")){pos=pos+1}
			if ($(".item").eq(pos).hasClass("steel-wall")){pos=pos+1}
				$('.item').eq(pos).addClass('hero');
			
			boom();
		}
		if(k==38){
			$('.item').eq(pos).removeClass('hero');
			pos=pos-side;
			if(pos<0){pos=pos+side}
			if ($(".item").eq(pos).hasClass("brick-wall")){pos=pos+side}
			if ($(".item").eq(pos).hasClass("steel-wall")){pos=pos+side}
				$('.item').eq(pos).addClass('hero');
			boom();
		}
		if(k==40){
			$('.item').eq(pos).removeClass('hero');
			pos=pos+side;
			if(pos>=side*side){pos=pos-side}
			if ($(".item").eq(pos).hasClass("brick-wall")){pos=pos-side}
			if ($(".item").eq(pos).hasClass("steel-wall")){pos=pos-side}
				$('.item').eq(pos).addClass('hero');
			boom();
		}
		/*PLAYER 2 moves-----------*/
		if(k==68){	
			$('.item').eq(pos2).removeClass('hero2');
			pos2=pos2+1;
			if(pos2%side==0){pos2=pos2-1}
			if ($(".item").eq(pos2).hasClass("brick-wall")){pos2=pos2-1}
			if ($(".item").eq(pos2).hasClass("steel-wall")){pos2=pos2-1}
				$('.item').eq(pos2).addClass('hero2');
			boom();
		}
		if(k==65){
			$('.item').eq(pos2).removeClass('hero2');
			pos2=pos2-1;
			if((pos2+1)%side==0){pos2=pos2+1}
			if ($(".item").eq(pos2).hasClass("brick-wall")){pos2=pos2+1}
			if ($(".item").eq(pos2).hasClass("steel-wall")){pos2=pos2+1}
				$('.item').eq(pos2).addClass('hero2');
			boom();
		}
		if(k==87){
			$('.item').eq(pos2).removeClass('hero2');
			pos2=pos2-side;
			if(pos2<0){pos2=pos2+side}
			if ($(".item").eq(pos2).hasClass("brick-wall")){pos2=pos2+side}
			if ($(".item").eq(pos2).hasClass("steel-wall")){pos2=pos2+side}
				$('.item').eq(pos2).addClass('hero2');
			boom();
		}
		if(k==83){
			$('.item').eq(pos2).removeClass('hero2');
			pos2=pos2+side;
			if(pos2>=side*side){pos2=pos2-side}
			if ($(".item").eq(pos2).hasClass("brick-wall")){pos2=pos2-side}
			if ($(".item").eq(pos2).hasClass("steel-wall")){pos2=pos2-side}
				$('.item').eq(pos2).addClass('hero2');
			boom();
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

			var explotionLength = 5;
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
				for (var i = 1; i <= explotionLength; i++) {
					$(".item").eq(bombpos).removeClass('explosion');
					$(".item").eq(bombpos + i).removeClass('explosion');
					$(".item").eq(bombpos - i).removeClass('explosion');
					$(".item").eq(bombpos + side*i).removeClass('explosion');
					$(".item").eq(bombpos - side*i).removeClass('explosion');
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
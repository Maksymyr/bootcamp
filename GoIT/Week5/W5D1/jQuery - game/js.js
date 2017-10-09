$(function(){ 
var countFood=0;
	var pos=55;
	$('#start').on('click',function(){
	
		$(this).attr('disabled',true);
		var str='';
		for(var i=0;i<100;i++){ 
			str+='<div class="item"></div>';
		}
		$('#game').html(str);
		
		$('.item').eq(pos).addClass('hero');
		
			document.onkeydown=move;
			
			setTimeout(food,200)
			

		
	});
	//----move
	function move(e){
		var e=e||event;
		var k=e.keyCode;
		console.log(k);
		if(k==39){
			
			
			$('.item').eq(pos).removeClass('hero');
			pos=pos+1;
			if(pos%10==0){pos=pos-10}
		$('.item').eq(pos).addClass('hero');
			eat()
		}
		if(k==37){
			$('.item').eq(pos).removeClass('hero');
			pos=pos-1;
			if((pos+1)%10==0){pos=pos+10}
		$('.item').eq(pos).addClass('hero');
			eat()
		}
		if(k==38){
			$('.item').eq(pos).removeClass('hero');
			pos=pos-10;
			if(pos<0){pos=pos+100}
		$('.item').eq(pos).addClass('hero');
			eat()
		}
		if(k==40){
			$('.item').eq(pos).removeClass('hero');
			pos=pos+10;
			if(pos>=100){pos=pos-100}
		$('.item').eq(pos).addClass('hero');
			eat()
		}
		
	}
	//--move
	//---food
	function food(){
		var foodPos=rand(100);
		while(foodPos==pos){foodPos=rand(100);}
		$('.item').eq(foodPos).addClass('food');
		
	}
	
	
	function rand(a){ 
	return Math.floor(Math.random()*a)
	
	}
	
	//---food
	//--eat
function eat(){ 
	if($('.item').eq(pos).hasClass('food')){
		$('.item').eq(pos).removeClass('food');
		countFood++;
		$('#count').html(countFood);
		setTimeout(food,200)
		
	}
}
	//--eat


})
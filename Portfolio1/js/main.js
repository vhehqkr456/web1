$(function(){
	//엘리먼트위치판단(offset().top, position().top)
	var arrPos=[];
	
	for(var i=1; i<4; i++){
		arrPos.push($('.section'+i).offset().top);	
	}
	
	$('.section1 .btn1').click(function(e){
		e.preventDefault();//a태그 기본이벤트 막기
		
		//scrollTop으로 스크롤바이동시 html은 익스, body는 크롬
		$('html, body').animate({scrollTop:arrPos[1]},600);
	});
	
	$('.section2 .btn2').click(function(e){
		e.preventDefault();
		
		$('html, body').animate({scrollTop:arrPos[2]},600);
	});
	
	//스크롤값 판단후 헤더 fixed시키기
	$(window).scroll(function() {
        var num=$(this).scrollTop();
		console.log(num);
		
		if(num>=arrPos[1]){
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on');
		}
		
		//scrollTop판단후 해당섹션에 왔을때 li에 on처리
		if(num>=0 && num<arrPos[1]){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(0).addClass('on');//해당 li에 on처리
		} else if(num>=arrPos[1] && num<arrPos[2]){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(1).addClass('on');
		} else {
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(2).addClass('on');
		}
		
		//스크롤탑이 1000이상이면 .section2 .case에 on걸기
		if(num>=1000){
			$('.section2 .case').addClass('on');
		} else if(num==0){
			//스크롤탑이 0일때 case에 on빼기
			$('.section2 .case').removeClass('on');
		}
		
		//스크롤탑이 섹션3위치-200보다 클때 cat에 on걸기
		//스크롤탑이 0일때 cat에 on제거
		if(num>=arrPos[2]-200){
			$('.section3 .con').addClass('on');
		} else if(num==0){
			$('.section3 .con').removeClass('on');
		}
    });
	
	//페이지버튼클릭시 scrollTop이동
	$('.btn_page li').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
		
		//num값 판단후 이동
		switch (num){
			case 0:
			$('body,html').animate({scrollTop:arrPos[0]});
			break;
			
			case 1:
			$('body,html').animate({scrollTop:arrPos[1]});
			break;
			
			case 2:
			$('body,html').animate({scrollTop:arrPos[2]});
			break;
			
			default :
			$('body,html').animate({scrollTop:arrPos[0]});
			break;
		}
	});
});
















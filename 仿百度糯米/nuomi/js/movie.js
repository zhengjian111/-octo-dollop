$(function(){
	(function(){//电影部分
		$(".reyinpic").on("mouseover","li",function(){
			$(this).css("border","1px solid #ff318c").siblings().css("border","")
		});
		$(".reyinpic").on("mouseout","li",function(){
			$(this).css("border","");
		});
		$(".reyinpic").mouseover(function(){
			$(".circleleft").css("opacity","1").css("left","10px");
			$(".circleright").css("opacity","1").css("right","10px");
		});
		$(".reyinpic").mouseout(function(){
			$(".circleleft").css("opacity","0").css("left","0px");
			$(".circleright").css("opacity","0").css("right","10px");
		});
	})();
	
	
	(function(){//上映部分
		$(".shangyinpic").on("mouseover","li",function(){
			$(this).css("border","1px solid #ff318c").siblings().css("border","")
		});
		$(".shangyinpic").on("mouseout","li",function(){
			$(this).css("border","");
		});
		$(".shangyinpic").mouseover(function(){
			$(".circleleft1").css("opacity","1").css("left","10px");
			$(".circleright1").css("opacity","1").css("right","10px");
		});
		$(".shangyinpic").mouseout(function(){
			$(".circleleft1").css("opacity","0").css("left","0px");
			$(".circleright1").css("opacity","0").css("right","10px");
		});
		
	})();
	
	(function(){//右边部分
		$(".dangcontent").on("mouseover","li",function(){
			$(this).find("div").addClass("remencurrent").parent().siblings().find("div").removeClass("remencurrent");
			
		})
	})();
	
	(function(){//黑色导航部分
		$(".blackleft>li").mouseover(function(){
			$(this).addClass("blackcurrent").siblings().removeClass("blackcurrent");
		})
	})();
})
$(function(){
	(function(){//菜单右边的悬浮
		$(".picleft>li").on("mouseover",function(){
			$(this).find(".lvfu").show().siblings().find(".lvfu").hide()
			
		});
		$(".picleft>li").mouseout(function(){
			$(this).find(".lvfu").hide()
		})
		
	})();
	
	(function(){//电影部分悬浮
		$(".moviemain").on("mouseover","li",function(){
			$(this).css("box-shadow","2px 2px 20px #ccc").siblings().css("box-shadow","")
			$(this).find(".moviediv").css("background-color","#f8f4ed").parent().siblings().find(".moviediv").css("background-color","");
		});
		$(".moviemain").on("mouseout","li",function(){
			$(this).css("box-shadow","");
			$(this).find(".moviediv").css("background-color","");
		})
	})();
	
	(function(){//娱乐部分
		$(".yulemain").on("mouseover","li",function(){
			$(this).css("box-shadow","1px 1px 20px grey").siblings().css("box-shadow","");
		});
		$(".yulemain").on("mouseout","li",function(){
			$(this).css("box-shadow","");
		})
	})();
	
	(function(){//旅游照片部分
		$(".travalmain").on("mouseover","li",function(){
			$(this).css("box-shadow","1px 1px 20px grey").siblings().css("box-shadow","");
		});
		$(".travalmain").on("mouseout","li",function(){
			$(this).css("box-shadow","");
		})
	})();
	
	(function(){//婚庆部分
		$(".weddingmain>li:eq(0),.weddingmain>li:eq(1)").mouseover(function(){
			$(this).css("box-shadow","1px 1px 20px grey").siblings().css("box-shadow","");
		});
		$(".weddingmain>li:eq(0),.weddingmain>li:eq(1)").mouseout(function(){
			$(this).css("box-shadow","");
		});
	})();
	
	(function(){//tab部分
		$(".tabtopleft>li").mouseover(function(){
			$(this).addClass("current").siblings().removeClass("current");
			$(".tabdown").eq($(this).index()).addClass("active").siblings().removeClass("active");
		})
	})();
	
	(function(){//top部分
		$(document).scroll(function(){
			var logoH = $(".logo").offset();//logo部分距离上边的距离,返回的是一个对象{"top":"","left":""}
			console.log(logoH)
			var docuH = $(document).scrollTop();//
		if(docuH>logoH.top){
			$(".logo1").addClass("fix");
			$(".logo1").css("display","block");
			
			}else{
				$(".logo1").removeClass("fix");
				$(".logo1").css("display","none");
			}
		})
		
	})();

})
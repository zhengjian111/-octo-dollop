$(function() {
	(function() {//二级子菜单
		$(".allleft").mouseover(function() {
			$(".picleft").slideDown()
		});
		$(".allleft").mouseout(function() {
			$(".picleft").slideUp()
		})

	})();
	
	(function(){//城市选择
		$(".inputdowntitle>li").mouseover(function(){
			$(this).addClass("inputcurrent").siblings().removeClass("inputcurrent");
			$(".inputdowncontent").eq($(this).index()).addClass("inputcontentcurrent").siblings().removeClass("inputcontentcurrent");
		});
		$("#nanjing").click(function(){
			$(".inputdown").slideDown()
		});
		$(".inputdownclose").click(function(){
			$(".inputdown").slideUp()
		})
		
		
	})();
	
	(function(){//案例tab部分
		$(".zonghe-left>li").mouseover(function(){
			$(this).addClass("zonghecurrent").siblings().removeClass("zonghecurrent");
			$(".diankuang").eq($(this).index()).addClass("diankuangcurrent").siblings().removeClass("diankuangcurrent");
			
		})
		
	})();
	
	(function(){//页码部分
		$(".yedown>li").click(function(){
			$(this).addClass("yecurrent").siblings().removeClass("yecurrent");
			$(".zonghe-right>span").text($(this).text());
			$(".diankuang").eq($(this).index()-2).addClass("diankuangcurrent").siblings().removeClass("diankuangcurrent");
			$("body,html").scrollTop(600);
			console.log(typeof docH)
			if($(this).index()>2){
				$(".yedown>li").eq(0).removeClass("lihide");
				$(".yedown>li").eq(1).removeClass("lihide");
			}else{
				$(".yedown>li").eq(0).addClass("lihide");
				$(".yedown>li").eq(1).addClass("lihide");
			}
			
		})
		
	})();
	
	(function(){//吸顶
		$(document).scroll(function(){
			var docH = $(document).scrollTop();
			if(docH>600){
				$(".zonghe").addClass("zonghehide");
				$(".diankuang").css("margin-top","48px")
			}else{
				$(".zonghe").removeClass("zonghehide");
				$(".diankuang").css("margin-top","0px")
				
			}
		})
	})();
	
	(function(){//箭头点击事件
		$(".zonghearr2").click(function(){
			$(".zonghe-right span").text(parseInt($(".zonghe-right span").text())+1);
			$(".yedown>li").eq(parseInt($(".zonghe-right span").text())+1).addClass("yecurrent").siblings().removeClass("yecurrent");
			$(".diankuang").eq(parseInt($(".zonghe-right span").text())-1).addClass("diankuangcurrent").siblings().removeClass("diankuangcurrent");
		})
		
	})();


	(function(){//高亮
		$(".lefttop1-quyu-content>li").click(function(){
			$(this).css("background","gray").siblings().css("background","")
			$(this).find("a").css("color","white").parent().siblings().find("a").css("color","")
		});
		$(".lefttop1-fenlei-title-right>li").click(function(){
			$(this).css("background","gray").siblings().css("background","")
			$(this).find("a").css("color","white").parent().siblings().find("a").css("color","")
		});
		$(".lefttop1-jiege-title-right>li").click(function(){
			$(this).css("background","gray").siblings().css("background","")
			$(this).find("a").css("color","white").parent().siblings().find("a").css("color","")
		});
	})();
})
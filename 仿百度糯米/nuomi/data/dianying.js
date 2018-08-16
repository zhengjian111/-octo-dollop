$.extend({
	movie: {},
	jiudian: {},
	yinpian: {},
	yingyuan: {},
	piaofang: {},
	mixiu:{}
});
$.extend($.movie, {
	pageindex: 1,
	pagesize: 6,
	myajax: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				data.remen.forEach(function(item2) {
					var str2 = `<li>
								<h4>${item2.h4}<span class="zuo">座</span><span class="vip">会员</span></h4>
								<p>${item2.p1}</p>
								<p><span>${item2.score}</span>${item2.p2}</p>
							</li>`;
					$(".remencontent").append(str2);
				});
				data.pai.forEach(function(item3) {
					var str3 = `<li><span>${item3.span}</span>
								<h3>${item3.h3}<i>${item3.i}</i></h3>
								<div class="remendown">
									<img src="img/${item3.img}" width="64px" height="86px" />
								</div>
							</li>`;
					$(".dangcontent").append(str3);
					$(".dangcontent>li").first().css("margin-top", "14px")
					$(".dangcontent>li").first().find("div").addClass("remencurrent").parent().siblings().find("div").removeClass("remencurrent");
				})

			}
		});

	},
	"shangyin": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				var start = ($.movie.pageindex - 1) * $.movie.pagesize;
				var end = start + $.movie.pagesize;
				var arr = data.shangyin.slice(start, end);
				console.log(arr)
				arr.forEach(function(item1) {
					var str1 = `<li>
								<img src="img/${item1.img}" />
								<p>${item1.title}</p>
								<div>
									<a href="">${item1.a}</a>
								</div>
							</li>`;
					$(".shangyinpic").append(str1)
				});
			}
		});

	},
	"renyin": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				console.log($.movie.pageindex)
				var start = ($.movie.pageindex - 1) * $.movie.pagesize;
				var end = start + $.movie.pagesize;
				var arr = data.movie.slice(start, end);
				arr.forEach(function(item) {
					var str = `<li>
								<img src="img/${item.img}" />
								<p>${item.title}</p>
								<div>
									<a href="">${item.xuanzuo}</a><span>${item.score}</span></div>
							</li>`;
					$(".reyinpic").append(str);
				});
			}
		});
	},
	"yema1": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				var pagecount = Math.ceil(data.shangyin.length / $.movie.pagesize);
				var str = `${$.movie.pageindex}/${pagecount}`;
				$(".shangyin>h2>span").append(str);
			}
		});
	},
	"yema": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				var pagecount = Math.ceil(data.movie.length / $.movie.pagesize);
				var str = `${$.movie.pageindex}/${pagecount}`;
				$(".reyin>h2>span").append(str);
			}
		});
	},
	"click": function() {
		$(".circleright").click(function() {
			$.movie.pageindex++;
			$(".reyin>h2>span").empty();
			//					$(".reyinpic").children("li").remove();
			$.movie.yema();
			$.movie.renyin();
			if($.movie.pageindex > 6) {
				$.movie.pageindex = 1;
			}
		});
		$(".circleleft").click(function() {
			$.movie.pageindex--;
			$(".reyin>h2>span").empty();
			$(".reyinpic").children("li").remove();
			$.movie.yema();
			$.movie.renyin();
			if($.movie.pageindex < 1) {
				$.movie.pageindex = 6;
			}
		})
	},
	"click1": function() {
		$(".circleright1").click(function() {
			$.movie.pageindex++;
			$(".shangyin>h2>span").empty();
			$(".shangyinpic").children("li").remove();
			$.movie.yema1();
			$.movie.shangyin();
			if($.movie.pageindex > 2) {
				$.movie.pageindex = 1;
			}
		});
		$(".circleleft1").click(function() {
			$.movie.pageindex--;
			$(".shangyin>h2>span").empty();
			$(".shangyinpic").children("li").remove();
			$.movie.yema1();
			$.movie.shangyin();
			if($.movie.pageindex < 1) {
				$.movie.pageindex = 2;
			}
		})
	}
});
$.extend($.jiudian, {
	jiuajax: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				console.log(data)
				data.zonghe.forEach(function(item) {
					var str = `<div class="dian">
						<div class="dianpic" style="background-img:url(../img/${item.dianpic})"></div>
						<div class="diancontent">
							<h3>${item.h3}</h3>
							<div>
								<span class="dianxing">5分</span>
								<span class="dianprice">人均￥<i>418</i></span>
							</div>
							<p>舒适度高 干净卫生</p>
							<p><i></i>奥体CBD&nbsp;|&nbsp;南京市建邺区江东中路235号A栋1层</p>
						</div>
					</div>`;
					$(".diankuang").append(str);
				})

			}
		});
	}

});
$.extend($.yinpian, {
	pageindex: 1,
	pagesize: 4,
	myajax: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: false,
			success: function(data) {
				var start = ($.yinpian.pageindex - 1) * $.yinpian.pagesize;
				var end = start + $.yinpian.pagesize;
				console.log(start, end)
				var arr = data.yinpian.slice(start, end);
				arr.forEach(function(item) {
					var str = `<div class="mainleft1">
						<h6>${item.red}</h6>
						<div class="mainbox">
							<div class="mainbox-left" style="background: url(img/${item.dianpic}) no-repeat center center">
								<span>预售</span>
							</div>
							<div class="mainbox-middle">
								<h2>${item.h2}<span>${item.span}</span></h2>
								<div class="xing">
									<span class="xingx"></span>
									<span class="text">7.4</span>
								</div>
								<p>${item.p}</p>
								<ul>
									<li>${item.li1}</li>
									<li>${item.li2}</li>
									<li>${item.li3}</li>
								</ul>
							</div>
							<div class="mainbox-right">
								<a href="">预售选座</a>
							</div>
						</div>
					</div>`;
					$(".mainleftpic").append(str);
				})
			}
		});
	},
	"right": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				data.pai.forEach(function(item1) {
					var str1 = `<li>
							<p><span class="num">${item1.span}</span>${item1.h3}<span class="score">${item1.i}</span></p>
							<div class="mainrightpic" style="background-image: url(img/${item1.img})"></div>
						</li>`;
					$(".ri").append(str1);
				});
				$(".ri li").find("div").css("display", "none")
				$(".ri li").mouseover(function() {
					$(this).find("div").css("display", "block").parent().siblings().find("div").css("display", "none");
				})

			}
		});

	},
	"yema": function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				var pagecount = Math.ceil(data.yinpian.length / $.yinpian.pagesize);
				console.log(pagecount)
				for(var i = 0; i < pagecount; i++) {
					$(".page").append(`<li>${i+1}</li>`);
				}
				$(".page li").first().addClass("licurrent").siblings().removeClass("licurrent");
				$(".page li").click(function() {
					$(this).addClass("licurrent").siblings().removeClass("licurrent");
					$(".mainleftpic").html("")
					$.yinpian.pageindex = $(this).text();
					$.yinpian.myajax();
				})
			}
		})
	},
	"tab": function() {
		$(".tabauto li").click(function() {
			$(this).addClass("tabactive").siblings().removeClass("tabactive");
			$(".mainleftpic").html("")
			$.yinpian.myajax();
			//$(".mainleft").eq($(this).index()).css("display","block").siblings().css("display","none")
		})
	}
});
$.extend($.yingyuan, {
	pageindex: 1,
	pagesize: 4,
	yinyuanajax: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				var start = ($.yingyuan.pageindex - 1) * $.yingyuan.pagesize;
				var end = start + $.yingyuan.pagesize;
				var arr = data.yinyuan.slice(start, end);
				arr.forEach(function(item) {
					var str = `<li>
							<div class="lileft">
								<p>${item.p}</p>
								<p><span>${item.span}</span></p>
							</div>
							<div class="liright">
								<p class="liright-p1"><span>${item.score}</span>起</p>
								<p class="liright-p2">选座购票</p>
							</div>
						</li>`;
					$(".maintext").append(str);
				})

			}
		});
	},
	"click": function() {
		$(".jiazai").click(function() {
			$.yingyuan.pageindex++;
			$.yingyuan.yinyuanajax();
		})

	}

});
$.extend($.piaofang, {
	riqi: function() {
		$(".zhuti1-title span").click(function() {
			$(".zhuti1-title span").removeClass("span").addClass("span1")
			$(".xia").slideToggle(500);
		})

	},
	piaoajax: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				data.piao.forEach(function(item) {
					var str = `<dd>
								<div class="dd1">
									<h3>${item.title}</h3>
									<p>${item.p}<span>${item.span}</span></p>
								</div>
								<div class="ddcurrent">${item.div1}</div>
								<div>${item.div2}</div>
								<div>${item.div3}</div>
								<div>${item.div4}</div>
								<div>${item.div5}</div>
								<div>${item.div6}</div>
								<div>${item.div7}</div>
								<div>${item.div8}</div>
								<div>${item.div9}</div>
								<div>${item.div10}</div>
							</dd>`;
					$(".dl dl").append(str);

				})

			}
		});

	}
});
$.extend($.mixiu,{
	pageindex:1,
	pagesize:4,
	allclick:function(){
		$(".allleft").click(function(){
			$(".picleft").toggle()
		})
		
	},
	mituan: function() {
		$.ajax({
			type: "get",
			url: "data/dianying.json",
			async: true,
			success: function(data) {
				data.mituan.forEach(function(item) {
					var str = `<li>
						<div class="contentleft-01-pic"></div>
						<div class="contentleft-01-name">
						<h4>${item.h4}</h4>
						<p>${item.p}</p>
						<p>${item.p1}</p>
						</div>
						<div class="contentleft-01-time">${item.time}</div>
						<div class="contentleft-01-price">
						<h5>￥<span>${item.score}</span></h5>
						<p>${item.p2}<del>${item.del}</del></p>
						</div>
						<div class="contentleft-01-btn">${item.go}</div>
						</li>`;
					$(".contentleft-01").append(str);
				})

			}
		});
	},
	arrclick:function(){
		$(".miarr").click(function(){
			$(this).toggleClass("bei")
			$(".a").toggleClass("dis")
		})
	},
	ziarr:function(){
		$(".ziarr").click(function(){
			$(".zixia").toggleClass("diszi")
		})
	},
	haoping:function(){
		$(".titleleft>li").click(function(){
			$(this).addClass("titlecurrent").siblings().removeClass("titlecurrent");
		})
		
	},
	init:function(){
		$(".chamap").click(function(){
			$(".mengmap").show();
		})
		$(".mengmap-auto>h1>span").click(function(){
			$(".mengmap").hide();
		})
		$(".chaall").click(function(){
			$(".mengmap").show();
		})
		$(".mengmap-auto>h1>span").click(function(){
			$(".mengmap").hide();
		})
		$(".map>a").click(function(){
			$(".mengmap").show();
		})
		$(".mengmap-auto>h1>span").click(function(){
			$(".mengmap").hide();
		})
		$(".map1>a").click(function(){
			$(".mengmap").show();
		})
		$(".mengmap-auto>h1>span").click(function(){
			$(".mengmap").hide();
		})
		$(".contentright-last>h3>span").hover(function(){
			$(this).toggleClass("redcircle")
		});
		$(".contentright-last>h3>span").click(function(){
			$(".contentright-pic").empty();
			$.mixiu.pageindex++;
			if($.mixiu.pageindex>2){
				$.mixiu.pageindex=1;
			}
			$.mixiu.look();
		});
	},
	"look":function(){
		var pageindex = 1;
		var pagesize = 4;
		$.ajax({
			type:"get",
			url:"data/dianying.json",
			async:true,
			success:function(data){
				var start = ($.mixiu.pageindex-1)*$.mixiu.pagesize;
				var end = start+ $.mixiu.pagesize;
				var arr = data.look.splice(start,end);
				arr.forEach(function(item){
					var str = `<li>
									<div class="contentright-pic-left" style="background-image:url(mixiu/${item.img})"></div>
									<div class="contentright-pic-right">
										<h4>${item.h4}</h4>
										<p>${item.p}<span class="new">${item.new}</span><span class="old">${item.old}</span></p>
									</div>
								</li>`;
								$(".contentright-pic").append(str);
					
				})
				
			}
		});
	}
});
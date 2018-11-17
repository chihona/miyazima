

$(function(){
	setTimeout("work_bg()");
	setTimeout("rect()");

	$('a').click(function(){
		var href = $(this).attr("href");
		var	target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, 400, "swing");
		return false;
	});

	$(".first-photo").animate({
		backgroundSize: "1800px"
	},2000).fadeOut(1000, function(){
	$(".second-photo").fadeIn()
		.animate({
		backgroundSize: "1800px"
		},2000).fadeOut(1000, function(){
	$(".title-photo > img").fadeIn(2000);
		});
	});

	$(".first-photo > p").fadeIn(2000,
	function(){$(".second-photo > p")
	.fadeIn(3000);
	});

	$(window).on('load scroll',function(){
		var offsetTop = $("#top-wrapper").offset().top;
		var scrollTop = $(this).scrollTop();
		var header = $("header")
		if(scrollTop > offsetTop){
			header.slideDown();
		}else{
			header.slideUp(100);
		}
		});

	$(".check").hover(function() {
	$(".check").attr("src","photo/send_on.png");
	}, function() {
	$(".check").attr("src","photo/send_off.png");
	});


	$(".check").on("click",function(){
		if($(".text-form1").val() == '' || $(".text-form2").val() == '' ||
		   $(".text-form3").val() == '' || $(".text-form4").val() == '' ||
		   $(".text-form5").val() == '' || $(".text-form6").val() == '' )
		{
			$(".error-message").text("※入力されていない項目があります。")
			.css("color","red");
		}else{
			window.alert("送信しますか？");
		}
	});
});


function work_bg(){
	$("#top-wrapper,#recruit").animate({
		backgroundSize: "2000px"
	},3000).animate({
		backgroundSize: "1900px"
	},3000);
	setTimeout("work_bg()");
}

function rect() {
	$("#pict1, #pict2, #pict3").animate({
		marginTop: "-=10px"
	}, 1000).animate({
		marginTop: "+=10px"
	}, 1000);

	setTimeout("rect()");
}

$(function(){
	setTimeout("rect()");
});

function rect() {
	$("#pict1, #pict2, #pict3").animate({
		marginTop: "-=10px"
	}, 1000).animate({
		marginTop: "+=10px"
	}, 1000);

	setTimeout("rect()");
}


$(function(){
	setTimeout("move_bg()");
});

function move_bg(){
	$(".top-wrapper, .recruit").animate({backgroundSize: "2020px"
},3000).animate({backgroundSize: "1920px"},3000);

setTimeout("move_bg()");
}

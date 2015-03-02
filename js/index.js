var states = {
	lastWheel : 0,
	parts : ['#home', '#statement', '#selection', '#footer'],
};

$(document).ready(function() {
	setTimeout(function(){
		$(document).scrollTop(0);
	}, 100);

	var statementLoop = setInterval(function() {
		var nightAsserted = parseInt($("#statement-bg-img-night").css("opacity"));
		if(nightAsserted == 1) {
			$("#statement-bg-img-night").css({
				opacity : 0,
			})
			$("#statement-title-night").css({
				opacity : 0,
			})
			$("#statement-bg-img-road").css({
				opacity : 1,
			})
			$("#statement-title-road").css({
				opacity : 1,
			})
		} else {
			$("#statement-bg-img-night").css({
				opacity : 1,
			})
			$("#statement-title-night").css({
				opacity : 1,
			})
			$("#statement-bg-img-road").css({
				opacity : 0,
			})
			$("#statement-title-road").css({
				opacity : 0,
			})
		}
	}, 3000);


	$(window).scroll(function(e) {
		var scrolled = $(document).scrollTop();
		$("#home-bg-video").css({
			top : scrolled * 0.46 + "px",
		});
		$("#statement-wrapper").css({
			top : (scrolled - $("#statement-wrapper").parent().offset().top) * 0.56 + "px",
		})
	});

	$("#home-button").click(function() {
		$('body').animate({
			scrollTop : $("#statement").offset().top,
		}, 1000);
	});

	$(".selection-option").bind("mouseenter", function() {
		$($(this).children()[0]).css({
			opacity : 0.5,
		});
		$($(this).children()[1]).css({
			width : "110%",
		});
	})

	$(".selection-option").bind("mouseleave", function() {
		$($(this).children()[0]).css({
			opacity : 0,
		});
		$($(this).children()[1]).css({
			width : "100%",
		});
	})

	$(".footer-thumbnail").bind("mouseenter", function() {
		$($(this).children()[0]).css({
			opacity : 0.5,
		});
	})

	$(".footer-thumbnail").bind("mouseleave", function() {
		$($(this).children()[0]).css({
			opacity : 0,
		});
	})

	$(window).bind('wheel',function(e){
		var currentTop = $('body').scrollTop();
		for(var i = 0; i <= 2; ++i) {
			var offset = $(states.parts[i]).offset();
			var height = $(states.parts[i]).height();

			if(offset.top - height/2 <= currentTop && currentTop <= offset.top + height/2) {
				var next = i + (e.originalEvent.deltaY > 0 ? 1 : -1);
				if(next < 0) next == 0;
				if(next == 3) return;
				if(next == 1 && i == 2 && currentTop + 200 > offset.top) return;
				e.preventDefault();
				if(Date.now() - states.lastWheel < 1600) {
					return;
				}
				states.lastWheel = Date.now();
				$('body').animate({
					scrollTop : $(states.parts[next]).offset().top,
				}, 1000);
			}
		}
	})

})

$(window).ready(function() {
	
});
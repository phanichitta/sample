$(document).ready(function(){
	 
});

$(document).on("click",".arrow-mobile",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(".page-navigation").removeClass("open");
		$(this).find(".downarrow").removeClass("hidegroup");
		$(this).find(".closemobilenav").addClass("hidegroup");
	}else{
		$(this).addClass("active");
		$(".page-navigation").addClass("open");
		$(this).find(".downarrow").addClass("hidegroup");
		$(this).find(".closemobilenav").removeClass("hidegroup");
		$(this).parents(".page-navigation").find(".js-sections a").first().addClass("active");
	}
});
$(document).on("click",".js-sections a",function(){
	var ofid = $(this).attr("data-child");
	if($(window).width() < 1024){
		$('html, body').animate({
			scrollTop: $("#"+ofid).offset().top - 140
		}, 1000);
	}else{		
		$('html, body').animate({
			scrollTop: $("#"+ofid).offset().top - 160
		}, 1000);
	}
});
$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top - 165;
        var id = $(this).attr('id');

        if (position >= target) {
			$('.js-sections > a').removeClass("active");
			$('a[data-child="'+id+'"]').addClass("active");
			if($(window).width() < 1024){
				var titlestring = $('a[data-child="'+id+'"]').attr("title");
				$(".js-selected-section").text(titlestring);
			}
			$('.js-sections > a').find(".hexa-after").removeClass("fas").addClass("fal");
			$('a[data-child="'+id+'"]').find(".hexa-after").removeClass("fal").addClass("fas");
            //$('.js-sections > a').attr('href', id).addClass('active');
        }
    });
});
/*
var $navigationLinks = $('.js-sections > a');
var $sections = $($(".section").get().reverse());

var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('data-child');
    sectionIdTonavigationLink[id] = $('.js-sections > a[href=\\#' + id + ']');
});

function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    var scrollPosition = $(window).scrollTop();
    $sections.each(function() {
        var currentSection = $(this);
        var sectionTop = currentSection.offset().top;
        if (scrollPosition >= sectionTop) {
            var id = currentSection.attr('id');
            var $navigationLink = sectionIdTonavigationLink[id];
            if (!$navigationLink.hasClass('active')) {
                $navigationLinks.removeClass('active');
                $navigationLink.addClass('active');
            }
           
            return false;
        }
    });
}

$(window).scroll( throttle(highlightNavigation,100) );
*/
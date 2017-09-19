/*
 * isMobile

*/

;(function($) {

    'use strict'

    var ToggleHeaderSearchBox = function() {
	    $('#header-search').find('.header-search-icon').on('click', function() {
	       $('#header-search form').toggle(); 
	    });
    }

    var responsiveMenu = function() {
    	var menuType = "desktop";
    	$(window).on('load resize',function() {
    		var mode = "desktop";
    		if($(window).width() < 991) {
    			mode = "mobile";
    		}

    		if(mode != menuType) {
    			menuType = mode;
    			if(mode == "mobile") {
    				$("#main-nav").attr("id", "main-nav-mobi").appendTo("#header")
    					.hide().find('li:has(ul)').children('.sub-menu').hide().before('<span class="arrow"></span>');
    			} else {
    				$("#main-nav-mobi").attr("id", "main-nav").removeAttr('style').appendTo('.header-inner-wrap').find('.has-sub')
                        .children('.sub-menu')
                        .removeAttr('style')
                        .prev()
                        .remove();
    			}
    		}
    	});

    	$('#btn-menu').on('click', function(){
            $('#main-nav-mobi').slideToggle(300);
            $(this).toggleClass('active'); 
        });
    }

    // Dom Ready
    $(function() {
        ToggleHeaderSearchBox();
    	responsiveMenu();
    });

})(jQuery);

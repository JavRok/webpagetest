jQuery( document ).ready(function($) {
    var $menu = $('#nav');    

    $('.menu_btn').on('click', function (evt) {
        evt.stopPropagation();
        $menu.addClass('clicked').toggleClass('opened');
        setTimeout(function() {
        	$menu.removeClass('clicked');
        }, 500);
    });

    $('body').on('click', function (evt) {

        if (!$(evt.target).is($menu)) {
            $menu.addClass('clicked').removeClass('opened');
	        setTimeout(function() {
		        $menu.removeClass('clicked');
	        }, 500);
        }        
    });



    // Responsive tabs-accordion hybrid
    // https://codepen.io/kazmeyer/pen/lzqhf

	$(".test_subbox").hide();
	$(".test_subbox:first").show();

    /* if in tab mode */
	$("ul.responsive-tabs li").click(function() {

		$(".test_subbox").hide();
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn();

		$("ul.responsive-tabs li").removeClass("active");
		$(this).addClass("active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

	});
    /* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
		$(".test_subbox").hide();
		$("ul.responsive-tabs li").removeClass("active");

		if ($(this).hasClass("d_active")) {
			$(this).removeClass("d_active");
			return;
		}

		$(".tab_drawer_heading").removeClass("d_active");

		var d_activeTab = $(this).attr("rel");
		$("#"+d_activeTab).fadeIn(100);
		$(this).addClass("d_active");
		$("ul.responsive-tabs li[rel^='"+d_activeTab+"']").addClass("active");
	});


    /* Extra class "tab_last"
     to add border to right side
     of last tab */
	// $('ul.responsive-tabs li').last().addClass("tab_last");

});




jQuery( document ).ready(function($) {
    var $menu = $('#nav');    

    $('.menu_btn').on('click', function (evt) {
        evt.stopPropagation();
        $menu.toggleClass('opened');
    });

    $('body').on('click', function (evt) {

        if (!$(evt.target).is($menu)) {
            $menu.removeClass('opened');
        }        
    });

});
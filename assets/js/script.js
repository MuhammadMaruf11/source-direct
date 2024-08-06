(function ($) {
    'use strict';


    /*------------------------------------
        Mobile Menu
    --------------------------------------*/
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.toggle-icon ').on('click', function (event) {
        event.preventDefault();
        $('.side-bar-menu').toggleClass('active');
        $(this).toggleClass('open');
    });


})(jQuery);

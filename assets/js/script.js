(function ($) {

    'use strict';

    /*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.side-icon > a').on('click', function (event) {
        event.preventDefault();
        $('.side-bar-menu').addClass('active')
    });

    $('.close-icon > a').on('click', function (event) {
        event.preventDefault();
        $('.side-bar-menu').removeClass('active')
    });


    // Load Header
    $(function () {
        $("#header-placeholder").load("includes/header.html");
    });

    // Load Footer
    $(function () {
        $("#footer-placeholder").load("includes/footer.html");
    });


})(jQuery);





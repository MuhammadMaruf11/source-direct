(function ($) {
    'use strict';

    function initializePlugins() {
        /*------------------------------------
            Mobile Menu
        --------------------------------------*/
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });

        $('.side-icon > a').on('click', function (event) {
            event.preventDefault();
            $('.side-bar-menu').addClass('active');
        });

        $('.close-icon > a').on('click', function (event) {
            event.preventDefault();
            $('.side-bar-menu').removeClass('active');
        });
    }

    // Load Header
    $(function () {
        $("#header-placeholder").load("includes/header.html", function () {
            initializePlugins(); // Initialize plugins after header is loaded
        });
    });

    // Load Footer
    $(function () {
        $("#footer-placeholder").load("includes/footer.html");
    });

    // Ensure plugins are initialized after footer content is loaded
    $(document).on('load', function () {
        initializePlugins();
    });

})(jQuery);

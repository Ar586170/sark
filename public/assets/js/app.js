(function(window, document, $, undefined) {
    'use strict';

    var sarkInit = {
        i: function(e) {
            sarkInit.s();
            sarkInit.methods();
        },

        s: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function(e) {
            sarkInit.w();
            sarkInit.watch_video();
            sarkInit.counterUp();
            sarkInit.salActivation();
            sarkInit.pricingPlan();
            sarkInit.mobileMenuActivation();
            sarkInit.stickyHeaderMenu();
           
           
        },

        w: function(e) {
            this._window.on('load', sarkInit.l).on('scroll', sarkInit.res)
        },

        watch_video: function() {
        $('.demo-video').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
        },

      
        counterUp: function () {
            
            var elementSelector = $('.count');
            elementSelector.each(function(){
                elementSelector.appear(function(e) {
                    var el = this;
                    var updateData = $(el).attr("data-count");
                    var od = new Odometer({
                        el: el,
                        format: 'd',
                        duration: 2000
                    });
                    od.update(updateData);
                });
            });
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true
            });
        },

        pricingPlan: function () {
            var yearlySelectBtn = $('#yearly-plan-btn'),
                monthlySelectBtn = $('#monthly-plan-btn'),
                
                monthlyPrice = $('.monthly-pricing'),
                yearlyPrice = $('.yearly-pricing');
               
            
            $(monthlySelectBtn).on('click', function() {
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'block');
                yearlyPrice.css('display', 'none');

            });
            
            $(yearlySelectBtn).on('click', function() {
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'none');
                yearlyPrice.css('display', 'block');
            });
        },


         mobileMenuActivation: function(e) {
            
            $('.menu-item-has-children > a').on('click', function(e) {
                
                var targetParent = $(this).parents('.mainmenu-nav'),
                    target = $(this).siblings('.sark-submenu'),
                    targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.sark-submenu');
                
                if (targetParent.hasClass('offcanvas')) {
                    $(target).slideToggle(400);
                    $(targetSiblings).slideUp(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                    $(this).parent('.menu-item-has-children').siblings().removeClass('open');
                }

            });
           
            function resizeClassAdd() {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    $('body').removeClass('mobilemenu-active');
                    $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
                    $('.sark-mainmenu .offcanvas-backdrop').remove();
                    $('.sark-submenu').removeAttr('style');
                } else {
                    $('body').addClass('mobilemenu-active');
                    $('#mobilemenu-popup').addClass('offcanvas');
                    $('.menu-item-has-children > a').on('click', function(e) {
                        e.preventDefault();
                    });
                }
            }

            $(window).on('resize', function() {
                resizeClassAdd();
            });
            
            resizeClassAdd();
        },


        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#sark-sticky-placeholder'),
                        menu = $('.sark-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.sark-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('sark-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('sark-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },


    }
    sarkInit.i();

})(window, document, jQuery);
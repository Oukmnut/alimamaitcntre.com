(function(f){'use strict';f(document).ready(function(){1<=f(".plus-navigation-wrap .plus-navigation-inner.menu-click").length&&theplus_ele_menu_clicking(),0<f(".mobile-plus-toggle-menu").length&&f(".mobile-plus-toggle-menu").click(function(){var a=f(this).data("target");f(this).toggleClass("plus-collapsed"),f(a+".collapse:not(\".in\")").length?(f(a+".collapse:not(\".in\")").slideDown(400),f(a+".collapse:not(\".in\")").addClass("in")):(f(a+".collapse.in").slideUp(400),f(a+".collapse.in").removeClass("in"))}),f(".plus-mobile-menu .navbar-nav li.menu-item-has-children > a").on("click",function(g){g.preventDefault(),g.stopPropagation();var a=f(this),b=a.parent(),c=a.parent().parent(),d=b.find("> ul.dropdown-menu");b.hasClass("open")?(d.slideUp(400),b.removeClass("open")):(c.css("height","auto"),c.find("li.dropdown.open ul.dropdown-menu").slideUp(400),c.find("li.dropdown-submenu.open ul.dropdown-menu").slideUp(400),c.find("li.dropdown,li.dropdown-submenu.open").removeClass("open"),d.slideDown(400),b.addClass("open"))})});f(window).on("load resize",function(a){a.preventDefault();var b=window.innerWidth;if(991<b&&f(".plus-navigation-wrap .plus-navigation-inner").hasClass("menu-hover")&&theplus_navmenu_hover(),f(".plus-mobile-menu-content").length){var c=f(".plus-mobile-menu-content").closest(".plus-navigation-wrap"),d=f(window).width(),e=f(".plus-mobile-menu-content"),g=0-c.offset().left;e.css({left:g,"box-sizing":"border-box",width:d})}})})(jQuery);function theplus_navmenu_hover(){var a=jQuery;a(".plus-navigation-wrap .menu-hover .navbar-nav .dropdown").on("mouseenter",function(){var b=a(this).closest(".plus-navigation-inner"),c=b.data("menu_transition");""==c||"style-1"==c?a(this).find("> .dropdown-menu").stop().slideDown():"style-2"==c&&a(this).find("> .dropdown-menu").stop(!0,!0).delay(100).fadeIn(600)}).on("mouseleave",function(){var b=a(this).closest(".plus-navigation-inner"),c=b.data("menu_transition");""==c||"style-1"==c?a(this).find("> .dropdown-menu").stop().slideUp():"style-2"==c&&a(this).find("> .dropdown-menu").stop(!0,!0).delay(100).fadeOut(400)}),a(".plus-navigation-wrap .menu-hover .navbar-nav .dropdown-submenu").on("mouseenter",function(){var b=a(this).closest(".plus-navigation-inner"),c=b.data("menu_transition");""==c||"style-1"==c?a(this).find("> .dropdown-menu").stop().slideDown():"style-2"==c&&a(this).find("> .dropdown-menu").stop(!0,!0).delay(100).fadeIn(600)}).on("mouseleave",function(){var b=a(this).closest(".plus-navigation-inner"),c=b.data("menu_transition");""==c||"style-1"==c?a(this).find("> .dropdown-menu").stop().slideUp():"style-2"==c&&a(this).find("> .dropdown-menu").stop(!0,!0).delay(100).fadeOut(400)})}function theplus_ele_menu_clicking(){"use strict";var a=jQuery;a(".plus-navigation-wrap .menu-click .plus-navigation-menu .navbar-nav li.menu-item-has-children > a").on("click",function(b){if(b.preventDefault(),b.stopPropagation(),a(this).closest(".plus-navigation-inner.menu-click")){var c=a(this),d=c.parent(),e=c.parent().parent(),f=d.find("> ul.dropdown-menu");d.hasClass("open")?(f.slideUp(400),d.removeClass("open")):(e.css("height","auto"),e.find("li.dropdown.open ul.dropdown-menu").slideUp(400),e.find("li.dropdown-submenu.open ul.dropdown-menu").slideUp(400),e.find("li.dropdown,li.dropdown-submenu.open").removeClass("open"),f.slideDown(400),d.addClass("open"))}}),a(document).mouseup(function(b){var c=a("li.dropdown");c.is(b.target)||0!==c.has(b.target).length||(c.find("ul.dropdown-menu").slideUp(400),c.find("li.dropdown-submenu.open ul.dropdown-menu").slideUp(400),c.removeClass("open"))})}(function(a){'use strict';var b=function(a,b){var c=a.find(".plus-navigation-wrap");0<c.find(".hover-inverse-effect").length&&b(".plus-navigation-menu .nav > li > a").on({mouseenter:function(){b(this).closest(".hover-inverse-effect").addClass("is-hover-inverse"),b(this).addClass("is-hover")},mouseleave:function(){b(this).closest(".hover-inverse-effect").removeClass("is-hover-inverse"),b(this).removeClass("is-hover")}}),0<c.find(".submenu-hover-inverse-effect").length&&b(".plus-navigation-menu .nav li.dropdown .dropdown-menu > li > a").on({mouseenter:function(){b(this).closest(".submenu-hover-inverse-effect").addClass("is-submenu-hover-inverse"),b(this).addClass("is-hover")},mouseleave:function(){b(this).closest(".submenu-hover-inverse-effect").removeClass("is-submenu-hover-inverse"),b(this).removeClass("is-hover")}});var d=window.innerWidth;991<d&&c.find(".plus-navigation-inner").hasClass("menu-hover")&&theplus_navmenu_hover()};a(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/tp-navigation-menu-lite.default",b)})})(jQuery);
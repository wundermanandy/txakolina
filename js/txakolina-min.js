!function($){function e(){return window.open("https://www.facebook.com/sharer/sharer.php?u="+$(this).attr("href"),"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1}function t(){return window.open("https://plus.google.com/share?url="+$(this).attr("href"),"googleplusWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1}function a(){var e=encodeURIComponent($(this).attr("data-title"));return window.open("http://twitter.com/intent/tweet?text="+e+" "+$(this).attr("href"),"twitterWindow","height=370,width=600,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1}var o=$(window);o.load(function(){$("body").fadeIn().addClass("loaded")}),$(document).ready(function(){$(".header-slider").slick({speed:600,fade:!0,autoplay:!0,autoplaySpeed:4e3,arrows:!1});var n=$("#wpadminbar").height()||0,i=$(".header-slider").height(),s=$("#site-header").height()||0,r;console.log(i),$(".main-navigation").css("top",n),r=i<o.height()?i:o.height(),$(".site-description").css("top",r/2),$("#txakolina-search-window").css("top",s),$("#home-slider").css("top",n),$(".home #page").css("margin-top",r),$(".site-header").affix({offset:{top:r}}),$(".post").matchHeight(),$("#content").fitVids(),$(".nano").nanoScroller(),$(".main-navigation .menu-item-has-children > a").after('<button class="dropdown-toggle" aria-expanded="false"></button>'),$(".main-navigation .current-menu-ancestor > button").addClass("toggle-on"),$(".main-navigation .current-menu-ancestor > .sub-menu").addClass("toggled-on"),$(".dropdown-toggle").click(function(e){var t=$(this);e.preventDefault(),t.toggleClass("toggle-on"),t.next(".sub-menu").slideToggle(),t.attr("aria-expanded","false"===t.attr("aria-expanded")?"true":"false")}),$(".gallery-icon a").each(function(){$(this).attr("href",$(this).find("img").attr("src").replace("-800x600","")),$(this).attr("title",$(this).parent(".gallery-icon").next("figcaption").text())}),$(".close-menu").on("click",function(){$("#site-navigation").removeClass("menu-open"),$("#overlay").removeClass("overlay-open")}),$(".close-search i").on("click",function(){$("#txakolina-search-window").removeClass("search-open"),$("#overlay").removeClass("overlay-open")}),$("#overlay").on("click",function(){$("#site-navigation").removeClass("menu-open"),$("#txakolina-search-window").removeClass("search-open"),$("#overlay").removeClass("overlay-open")}),$("#txakolina-menu").on("click",function(){return $("#overlay").addClass("overlay-open"),$("#site-navigation").addClass("menu-open"),!1}),$("#txakolina-search").on("click",function(){return $("#txakolina-search-window").toggleClass("search-closed"),!1}),$(".post-social-wrapper").hover(function(){$(this).find($(".post-social")).fadeIn()},function(){$(this).find($(".post-social")).fadeOut()}),($("a.facebook-share").length>0||$("a.twitter-share").length>0||$("a.googleplus-share").length>0)&&($(".facebook-share").click(e),$(".twitter-share").click(a),$(".googleplus-share").click(t))})}(jQuery);
"use strict";function spin(){w>=768&&($("body").css({overflow:"hidden"}),$(document).bind("scroll",function(){window.scrollTo(0,0)}));var e="-webkit-transition: all 4s ease-out;";e+="-moz-transition: all 4s ease-out;",e+="-o-transition: all 4s ease-out;",e+="-ms-transition: all 4s ease-out;",e+="transition: all 4s ease-out;";var a=setInterval(function(){award.src=items[Math.floor(Math.random()*items.length)]},100);deg+=2160+Math.round(1500*Math.random()),e+="-webkit-transform: rotate("+deg+"deg);",e+="-moz-transform: rotate("+deg+"deg);",e+="-o-transform: rotate("+deg+"deg);",e+="-ms-transform: rotate("+deg+"deg);",e+="transform: rotate("+deg+"deg);",circle.setAttribute("style",e),setTimeout(function(){var e=deg%360,t=30>e?0:Math.floor((e-30)/60)+1;t>0&&(t=6-t),window.clearInterval(a),award.src=items[t],w>=768&&($(document).unbind("scroll"),$("body").css({overflow:"visible"}))},4e3)}function quayso(e){"fo3"==e?(circle.src="images/wheel-big-fifa.png",items=lucky_wheel.fifa,award.src=items[0]):(circle.src="images/wheel-big.png",items=lucky_wheel.lol,award.src=items[0])}function toggleCarousel(e){"lol"===e?($("#slickLol").show().slick("setPosition"),$("#slickFifa").hide(),$("#toggleCarouselLol").addClass("btn-danger").removeClass("btn-inverse"),$("#toggleCarouselFifa").removeClass("btn-danger").addClass("btn-inverse")):($("#slickLol").hide(),$("#slickFifa").show().slick("setPosition"),$("#toggleCarouselFifa").addClass("btn-danger").removeClass("btn-inverse"),$("#toggleCarouselLol").removeClass("btn-danger").addClass("btn-inverse"))}window.addEventListener("load",function(){new FastClick(document.body)},!1),(new WOW).init();var w=Math.max(document.documentElement.clientWidth,window.innerWidth||0),h=Math.max(document.documentElement.clientHeight,window.clientHeight||0),settings={el:"wheel",radius:340},wheel;settings.radius=768>w?(w-40)/2:340;var award=document.getElementById("award-change"),circle=document.getElementById("wheel-circle"),deg=0,items=lucky_wheel.lol;$(document).ready(function(){$(window).height(),$("#install .install-wrapper").height();if(w>=768&&setTimeout(function(){var e=document.getElementById("headnav"),a=new Headroom(e,{offset:122,tolerance:{up:5,down:0},classes:{initial:"animated",pinned:"slideInDown",unpinned:"slideOutUp"}});a.init(),skrollr.init({forceHeight:!1})},100),$("#intro").vide({mp4:"intro_background",webm:"intro_background",ogv:"intro_background",poster:"intro_background"},{volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"jpg",resizing:!0}),768>w)var e=1500,a=300;else var e=2500,a=1600;$("#slickLol").slick({dots:!0,autoplay:!1,autoplaySpeed:e,speed:a,fade:!0,cssEase:"linear"}).on("beforeChange",function(){w>=768&&$("#slickLol").addClass("mask animation-frames-0")}).on("afterChange",function(){w>=768&&$("#slickLol").removeClass("mask animation-frames-0")}),$("#slickFifa").slick({dots:!0,autoplay:!1,autoplaySpeed:e,speed:a,fade:!0,cssEase:"linear"}).on("beforeChange",function(){w>=768&&$("#slickFifa").addClass("mask animation-frames-0")}).on("afterChange",function(){w>=768&&$("#slickFifa").removeClass("mask animation-frames-0")}),$(".alert").hide(),$(".navbar-toggle").on("click",function(){setTimeout(function(){$(".sub-nav, .navbar-toggle").toggleClass("active")},50)}),isMobile.android.device?($(".available-ios").addClass("hidden-xs"),$(".available-android").removeClass("hidden-xs")):isMobile.any&&$("#install").remove(),$("#form_contact").submit(function(e){var a=$(this),t=$(".alert");t.show(),$.ajax({type:a.attr("method"),url:a.attr("action"),data:a.serialize()}).done(function(e){var a=$(".alert");if(e.error&&!e.success){var t="";$.each(e.error,function(e,a){t+="<li>"+a+"</li>"}),a.removeClass("alert-success").addClass("alert-danger").find("ul").html(t)}else a.removeClass("alert-danger").addClass("alert-success").find("ul").html("<li>Cám ơn bạn đã gửi phản hồi cho chúng tôi!</li>")}).fail(function(){t.removeClass("alert-success").addClass("alert-danger").find("ul").html("<li>Xảy ra lỗi kết nối, vui lòng kiểm tra và thử lại!</li>")}),e.preventDefault()}),$(".install-cover").on("click",function(){$(".install-cover, .install-bg").hide(),$(".install-content").css("opacity",1)}),$(".close").on("click",function(){$(".install-cover, .install-bg").show(),$(".install-content").css("opacity",0)}),$("#toggleExplore").on("click",function(e){e.preventDefault();var a=$("#explore").offset().top;$("#explore").addClass("mask animation-frames-0"),setTimeout(function(){$("#explore").removeClass("mask animation-frames-0").addClass("active"),$("#explore .container").hide()},1400),$("html,body").animate({scrollTop:a},500)}),$(document).click(function(e){$(e.target).closest(".sub-nav, .navbar-toggle").length||$(".sub-nav").hasClass("active")&&$(".sub-nav, .navbar-toggle").removeClass("active")}),$("a[href*=#]:not([href=#])").click(function(){if($(this).hasClass("scroll")&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),$(".sub-nav, .navbar-toggle").removeClass("active"),!1}})});
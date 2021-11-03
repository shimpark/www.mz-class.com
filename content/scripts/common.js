/**
 * Author : CHO YI SEUL (eseul@univ.me)
 * COPYRIGHT(C) UNIVTOMORROW.ALL RIGHTS RESERVED.
 * Generated : 2021-11-15
 * Version : 1.0.0
**/

//calculate ios 100vh height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  console.log("resize");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

//media query matches value
var mqWeb = window.matchMedia("screen and (min-width: 1200px)");
var mqNotWeb = window.matchMedia("screen and (max-width: 1199.98px)");
var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

$(document).ready(function(){
    //navigation toggle event
    tglNav();
    //faq event
    faq();
});

//control window resize trigger
$(window).resize(function() {
    if(this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger("resizeEnd");
    }, 0);

});

$(window).on("resizeEnd", function(){
    //media query matches value
    var mqWeb = window.matchMedia("screen and (min-width: 1200px)");
    var mqNotWeb = window.matchMedia("screen and (max-width: 1199.98px)");
    var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
    var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

});

//navigation toggle event
function tglNav() {
    var hdTglBtn = $(".hd-tgl-btn");

    hdTglBtn.on("click", function(){
        $(this).toggleClass("active");

        $("body").toggleClass("full");
        $("#tglNav").fadeToggle(150).toggleClass("active");
    });
}

//open modal event
function openModal(modalID) {
    var modalArea = $(".modal-area");
    var thisModal = $("#" + modalID);

    $("body").addClass("full");
    modalArea.not(thisModal).hide();
    thisModal.fadeIn(250);
}
//close modal event
function closeModal(modalID) {
    var thisModal = $("#" + modalID);

    $("body").removeClass("full");
    thisModal.fadeOut(250);
}

//scroll animation event
function scrlAni() {
    $(window).scroll(function(){
        //common
        var windowST = $(window).scrollTop();

        $(".class-ani-area").each(function(){
            var thisAniAreaTop = $(this).offset().top;

            if(windowST > thisAniAreaTop - 350) {
                $(this).addClass("active");
            }
        });
    });
}

//class page event
function classEvent() {
    //anchor menu bar event
    $("[class^='anchor-menu__']").on("click", function(){
        var anchorIdx = $(this).parent("li").index();
        var anchorTop = $(".anchor-area").eq(anchorIdx).offset().top;

        $("html, body").animate({
            scrollTop: anchorTop
        }, 500);
    });
    $(window).scroll(function() {
        var windowST = $(window).scrollTop();

        $(".anchor-area").each(function() {
            var thisAnchorTop = $(this).offset().top;
            var thisAnchorIdx = $(this).attr("data-anchorIdx");

            if(windowST > thisAnchorTop - 100) {
                $("[class^='anchor-menu__']").removeClass("active");

                $(".anchor-menu-bar").find("li").eq(thisAnchorIdx).find("[class^='anchor-menu__']").addClass("active");
            }
            if(windowST == 0) {
                $("[class^='anchor-menu__']").removeClass("active");
            }
        });
        
    });

    //module event
    $(".class-course-day-btn").on("click", function() {
        $(".class-course-day-btn").removeClass("active");
        $(this).addClass("active");

        var moduleBtnIdx = $(this).parent("li").index();

        $(".class-course-module").removeClass("delay700").hide();
        $('[data-moduleIdx="' + moduleBtnIdx + '"]').show();
    }); 
}

//faq event
function faq() {
    $("[class^='faq-tabmenu__']").on("click", function(){
        $(this).parent().siblings("li").find("[class^='faq-tabmenu__']").removeClass("active");
        $(this).addClass("active");
    });
    $("[class^='faq-q']").each(function(){
        $(this).on("click", function(){
            $(this).toggleClass("active");
        });
    });
}

//main parallax event
function mainParallax() {

    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
            x: -((mouse.clientX - window.innerWidth / 2) / resistance),
            y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        });
    };

    $(document).mousemove(function (e) {
        //visual parallax
        $(".main-ico__vsl-circ").parallax(120, e);
        $(".main-ico__vsl-smile").parallax(-80, e);
        $(".main-ico__vsl-star").parallax(80, e);
        $(".main-titbox__vsl").parallax(-40, e);

        //intro parallax
        $(".main-ico__intro-copy").parallax(40, e);
        $(".main-ico__intro-circ").parallax(-80, e);
        $(".main-ico__intro-star").parallax(120, e);
    });

}
//main gate slider
function mainGateSlider() {

}
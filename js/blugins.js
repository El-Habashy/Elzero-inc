$(document).ready(function () {
    'use strict';
    
    $("html").niceScroll(); 
    
    $(".carousel").carousel({
        interval: 5000
    });
    //show color option div when click on the gear
    $(".gear-check").click(function () {

        $(".color-option").fadeToggle();
        
    });
    //change the color of the theme
    var colorLi =  $(".color-option ul li"),
        
        scrollbotton = $("#scroll-top");
    colorLi
        .eq(3).css("backgroundColor", " #1727CA").end()
        .eq(1).css("backgroundColor", " #E716D4").end()
        .eq(2).css("backgroundColor", " #E73E16").end()
        .eq(0).css("backgroundColor", " #8216E7");
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
   
    
    
    $(window).scroll(function () {
        
        $(this).scrollTop() >= 700 ? scrollbotton.show() : scrollbotton.hide();                   
        

    });
    //click on botton to scroll top
    
    scrollbotton.click(function () {
             
        $("html,body").animate({scrollTop: 0 }, 700);
    });
});
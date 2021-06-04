/*global $,jQuery,alert*/ 
$(document).ready(function ()
{

    //Nice Scroll//
    $("html").niceScroll();
    //End Nice Scroll//

    $('.carousel').carousel({

    interval:3000

});
//Show Color Option Div When Click On The Gear
$(".gear-check").click(function()
{
    $(".color-option").fadeToggle();
});


//Change Sim Color On Click

var colorLi=$(".color-option ul li");
colorLi
 .eq(0).css("backgroundColor","#E41b17").end()
 .eq(1).css("backgroundColor","#E426D5").end()
 .eq(2).css("backgroundColor","#009AFF").end()
 .eq(3).css("backgroundColor","#FFD500");

colorLi.click(function (){
    //console.log($(this).attr("data-value"));
    $("link[href*='color']").attr("href",$(this).attr("data-value"));
    $(".color-option").hide();
    
});


 //Caching The Scroll Top Element
var scrollbutton =$("#scroll-top");

$(window).scroll(function ()
{
//If ?:
 $(this).scrollTop()>=700?scrollbutton.show():  scrollbutton.hide();
});


//Click On Button To Scroll Top
scrollbutton.click(function ()
{
    $("html,body").animate({scrollTop: 0},600);
});
});


//Loading Screen
$(window).load(function ()
{
//Loading Elements

$(".overlay .spinnner").fadeOut(2000,

    function ()
{
//Show The Scroll
$("body").css("overflow","auto");
$(this).parent().fadeOut(2000,

    function ()
{
$(this).remove();
});
});
});

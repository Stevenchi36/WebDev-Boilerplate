$(document).ready(function(){
    
    // EXAMPLE:
    // $(window).scroll(function(){
    //     scrollParallax(".image1", -.5);
    // });

});
// Name:
//   if class name, precede with a period(.)
//   if id name, precede with a number sign(#)
// Speed:
//   1  = downward same speed as page
//   -1 = upward same same speed as page
//   Between -1 and 0 for most things
function scrollParallax(name, speed){
    var scrollPos = $(window).scrollTop();
    pos = scrollPos * speed;
    finalPos = "center " + pos + "px";
    $(name).css("background-position", finalPos);
}
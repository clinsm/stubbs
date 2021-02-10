$(document).ready(function(){
  //$('.mobile-menu').css("display", "none");
  $('#menu-icon-holder').click(function(){
    $(this).toggleClass('change');
    //if toggled then show openMenu
    var shown = $('#menu-icon-holder').hasClass("change");
      if(shown){
       $('.menu-button').css("background-color", "rgba(242, 36, 36, 0.7)");
       $('.menu-button').css("position", "absolute");
       $('.mobile-menu').css("display", "block");
      }else{
       $('.menu-button').css("background-color", "rgba(242, 36, 36, 0.0)");
       $('.menu-button').css("position", "relative");
       $('.mobile-menu').css("display", "none");
    }
  });
});

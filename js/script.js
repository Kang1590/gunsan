$(document).ready(function(){
  // 왼쪽메뉴
  $("a.mainMenu").on("mouseenter focus",function(){
    $("a.mainMenu").removeClass("act");
    $(this).addClass("act");
    $("nav.subMenu").stop().hide();
    $(this).next().stop().show();
  });
 $("#left ul").mouseleave(function(){
  $("a.mainMenu").removeClass("act");
  $("nav.subMenu a").removeAttr("class");
  $("nav.subMenu").stop().hide();
 }); 
 $(".last").blur(function(){
  $("a.mainMenu").removeClass("act");
  $("nav.subMenu a").removeAttr("class");
  $("nav.subMenu").stop().hide();
 });

// 슬라이드
setInterval(toRight, 2800);	
const leftPos =  $("#slide img").width() * -1;
$("#slide").css("left", leftPos);
console.log(leftPos);
function toRight(){
  $("#slide").stop().animate({left: 0 },1000, function(){
      $("#slide").prepend( $("#slide img").eq(2) );
      $("#slide").css("left" , leftPos +"px");
  });
}

// 팝업모달
$("#notice a").click(function(){
  $("#popup").fadeIn();
});
$("#popup button").click(function(){
  $("#popup").fadeOut();
});
$(document).keydown(function(e){
  if( e.key == "Escape" ){
    $("#popup").fadeOut();
  }
});
});
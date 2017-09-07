// Once clicked on an li, turn the color to gray and strike line through
$("li").on("click",function(){
  $(this).toggleClass("completed");
})

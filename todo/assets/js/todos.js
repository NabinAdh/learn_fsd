// Once clicked on an li, turn the color to gray and strike line through
$("ul").on("click", "li",function(){
  $(this).toggleClass("completed");
});

// Deleting task / li on clicked when clicked on X
$("ul").on("click", "span",function(event){
  // remove the li / list
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // To stop bubbling up to parent element
  event.stopPropagation();
});

// On hitting enter key, new task should be added
$("input[type='text']").on("keypress",function(event){
  // If enter key is hit add it to list
  if (event.which === 13) {
    // Extract text
    var new_todo = $(this).val();
    // clear the input
    $(this).val("");
    // Create new li and add it to ul
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + new_todo + "</li>");
  }
});

// Hide and show form when clicked on plus sign
$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle();
})

$("button").on("click",function() {
  $("div").fadeToggle(1000, function(){
    // Calls after fade out is completed
    console.log("Toggling completed");
    // Ensure elements are deleted after fadeout
    // $(this).remove();
  });
});

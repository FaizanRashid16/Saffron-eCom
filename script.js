/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  function change_image(image){

    var container = document.getElementById("main-image");

   container.src = image.src;
}



document.addEventListener("DOMContentLoaded", function(event) {







});
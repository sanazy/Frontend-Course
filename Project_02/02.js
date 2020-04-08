$(document).ready(function(){


  var par = $('#whole-content');
  $(par).hide();


  var isTrue = true;
  $("#jump_down").click(function(){
    if (isTrue) {
        $("#whole-content").slideDown(2500);
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 2000);
        $("#jump_down").css({"background-image": "url(up1.png)"});
        isTrue = false;
    } else  {
        $("#whole-content").slideUp(2500);
        $("#jump_down").css({"background-image": "url(down1.png)"});
        isTrue = true;
    }
  });


  //$('a[href*=#]:not([href=#modal-cv])').on('click', function (e) {
  //':not(#modal-cv), .another-div-class, .parent-div-class *)'

  $('a[href^="#"]').click(function(){
      var id = $(this).attr("href");
      if (id === '#modal') {
          return;
      }

      $('html, body').animate({
        scrollTop:$(id).offset().top
      }, 2000, 'linear');
  });

});

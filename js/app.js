var main = function() {
  /* Push the body and the nav over by 285px over */
  $('#icon-menu').click(function() {
    $('.menu').animate({
      top: "0px"
    }, 200);
  });
  
    /* Then push them back */
  $('.menu').click(function() {
    $('.menu').animate({
      top: "-300px"
    }, 200);
  });


};


$(document).ready(main);
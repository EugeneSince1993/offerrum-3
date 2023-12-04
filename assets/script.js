$(document).ready(function() {

  // modal
  $(".modal .close-btn").click(function() {
    $(".modal-overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  }); 

  $(".start-earning").click(function() {
    $(".modal-overlay").addClass("active");
    $("body").addClass("no-scroll");
  });

  // header collapse
  $(".header-mobile__burger").click(function() {
    $(".header-mobile__collapse-overlay").addClass("active");
    $("body").addClass("no-scroll");
  });

  $(".header-mobile__collapse__row .close-btn").click(function() {
    $(".header-mobile__collapse-overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  }); 
});

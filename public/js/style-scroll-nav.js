$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      $(".navbar").css({
        "background-color": "white",
        "box-shadow": "-1px 17px 32px -21px rgba(0,0,0,1)",
        "-webkit-box-shadow": "-1px 17px 32px -21px rgba(0,0,0,1)",
        "-moz-box-shadow": "-1px 17px 32px -21px rgba(0,0,0,1)",
        transition: ".5s",
      });
      $(".navbar a").css("color", "black");
      $(".nav-dropdown .btn-dropdown").css("color", "black");
    } else {
      $(".navbar").css({
        "background-color": "white",
        "box-shadow": "0 3px rgba(156, 156, 156, 0)",
        transition: ".5s",
      });
      $(".navbar a").css("color", "black");
      $(".dropdown-menu a").css("color", "black");
    }
  });
});

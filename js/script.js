$(function () {
  //header 스크롤 시 숨기기
  $(window).on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel < 0) {
      $(".h_container").slideUp();
    } else {
      $(".h_container").slideDown();
    }
  });
});

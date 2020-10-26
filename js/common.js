$(function () {
  //start

  //    console.log(location.pathname);
  //    console.log(location.host);

  $("header").load("/raoncorp/inc_head_foot.html header .h_container", headColor);
  $("footer").load("/raoncorp/inc_head_foot.html footer .f_container");

  var filename = location.pathname;

  function headColor() {
    if (filename == "/raoncorp/index.html" || filename == "/raoncorp/") {
      $(".h_container").addClass("dark");
      $(".contact").addClass("default");
    } else {
      $(".h_container").addClass("white");
      $(".contact").addClass("white");
    }
  }

  //  function menuTrigger(){
  //      // menu-trigger active 클래스 추가
  //      var menu = document.querySelector('.menu-trigger');
  //      var nav = document.querySelector('nav');

  //      menu.addEventListener('click',function(){
  //          menu.classList.toggle('active');
  //          nav.classList.toggle('active');
  //      });
  //  }
});

$(function () {
  //start

  //    console.log(location.pathname);
  //    console.log(location.host);

  $("header").load("/raoncorp/inc_head_foot.html header .h_container", headColor);
  $("footer").load("/raoncorp/inc_head_foot.html footer .f_container", scrollTop);

  var filename = location.pathname;

  function headColor() {
    if (filename == "/raoncorp/index.html" || filename == "/raoncorp/") {
      $(".h_container").addClass("dark");
      $(".contact").addClass("default");
    }else if(filename == "/raoncorp/pages/raoninfo.html"){
      
      $('.h_container').addClass('default');
      $(".contact").addClass("default");
    }else {
      $(".h_container").addClass("white");
      $(".contact").addClass("white");
    }
  }

  function scrollTop(){
    setTimeout(function(){
        var topButton = document.querySelector('.copyright a');

        topButton.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            $(".h_container").slideDown();
        });
    },500);
}

  //header 스크롤 시 숨기기
  $(window).on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel < 0) {
      $(".h_container").slideUp();
    } else {
      $(".h_container").slideDown();
    }
  });


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

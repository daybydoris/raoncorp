
window.addEventListener('DOMContentLoaded', function () {
    const tabBtn = document.querySelectorAll('.tag_item a');

    tabBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const where = e.target.getAttribute('href');
            const whereToscroll = document.querySelector('#' + where);
            const offsetTop = whereToscroll.offsetTop + 100;

            window.scrollTo({ top: offsetTop, left: 0, behavior: "smooth" });

            console.log(offsetTop);

            //아이디 비교 후 그 요소의 top을 찾아서 그 곳으로 이동하기!


        });
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const aBtn = document.querySelectorAll('.tag_item a');
    const tab = document.querySelector('.tab');
    const tabBtn = document.querySelectorAll('.tab a');
    const now = document.querySelector('.now');
    const then = document.querySelector('.then');

    aBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            //아이디 비교 후 그 요소의 top을 찾아서 그 곳으로 이동
            e.preventDefault();

            const where = e.target.getAttribute('href');
            const whereToscroll = document.querySelector('#' + where);
            const offsetTop = whereToscroll.offsetTop + 100;

            window.scrollTo({ top: offsetTop, left: 0, behavior: "smooth" });

        });
    });

    tab.addEventListener('click', e => {
        e.preventDefault();

        tabBtn.forEach(btn => {
            btn.classList.remove('active');

            e.target.classList.add('active');

            if (e.target.classList.contains('tab_now')) {
                then.classList.remove('active');
                now.classList.add('active');
            } else {
                now.classList.remove('active');
                then.classList.add('active');
            }
        });
    });
});
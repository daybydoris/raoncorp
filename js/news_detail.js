'use strict';

window.addEventListener('DOMContentLoaded', function () {
    //start

    const requestURL = "../news.json";
    const request = new XMLHttpRequest();

    request.open('GET', requestURL, true);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        console.log('성공');

        const newsData = request.response;
        const newsDetail = document.querySelector('.section_news_detail');


        createNews(newsData);


        function createNews(jsonObj) {

            //게시글 번호 불러오기
            let getNum = localStorage.getItem('num');

            const newsWrap = document.createElement('div'),
                newsTitle = document.createElement('div'),
                newsTitleH2 = document.createElement('h2'),
                newsTitleP = document.createElement('p'),
                newsCon = document.createElement('div'),
                newsConTxt = document.createElement('div'),
                newsFooter = document.createElement('div'),
                newsPrevNext = document.createElement('ul'),
                newsPrev = document.createElement('li'),
                newsPrevSpan = document.createElement('span'),
                newsPrevP = document.createElement('p'),
                newsPrevA = document.createElement('a'),
                newsPrevASpan = document.createElement('span'),
                newsNext = document.createElement('li'),
                newsNextSpan = document.createElement('span'),
                newsNextP = document.createElement('p'),
                newsNextA = document.createElement('a'),
                newsNextASpan = document.createElement('span'),
                btnList = document.createElement('div'),
                btnSquare = document.createElement('a');

            jsonObj.news.sort(date_sort).forEach(function (el, key) {
                if (getNum == key) {
                    let text = el.text,
                        title = el.tit,
                        imgUrl = el.imgUrl;

                    const date = el.date;

                    //imgUrl 경로 수정하기
                    imgUrl = imgUrl.replace(imgUrl, "../" + imgUrl);
                    newsTitle.classList.add('news_title');
                    newsTitleH2.textContent = el.tit;
                    newsTitleP.textContent = el.date;

                    newsTitle.appendChild(newsTitleH2);
                    newsTitle.appendChild(newsTitleP);

                    newsCon.classList.add('news_con');
                    newsConTxt.classList.add('txt_wrap');
                    newsConTxt.innerHTML = el.text;

                    newsCon.appendChild(newsConTxt);

                    newsFooter.classList.add('news_footer');
                    newsPrevNext.classList.add('prev_next_news');

                    //이전글
                    newsPrev.classList.add('prev_news');
                    newsPrevSpan.textContent = "이전글";

                    if (key < jsonObj.news.length - 1) {
                        newsPrevASpan.textContent = jsonObj.news[key + 1].tit;
                        newsPrevA.href = "news_detail.html";
                        newsPrevA.appendChild(newsPrevASpan);
                        newsPrevP.appendChild(newsPrevA);
                    } else {
                        newsPrevP.textContent = "-";
                    }

                    newsPrev.appendChild(newsPrevSpan);
                    newsPrev.appendChild(newsPrevP);

                    newsPrevASpan.addEventListener('click', function () {
                        localStorage.setItem('num', key + 1);
                        location.href = "news_detail.html";
                    });

                    //다음글
                    newsNext.classList.add('next_news');
                    newsNextSpan.textContent = "다음글";

                    if (key > 0) {
                        newsNextASpan.textContent = jsonObj.news[key - 1].tit;
                        newsNextA.href = "news_detail.html";
                        newsNextA.appendChild(newsNextASpan);
                        newsNextP.appendChild(newsNextA);
                    } else {
                        newsNextP.textContent = "-";
                    }

                    newsNext.appendChild(newsNextSpan);
                    newsNext.appendChild(newsNextP);

                    newsNextASpan.addEventListener('click', function () {
                        localStorage.setItem('num', key - 1);
                        location.href = "news_detail.html";
                    });

                    newsPrevNext.appendChild(newsNext);
                    newsPrevNext.appendChild(newsPrev);

                    newsFooter.appendChild(newsPrevNext);
                    newsWrap.classList.add('news_wrap');

                    newsWrap.appendChild(newsTitle);
                    newsWrap.appendChild(newsCon);
                    newsWrap.appendChild(newsFooter);
                    newsWrap.appendChild(btnList);

                    btnList.classList.add('btn_list');
                    btnSquare.classList.add('btn_square');
                    btnSquare.classList.add('orng');
                    btnSquare.textContent = "목록";
                    btnSquare.href = "news.html";

                    btnList.appendChild(btnSquare);

                    newsDetail.appendChild(newsWrap);


                }
            });

            //게시글 최신 날짜순 정렬
            function date_sort(a, b) {
                var dateA = new Date(a['date']).getTime();
                var dateB = new Date(b['date']).getTime();
                return dateA < dateB ? 1 : -1;
            }
        }
    }
});
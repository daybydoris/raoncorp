'use strict';

window.addEventListener('DOMContentLoaded', function () {
    //start

    const requestURL = "news.json";
    const request = new XMLHttpRequest();

    request.open('GET', requestURL, true);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        console.log('성공');

        const newsData = request.response;
        const newsList = document.querySelector('.section_news ul');


        createNews(newsData);

        function createNews(jsonObj) {
            jsonObj.news.forEach(function (el, key) {

                //3개까지만 출력
                if (key < 3) {

                    let text = el.text,
                        title = el.tit;

                    const date = el.date,
                        imgUrl = el.imgUrl;

                    text = text.replace(/(<([^>]+)>)/ig, "");

                    //본문 미리보기 글자 수 제한
                    if (title.length > 35) {
                        title = title.substr(0, 35);
                        title = title.replace(title, title + "...");
                    }

                    //본문 미리보기 글자 수 제한
                    if (text.length > 60) {
                        text = text.substr(0, 63);
                        text = text.replace(text, text + "...");
                    }



                    const newsItem = document.createElement('li'),
                        newsLink = document.createElement('a'),
                        imgBox = document.createElement('div'),
                        imgEle = document.createElement('img'),
                        txtBox = document.createElement('div'),
                        listTit = document.createElement('h3'),
                        txtCon = document.createElement('p');

                    txtCon.innerHTML = text;
                    txtCon.classList.add('text');

                    listTit.textContent = title;
                    listTit.classList.add('list_title');

                    txtBox.appendChild(listTit);
                    txtBox.appendChild(txtCon);
                    txtBox.classList.add('txt_box');

                    imgEle.setAttribute('src', imgUrl);
                    imgBox.appendChild(imgEle);
                    imgBox.classList.add('img_box');

                    newsLink.appendChild(imgBox);
                    newsLink.appendChild(txtBox);
                    newsLink.setAttribute('href', '#');
                    newsLink.classList.add('news_link');

                    newsItem.appendChild(newsLink);
                    newsItem.classList.add("news_item_" + key);

                    newsList.appendChild(newsItem);

                }
            });


        }



    }




    //end
});
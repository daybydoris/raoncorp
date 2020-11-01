$(function(){
    //start

    // //카테고리 선택
    // $('.cs_category .btn_more').on('click',function(e){
    //     e.preventDefault();

    //     //버튼 활성화
    //     $('.cs_category .btn_more').removeClass('active');
    //     $(this).addClass('active');

    //     //카테고리 아이디 검사
    //     var cateId = $(this).attr('id');

    //     $('.cs_faq').stop().hide();

    //     $('.cs_faq').each(function(){
            

    //         if($(this).attr('id') == cateId){
    //             //$(this).addClass('active');
    //             $(this).fadeIn(300);

    //             if($(this).attr('id') == 'inquiry'){
                    
    //                 $('.download').stop().hide();
    //             }else{
    //                 $('.download').stop().fadeIn();
    //             }
    //         }
    //     });
    // })

    //faq 내용 열고 닫기
    $('.faq_list_item').on('click',function(){
        var faqCon = $(this).find('.faq_content');
        faqCon.stop().slideToggle();

        var faqBtn = $(this).find('.faq_btn');

        faqBtn.stop().toggleClass('active');
        
    }); 

    $('.slideDown').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.slideSelect').slideToggle();
    });


    //inquiry submit 버튼
    $('.submit').on('click',function(e){
        e.preventDefault();
        //체크박스 체크 여부 검사
        if($('input:checkbox[id="privacyTxt_ck"]').is(':checked')){
            alert('문의가 접수되었습니다.');
            location.href = '../../index.html';
        }else{
            alert('개인정보 수집 및 이용 동의에 체크해주세요.');
        }
    });

    //end
});
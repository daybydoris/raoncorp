$(function(){
    //start

    //카테고리 선택
    $('.cs_category .btn_more').on('click',function(e){
        e.preventDefault();

        //버튼 활성화
        $('.cs_category .btn_more').removeClass('active');
        $(this).addClass('active');

        //카테고리 아이디 검사
        var cateId = $(this).attr('id');

        $('.cs_faq').stop().hide();

        $('.cs_faq').each(function(){
            

            if($(this).attr('id') == cateId){
                //$(this).addClass('active');
                $(this).fadeIn(300);

                if($(this).attr('id') == 'inquiry'){
                    
                    $('.download').stop().hide();
                }else{
                    $('.download').stop().fadeIn();
                }
            }
        });
    })

    //faq 내용 열고 닫기
    $('.faq_list_item').on('click',function(){
        var faqCon = $(this).find('.faq_content');
        faqCon.stop().slideToggle();

        var faqBtn = $(this).find('.faq_btn');

        faqBtn.stop().toggleClass('active');

        // setTimeout(function(){
        //     console.log(faqCon.css('display'));
        //     if(faqCon.css('display') == 'block'){
        //         faqBtn.css('transform','rotate(180deg)');
        //     }else{
        //         faqBtn.css('transform','rotate(0deg)');
        //     }
        // },410);
        
    }); 

    //end
});
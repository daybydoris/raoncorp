$(function(){

    const faqListItem = document.querySelectorAll('.faq_list_item');
    const slideDownCon = document.querySelectorAll('.slideDown');
    const faqBtn = document.querySelectorAll('.faq_btn');

    //faq 내용 열고 닫기
    faqListItem.forEach(function(li){
        li.addEventListener('click',function(){
            const faqCon = this.childNodes[3];
            faqCon.classList.toggle('active');

            this.childNodes.forEach(function(con){
                con.childNodes.forEach(function(el){
                    if(el.classList == 'faq_btn' || el.classList == 'faq_btn active'){
                        el.classList.toggle('active');
                    }
                });
                
            });
            //faqBtn.classList.toggle('active');
        });
    });

    //download 버튼 slideDown, slideUp
    slideDownCon.forEach(function(btn){
        btn.addEventListener('click', function(e){
            e.preventDefault();
            this.parentNode.childNodes.forEach(function(nodes){
                if(nodes.classList == 'slideSelect' || nodes.classList == 'slideSelect active'){
                    nodes.classList.toggle('active');
                    nodes.addEventListener('click',function(e){
                        e.preventDefault();
                    });
                }
            });
            
        });
    });

    //



    //inquiry submit 버튼
    $('input[type=submit]').on('click',function(e){
        e.preventDefault();
        //체크박스 체크 여부 검사

        checkNull();
        function checkNull(){
            if(!$('input:checkbox[id="privacyTxt_ck"]').is(':checked')){
                alert('개인정보 수집 및 이용 동의에 체크해주세요.');
                return false;
            }
    
            if($('input[id="data_company"]').val() == ""){
                alert('회사명을 입력해주세요.');
                $('input[id="data_company"]').focus();
                return false;
            }

            if($('input[id="data_industry"]').val() == ""){
                alert('산업을 입력해주세요.');
                $('input[id="data_industry"]').focus();
                return false;
            }

            if($('input[id="data_name"]').val() == ""){
                alert('이름을 입력해주세요.');
                $('input[id="data_name"]').focus();
                return false;
            }

            if($('input[id="data_email"]').val() == ""){
                alert('이메일을 입력해주세요.');
                $('input[id="data_email"]').focus();
                return false;
            }
            
            if(!$('input[id="data_email"]').val() == ""){
                let emailVal = $('input[id="data_email"]').val();
                const emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

                if(!emailCheck.test(emailVal)){
                    alert('이메일 형식에 맞게 입력해주세요.');
                    $('input[id="data_email"]').focus();
                    return false;
                }
            }

            if($('input[id="data_phone"]').val() == ""){
                alert('연락처를 입력해주세요.');
                $('input[id="data_phone"]').focus();
                return false;
            }

            if(!$('input[id="data_phone"]').val() == ""){
                let phoneVal = $('input[id="data_phone"]').val();
                const phoneNumberCheck = RegExp(/^01[0179][0-9]{7,8}$/);

                if(!phoneNumberCheck.test(phoneVal)){
                    alert('전화번호 형식에 맞게 입력해주세요.');
                    $('input[id="data_phone"]').focus();
                    return false;
                }
            }

            if($('textarea[id="data_content"]').val() == ""){
                alert('문의내용을 입력해주세요.');
                $('textarea[id="data_content"]').focus();
                return false;
            }

            alert('문의가 접수되었습니다.');
            location.href = '/raoncorp/index.html';
        }

        
        
    });

    //end
});
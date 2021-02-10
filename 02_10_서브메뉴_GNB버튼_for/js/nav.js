//네비게이션(Navigation) GNB(메인메뉴) & LNB(서브메뉴)
//마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타난다.
//1. 메인 메뉴를 클릭하면 해당 메인메뉴에 on클래스가 추가(addclass)된다.
//   그리고 해당 메뉴를 제외한 모든 버튼은 클래스가 삭제(removeclass)된다.
//2. 해당 아래 서브메뉴에도 on클래스가 추가(addclass)된다
//   그리고 해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제(removeclass)된다.
//3. 해당 메인메뉴와 서브메뉴의 영역을 떠나면 (mouseleave == mouseout) 
//   메인메뉴와 서브메뉴 모두 초기화 모든 클래스 삭제(remove)된다.
var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
    var $mainBtn = document.getElementsByClassName('main-btn');
    var $sub     = document.getElementsByClassName('sub');
    var $navArea      = document.getElementsByClassName('nav-area');


    //메인버튼 클릭 추가 이벤트 리스너 등록
    //버튼 타겟 EventTarget == $mainBtn[0]
    
    //1.$mainBtn 요소 배열처리 [].slice.call($mainBtn);
    //2. 변수에 대입
    
    $mainBtn = [].slice.call($mainBtn);
    //3. 변수.forEach(function(1요소, 2인덱스,3배열){});
    //3. $mainBtn.forEach(function(){});
    //3. $mainBtn.forEach(function(매개변수){});


    $mainBtn.forEach(function(el, idx, arr){
        $mainBtn[idx].addEventListener('mouseenter', function(e){
            e.preventDefault();
            // this.classList.add('on'); //addclass('on') 제이쿼리 방식
            for(i = 0; i < 4; i++){  
            $mainBtn[idx].classList.remove('on');
            $sub[idx].classList.remove('on');
            }
            $mainBtn[idx].classList.add('on');
            $sub[idx].classList.add('on');
    
        },false);
    },false)
    
    
    
    
    //li.$navArea 영역을 떠나면 메인메뉴, 서브메뉴 on클래스 모두 삭제
    
    
    // for(i=0; i<4;i++){
    // $navArea[i].addEventListener('mouseleave', function(e){
    //     e.preventDefault();
    //     $mainBtn[i].classList.remove('on');
    //     $sub[i].classList.remove('on');
    
    //     },false);
    // }
    
    
    //마우스 이벤트로 반복문 처리 안된다.
    //그래서 li.$navArea 영역 객체를 객체 배열처리 한다.
    //객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
    //객체를 배열로 처리                   [].slice.call(객체)
    //그리고 객체 배열 반복문(forEach())을 활용한다.
    /*
    var obj = {irum:'김유신'}; //객체선언 리터럴 방식
    var arr = ['김유신','이순신','김좌진']; //배열선언 리터럴 방식
    console.log(arr[1]);
    */
   

    //1. 배열처리   [].slice.call(클래스 요소);
    var $navArea = [].slice.call($navArea); //클래스요소를 배열처리
    console.log($navArea);                  //배열 결과 값처리

    //2. 반복문 처리 forEach(function(){});

    $navArea.forEach(function(el, idx){
        console.log(idx, el);
        $navArea[idx].addEventListener('mouseleave', function(e){
            e.preventDefault();
            $mainBtn[idx].classList.remove('on');
            $sub[idx].classList.remove('on');
        },false);

    },false);
    
    }
};

nav.init();

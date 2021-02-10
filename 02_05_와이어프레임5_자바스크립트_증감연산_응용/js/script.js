// // alert('해윙 Javascript!!!');
// // 슬라이드 제작
// // 섹션2의 right 박스를 클릭하면 1씩 증가
// // 섹션1의 슬라이드 박스(.slide-wrap 너비 4800px크기)를
// //오른쪽에서 왼쪽으로 -1200씩 부드럽게(트렌지션 적용) 이동한다.


// //1.다음 슬라이드 버튼을 클릭하면
// //  다음으로 이동하는 함수(nextSlideFn())를 호출한다.
// var a = 0;
// var $slide = document.querySelector('.slide-wrap');

// //다음 슬라이드 함수
// function nextSlideFn(){
 
//     a+=1200;
//     $slide.style = 'left:' + a + 'px';
// }
// //이전 슬라이드 버튼을 클릭하면
// // 이전으로 이동하는 함수를 호출
// function prevSlideFn(){
//     a-=1200;
//     $slide.style = 'left:' + a + 'px';
 
// }


// 1.html 태그에 버튼클릭 이벤트 등록
// 1-1. 다음 슬라이드 버튼 클릭 이벤트 등록(right)
// 1-2. 이전 슬라이드 버튼 클릭 이벤트 등록(left)

// 2. 클릭시 호출 할 함수 생성()
// 2-1. 다음 슬라이드 함수 생성-(nextSlideFn)
// 2-1. 이전 슬라이드 함수 생성-(prevSlideFn)


//////////////////////////////////////////////////////////////////////////
/////////////변수 설정
//////////////////////////////////////////////////////////////////////////
var a = 0; //증감변수의 초기값설정 (무조건 초기값 잡고 가야함)
var $slideWrap = document.querySelector('.slide-wrap');
// var $page = document.querySelector('.page');

//////////////////////////////////////////////////////////////////////////
////////////함수 생성
//////////////////////////////////////////////////////////////////////////

// setInterval(nextSlideFn, 3000);
// setTimeout(nextSlideFn, 3000);

function nextSlideFn(){
    a++;
    a > 3 ? a = 0 : a;  // 마지막 슬라이드 증가 숫자가
                        // 3을 초과하면 3으로 고정
                        // 아니면 증가 값 그대로
    $slideWrap.style = 'left:' + (-1200*a) + 'px';
    $page.innerHTML = a+1 + '/4';
    // alert("다음 슬라이드" + a);
}
function prevSlideFn(){
    a--;
    a < 0 ? a = 3 : a;  //처음 슬라이드(0) 이전이면(-1)
                        // 0으로 고정 
                        // 그렇지 않으면 감소값 그대로
    $slideWrap.style = 'left:' + (-1200*a) + 'px';

// alert("이전 슬라이드" + a);
}

//3. 생성된 함수와 버튼을 연결
//3-1. 다음 슬라이드 버튼 클릭 이벤트에 다음 슬라이드 함수를 복붙
//3-1. 이전 슬라이드 버튼 클릭 이벤트에 이전 슬라이드 함수를 복붙

//4. 연결테스트
//4-1. 다음슬라이드 버튼 클릭(alert() 테스트)
//4-1. 이전 슬라이드 버튼 클릭(alert() 테스트)

//5. 증감변수 등록 그리고 함수에 증가변수 코딩
//5-1. 다음슬라이드 함수 안에 증가 연산식 코딩
//5-2. 이전슬라이드 함수 안에 증가 연산식 코딩

//6. 증감 변수 등록 그리고 함수에 증가변수 테스트 alert
//6-1. 다음슬라이드 a++ 증가확인
//6-2. 이전슬라이드 a-- 감소확인

//7. 이동할 슬라이드 박스(.slide-wrap)를 변수 등록
//8. 스타일 시트에서 이동할 슬라이드 박스(.slide-wrap) 
//      스타일 설정 position:relative; left:0; transition:all 0.6s;


//9. 다음 슬라이드 버튼 클릭 슬라이드 실행(구현)
//9. 다음 슬라이드 버튼 클릭 다음 슬라이드 실행(구현)
//9. 다음 슬라이드 버튼 클릭 이전 슬라이드 실행(구현)


var b = 0; //증감변수의 초기값설정 (무조건 초기값 잡고 가야함)
var $slideWrap2 = document.querySelector('.slide-wrapper');

function nextSlideFn2(){
    b++;
    $slideWrap2.style = 'left:' + (400*b) +'px'
}
function prevSlideFn2(){
    b--;
    $slideWrap2.style = 'left:' + (400*b) +'px'

}

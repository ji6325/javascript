var a = 0;
$slideWrap = document.querySelector(".slide-wrap");

function nextslideFn(){
    a++;
    a > 3 ? a=3 : a; 
    $slideWrap.style = 'left:' + (-1200*a) + 'px';

// alert("이전");
}
function prevslideFn(){
    a--;
    a < 0 ? a = 0 : a;
    $slideWrap.style = 'left:' + (-1200*a) + 'px';
// alert("다음");
}
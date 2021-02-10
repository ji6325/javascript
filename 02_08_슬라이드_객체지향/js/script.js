var imageslide = {
    init: function(){
    this.slide1Btn();
    this.slide2Btn();
    this.slide3Btn();
    this.slide4Btn();
    },

    slide1Btn:function(){
        var a=0;
        var $slideWrap = document.querySelector('#section1 .slide-wrap');
        var $nextBtn = document.querySelector('#section1 .next-btn');
        var $prevBtn = document.querySelector('#section1 .prev-btn');

        function nextSlideFn(){
            a++;
            a > 3 ? a = 0 : a;
            $slideWrap.style = 'left:' + (-1200*a) + 'px';
            
        }
        function prevSlideFn(){
            a--;
            a < 0 ? a=3 : a;
            $slideWrap.style = 'left:' + (-1200*a) + 'px';
        }
        $nextBtn.onclick = function(){
            nextSlideFn();
        };
        $prevBtn.onclick = function(){
            prevSlideFn();
        };
    },
    slide2Btn:function(){
        var a=0;
        var $slideWrap = document.querySelector('#section2 .left .slide-wrap');
        var $nextBtn = document.querySelector('#section2 .left .next-btn');
        var $prevBtn = document.querySelector('#section2 .left .prev-btn');

        function nextSlideFn(){
            a++;
            a > 3 ? a = 0 : a;
            $slideWrap.style = 'left:' + (-400*a) + 'px';
            
        }
        function prevSlideFn(){
            a--;
            a < 0 ? a=3 : a;
            $slideWrap.style = 'left:' + (-400*a) + 'px';
        }
        $nextBtn.onclick = function(){
            nextSlideFn();
        };
        $prevBtn.onclick = function(){
            prevSlideFn();
        };
    },
    slide3Btn:function(){
        var a = 0;
        var $slideWrap = document.querySelector('#section2 .center .slide-wrap');
        var $nextBtn = document.querySelector('#section2 .center .next-btn');
        var $prevBtn = document.querySelector('#section2 .center .prev-btn');

        function prevSlideFn(){
            a++;
            a > 3 ? a = 0 : a;
            $slideWrap.style = 'top:' + (-200*a) + 'px';
        }
        function nextSlideFn(){
            a--;
            a < 0 ? a = 3 : a;
            $slideWrap.style = 'top:' + (-200*a) + 'px';
        }
        $nextBtn.onclick = function(){
            nextSlideFn();
        };
        $prevBtn.onclick = function(){
            prevSlideFn();
        };

    },
    slide4Btn:function(){
        var a = 0;
        var $slideWrap = document.querySelector('#section2 .right .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .right .next-btn');
        var $prevBtn = document.querySelector('#section2 .right .prev-btn');
        function nextSlideFn(){
            a++;
            a > 3 ? a = 0 : a;
            $slideWrap.style = 'left:' + (-400*a) + 'px';
        }
        function prevSlideFn(){
            a--;
            a < 0 ? a = 3 : a;
            $slideWrap.style = 'left:' + (-400*a) + 'px';
        }
        $nextBtn.onclick = function(){
            nextSlideFn();
        };
        $prevBtn.onclick = function(){
            prevSlideFn();
        };
    },
};
imageslide.init();
window.addEventListener('DOMContentLoaded', function(){

    var navi = document.querySelectorAll('.side_menu ul li a');
    var num = document.querySelectorAll('.side_menu span');
    var con = document.querySelectorAll('.con1 > div');
    var conArr = [];

    setTimeout(function(){
    con.forEach(function(cn,idx){
        conArr.push(cn.offsetTop);
    });
},500); //이미지 로드시간이 길어질수있어서 시간을 좀 주고 값을받게해서 이미지로드 끝나고 값을 받을수있게한다.

    navi.forEach(function(nv,idx){
    
        nv.addEventListener('click',function(e){
            e.preventDefault();
    
            window.scrollTo(0,con[idx].offsetTop);
            
        });
    });

    var winH = window.innerHeight/2;
    window.addEventListener('scroll',function(){
        conArr.forEach(function(el,idx){
        if(window.scrollY >= conArr[idx] - winH){
            
            num.forEach(function(a){
                a.classList.remove('click');
            });
            num[idx].classList.add('click'); 
        }
    });
   
        
    });
});
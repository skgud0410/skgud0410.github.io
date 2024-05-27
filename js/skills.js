//문서 스크롤 효과 함수
function docScroll(){
    document.onscroll=function(){
        let skillsEl  = document.querySelector('#skills');
        let skillsElCon = document.querySelector('#skills .container');
        let skillsTop  = skillsEl.offsetTop;            
        let wh = window.innerHeight;
        let scrTop = window.scrollY;            
        
        if(skillsTop - (wh / 2) <= scrTop){
            skillsElCon.style.transform='rotateX(0deg)';
            skillsElCon.style.opacity='1';              
            fnPrograss();
        }else{
            skillsElCon.style.transform='rotateX(180deg)';
            skillsElCon.style.opacity='0';
        }            
    }
}
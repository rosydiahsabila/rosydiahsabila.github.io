const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

let slide=document.querySelectorAll('.slide')
var current=0;

function cls(){
    for (let i=0; i <slide.length; i++){
        slide[i].computedStyleMap.display='none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x += 0.1;
        slide[current].style.opacity = x;
        if(x >=1){
            clearInterval(intX);
            x = 0.4;
        }
    },100);
}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x>=1){
            clearInterval.style.opacity = x;
            x = 0.4
        }
    }, 100);
}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();
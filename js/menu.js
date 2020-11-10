const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const closeBtn = document.querySelector('.close-btn');


menuBtn.addEventListener('click', ()=>{
    menu.classList.add('show');
    body.classList.add('body-style');
    document.querySelector('body').classList.add('show-menu');
    closeBtn.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('show');
    body.classList.remove('body-style');
    document.querySelector('body').classList.remove('show-menu');
    closeBtn.classList.remove('show');
})


window.addEventListener('resize', ()=>{
    if (window.innerWidth > 768){
        menu.classList.remove('show');
        body.classList.remove('body-style');
        document.querySelector('body').classList.remove('show-menu');
        closeBtn.classList.remove('show');
    }
})


window.addEventListener('DOMContentLoaded', ()=>{
    menu.classList.remove('show');
    body.classList.remove('body-style');
    document.querySelector('body').classList.remove('show-menu');
    closeBtn.classList.remove('show');
})





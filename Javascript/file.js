const menuToogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');


menuToogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

const navbar = document.querySelector('.navbar');
    window.onscroll = function(){
        var top = window.scrollY;
        if(top>50) {
            navbar.classList.add('muncul');
        }
        else {
            navbar.classList.remove('muncul');
        }
    };
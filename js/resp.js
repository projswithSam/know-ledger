burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class-reap');
    navList.classList.toggle('v-class-reap');
    navbar.classList.toggle('h-nav-resp');
})
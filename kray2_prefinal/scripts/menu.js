let nav = document.querySelector('.nav__section');
let img = document.querySelector('.nav_image')
let scrlHeight = window.scrollY;
let height = window.outerHeight;
let header = document.querySelector('.header__section');
if(scrlHeight >= height){
    nav.style = 'position: fixed;';
}
else{
    nav.style = '';
}
let flag = true;
window.addEventListener('scroll', () => {
    let scrlHeight = window.scrollY;
    let height = window.outerHeight;
    let navH = nav.getBoundingClientRect().height;
    if(scrlHeight >= navH + 150){
        if(!nav.className.includes('op-0')){
            nav.classList.add('op-0');
        }
    }
    else{
        if(nav.className.includes('op-0')){
            nav.classList.remove('op-0');
        }
    }
    if(scrlHeight >= height && flag){
        flag = false;
        header.style = "margin-top: " + nav.getBoundingClientRect().height + 'px;';
        nav.style = 'position: fixed; top: 0; opacity: 0;';
        img.style = 'height: 100px;'
        setTimeout(() => {
            nav.style.opacity = '1';
        }, 1);
    }
    if(scrlHeight < height){
        header.style = "";
        flag = true;
        nav.style = ''
        img.style = 'height: 125px;';
    }
});


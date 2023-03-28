let nav = document.querySelector('.nav__section');
let img = document.querySelector('.nav_image')
let scrlHeight = window.scrollY;
let height = window.outerHeight;
if(scrlHeight >= height){
    nav.style = 'position: fixed;';
}
else{
    nav.style = '';
}
window.addEventListener('scroll', () => {
    let scrlHeight = window.scrollY;
    let height = window.outerHeight;
    if(scrlHeight >= height){
        nav.style = 'position: fixed; top: 0;';
        img.style = 'height: 100px;'
    }
    else{
        nav.style = ''
        img.style = 'height: 125px;';
    }
    console.log(scrlHeight);
    console.log(height);
});


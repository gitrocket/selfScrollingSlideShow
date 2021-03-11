const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.querySelector('.main-image');

const slider = document.querySelector('.slider');

const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');

// preloader 

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
   loader.classList.add('active');
   loader.parentElement.removeChild(loader);
})


// carousel and fade-in animation

thumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        removeClasses();
        if(thumb.classList.contains('hori')) {
            mainImg.classList.add('hori');
            mainImg.src = e.currentTarget.src;
        } else {
            mainImg.classList.add('vert')
            mainImg.src = e.currentTarget.src;
        }
        fadeIn();
        setTimeout(removeFadeIn, 100);
    })
})

function removeClasses() {
    mainImg.classList.remove('hori');
    mainImg.classList.remove('vert');
}

function fadeIn() {
    mainImg.classList.add('fade-in');
}

function removeFadeIn() {
    mainImg.classList.remove('fade-in');
}

// slider

slider.addEventListener('scroll', () => {
    return
})


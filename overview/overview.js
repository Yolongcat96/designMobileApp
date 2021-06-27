'use strict';

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
    // selectedNavItem(navItems[sectionsIds.indexOf(selector)]);
}

// show "arrow-up" button when scrolling down
const home = document.querySelector('.overview__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle scrolling when tapping "arrow-up" button
const arrowUpBtn = document.querySelector('.arrow-up');
arrowUpBtn.addEventListener('click', () => {
    scrollIntoView('#overview');
});


'use strict';

// form popup
function submit_click() {
    var displayString = "Thank you for submission!\n" 
    + "You will receive a detailed feedback soon."
    alert(displayString);
}

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
    // selectedNavItem(navItems[sectionsIds.indexOf(selector)]);
}

// show "arrow-up" button when scrolling down
const home = document.querySelector('.assessment__container');
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
    scrollIntoView('#assessment');
});

// submit the project
function beforeSubmit() {
    var firstName = document.getElementById("FirstName");
    var lastName = document.getElementById("LastName");
    var body = document.getElementById("body");
    body.value = firstName.value + lastName.value;
}
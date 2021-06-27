'use strict';

// form popup
var inputs, input, i, displayString;
inputs = document.getElementById('answer__form_input');
function form_submit() {
    for (i=0; i<inputs.length; i++) {
        input = inputs[i];
        if ((input.value) && (input.name == "answer")) {   
            if (((input.value.indexOf('mobile') > -1) && 
                (input.value.indexOf('app') > -1)) || 
                ((input.value.indexOf('Mobile') > -1) && 
                (input.value.indexOf('App') > -1))) {
                displayString = "Awesome!\nYou understand this lesson well.\nPlease go to tne Lesson 2.\n\nThanks!";
            } else {
                displayString = "Good guess!\nPlease review this lesson again.\n\nThanks!";
            }
            alert(displayString);
            return false; //do not submit the form
        }
    }
    alert('Message is empty');
    return false; //do not submit the form
}

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
    // selectedNavItem(navItems[sectionsIds.indexOf(selector)]);
}

// show "arrow-up" button when scrolling down
const home = document.querySelector('.lessons__container');
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
    scrollIntoView('#lessons');
});

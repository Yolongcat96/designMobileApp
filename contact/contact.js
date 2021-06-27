'use strict';

// form popup
var inputs, input, i, displayString;
inputs = document.getElementById('contact__form_input');
function form_submit() {
    for (i=0; i<inputs.length; i++) {
        input = inputs[i];
        if ((input.value) && (input.name == "name")) {   
            displayString = "Thank you for submission!\n" + input.value + "'s message was well received.\nI will contact you soon."
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
const home = document.querySelector('.home__contact_container');
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
    scrollIntoView('#home__contact');
});


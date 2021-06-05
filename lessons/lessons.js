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

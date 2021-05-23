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

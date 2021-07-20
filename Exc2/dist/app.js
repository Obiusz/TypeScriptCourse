"use strict";
const btn = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!' + message);
}
if (btn) {
    btn.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

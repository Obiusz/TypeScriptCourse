const btn = document.querySelector('button')!

function clickHandler(message: string) {
    console.log('Clicked!' + message)
}

if (btn) {
    btn.addEventListener('click', clickHandler.bind(null, "You're welcome!"))
}

// if statement checks whether 'button' exists in index
// it can be a replacement for '!' in the first line

// test comment
function invalidFirstName() {
    errorMsg = document.querySelector('span#span-first-name')
    errorMsg.innerHTML = 'First name cannot be empty'
    errorMsg.style.display = 'block'
    alert(spanFirstName.id)
}

function validFirstName() {
    errorMsg = document.querySelector('span#span-first-name')
    errorMsg.style.display = 'none'
}

function invalidLastName() {
    errorMsg = document.querySelector('span#span-last-name')
    errorMsg.innerHTML = 'Last name cannot be empty'
    errorMsg.style.display = 'block'
}

function validLastName() {
    errorMsg = document.querySelector('span#span-last-name')
    errorMsg.style.display = 'none'
}


function invalidEmail() {
    errorMsg = document.querySelector('span#span-email')
    errorMsg.innerHTML = 'Looks like this is not an email'
    errorMsg.style.display = 'block'
}

function validEmail() {
    errorMsg = document.querySelector('span#span-email')
    errorMsg.style.display = 'none'
}


function invalidPassword() {
    errorMsg = document.querySelector('span#span-password')
    errorMsg.innerHTML = 'Password cannot be empty'
    errorMsg.style.display = 'block'
}

function validPassword() {
    errorMsg = document.querySelector('span#span-password')
    errorMsg.style.display = 'none'
}

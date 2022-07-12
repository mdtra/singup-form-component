let firstName = document.querySelector('input#first-name')
let lastName = document.querySelector('input#last-name')
let email = document.querySelector('input#email')
let password = document.querySelector('input#password')

firstName.addEventListener("keyup", checkFirstName)
firstName.input = firstName.value

lastName.addEventListener("keyup", checkLastName)
lastName.input = lastName.value


email.addEventListener("keyup", checkEmail)
email.input = email.value

password.addEventListener("keyup", checkPassword)
password.input = password.value

function checkFirstName(input) {

    if (!input.currentTarget.value) {
        errorMsg = document.querySelector('span#span-first-name')
        errorMsg.innerHTML = 'First name cannot be empty'
        errorMsg.style.display = 'block'

    }
    else {
        errorMsg = document.querySelector('span#span-first-name')
        errorMsg.style.display = 'none'
    }
}

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

function checkLastName(input) {

    if (!input.currentTarget.value) {
        errorMsg = document.querySelector('span#span-last-name')
        errorMsg.innerHTML = 'Last name cannot be empty'
        errorMsg.style.display = 'block'

    }
    else {
        errorMsg = document.querySelector('span#span-last-name')
        errorMsg.style.display = 'none'
        count++

    }
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

function checkEmail(input) {

    if (!input.currentTarget.value) {
        errorMsg = document.querySelector('span#span-email')
        errorMsg.innerHTML = 'Email cannot be empty'
        errorMsg.style.display = 'block'

    }
    else {
        var re = /\S+@\S+\.\S+/

        if (re.test(input.currentTarget.value)) {
            errorMsg = document.querySelector('span#span-email')
            errorMsg.style.display = 'none'

        }
        else {
            errorMsg = document.querySelector('span#span-email')
            errorMsg.innerHTML = 'Looks like this is not an email'
            errorMsg.style.display = 'block'

        }
    }
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

function checkPassword(input) {

    if (!input.currentTarget.value) {
        errorMsg = document.querySelector('span#span-password')
        errorMsg.innerHTML = 'Password cannot be empty'
        errorMsg.style.display = 'block'

    }
    else {
        errorMsg = document.querySelector('span#span-password')
        errorMsg.style.display = 'none'

    }
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

function sendData(count) {
    if (count==4) {
        alert('Form send')
    }
}

function checkEmail(email, count) {
    re = /\S+@\S+\.\S+/

    if (re.test(email)) {
        errorMsg = document.querySelector('span#span-email')
        errorMsg.style.display = 'none'
        count++
        sendData(count)
    }
    else {
        errorMsg = document.querySelector('span#span-email')
        errorMsg.innerHTML = 'Looks like this is not an email'
        errorMsg.style.display = 'block'
    }
}

function checkInputs() {
    var firstName = document.querySelector('input#first-name').value
    var lastName = document.querySelector('input#last-name').value
    var email = document.querySelector('input#email').value
    var password = document.querySelector('input#password').value

    var count = 0

    if (!firstName) {
        errorMsg = document.querySelector('span#span-first-name')
        errorMsg.innerHTML = 'First name cannot be empty'
        errorMsg.style.display = 'block'
    }
    else {
        errorMsg = document.querySelector('span#span-first-name')
        errorMsg.style.display = 'none'
        count++
    }
    
    if (!lastName) {
        errorMsg = document.querySelector('span#span-last-name')
        errorMsg.innerHTML = 'Last name cannot be empty'
        errorMsg.style.display = 'block'
    }
    else {
        errorMsg = document.querySelector('span#span-last-name')
        errorMsg.style.display = 'none'
        count++
    }

    if (!password) {
        errorMsg = document.querySelector('span#span-password')
        errorMsg.innerHTML = 'Password cannot be empty'
        errorMsg.style.display = 'block'
    }
    else {
        errorMsg = document.querySelector('span#span-password')
        errorMsg.style.display = 'none'
        count++
    }

    if (!email) {
        errorMsg = document.querySelector('span#span-email')
        errorMsg.innerHTML = 'Email cannot be empty'
        errorMsg.style.display = 'block'
    }
    else {
        checkEmail(email, count)
    }

    if (count==4) {
        alert('Data send')
    }
    
}
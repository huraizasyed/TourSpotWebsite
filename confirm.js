// form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Name cannot be empty');
        return false;
    }

    if (email.trim() === '') {
        alert('Email cannot be empty');
        return false;
    }

    // email validation
    var emaill = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emaill.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (message.trim() === '') {
        alert('Message cannot be empty');
        return false;
    }
    return true;
}
// displays form submitted
function submitForm() {
    if (validateForm()) {
        window.location.href = 'confirmation.html';
    }
    return false;
}


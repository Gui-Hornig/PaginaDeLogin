function validateFields() {
    const email = document.getElementById("email").value;
    const password = document.querySelector('input[type="password"]').value;
    const recoverPasswordLink = document.querySelector('.remember-forgot-a');
    const loginButton = document.querySelector('.btn');

    const isEmailValid = validateEmail(email);

    recoverPasswordLink.disabled = !password;
    loginButton.disabled = !isEmailValid || !password;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
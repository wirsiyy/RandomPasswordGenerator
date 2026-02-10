const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "&é(-_à)~#[^@µ*$";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(len = passwordLength) {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < len) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password;
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        console.error('No element with id "password" found in the DOM.');
        return;
    }
    passwordInput.value = createPassword();
});

// Make sure this is defined BEFORE the HTML loads, or use defer attribute
function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    if (passwordInput && passwordInput.value) {
        passwordInput.select();
        document.execCommand('copy');
        alert('Password copied!');
    } else {
        alert('No password to copy!');
    }
}
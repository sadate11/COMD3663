const username = document.querySelector('[name="username"]');
const password = document.querySelector('[name="password"]');
const email = document.querySelector('[name="email"]');
const form = document.querySelector("form");
const button = document.querySelector("#submitBtn");

const title = document.getElementById("subTitle");

form.addEventListener("input", () => {
    username.validity.patternMismatch ?
        username.setCustomValidity(
            'This is not a valid username. Must contain at least one number and be at least 8 characters long.'
        ) :
        username.setCustomValidity(``);
    email.validity.patternMismatch ?
        email.setCustomValidity(`Your email must contain a @ and a valid .ext`) :
        email.setCustomValidity(``);
    password.validity.patternMismatch ?
        password.setCustomValidity(
            'Your password must contain at least one number, one lowercase and one uppercase letter and must be least 8 characters long, but no more than 12 characters long, containing letters, numbers or the underscore.'
        ) :
        password.setCustomValidity(``);
    if (
        email.validity.patternMismatch === false &&
        password.validity.patternMismatch === false &&
        username.validity.patternMismatch === false
    ) {
        title.innerHTML = 'Your input is valid!';
        title.style.color = '#3CE182';


    } else {
        title.innerHTML = 'Your input is invalid. Try again!';
        title.style.color = '#E33552';
    }
});

function clearForm() {
    window.location.reload();
}

const btnReset = document.getElementById("resetBtn");

btnReset.addEventListener("click", clearForm);
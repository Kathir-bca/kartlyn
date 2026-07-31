function showError(id, message) {
    const error = document.getElementById(id);
    error.textContent = message;
    error.style.display = "block";
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");

    errors.forEach((error) => {
        error.textContent = "";
        error.style.display = "none";
    });
}

function Validate() {
    clearErrors();

    const firstName = document.getElementById("f-name").value.trim();
    const lastName = document.getElementById("l-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("c-password").value;
    const agree = document.getElementById("agree").checked;

    let isValid = true;

    if (firstName === "" || lastName === "") {
        const firstName = document.getElementById("f-name");
        const lastName = document.getElementById("l-name");
        lastName.style.border = "solid 2px red"
        firstName.style.border = "solid 2px red"
        showError("name-error", "Please enter your first and last name.");
        isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(firstName) || !/^[a-zA-Z ]+$/.test(lastName)) {
        const firstName = document.getElementById("f-name");
        const lastName = document.getElementById("l-name");
        lastName.style.border = "solid 2px red"
        firstName.style.border = "solid 2px red"
        showError("name-error", "Names can contain letters only.");
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        const email = document.getElementById("email");
        email.style.border = "solid 2px red"
        showError("email-error", "Please enter your email address.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        const email = document.getElementById("email");
        email.style.border = "solid 2px red"
        showError("email-error", "Please enter a valid email address.");
        isValid = false;
    }

    if (username === "") {
        const username = document.getElementById("username");
        username.style.border = "solid 2px red"
        showError("user-error", "Please choose a username.");
        isValid = false;
    } else if (username.length < 3) {
        const username = document.getElementById("username");
        username.style.border = "solid 2px red"
        showError("user-error", "Username must contain at least 3 characters.");
        isValid = false;
    }

    if (password === "") {
        const password = document.getElementById("password");
        password.style.border = "solid 2px red"
        showError("password-error", "Please create a password.");
        isValid = false;
    } else if (password.length < 8) {
        const password = document.getElementById("password");
        password.style.border = "solid 2px red"
        showError("password-error", "Password must be at least 8 characters long.");
        isValid = false;
    }

    if (confirmPassword === "") {
        const confirmPassword = document.getElementById("c-password");
        confirmPassword.style.border = "solid 2px red"
        showError("cpass-error", "Please confirm your password.");
        isValid = false;
    } else if (password !== confirmPassword) {
        const confirmPassword = document.getElementById("c-password");
        confirmPassword.style.border = "solid 2px red"
        showError("cpass-error", "Passwords do not match.");
        isValid = false;
    }

    if (!agree) {
        const agree = document.getElementById("agree");
        agree.style.border = "solid 2px red"
        showError("terms-error", "Please agree to the Terms of Service.");
        isValid = false;
    }

    return isValid;
}




function popUp() {
    let showAccnts = document.getElementById("signin-with-google");
    showAccnts.style.display = "block";
}

function back() {
    let showAccnts = document.getElementById("signin-with-google");
    showAccnts.style.display = "none";
}
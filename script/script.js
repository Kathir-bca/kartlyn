/* =========================================
   KARTLYN LOGIN JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   GET ELEMENTS
========================================= */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const togglePassword =
    document.getElementById("togglePassword");

const eyeOpen =
    document.getElementById("eyeOpen");

const eyeClosed =
    document.getElementById("eyeClosed");

const loginButton =
    document.getElementById("loginButton");

const loginText =
    document.getElementById("loginText");

const loginLoader =
    document.getElementById("loginLoader");

const forgotPassword =
    document.getElementById("forgotPassword");

const toast =
    document.getElementById("toast");

const socialButtons =
    document.querySelectorAll(".social-button");


/* =========================================
   SHOW TOAST MESSAGE
========================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


/* =========================================
   EMAIL VALIDATION
========================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =========================================
   PASSWORD VALIDATION
========================================= */

function isValidPassword(password) {

    /*
       Demo validation:

       Minimum 6 characters
    */

    return password.length >= 6;
}


/* =========================================
   CLEAR EMAIL ERROR
========================================= */

function clearEmailError() {

    emailError.textContent = "";

    emailInput.classList.remove("input-error");
}


/* =========================================
   CLEAR PASSWORD ERROR
========================================= */

function clearPasswordError() {

    passwordError.textContent = "";

    passwordInput.classList.remove("input-error");
}


/* =========================================
   VALIDATE EMAIL
========================================= */

function validateEmail() {

    const email =
        emailInput.value.trim();

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.classList.add("input-error");

        return false;
    }


    if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("input-error");

        return false;
    }


    clearEmailError();

    return true;
}


/* =========================================
   VALIDATE PASSWORD
========================================= */

function validatePassword() {

    const password =
        passwordInput.value;

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        passwordInput.classList.add("input-error");

        return false;
    }


    if (!isValidPassword(password)) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        passwordInput.classList.add("input-error");

        return false;
    }


    clearPasswordError();

    return true;
}


/* =========================================
   EMAIL LIVE VALIDATION
========================================= */

emailInput.addEventListener(
    "input",
    function () {

        if (this.value.trim() !== "") {

            clearEmailError();
        }

    }
);


/* =========================================
   PASSWORD LIVE VALIDATION
========================================= */

passwordInput.addEventListener(
    "input",
    function () {

        if (this.value !== "") {

            clearPasswordError();
        }

    }
);


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

togglePassword.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            eyeOpen.classList.add("hidden");

            eyeClosed.classList.remove("hidden");

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            eyeOpen.classList.remove("hidden");

            eyeClosed.classList.add("hidden");

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );
        }

    }
);


/* =========================================
   LOGIN FORM SUBMIT
========================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        /*
           Prevent normal form submission
           because this is a frontend demo.
        */

        event.preventDefault();


        /* Validate */

        const emailIsValid =
            validateEmail();

        const passwordIsValid =
            validatePassword();


        /* Stop if validation fails */

        if (!emailIsValid || !passwordIsValid) {

            if (!emailIsValid) {

                emailInput.focus();

            } else {

                passwordInput.focus();

            }

            return;
        }


        /* Disable button */

        loginButton.disabled = true;

        loginText.classList.add("hidden");

        loginLoader.classList.remove("hidden");


        /*
           Simulate login request.

           In a real website this section would
           communicate with your backend/API.
        */

        setTimeout(() => {

            /*
               Save login state.

               This can be used by home.html
               to know that the user logged in.
            */

            localStorage.setItem(
                "kartlynLoggedIn",
                "true"
            );

            localStorage.setItem(
                "kartlynUserEmail",
                emailInput.value.trim()
            );


            /*
               Redirect to home.html
            */

            window.location.href =
                "home.html";

        }, 1200);

    }
);


/* =========================================
   FORGOT PASSWORD
========================================= */

forgotPassword.addEventListener(
    "click",
    function () {

        const email =
            emailInput.value.trim();


        if (email === "") {

            showToast(
                "Please enter your email address first."
            );

            emailInput.focus();

            return;
        }


        if (!isValidEmail(email)) {

            showToast(
                "Please enter a valid email address."
            );

            emailInput.focus();

            return;
        }


        showToast(
            "Password reset link will be sent to " + email
        );

    }
);


/* =========================================
   SOCIAL LOGIN
========================================= */

socialButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const provider =
                    this.dataset.provider;

                showToast(
                    provider +
                    " login selected."
                );

            }
        );

    }
);


/* =========================================
   ENTER KEY
========================================= */

emailInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            passwordInput.focus();

        }

    }
);


passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            loginForm.requestSubmit();

        }

    }
);


/* =========================================
   PREVENT DOUBLE SUBMISSION
========================================= */

window.addEventListener(
    "pageshow",
    function () {

        loginButton.disabled = false;

        loginText.classList.remove("hidden");

        loginLoader.classList.add("hidden");

    }
);
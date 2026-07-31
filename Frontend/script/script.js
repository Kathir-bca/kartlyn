function validate() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailval = document.getElementById("email-error");
    let passval = document.getElementById("password-error");

    let isValid = true;

    emailval.style.display = "none";
    passval.style.display = "none";

    if (email.value.trim() == "") {
        emailval.style.display = "block";
        emailval.textContent = "Email and Username required";
        email.style.border = "solid 2px red"
        isValid = false;
    }
    else if (!email.value.includes("@")) {
        emailval.style.display = "block";
        emailval.textContent = "Invalid Email";
        email.style.border = "solid 2px red"
        isValid = false;
    }

    if (password.value.trim() == "") {
        passval.style.display = "block";
        passval.textContent = "Password required";
        password.style.border = "solid 2px red"
        isValid = false;
    }
    else if (password.value.length < 6) {
        passval.style.display = "block";
        passval.textContent = "Password must be atleast 6 characters";
        password.style.border = "solid 2px red"
        isValid = false;
    }

    return isValid;
}


function popUp() {
    let showAccnts = document.getElementById("login-with-google");
    showAccnts.style.display = "block";
}

function back() {
    let showAccnts = document.getElementById("login-with-google");
    showAccnts.style.display = "none";
}
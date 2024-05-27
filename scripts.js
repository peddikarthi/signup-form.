document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const submitButton = document.getElementById("submit-button");

    function validateUsername() {
        const usernameValue = username.value.trim();
        const usernameError = document.getElementById("username-error");

        if (usernameValue.length < 3) {
            username.classList.add("invalid");
            username.classList.remove("valid");
            usernameError.textContent = "Username must be at least 3 characters long.";
            usernameError.style.display = "block";
            return false;
        } else {
            username.classList.remove("invalid");
            username.classList.add("valid");
            usernameError.style.display = "none";
            return true;
        }
    }

    function validateEmail() {
        const emailValue = email.value.trim();
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!emailPattern.test(emailValue)) {
            email.classList.add("invalid");
            email.classList.remove("valid");
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            return false;
        } else {
            email.classList.remove("invalid");
            email.classList.add("valid");
            emailError.style.display = "none";
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = password.value.trim();
        const passwordError = document.getElementById("password-error");

        if (passwordValue.length < 6) {
            password.classList.add("invalid");
            password.classList.remove("valid");
            passwordError.textContent = "Password must be at least 6 characters long.";
            passwordError.style.display = "block";
            return false;
        } else {
            password.classList.remove("invalid");
            password.classList.add("valid");
            passwordError.style.display = "none";
            return true;
        }
    }

    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPassword.value.trim();
        const confirmPasswordError = document.getElementById("confirm-password-error");

        if (confirmPasswordValue !== password.value.trim()) {
            confirmPassword.classList.add("invalid");
            confirmPassword.classList.remove("valid");
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.style.display = "block";
            return false;
        } else {
            confirmPassword.classList.remove("invalid");
            confirmPassword.classList.add("valid");
            confirmPasswordError.style.display = "none";
            return true;
        }
    }

    function checkFormValidity() {
        const isFormValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
        submitButton.disabled = !isFormValid;
    }

    username.addEventListener("input", () => {
        validateUsername();
        checkFormValidity();
    });

    email.addEventListener("input", () => {
        validateEmail();
        checkFormValidity();
    });

    password.addEventListener("input", () => {
        validatePassword();
        validateConfirmPassword();
        checkFormValidity();
    });

    confirmPassword.addEventListener("input", () => {
        validateConfirmPassword();
        checkFormValidity();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (checkFormValidity()) {
            alert("Form submitted successfully!");
            // Here you can add code to submit the form data to the server
        }
    });
});

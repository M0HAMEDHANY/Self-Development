document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signup-form');

    if (localStorage.getItem('users')) {
        var users = JSON.parse(localStorage.getItem('users'));
    } else {
        var users = {};
    }

    // Store user data on signup
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = signupForm.username.value;
        var password = signupForm.password.value;

        // Regex for validation
        var usernameRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
        var passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/; // Password strength regex

        // Check if username and password are valid
        if (!usernameRegex.test(username)) {
            showModal('Invalid username. Username should be alphanumeric.');
            return;
        }
        if (!passwordRegex.test(password)) {
            showModal('Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.');
            return;
        }

        // Check if username already exists
        if (!users[username]) {
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = '../login/login.html';
        } else {
            showModal('Username already exists');
        }
    });

    ScrollReveal().reveal('#container h1', { delay: 200, distance: '50px', origin: 'top', duration: 400, easing: 'ease-in-out' });
    ScrollReveal().reveal('#signup-form', { delay: 400, distance: '50px', origin: 'bottom', duration: 400, easing: 'ease-in-out' });
    ScrollReveal().reveal('#login-link', { delay: 600, distance: '50px', origin: 'bottom', duration: 400, easing: 'ease-in-out' });
});

function showModal(message) {
    var modal = document.getElementById('error-modal');
    var span = document.getElementsByClassName('close-button')[0];
    document.getElementById('error-message').innerText = message;
    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    if (localStorage.getItem('users')) {
        var users = JSON.parse(localStorage.getItem('users'));
    } else {
        var users = {};
    }

    // Validate user data on login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = loginForm.username.value;
        var password = loginForm.password.value;
        if (!users[username]) {
            showModal('Invalid username');
        } else if (users[username] !== password) {
            showModal('Invalid password');
        } else {
            console.log('Login successful');
            localStorage.setItem('currentUser', username);
            window.location.href = '../index.html';
        }
    });

    function showModal(message) {
        var modal = document.getElementById('error-modal');
        var span = document.getElementsByClassName('close-button')[0];
        document.getElementById('error-message').innerText = message;
        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    ScrollReveal().reveal('#container h1', { delay: 200, distance: '50px', origin: 'top', duration: 400, easing: 'ease-in-out' });
    ScrollReveal().reveal('#login-form', { delay: 400, distance: '50px', origin: 'bottom', duration: 400, easing: 'ease-in-out' });
    ScrollReveal().reveal('#signup-link', { delay: 600, distance: '50px', origin: 'bottom', duration: 400, easing: 'ease-in-out' });

});


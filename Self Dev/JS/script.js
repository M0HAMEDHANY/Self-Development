document.addEventListener('DOMContentLoaded', function () {
    var currentUser = localStorage.getItem('currentUser');
    var loginLink = document.getElementById('login-link');
    var signupLink = document.getElementById('signup-link');
    var logoutLink = document.getElementById('logout-link');
    var navPages = document.querySelectorAll('.navPages a');

    if (currentUser) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'flex';
        navPages.forEach(link => link.classList.remove('disabled'));
    } else {
        loginLink.style.display = 'flex';
        signupLink.style.display = 'flex';
        logoutLink.style.display = 'none';
        navPages.forEach(link => link.classList.add('disabled'));
    }

    logoutLink.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
});

ScrollReveal().reveal('.home-title', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.title', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.content .image', { delay: 200, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.content .text-box, .content .text', { delay: 200, distance: '50px', origin: 'right' });




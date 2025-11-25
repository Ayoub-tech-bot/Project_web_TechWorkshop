console.log('Navigation system loaded');
function isUserLoggedIn() {
    return !!localStorage.getItem('username');
}
function setupNavigation() {
    const notificationLink = document.querySelector('a[href="notification.html"]');
    if (notificationLink) {
        notificationLink.addEventListener('click', function(e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                alert('Please create an account to view notifications.');
                window.location.href = 'create_account.html';
            }
        });
    }
    const profileLink = document.querySelector('a[href="create_account.html"]');
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            if (isUserLoggedIn()) {
                e.preventDefault();
                window.location.href = 'profile.html';
            }
        });
    }
}
const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
    dropbtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        dropdown.classList.toggle('active');
    });
    window.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up navigation protection');
    setupNavigation();
});

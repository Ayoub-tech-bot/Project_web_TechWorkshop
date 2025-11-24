const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');
const notificationIcon = document.querySelector('a[href="notification.html"]');
const profileIcon = document.querySelector('a[href="create_account.html"]');

if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        dropdown.classList.toggle('active');
    });

    window.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return !!user; 
}

function requireAuth(redirectPage) {
    if (!checkLoginStatus()) {
        alert('Please create an account or login to access this feature.');
        window.location.href = 'create_account.html';
        return false;
    }
    return true;
}
if (notificationIcon) {
    notificationIcon.addEventListener('click', function(e) {
        if (!checkLoginStatus()) {
            e.preventDefault(); 
            alert('Please create an account to view notifications.');
            window.location.href = 'create_account.html';
        }
    });
}

if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
        const isLoggedIn = checkLoginStatus();
        
        if (!isLoggedIn) {
            return;
        } else {
            
            e.preventDefault(); 
            window.location.href = 'profile.html'; 
        }
    });
}

function setupProtectedFeatures() {
    const serviceCards = document.querySelectorAll('.service-card a');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!checkLoginStatus()) {
                e.preventDefault();
                alert('Please create an account to access our services.');
                window.location.href = 'create_account.html';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Authentication system loaded');
 
    updateNavigation();

});
function updateNavigation() {
    const isLoggedIn = checkLoginStatus();
    
    if (isLoggedIn && profileIcon) {
        
        profileIcon.href = 'profile.html'; 
    }
}
window.auth = {
    isLoggedIn: checkLoginStatus,
    requireLogin: requireAuth,
    getCurrentUser: function() {
        return JSON.parse(localStorage.getItem('currentUser'));
    },
    logout: function() {
        localStorage.removeItem('currentUser');
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    }
};

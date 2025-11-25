const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');
const notificationIcon = document.querySelector('a[href="notification.html"]');
const profileIcon = document.querySelector('a[href="create_account.html"]');
const navIcons = document.querySelector('.nav-icons');

function checkLoginStatus() {
    try {
        const user = localStorage.getItem('currentUser');
        if (!user) return false;
        
        const userData = JSON.parse(user);
        return userData && userData.email; // Proper validation
    } catch (error) {
        console.error('Error checking login status:', error);
        return false;
    }
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('currentUser'));
    } catch (error) {
        return null;
    }
}
function updateNavigationUI() {
    const isLoggedIn = checkLoginStatus();
    const user = getCurrentUser();
    
    if (isLoggedIn && user && profileIcon) {
        profileIcon.href = 'profile.html';

        addUserIndicator(user.name);
    } else if (profileIcon) {
        profileIcon.href = 'create_account.html';
        removeUserIndicator();
    }
}


    
    if (navIcons) {
        navIcons.parentNode.insertBefore(userWelcome, navIcons);
    }
}

function removeUserIndicator() {
    const existingWelcome = document.querySelector('.user-welcome');
    if (existingWelcome) {
        existingWelcome.remove();
    }
}

if (notificationIcon) {
    notificationIcon.addEventListener('click', function(e) {
        if (!checkLoginStatus()) {
            e.preventDefault();
            showWelcomeMessage('Please create an account to view your notifications');
            setTimeout(() => {
                window.location.href = 'create_account.html';
            }, 1500);
        }
    });
}

// Handle profile icon click (IMPROVED)
if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
        if (checkLoginStatus()) {
            e.preventDefault();
            window.location.href = 'profile.html';
        }
    });
}
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => messageDiv.remove(), 300);
        }
    }, 3000);
}
if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        dropdown.classList.toggle('active');
    });

    window.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Authentication system loaded');
    updateNavigationUI();
    const justLoggedIn = sessionStorage.getItem('justLoggedIn');
    if (justLoggedIn && checkLoginStatus()) {
        const user = getCurrentUser();
        showWelcomeMessage(`Welcome back, ${user.name}! 🎉`);
        sessionStorage.removeItem('justLoggedIn');
    }
});
window.auth = {
    isLoggedIn: checkLoginStatus,
    getCurrentUser: getCurrentUser,
    logout: function() {
        localStorage.removeItem('currentUser');
        showWelcomeMessage('Logged out successfully!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
};

// index.js - Fixed Authentication System for Tech Workshop

// DOM Elements
const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');
const notificationIcon = document.querySelector('a[href="notification.html"]');
const profileIcon = document.querySelector('a[href="create_account.html"]');
const navIcons = document.querySelector('.nav-icons');

// Check if user is logged in (FIXED VERSION)
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

// Get current user data
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('currentUser'));
    } catch (error) {
        return null;
    }
}

// Update navigation based on login status
function updateNavigationUI() {
    const isLoggedIn = checkLoginStatus();
    const user = getCurrentUser();
    
    if (isLoggedIn && user && profileIcon) {
        // Change profile link to go to profile page instead of create account
        profileIcon.href = 'profile.html';
        
        // Optional: Add user indicator in navigation
        addUserIndicator(user.name);
    } else if (profileIcon) {
        // Ensure profile icon goes to create account when logged out
        profileIcon.href = 'create_account.html';
        removeUserIndicator();
    }
}

// Add visual user indicator
function addUserIndicator(userName) {
    // Remove existing indicator if any
    removeUserIndicator();
    
    // Create welcome message or user avatar
    const userWelcome = document.createElement('div');
    userWelcome.className = 'user-welcome';
    userWelcome.innerHTML = `
        <span style="color: #4361ee; font-weight: 600; margin-right: 15px;">
            👋 Welcome, ${userName}
        </span>
    `;
    
    // Insert before the nav icons
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

// Handle notification icon click (IMPROVED)
if (notificationIcon) {
    notificationIcon.addEventListener('click', function(e) {
        if (!checkLoginStatus()) {
            e.preventDefault();
            // Show friendly message and redirect to create account
            showWelcomeMessage('Please create an account to view your notifications');
            setTimeout(() => {
                window.location.href = 'create_account.html';
            }, 1500);
        }
        // If logged in, naturally navigates to notification.html
    });
}

// Handle profile icon click (IMPROVED)
if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
        if (checkLoginStatus()) {
            e.preventDefault();
            window.location.href = 'profile.html';
        }
        // If not logged in, naturally navigates to create_account.html
    });
}

// Show beautiful welcome message instead of alert
function showWelcomeMessage(message) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.welcome-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'welcome-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-icon">👋</div>
            <div class="message-text">${message}</div>
        </div>
    `;
    
    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CC9F0;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    
    const messageContent = messageDiv.querySelector('.message-content');
    messageContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => messageDiv.remove(), 300);
        }
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .user-welcome {
        display: flex;
        align-items: center;
        margin-right: 15px;
        font-size: 14px;
    }
`;
document.head.appendChild(style);

// Existing dropdown functionality
if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        dropdown.classList.toggle('active');
    });

    window.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Authentication system loaded');
    updateNavigationUI();
    
    // Show welcome back message if user just logged in
    const justLoggedIn = sessionStorage.getItem('justLoggedIn');
    if (justLoggedIn && checkLoginStatus()) {
        const user = getCurrentUser();
        showWelcomeMessage(`Welcome back, ${user.name}! 🎉`);
        sessionStorage.removeItem('justLoggedIn');
    }
});

// Utility functions for your team
window.auth = {
    isLoggedIn: checkLoginStatus,
    getCurrentUser: getCurrentUser,
    logout: function() {
        localStorage.removeItem('currentUser');
        showWelcomeMessage('Logged out successfully! 👋');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
};

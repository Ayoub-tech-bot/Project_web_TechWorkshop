const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

dropbtn.addEventListener('click', function(e) {
    e.stopPropagation(); 
    dropdown.classList.toggle('active');
});


window.addEventListener('click', function() {
    dropdown.classList.remove('active');
});
/* --------------- */
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('a[href="create_account.html"]');
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            const username = localStorage.getItem('username');
            if (username) {
                e.preventDefault();
                window.location.href = 'profile.html';
            }
        });
    }
    const notificationLink = document.querySelector('a[href="notification.html"]');
    if (notificationLink) {
        notificationLink.addEventListener('click', function(e) {
            const username = localStorage.getItem('username');
            if (!username) {
                e.preventDefault();
                alert('Please create an account to view notifications.');
                window.location.href = 'create_account.html';
            }
        });
    }
});

const profileIcon = document.getElementById("profile_icon");
const notificationIcon = document.getElementById("notification_icon");

profileIcon.addEventListener("click", () => {
    const access = sessionStorage.getItem("test_access");

    if (access === "done") {
        
        window.location.href = "profile.html";
    } else {
        
        window.location.href = "create_account.html";
    }
});
notificationIcon.addEventListener("click", () => {
    const access = sessionStorage.getItem("test_access");

    if (access === "done") {
        
        window.location.href = "notification.html";
    } else {
        
        window.location.href = "create_account.html";
    }
});
/* mode sombre */
const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";   
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";  
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";  
        localStorage.setItem("theme", "light");
    }
});









console.log('Navigation system loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up navigation...');
    const profileLink = document.querySelector('a[href="create_account.html"]');
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            const username = localStorage.getItem('username');
            console.log('Profile clicked - Username:', username);
            
            if (username) {
                e.preventDefault();
                console.log('Going to profile page');
                window.location.href = 'profile.html';
            }
        });
    }
    const notificationLink = document.querySelector('a[href="notification.html"]');
    if (notificationLink) {
        notificationLink.addEventListener('click', function(e) {
            const username = localStorage.getItem('username');
            console.log('Notification clicked - Username:', username);
            
            if (!username) {
                e.preventDefault();
                alert('Please create an account to view notifications.');
                window.location.href = 'create_account.html';
            }
        });
    }
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown-content');
    
    if (dropbtn && dropdown) {
        console.log('Setting up dropdown...');
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Dropdown clicked');
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && e.target !== dropbtn) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    console.log('Current username in storage:', localStorage.getItem('username'));
});

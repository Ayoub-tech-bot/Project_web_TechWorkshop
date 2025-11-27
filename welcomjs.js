document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcomeText');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    const username = localStorage.getItem('username');
    const action = localStorage.getItem('action');
    
    if (username) {
        if (action === 'acc_creat') {
            welcomeText.textContent = `Welcome ${username}!`;
            welcomeMessage.textContent = "Your account is ready!";
        } 
        else if (action === 'Login') {
            welcomeText.textContent = `Welcome back ${username}!`;
            welcomeMessage.textContent = "Great to see you again!";
        }
        else {
            welcomeText.textContent = `Hello ${username}!`;
            welcomeMessage.textContent = "Welcome to our community!";
        }
    }
    
    const button = document.querySelector('.start-btn');
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
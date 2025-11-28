const welcomeTitle = document.getElementById("Welcome_H1");
const username = localStorage.getItem("username");
const action = localStorage.getItem("action");

if (window.location.pathname.includes("welcom.html")) {
    sessionStorage.setItem("test_access", "done");
}


if (welcomeTitle) {
    
    if (action === "acc_creat") {
        welcomeTitle.textContent = `Welcome ${username} to the community, you have successfully joined!`;
    } 
    else if (action === "Login") {
        welcomeTitle.textContent = `Welcome back! It's good to see you again.`;
    } 
    else {
        welcomeTitle.textContent = `Welcome ${username}!`;
    }  

}

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
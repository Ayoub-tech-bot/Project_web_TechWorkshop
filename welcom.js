
const welcomeTitle = document.getElementById("Welcome_H1");
const username = localStorage.getItem("username");
const action = localStorage.getItem("action");

if (welcomeTitle) {
    
    if (action === "register") {
        welcomeTitle.textContent = `Welcome ${username} to the community, you have successfully joined!`;
    } 
    else if (action === "Login") {
        welcomeTitle.textContent = `Welcome back! It's good to see you again.`;
    } 
    else {
        welcomeTitle.textContent = `Welcome ${username}!`;
    }
    
} 
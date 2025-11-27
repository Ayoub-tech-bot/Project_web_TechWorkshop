
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







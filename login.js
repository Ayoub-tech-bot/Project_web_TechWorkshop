const loginbtn = document.getElementById("Login_Btn");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const FormLog = document.getElementById("FormLogin");
const errorLog = document.getElementById("erroLog");

FormLog.addEventListener('submit', (e) => {
    let messages = [];
    let test = true; 

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (Email.value === '' || Email.value == null) {
        messages.push("Email is required!");
        test = false;
        Email.style.borderColor = "#d32f2f"; 
    } else if (!emailRegex.test(Email.value)) {
        messages.push("Please enter a valid email!");
        test = false;
        Email.style.borderColor = "#d32f2f"; 
    } else {
        Email.style.borderColor = "#d0d0d0"; 
    }

    if (password.value === '' || password.value == null) {
        messages.push("Password is required!");
        test = false;
        password.style.borderColor = "#d32f2f"; 
    } else if (password.value.length < 6) {
        messages.push("Password must be at least 6 characters!");
        test = false;
        password.style.borderColor = "#d32f2f"; 
    } else {
        password.style.borderColor = "#d0d0d0"; 
    }

    if(!test){
        e.preventDefault();
        errorLog.innerText = messages.join(", "); 
        errorLog.style.display = "block"; 
        return;
    }
    
    if(test){
        e.preventDefault(); 
        errorLog.style.display = "none"; 
        localStorage.setItem("action", "Login");
        localStorage.setItem("userEmail", Email.value); 
        window.location.href = "welcom.html";
    }
});

Email.addEventListener('input', () => {
    errorLog.style.display = "none";
    Email.style.borderColor = "#d0d0d0";
});

password.addEventListener('input', () => {
    errorLog.style.display = "none";
    password.style.borderColor = "#d0d0d0";
});

document.addEventListener('DOMContentLoaded', () => {
    errorLog.style.display = "none";
});
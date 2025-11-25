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
    } else if (!emailRegex.test(Email.value)) {
        messages.push("Please enter a valid email!");
        test = false;
    }

    if(!test){
        e.preventDefault();
        errorLog.innerText = messages.join("," + " ");
        return;
    }
    if(test){
        e.preventDefault(); 
        localStorage.setItem("action", "Login");
        localStorage.setItem("username", Email.value); 
        window.location.href = "welcom.html";
    }


})





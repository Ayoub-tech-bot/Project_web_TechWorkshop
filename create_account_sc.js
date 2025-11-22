const Full_name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")
const form = document.getElementById("FormCA")
const errorElement = document.getElementById("error")
const createBtn = document.getElementById("create_acc");

form.addEventListener('submit', (e) => {
    let messages = [];
    let test = true; 

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if(Full_name.value === '' || Full_name.value == null){
        messages.push("The Full Name is required !");
        test = false;
    }else if(!nameRegex.test(Full_name.value)){
        messages.push("Your Full Name should include only letters and spaces");
        test = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.value === '' || email.value == null) {
        messages.push("Email is required!");
        test = false;
    } else if (!emailRegex.test(email.value)) {
        messages.push("Please enter a valid email!");
        test = false;
    }

    if(password.value.length < 6){
        messages.push("The paasword should be longer !");
        test = false;
    }

    if(confirm.value != password.value ){
        messages.push("Re-Confirm your password!");
        test = false;
    }

    if(!test){
        e.preventDefault();
        errorElement.innerText = messages.join("," + " ");
        return;
    }
    if(test){
        e.preventDefault(); 
        const username = Full_name.value.trim();
        localStorage.setItem("username", username);
        localStorage.setItem("action", "acc_creat");
        console.log(username);
        window.location.href = "welcom.html";

    }
    
});




    



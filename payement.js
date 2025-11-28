
const action = localStorage.getItem("action");
const titlestrong = document.querySelector("#H2_reg strong").childNodes[0];
const titlelink = document.querySelector('#H2_reg a');
const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");
const P3 = document.getElementById("P3");


if(action === "BeginerPlan"){
    titlestrong.textContent = `You chosed : `;
    titlelink.textContent = `Beginner Plan`;
    P1.textContent = `Selected Plan : Beginner Plan`;
    P2.textContent = `Price : $10`;
    P3.textContent = `Total : $10`;
}

if(action === "TeamPlan"){
    titlestrong.textContent = `You chosed : `;
    titlelink.textContent = `Team Plan`;
    P1.textContent = `Selected Plan : Team Plan`;
    P2.textContent = `Price : $30`;
    P3.textContent = `Total : $30`;
}

if(action === "AdvancedPlan"){
    titlestrong.textContent = `You chosed : `;
    titlelink.textContent = `Advanced Plan`;
    P1.textContent = `Selected Plan : Advanced Plan`;
    P2.textContent = `Price : $50`;
    P3.textContent = `Total : $50`;
}
/* -------------------------------- */

const CardNbr = document.getElementById("card_num");
const CardExp = document.getElementById("card_exp");
const CardSecu = document.getElementById("card_sec");
const Nom = document.getElementById("nom");
const Prenom = document.getElementById("Prenom");
const Email = document.getElementById("Email");
const PhoneNbr = document.getElementById("Num_tel");
const Ville = document.getElementById("ville");
const ZipCode = document.getElementById("zip");
const BtnPay = document.getElementById("BtnPay");
const Form = document.getElementById("FormPay");
const errorPay = document.getElementById("errorPay");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const termsPopup = document.getElementById("termsPopup");
const openTerms = document.getElementById("openTerms");
const closeTerms = document.getElementById("closeTerms");

Form.addEventListener('submit', (e) =>{
    let messages = [];
    let test = true;

    const onlyLetters = /^[A-Za-z\s]+$/;   
    const onlyNumbers = /^[0-9]+$/; 

    if(!onlyNumbers.test(CardNbr.value) ) {
        messages.push("You should include only numbers in your card number ");
        test = false;
    }
    if(!onlyNumbers.test(CardExp.value)){
        messages.push("You should include only numbers in your expiration date ");
        test = false;
    }
    if(!onlyNumbers.test(CardSecu.value)){
        messages.push("You should include only numbers in your security code ");
        test = false;
    }

    if(!onlyLetters.test(Nom.value)){
        messages.push("Your Fisrt Name should include only letters and spaces");
        test = false;
    }
    if(!onlyLetters.test(Prenom.value)){
        messages.push("Your Last Name should include only letters and spaces");
        test = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(Email.value)) {
        messages.push("Please enter a valid email!");
        test = false;
    }

    if(!onlyNumbers.test(PhoneNbr.value)){
        messages.push("You should include only numbers in your Phone Number");
        test = false;
    }

    if(!onlyLetters.test(Ville.value)){
        messages.push("Your City should include only letters and spaces");
        test = false;
    }
    if(!onlyNumbers.test(ZipCode.value)){
        messages.push("You should include only numbers in your Zip Code");
        test = false;
    }
    if(!test){
        e.preventDefault();
        errorPay.innerText = messages.join("," + " ");
        return;
    }

    if(test){
        e.preventDefault(); 
        popup.style.display = "flex"; 
    }

});
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    window.location.href="index.html";
    
});
openTerms.addEventListener("click", () => {
    termsPopup.style.display = "flex";
});

closeTerms.addEventListener("click", () => {
    termsPopup.style.display = "none";
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
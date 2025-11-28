const Btn1 = document.getElementById("BtnBegPlan");
const Btn2 = document.getElementById("BtnTeamPlan");
const Btn3 = document.getElementById("BtnAdvPlan");


Btn1.onclick = function(){
    localStorage.setItem("action", "BeginerPlan");
    window.location.href = "payement.html";
}

Btn2.onclick = function(){
    localStorage.setItem("action", "TeamPlan");
    window.location.href = "payement.html";
}

Btn3.onclick = function(){
    localStorage.setItem("action", "AdvancedPlan");
    window.location.href = "payement.html";
}
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
Btn1.addEventListener("click", () => {
    const access = sessionStorage.getItem("test_access");

    if (access === "done") {
        
        window.location.href = "payement.html";
    } else {
        
        window.location.href = "create_account.html";
    }
});
Btn2.addEventListener("click", () => {
    const access = sessionStorage.getItem("test_access");

    if (access === "done") {
        
        window.location.href = "payement.html";
    } else {
        
        window.location.href = "create_account.html";
    }
});
Btn3.addEventListener("click", () => {
    const access = sessionStorage.getItem("test_access");

    if (access === "done") {
        
        window.location.href = "payement.html";
    } else {
        
        window.location.href = "create_account.html";
    }
});

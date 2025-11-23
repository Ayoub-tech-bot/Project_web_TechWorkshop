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


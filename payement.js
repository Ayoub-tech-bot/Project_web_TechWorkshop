document.addEventListener('DOMContentLoaded', function() {

const action = localStorage.getItem("action");
const selectedPlanElement = document.getElementById("selectedPlan");
const planNameElement = document.getElementById("planName");
const planPriceElement = document.getElementById("planPrice");
const totalPriceElement = document.getElementById("totalPrice");
const payAmountElement = document.getElementById("payAmount");

if(action === "BeginerPlan"){
    selectedPlanElement.textContent = "Beginner";
    planNameElement.textContent = "Beginner Plan";
    planPriceElement.textContent = "$10.00";
    totalPriceElement.textContent = "$10.00";
    payAmountElement.textContent = "$10.00";
}

if(action === "TeamPlan"){
    selectedPlanElement.textContent = "Team";
    planNameElement.textContent = "Team Plan";
    planPriceElement.textContent = "$30.00";
    totalPriceElement.textContent = "$30.00";
    payAmountElement.textContent = "$30.00";
}

if(action === "AdvancedPlan"){
    selectedPlanElement.textContent = "Advanced";
    planNameElement.textContent = "Advanced Plan";
    planPriceElement.textContent = "$50.00";
    totalPriceElement.textContent = "$50.00";
    payAmountElement.textContent = "$50.00";
}

const paymentMethods = document.querySelectorAll('.payment-method');
paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
    });
});

const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');
const cvvInput = document.getElementById('cvv');
const cardholderNameInput = document.getElementById('cardholderName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');

const paymentForm = document.getElementById('paymentForm');
const successPopup = document.getElementById('successPopup');
const termsPopup = document.getElementById('termsPopup');
const openTermsLink = document.getElementById('openTerms');
const closePopupBtn = document.getElementById('closePopup');
const closeTermsBtn = document.getElementById('closeTerms');

cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ');
    e.target.value = formattedValue || value;
    validateCardNumber();
});
expiryDateInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
    validateExpiryDate();
});

cardholderNameInput.addEventListener('input', validateCardholderName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
cityInput.addEventListener('input', validateCity);
zipCodeInput.addEventListener('input', validateZipCode);
cvvInput.addEventListener('input', validateCVV);

function validateCardNumber() {
    const value = cardNumberInput.value.replace(/\s/g, '');
    const errorElement = document.getElementById('cardNumberError');
    
    if (value.length === 0) {
        hideError(cardNumberInput, errorElement);
        return false;
    }
    
    if (!/^\d+$/.test(value)) {
        showError(cardNumberInput, errorElement, "Card number should contain only numbers");
        return false;
    }
    
    if (value.length < 16) {
        showError(cardNumberInput, errorElement, "Card number must be 16 digits");
        return false;
    }
    
    hideError(cardNumberInput, errorElement);
    return true;
}

function validateExpiryDate() {
    const value = expiryDateInput.value;
    const errorElement = document.getElementById('expiryDateError');
    
    if (value.length === 0) {
        hideError(expiryDateInput, errorElement);
        return false;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(value)) {
        showError(expiryDateInput, errorElement, "Please enter a valid expiry date (MM/YY)");
        return false;
    }
    
    hideError(expiryDateInput, errorElement);
    return true;
}

function validateCVV() {
    const value = cvvInput.value;
    const errorElement = document.getElementById('cvvError');
    
    if (value.length === 0) {
        hideError(cvvInput, errorElement);
        return false;
    }
    
    if (!/^\d+$/.test(value)) {
        showError(cvvInput, errorElement, "CVV should contain only numbers");
        return false;
    }
    
    if (value.length < 3) {
        showError(cvvInput, errorElement, "CVV must be 3 digits");
        return false;
    }
    
    hideError(cvvInput, errorElement);
    return true;
}

function validateCardholderName() {
    const value = cardholderNameInput.value;
    const errorElement = document.getElementById('cardholderNameError');
    
    if (value.length === 0) {
        hideError(cardholderNameInput, errorElement);
        return false;
    }
    
    if (!/^[A-Za-z\s]+$/.test(value)) {
        showError(cardholderNameInput, errorElement, "Name should contain only letters and spaces");
        return false;
    }
    
    hideError(cardholderNameInput, errorElement);
    return true;
}

function validateEmail() {
    const value = emailInput.value;
    const errorElement = document.getElementById('emailError');
    const emailRegex = /^\S+@\S+\.\S+$/;
    
    if (value.length === 0) {
        hideError(emailInput, errorElement);
        return false;
    }
    
    if (!emailRegex.test(value)) {
        showError(emailInput, errorElement, "Please enter a valid email address");
        return false;
    }
    
    hideError(emailInput, errorElement);
    return true;
}

function validatePhone() {
    const value = phoneInput.value;
    const errorElement = document.getElementById('phoneError');
    
    if (value.length === 0) {
        hideError(phoneInput, errorElement);
        return false;
    }
    
    if (!/^\d+$/.test(value)) {
        showError(phoneInput, errorElement, "Phone number should contain only numbers");
        return false;
    }
    
    hideError(phoneInput, errorElement);
    return true;
}

function validateCity() {
    const value = cityInput.value;
    const errorElement = document.getElementById('cityError');
    
    if (value.length === 0) {
        hideError(cityInput, errorElement);
        return false;
    }
    
    if (!/^[A-Za-z\s]+$/.test(value)) {
        showError(cityInput, errorElement, "City should contain only letters and spaces");
        return false;
    }
    
    hideError(cityInput, errorElement);
    return true;
}

function validateZipCode() {
    const value = zipCodeInput.value;
    const errorElement = document.getElementById('zipCodeError');
    
    if (value.length === 0) {
        hideError(zipCodeInput, errorElement);
        return false;
    }
    
    if (!/^\d+$/.test(value)) {
        showError(zipCodeInput, errorElement, "Zip code should contain only numbers");
        return false;
    }
    
    hideError(zipCodeInput, errorElement);
    return true;
}

function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.style.display = 'none';
}

paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isCardNumberValid = validateCardNumber();
    const isExpiryDateValid = validateExpiryDate();
    const isCVVValid = validateCVV();
    const isCardholderNameValid = validateCardholderName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isCityValid = validateCity();
    const isZipCodeValid = validateZipCode();
    const isTermsAccepted = document.getElementById('terms').checked;
    
    if (!isTermsAccepted) {
        alert("Please accept the terms and conditions");
        return;
    }
    
    if (isCardNumberValid && isExpiryDateValid && isCVVValid && 
        isCardholderNameValid && isEmailValid && isPhoneValid && 
        isCityValid && isZipCodeValid) {
        
        const submitBtn = paymentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
            successPopup.style.display = 'block';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
});

openTermsLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsPopup.style.display = 'block';
});

closePopupBtn.addEventListener('click', function() {
    successPopup.style.display = 'none';
    window.location.href = 'index.html';
});

closeTermsBtn.addEventListener('click', function() {
    termsPopup.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === successPopup) {
        successPopup.style.display = 'none';
    }
    if (e.target === termsPopup) {
        termsPopup.style.display = 'none';
    }
});
});
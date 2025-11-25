const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

dropbtn.addEventListener('click', function(e) {
    e.stopPropagation(); 
    dropdown.classList.toggle('active');
});


window.addEventListener('click', function() {
    dropdown.classList.remove('active');
});
/* --------------- */




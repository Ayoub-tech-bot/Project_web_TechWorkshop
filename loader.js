window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("logoLoader");
        loader.style.opacity = "0";  
        setTimeout(() => {
            loader.style.display = "none";  
        }, 500); 
    }, 2000); 
});
document.addEventListener('DOMContentLoaded', function() {
    const welcomeTitle = document.getElementById('welcomeTitle');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');
    
    const username = localStorage.getItem('username');
    const action = localStorage.getItem('action');
    
    if (username) {
        if (action === 'acc_creat') {
            welcomeTitle.textContent = `Welcome ${username}!`;
            messageTitle.textContent = 'Account Created';
            messageText.textContent = 'Your Tech Workshop account is now active!';
        } 
        else if (action === 'Login') {
            welcomeTitle.textContent = `Welcome back ${username}!`;
            messageTitle.textContent = 'Login Successful';
            messageText.textContent = 'Great to see you again! Ready to continue learning?';
        }
        else {
            welcomeTitle.textContent = `Hello ${username}!`;
            messageTitle.textContent = 'Welcome';
            messageText.textContent = 'Welcome to Tech Workshop community!';
        }
    }
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        let current = 0;
    
        const timer = setInterval(() => {
            if (finalValue === '24/7') {
                clearInterval(timer);
                return;
            }
            
            if (finalValue.includes('+')) {
                const target = parseInt(finalValue);
                current += 5;
                stat.textContent = current + '+';
                if (current >= target) clearInterval(timer);
            }
        }, 40);
    });
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
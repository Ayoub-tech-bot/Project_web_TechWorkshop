function saveAllChanges() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!fullName) return alert('Please enter your full name.');
    if (!email) return alert('Please enter your email.');

    if (newPassword) {
        if (newPassword !== confirmPassword) return alert('Passwords do not match!');
        if (newPassword.length < 6) return alert('Password must be at least 6 characters long.');
    }

    document.getElementById('profileName').textContent = fullName;
    document.getElementById('profileTitle').textContent = jobTitle || "—";
    document.getElementById('profileLocation').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + (location || "Unknown");

    const profileData = { fullName, email, phone, location, jobTitle };
    localStorage.setItem('profileData', JSON.stringify(profileData));

    if (newPassword) {
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    }

    alert('All changes saved successfully!');
}

function loadProfileData() {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('fullName').value = data.fullName;
        document.getElementById('email').value = data.email;
        document.getElementById('phone').value = data.phone;
        document.getElementById('location').value = data.location;
        document.getElementById('jobTitle').value = data.jobTitle;
        document.getElementById('profileName').textContent = data.fullName;
        document.getElementById('profileTitle').textContent = data.jobTitle;
        document.getElementById('profileLocation').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + data.location;
    }
}

function deleteAvatar() {
    const emptyAvatar = document.querySelector('.empty-avatar');
    emptyAvatar.innerHTML = '<i class="fas fa-camera"></i>';
    localStorage.removeItem('profileAvatar');
    document.getElementById('avatarInput').value = "";
    alert("Profile picture removed!");
}

document.getElementById('avatarInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        if (!['image/jpeg', 'image/png'].includes(file.type)) return alert('Please select a JPEG or PNG image.');
        const reader = new FileReader();
        reader.onload = function(e) {
            const emptyAvatar = document.querySelector('.empty-avatar');
            emptyAvatar.innerHTML = `<img src="${e.target.result}" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            localStorage.setItem('profileAvatar', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    const savedAvatar = localStorage.getItem('profileAvatar');
    const emptyAvatar = document.querySelector('.empty-avatar');
    if (savedAvatar) {
        emptyAvatar.innerHTML = `<img src="${savedAvatar}" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    }
});
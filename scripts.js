function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return false;
    }

    // Admin credentials (hard-coded for demonstration purposes)
    const adminUsername = 'admin';
    const adminPassword = 'admin123';



    if (username === adminUsername && password === adminPassword) {
        // Redirect to additional information page
        window.location.href = 'details.html';
        return false;  // Prevent form submission
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        return false;
    }
}

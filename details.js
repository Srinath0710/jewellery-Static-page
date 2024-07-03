function submitDetails() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const school = document.getElementById('school').value;
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const errorDetailsMessage = document.getElementById('errorDetailsMessage');

    // Clear previous error message
    errorDetailsMessage.textContent = '';

    // Simple validation
    if (name === '' || dob === '' || address === '' || school === '' || date === '' || day === '') {
        errorDetailsMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    // Process form submission (e.g., send data to server)
    alert('Details submitted successfully!');
    return false;  // Prevent form submission for demonstration
}

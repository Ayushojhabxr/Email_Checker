function checkEmail() {
    const emailInput = document.getElementById('email');
    const result = document.getElementById('result');
    const email = emailInput.value.trim();

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        result.textContent = 'Valid email address!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Invalid email address. Please enter a valid email.';
        result.style.color = 'red';
    }
}

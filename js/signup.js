document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form element
    const signupForm = document.getElementById('signup-form');
    
    // Select the password input fields
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Add an event listener for the form's 'submit' event
signupForm.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting to a server
    event.preventDefault(); 
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("The passwords do not match. Please try again.");
        passwordInput.style.borderColor = 'red';
        confirmPasswordInput.style.borderColor = 'red';
        return; 
    }
    
    // If passwords match, redirect to the verify page
    console.log("Form is valid. Redirecting to OTP verification...");
    window.location.href = 'verify.html';
});
<<<<<<< HEAD
});
=======
});
>>>>>>> 9d6c8184f21f3dd42416ab93dc8bff2d3ef27c00

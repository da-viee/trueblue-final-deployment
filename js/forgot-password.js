document.addEventListener('DOMContentLoaded', function() {
    const recoverForm = document.getElementById('recover-form');

    if (recoverForm) {
        recoverForm.addEventListener('submit', function(event) {
            // 1. Stop the form from trying to submit to a server
            event.preventDefault();

            // --- Backend Note ---
            // The backend would handle sending the OTP here.
            console.log("Forgot password requested. Redirecting to OTP page...");

            // 2. Redirect the user to the correct OTP page for this flow
            window.location.href = 'forgot-password-otp.html';
        });
    }
});
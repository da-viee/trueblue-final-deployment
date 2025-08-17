/* ===================================
   TRUEBLUE FORGOT PASSWORD OTP SCRIPT
   Author: Gemini AI
   Date: August 2025
   Description: Handles the OTP input for the password recovery flow.
                This is a copy of verify.js but redirects to the correct
                next step for password recovery.
====================================== */

document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-input');
    const timerElement = document.getElementById('timer');

    // --- OTP Input Logic ---
    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (input.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
    }


    // --- Countdown Timer Logic ---
    if (timerElement) {
        let timeLeft = 49;
        timerElement.textContent = 50;

        const countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                const timerContainer = document.querySelector('.resend-timer-container');
                timerContainer.innerHTML = '<button type="button" id="resend-otp-btn" class="btn-link">Resend code</button>';
                
                document.getElementById('resend-otp-btn').addEventListener('click', () => {
                    alert("A new OTP has been sent!");
                });

            } else {
                timerElement.textContent = timeLeft;
            }
            timeLeft -= 1;
        }, 1000);
    }

    // --- Form Submission Logic (CORRECTED for password reset) ---
    const otpForm = document.getElementById('otp-form');
    if (otpForm) {
        otpForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            let otp = '';
            otpInputs.forEach(input => {
                otp += input.value;
            });

            if (otp.length < otpInputs.length) {
                alert('Please fill in all 4 digits of the OTP.');
            } else {
                // Redirect to the "enter new password" page for the reset flow
                window.location.href = 'enter-new-password.html';
            }
        });
    }
});

// A simple style for the resend button can be added via JS
const style = document.createElement('style');
style.innerHTML = `
.btn-link {
    background: none;
    border: none;
    color: var(--primary-blue);
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    font-family: var(--font-family);
    padding: 0;
}
`;
document.head.appendChild(style);
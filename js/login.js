/*
  Handles login form submission.
  In a real app, this would send a POST request to a backend endpoint.
  For this prototype, it prevents the default submission (which would expose the password)
  and redirects to the dashboard to simulate a successful login.
*/
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the form from submitting and revealing the password in the URL
            event.preventDefault();

            // For this prototype, just redirect to the dashboard.
            window.location.href = 'dashboard.html';
        });
    }
});
/* ===================================
   TRUEBLUE DASHBOARD SCRIPT (FINAL - CORRECTED)
   Author: Gemini AI
   Date: August 2025
   Description: Final, complete, and correct script to handle the responsive
                sidebar behavior on mobile devices, including the burger menu
                toggle and overlay dismissal.
====================================== */

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');

    // --- Backend Note ---
    // This is purely frontend display logic. It does not interact with the backend.
    // It controls how the navigation is shown on smaller screen sizes.

    // Check if all necessary elements exist on the page to prevent errors
    if (burgerMenu && sidebar && overlay) {
        
        // Event listener for the burger menu button
        burgerMenu.addEventListener('click', () => {
            // Toggle the 'is-open' class on the sidebar to make it slide in
            sidebar.classList.toggle('is-open');
            // Toggle the 'is-active' class on the overlay to show/hide it
            overlay.classList.toggle('is-active');
        });

        // Event listener for the overlay
        overlay.addEventListener('click', () => {
            // When the dark overlay is clicked, close the sidebar
            sidebar.classList.remove('is-open');
            overlay.classList.remove('is-active');
        });
    }
});
/* ===================================
   TRUEBLUE LANGUAGE SELECTION SCRIPT (FINAL - CORRECTED)
   Author: Gemini AI
   Date: August 2025
   Description: Final, complete, and correct script to handle the interactive
                selection of a language on the choose-language.html page.
====================================== */

document.addEventListener('DOMContentLoaded', function() {
    const languageOptions = document.querySelectorAll('.language-option');
    const hiddenInput = document.getElementById('selected-lang');
    const languageForm = document.getElementById('language-form');

    // --- Backend Note ---
    // This script's only job is to update a hidden input field ('lang').
    // When the form is submitted, the backend (PHP or a Netlify Function)
    // will receive this value (e.g., 'en', 'pi', 'ha') and save it to the
    // user's profile in the database.

    // Check if the necessary elements exist to avoid errors on other pages
    if (languageOptions.length > 0 && hiddenInput && languageForm) {
        
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                // First, remove the 'selected' class from all buttons
                languageOptions.forEach(btn => btn.classList.remove('selected'));

                // Then, add the 'selected' class to the button that was just clicked
                this.classList.add('selected');

                // Finally, update the hidden input's value with the language code
                // from the 'data-lang' attribute of the clicked button.
                hiddenInput.value = this.dataset.lang;
            });
        });
    }
});
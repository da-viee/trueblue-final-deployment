// This function runs when the webpage has finished loading
document.addEventListener('DOMContentLoaded', function() {

    // --- Debugging Check ---
    // This message should appear in your browser's console to confirm the script is running.
    console.log("Language script loaded successfully!");

    // Find all the buttons that have the class 'language-option'
    const languageOptions = document.querySelectorAll('.language-option');
    // Find the 'Continue' button by its ID
    const continueBtn = document.getElementById('continue-btn');

    // Make sure we actually found the buttons before trying to use them
    if (languageOptions.length > 0) {

        // Add a click listener to each language button
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {

                // First, remove the 'selected' class from every language button
                languageOptions.forEach(btn => {
                    btn.classList.remove('selected');
                });

                // Then, add the 'selected' class ONLY to the button that was just clicked
                this.classList.add('selected');

                // Get the language code (e.g., "en", "ha") from the 'data-lang' attribute
                const selectedLanguage = this.dataset.lang;
                console.log(`Language changed to: ${selectedLanguage}`);
            });
        });

    } else {
        console.error("Could not find any '.language-option' elements on the page.");
    }

    // Make sure we found the continue button
    if (continueBtn) {
        // Add a click listener to the continue button
        continueBtn.addEventListener('click', function() {
            // Find the currently selected option
            const activeOption = document.querySelector('.language-option.selected');
            const selectedLanguage = activeOption ? activeOption.dataset.lang : 'en'; // Default to 'en' if none found

            console.log(`Continuing with language: ${selectedLanguage}. Redirecting...`);

            // In the next step, we will create 'signup.html'
            window.location.href = 'signup.html';
        });
    } else {
        console.error("Could not find the '#continue-btn' element on the page.");
    }
});
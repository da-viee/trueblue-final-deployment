/* ===================================
   TRUEBLUE TRACK PACKAGE SCRIPT (FINAL - CORRECTED)
   Author: Gemini AI
   Date: August 2025
   Description: Final, complete, and correct script to handle the interactivity
                on the track-package.html page. This includes switching between
                the search and results states, and managing the tabbed interface.
====================================== */

document.addEventListener('DOMContentLoaded', () => {
    const searchState = document.getElementById('search-state');
    const resultsState = document.getElementById('results-state');
    const trackingForm = document.getElementById('tracking-form');
    
    // Check if the main elements for this page exist to prevent errors
    if (!searchState || !resultsState || !trackingForm) {
        return; 
    }

    // --- Logic to switch from Search View to Results View ---
    trackingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from actually submitting/reloading the page
        
        // --- BACKEND NOTE ---
        // In a real application, this is where you would make a call to your backend.
        // 1. Get the tracking ID from the input field.
        // 2. Send it to a Netlify Function (e.g., '/.netlify/functions/track').
        // 3. The function would query the database for that ID.
        // 4. If found, it would return the package data (JSON).
        // 5. You would then use that data to populate the resultsState before showing it.
        
        console.log("Simulating package search...");
        
        // For this frontend-only prototype, we just hide the search part
        // and show the results part.
        searchState.style.display = 'none';
        resultsState.style.display = 'block';
    });

    // --- Logic for Tabs ---
    const trackingTabs = document.querySelectorAll('.tracking-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    trackingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // First, remove the 'active' class from all tabs and content panes
            trackingTabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Then, add the 'active' class to the tab that was clicked
            tab.classList.add('active');
            
            // Get the target pane's ID from the tab's 'data-tab' attribute
            const targetPaneId = tab.dataset.tab;
            const targetPane = document.getElementById(targetPaneId);
            
            // Show the corresponding content pane
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});
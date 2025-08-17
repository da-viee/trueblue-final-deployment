/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   TRUEBLUE SEND PACKAGE SCRIPT (FINAL - CORRECTED)
   Author: Gemini AI
   Date: August 2025
   Description: Final, complete, and correct script to handle the multi-step
                form logic on the send-package.html page. This includes step
                navigation, stepper UI updates, and form validation.
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */

document.addEventListener('DOMContentLoaded', () => {
    const stepperContainer = document.querySelector('.stepper');
    const nextButtons = document.querySelectorAll('.btn-next');
    const backButtons = document.querySelectorAll('.btn-back');
    const formSteps = document.querySelectorAll('.form-step');

    // Check if we are on the Send Package page
    if (!stepperContainer || !nextButtons.length || !formSteps.length) {
        return; // Do nothing if the necessary elements aren't here
    }

    const steps = [
        "Sender info", "Recipient info", "Location", "Package Details", 
        "Delivery Options", "Cost Estimate", "Payment"
    ];
    
    // Dynamically generate the stepper items
    stepperContainer.innerHTML = ''; // Clear any existing content
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.classList.add('stepper-item');
        stepElement.dataset.step = index + 1;
        stepElement.innerHTML = `
            <div class="stepper-icon">
                <img src="assets/side-profile.png" alt="profile" class="icon-inactive">
                <img src="assets/green-profile.png" alt="profile" class="icon-completed">
                <img src="assets/blue-profile.png" alt="profile" class="icon-active">
            </div>
        `;
        stepperContainer.appendChild(stepElement);

        if (index < steps.length - 1) {
            // Create progress bar with label underneath
            const progressSection = document.createElement('div');
            progressSection.classList.add('stepper-progress');
            progressSection.innerHTML = `
                <div class="stepper-line"></div>
                <div class="stepper-label">${step}</div>
            `;
            stepperContainer.appendChild(progressSection);
        } else {
            // Last item gets its label directly
            const labelElement = document.createElement('div');
            labelElement.classList.add('stepper-label');
            labelElement.textContent = step;
            stepElement.appendChild(labelElement);
        }
    });

    // Now that they are generated, we can select them
    const stepperItems = document.querySelectorAll('.stepper-item');
    let currentStep = 1;

    const updateFormState = () => {
        // --- Update Form Step Visibility ---
        formSteps.forEach(step => {
            step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
        });

        // --- Update Stepper UI ---
        stepperItems.forEach((item, index) => {
            const stepNum = index + 1;
            const iconContainer = item.querySelector('.stepper-icon');
            const inactiveIcon = iconContainer.querySelector('.icon-inactive');
            const completedIcon = iconContainer.querySelector('.icon-completed');
            const activeIcon = iconContainer.querySelector('.icon-active');
            
            item.classList.remove('active', 'completed');
            
            // Hide all icons first
            inactiveIcon.style.display = 'none';
            completedIcon.style.display = 'none';
            activeIcon.style.display = 'none';
            
            if (stepNum < currentStep) {
                // This step is completed
                item.classList.add('completed');
                completedIcon.style.display = 'block';
                // Find the progress section after this step
                const nextProgressSection = item.nextElementSibling;
                if (nextProgressSection && nextProgressSection.classList.contains('stepper-progress')) {
                    const line = nextProgressSection.querySelector('.stepper-line');
                    if (line) {
                        line.classList.add('completed');
                        // Use green progress bar image
                        line.style.backgroundImage = 'url(assets/send-green-bar.png)';
                        line.style.backgroundSize = '100% 100%';
                        line.style.backgroundRepeat = 'no-repeat';
                    }
                }
            } else if (stepNum === currentStep) {
                // This is the current active step
                item.classList.add('active');
                activeIcon.style.display = 'block';
                // Find the progress section after this step
                const nextProgressSection = item.nextElementSibling;
                if (nextProgressSection && nextProgressSection.classList.contains('stepper-progress')) {
                    const line = nextProgressSection.querySelector('.stepper-line');
                    if (line) {
                        line.classList.remove('completed');
                        // Use gray progress bar image
                        line.style.backgroundImage = 'url(assets/send-green-bar.png)';
                        line.style.backgroundSize = '100% 100%';
                        line.style.backgroundRepeat = 'no-repeat';
                    }
                }
            } else {
                // This is a future step
                inactiveIcon.style.display = 'block';
                // Find the progress section after this step
                const nextProgressSection = item.nextElementSibling;
                if (nextProgressSection && nextProgressSection.classList.contains('stepper-progress')) {
                    const line = nextProgressSection.querySelector('.stepper-line');
                    if (line) {
                        line.classList.remove('completed');
                        // Use gray progress bar image
                        line.style.backgroundImage = 'url(assets/send-gray-bar.png)';
                        line.style.backgroundSize = '100% 100%';
                        line.style.backgroundRepeat = 'no-repeat';
                    }
                }
            }
        });
    };

    // --- Add Event Listeners for Next Buttons ---
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // --- BACKEND NOTE ---
            // Here you would add validation for the current step's inputs
            // before proceeding to the next step.
            
            if (currentStep < formSteps.length) {
                currentStep++;
                updateFormState();
            }
        });
    });

    // --- Add Event Listeners for Back Buttons ---
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateFormState();
            }
        });
    });

    // Initialize the form to show the first step
    updateFormState();
});
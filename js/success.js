/* ===================================
   TRUEBLUE SUCCESS PAGE SCRIPT (FINAL - CORRECTED)
   Author: Gemini AI
   Date: August 2025
   Description: Final, complete, and correct script to handle the confetti
                animation effect on the account-created.html page.
====================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    const confettiContainer = document.getElementById('confetti-container');
    
    // Only run the confetti effect if the container exists on the current page
    if (confettiContainer) {
        const confettiCount = 150; // The number of confetti pieces to create
        const colors = [
            '#f78bcf', // Pink
            '#f3d36b', // Yellow
            '#66ccff', // Blue
            '#a990e4', // Purple
            '#64c4a4', // Green
            '#ff7a7a'  // Red
        ];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            
            // Set random properties for each confetti piece for a natural look
            const xPos = Math.random() * 100; 
            const yPos = -20 - (Math.random() * 20); // Start off-screen at the top
            const rotation = Math.random() * 360;
            const size = 5 + (Math.random() * 10);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const fallDuration = 2 + (Math.random() * 2); // Vary the fall speed
            const fallDelay = Math.random() * 2; // Stagger when each piece starts falling

            // Apply styles directly to the element. This is efficient for dynamic elements.
            confetti.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                /* Make some pieces square and some circular */
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                left: ${xPos}%;
                top: ${yPos}px;
                transform: rotate(${rotation}deg);
                /* Link the element to the @keyframes animation defined below */
                animation: fall ${fallDuration}s linear ${fallDelay}s infinite;
            `;
            
            // Add the new confetti piece to the container
            confettiContainer.appendChild(confetti);
        }
    }
});

// We dynamically create and inject the @keyframes for the animation.
// This is a clean method that keeps our main CSS file free of single-use animations.
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    to {
        /* The final state of the animation: moves far down the screen and rotates */
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);
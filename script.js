// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const displayArea = document.getElementById('displayArea');
    const travelBtn = document.getElementById('travelBtn');
    const favoriteBtn = document.getElementById('favoriteBtn');
    const titleBtn = document.getElementById('titleBtn');

    // Check if all required elements exist
    if (!displayArea || !travelBtn || !favoriteBtn || !titleBtn) {
        console.error('Required DOM elements not found');
        return;
    }

    // Define the content for each button
    const content = {
        travel: 'A place you dream of traveling: Hogwarts',
        favorite: 'Your favorite movie or book: Good Will Hunting',
        title: 'Senior Web Developer for Office of Marketing and Communications (OMC)'
    };

    // Function to update display area (using textContent for security)
    function updateDisplay(text) {
        // Clear previous content
        displayArea.innerHTML = '';
        
        // Create paragraph element and set text safely
        const paragraph = document.createElement('p');
        paragraph.className = 'answer-text';
        paragraph.textContent = text;
        
        displayArea.appendChild(paragraph);
        displayArea.classList.add('active');
        
        // Remove active class after animation
        setTimeout(() => {
            displayArea.classList.remove('active');
        }, 3000);
    }

    // Add event listeners to buttons
    travelBtn.addEventListener('click', () => {
        updateDisplay(content.travel);
    });

    favoriteBtn.addEventListener('click', () => {
        updateDisplay(content.favorite);
    });

    titleBtn.addEventListener('click', () => {
        updateDisplay(content.title);
    });

    // Prevent double-tap zoom on iOS
    const DOUBLE_TAP_DELAY = 300; // milliseconds
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= DOUBLE_TAP_DELAY) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

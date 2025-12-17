// Get DOM elements
const displayArea = document.getElementById('displayArea');
const travelBtn = document.getElementById('travelBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const titleBtn = document.getElementById('titleBtn');

// Define the content for each button
const content = {
    travel: 'A place you dream of traveling: Hogwarts',
    favorite: 'Your favorite movie or book: Good Will Hunting',
    title: 'Senior Web Developer for Office of Marketing and Communications (OMC)'
};

// Function to update display area
function updateDisplay(text) {
    displayArea.innerHTML = `<p class="answer-text">${text}</p>`;
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
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

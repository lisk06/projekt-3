// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const btns = document.querySelectorAll('.btn');
    
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');
    
    // Toggle dark mode class on buttons to match the theme
    btns.forEach((btn) => {
        btn.classList.toggle('dark-mode');
    });
}

// Attach event listener to the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Load theme from localStorage when the page is loaded
window.onload = function() {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Store the theme in localStorage when toggling
function storeTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Attach event listener to toggle theme and store the preference
document.getElementById('theme-toggle-btn').addEventListener('click', storeTheme);

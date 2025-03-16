function toggleTheme() {
    const body = document.body;
    const btns = document.querySelectorAll('.btn');
    
    body.classList.toggle('dark-mode');
    
    btns.forEach((btn) => {
        btn.classList.toggle('dark-mode');
    });
}

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

window.onload = function() {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

function storeTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

document.getElementById('theme-toggle-btn').addEventListener('click', storeTheme);

function toggleTheme() {
    const body = document.body;
    const btns = document.querySelectorAll('.btn');
    
<<<<<<< Updated upstream
    body.classList.toggle('dark-mode');
    
=======

    body.classList.toggle('dark-mode');
    

>>>>>>> Stashed changes
    btns.forEach((btn) => {
        btn.classList.toggle('dark-mode');
    });
}

<<<<<<< Updated upstream
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

=======

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);


>>>>>>> Stashed changes
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


document.addEventListener('DOMContentLoaded', function () {
    
    const button6A = document.getElementById('button6A');
    const button10A = document.getElementById('button10A');
    const button13A = document.getElementById('button13A');
    const button16A = document.getElementById('button16A');
    const button20A = document.getElementById('button20A');
    const button25A = document.getElementById('button25A');
    const mainTitle = document.getElementById('main-title'); 

    
    function changeMainTitle(newTitle) {
        mainTitle.textContent = newTitle; 
    }

    
    button6A.addEventListener('click', function () {
        changeMainTitle('6A Säkring');
    });

    button10A.addEventListener('click', function () {
        changeMainTitle('10A Säkring');
    });

    button13A.addEventListener('click', function () {
        changeMainTitle('13A Säkring');
    });

    button16A.addEventListener('click', function () {
        changeMainTitle('16A Säkring');
    });

    button20A.addEventListener('click', function () {
        changeMainTitle('20A Säkring');
    });

    button25A.addEventListener('click', function () {
        changeMainTitle('25A Säkring');
    });
});

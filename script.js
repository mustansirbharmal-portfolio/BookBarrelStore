document.getElementById('toggleIcon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button behavior

    document.getElementById('navContain').classList.toggle('darkMode');
    document.querySelector('.hero').classList.toggle('darkMode');
    document.body.classList.toggle('darkMode');
    
});
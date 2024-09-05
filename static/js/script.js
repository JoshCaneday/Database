document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        localStorage.setItem('name', name);
        
        window.location.href = '/submission'
    });
});

document.addEventListener("DOMContentLoaded", () =>{
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('greet').textContent = `Hi, ${name}!`;
        localStorage.removeItem('item');
    }
})
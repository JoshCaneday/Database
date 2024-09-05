document.addEventListener("DOMContentLoaded", () =>{
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('greet').textContent = `Hi, ${name}!`;
        localStorage.removeItem('item');
        fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            // Display the message
            document.getElementById('message').textContent = data.message;

        })
        .catch(error => console.error('Error fetching data:', error));
    }
})
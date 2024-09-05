
document.addEventListener("DOMContentLoaded", () =>{
    const department_acronym = localStorage.getItem('department_acronym');
    const course_number = localStorage.getItem('course_number');
    const professor_name = localStorage.getItem('professor_name');
    let should_fetch = 0;
    if (department_acronym){
        document.getElementById('department_acronym').textContent = `Department: ${department_acronym}`;
        should_fetch += 1;
    }
    if (course_number){
        document.getElementById('course_number').textContent = `Course Number: ${course_number}`;
        should_fetch += 1;
    }
    if (professor_name){
        document.getElementById('professor_name').textContent = `Professor Name: ${professor_name}`;
        should_fetch += 1;
    }
    if (should_fetch > 0) {
        if (should_fetch == 3) {
            fetch('/get_data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => console.error('Error fetching data:', error));
        }
        else if (should_fetch == 2) {
            fetch('/get_data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => console.error('Error fetching data:', error));
        }
        else {
            fetch('/get_data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => console.error('Error fetching data:', error));
        }
    }
})

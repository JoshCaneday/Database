
document.addEventListener("DOMContentLoaded", () =>{
    const department_acronym = localStorage.getItem('department_acronym');
    const course_number = localStorage.getItem('course_number');
    const professor_name = localStorage.getItem('professor_name');
    const offered_fall_2024 = localStorage.getItem('offered_fall_2024');
    let should_fetch = false;
    let user_input = ""
    if (department_acronym){
        document.getElementById('department_acronym').textContent = `Department: ${department_acronym}`;
        user_input = user_input + "d.department_acronym," + department_acronym + ",";
        should_fetch = true;
    }
    if (course_number){
        document.getElementById('course_number').textContent = `Course Number: ${course_number}`;
        user_input = user_input + "c.course_number," + course_number + ",";
        should_fetch = true;
    }
    if (professor_name){
        document.getElementById('professor_name').textContent = `Professor Name: ${professor_name}`;
        user_input = user_input + "p.prof_name," + professor_name + ",";
        should_fetch = true;
    }
    if (offered_fall_2024){
        document.getElementById('offered_fall_2024').textContent = `Fall 2024: ${offered_fall_2024}`;
        user_input = user_input + "c.is_offered_fall_2024," + offered_fall_2024 + ",";
        should_fetch = true;
    }
    if (should_fetch) {
        fetch('/get_data', {method: 'POST',headers: {'Content-Type': 'application/json',}, body: JSON.stringify({input: user_input})})
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => console.error('Error fetching data:', error));
    }
})

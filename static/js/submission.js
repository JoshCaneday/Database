
document.addEventListener("DOMContentLoaded", () =>{
    const department_acronym = localStorage.getItem('department_acronym');
    const course_number = localStorage.getItem('course_number');
    const professor_first_name = localStorage.getItem('professor_first_name');
    const professor_last_name = localStorage.getItem('professor_last_name');
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
    if (professor_first_name){
        document.getElementById('professor_first_name').textContent = `Professor First Name: ${professor_first_name}`;
        user_input = user_input + "p.prof_first_name," + professor_first_name + ",";
        should_fetch = true;
    }
    if (professor_last_name){
        document.getElementById('professor_last_name').textContent = `Professor Last Name: ${professor_last_name}`;
        user_input = user_input + "p.prof_last_name," + professor_last_name + ",";
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
            // temp = data.message;

            document.getElementById('message').textContent = data.message;
            const itemsList = document.getElementById('table');
            let curRow = document.getElementById('startingRow');
            let counter = 0;
            data.table.forEach(item => {
                if (counter == 5) {
                    counter = 0;
                    const tr = document.createElement('tr');
                    itemsList.appendChild(tr);
                    curRow = tr
                }
                counter += 1;

                const th = document.createElement('th');
                th.textContent = item;
                curRow.appendChild(th);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
})

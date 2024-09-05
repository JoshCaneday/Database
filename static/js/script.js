document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const department_acronym = document.getElementById('department_acronym').value;
        const course_number = document.getElementById('course_number').value;
        const professor_name = document.getElementById('professor_name').value;
        const offered_fall_2024 = document.getElementById('offered_fall_2024').checked;
        localStorage.setItem('department_acronym', department_acronym);
        localStorage.setItem('course_number', course_number);
        localStorage.setItem('professor_name',professor_name);
        localStorage.setItem('offered_fall_2024', offered_fall_2024);
        
        window.location.href = '/submission'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const department_acronym = document.getElementById('department_acronym').value;
        const course_number = document.getElementById('course_number').value;
        const professor_name = document.getElementById('professor_name').value;
        localStorage.setItem('professor_name',professor_name);
        localStorage.setItem('department_acronym', department_acronym);
        localStorage.setItem('course_number', course_number);
        
        window.location.href = '/submission'
    });
});

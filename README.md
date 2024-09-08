# UCSD Course Finder

**UCSD Course Finder** is a web-based project that enables users to query and find information about courses offered at the University of California, San Diego (UCSD). The website is built with **HTML**, **CSS**, and **JavaScript** for the frontend, while the backend is powered by **Python/Flask** and **MySQL**. The MySQL database stores key course data, including:

- Courses offered for **Fall 2024**
- Professors teaching each course
- The department to which each course belongs (e.g., CSE, MATH, DSC)

Users can search and filter courses based on various specifications such as the professor’s first name, last name, course number, department, or whether the course is being offered in Fall 2024.

## Features

- **Course search functionality**: Search for courses based on different filters like professor’s name, course number, department, or the semester offered.
- **Database integration**: Course data is stored and managed in a MySQL database, enabling efficient querying.
- **Responsive frontend**: Designed with HTML, CSS, and JavaScript, providing a user-friendly interface for course searching.
- **Backend powered by Flask**: The web server is implemented using Flask, allowing for easy API routes to interact with the database.

## Technology Stack

### Frontend
- **HTML5**: For structuring content on the webpage.
- **CSS3**: To style the webpage and ensure responsiveness.
- **JavaScript**: For client-side interaction and enhancing user experience.

### Backend
- **Python (Flask)**: A lightweight web framework to handle server-side logic and routing.
- **MySQL**: The relational database storing all course-related data.

## Installation and Setup

### Prerequisites
Ensure that you have the following installed:
- **Python 3.6+**
- **MySQL**
- **Flask**
- **MySQL Connector for Python**: To interact with the MySQL database.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JoshCaneday/UCSD_Course_Finder.git
   cd UCSD_Course_Finder
   ```

2. **Set up a virtual environment** (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```
3. **Install required dependencies**:
   ```bash
   pip install Flask mysql-connector-python
   ```
4. **Set up the MySQL database**:
   - Create a new MySQL database for storing UCSD course data.
   - Import the database schema and sample data (if available):
     ```bash
     mysql -u yourusername -p yourdatabase < ucsd_courses.sql
     ```

5. **Configure Flask**:
   - Update the flask file with your MySQL database connection information:
     ```bash
     export DB_HOST='yourhostname'
     ```
      ```bash
     export DB_USER='yourusername'
     ```
      ```bash
     export DB_PASSWORD='yourpasswordname'
     ```
      ```bash
     export DB_DATABASE='yourdatabasename'
     ```
6. **Run the Flask server**:
   - Start the Flask server to serve the application:
     ```bash
     python manage.py
     ```

7. **Access the application**:
   - Open a web browser and navigate to `http://127.0.0.1:5000/` to view the UCSD Course Finder.


## Usage

The UCSD Course Finder allows users to query and filter courses based on various criteria:

- **Professor’s First Name/Last Name**: Search for courses taught by specific professors.
- **Course Number**: Find a course by its designated number (e.g., CSE 101, MATH 20B).
- **Department**: Query courses by department (e.g., CSE for Computer Science, MATH for Mathematics, DSC for Data Science).
- **Offered Semester**: Filter by semester offerings, such as Fall 2024.

### Example Query

- **Find all courses taught by Professor Smith in Fall 2024**:
  - Search by last name "Smith" and select "Fall 2024" in the offered semester filter.
  
- **List all courses in the CSE department**:
  - Select the "CSE" department filter to list all Computer Science courses.

## Database Schema

The database schema includes the following tables:

- **Courses**: Stores information about each course, including course number, title, and department.
- **Professors**: Contains professor details, including first name, last name, and the courses they teach.
- **Offerings**: Tracks which courses are being offered during specific semesters (e.g., Fall 2024).

## Future Enhancements

- **Course recommendations**: Suggest related courses based on user queries.
- **Expanded search filters**: Add filters for course level (undergraduate/graduate) and course credits.
- **Integration with UCSD schedule**: Direct users to the UCSD schedule for real-time enrollment information.

## Related Projects

This project is part of a broader suite of tools. The course data used here is collected via the [WebScraper](https://github.com/JoshCaneday/WebScraper) project, which scrapes course information from the UCSD website. For more details on how this data is collected, please refer to the WebScraper repository.


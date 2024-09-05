import mysql.connector
from flask import Flask, render_template, jsonify, request





app = Flask(__name__)

# Example of a route that serves data
@app.route('/get_data', methods=['POST'])
def get_data():
    reqData = request.json;
    user_input = reqData.get('input')
    query = '''
                SELECT d.department_acronym AS 'Department', 
                c.course_name AS 'Course Name', 
                c.course_number AS '#', 
                p.prof_first_name  AS 'First Name', 
                p.prof_last_name AS 'Last Name' 
                FROM courses c JOIN departments d JOIN professors p 
                WHERE c.department_id = d.department_id AND c.fall_2024_prof_id = p.prof_id
            '''
    addQuery = user_input.split(',')
    for i in range(0,len(addQuery)-1,2):
        query += " AND " + addQuery[i] + " = '" + addQuery[i+1] + "'"
    query += ";"
    print(query)

    temp = ""
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="mE2X6kP6!@#$",
        database="ucsd_classes"
    )
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()

    for row in results:
        temp += str(row)

    conn.close()
    data = {"message":temp}
    return jsonify(data)

@app.route('/submission')
def submission():
    #print("2")
    return render_template('submission.html')

# Serve the frontend
@app.route('/')

def index():
    #print("1")
    return render_template('index.html')  # Ensure 'index.html' is in a 'templates' folder

if __name__ == '__main__':
    app.run(debug=True)
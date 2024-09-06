import mysql.connector
from flask import Flask, render_template, jsonify, request





app = Flask(__name__)

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
                FROM departments d JOIN courses c LEFT JOIN professors p ON c.fall_2024_prof_id = p.prof_id
                WHERE c.department_id = d.department_id
            '''
    addQuery = user_input.split(',')
    for i in range(0,len(addQuery)-1,2):
        if addQuery[i] != "c.is_offered_fall_2024" and addQuery[i+1] != '':
            query += " AND " + addQuery[i] + " = '" + addQuery[i+1] + "'"
        elif addQuery[i+1] == 'true':
            query += " AND " + addQuery[i] + " = true"
    query += ";"
    #print(query)

    temp = []
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
        observation = str(row)[1:-1].split(',')
        for i in observation:
            if i[0] == "'":
                temp.append(i[1:-1])
            else:
                temp.append(i)

    conn.close()
    data = {"message":"Here are the Items:","table":temp}
    return jsonify(data)

@app.route('/submission')
def submission():
    return render_template('submission.html')

@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)
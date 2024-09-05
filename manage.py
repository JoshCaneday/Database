import mysql.connector
from flask import Flask, render_template, jsonify

# Set up connection
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mE2X6kP6!@#$",
    database="ucsd_classes"
)

temp = ""
# Create a cursor to interact with the database
cursor = conn.cursor()

# Example query
cursor.execute("SELECT * FROM departments")
results = cursor.fetchall()

for row in results:
    temp += str(row)

# Close the connection
conn.close()



app = Flask(__name__)

# Example of a route that serves data
@app.route('/get_data')
def get_data():
    #print("3")
    # Replace this with data fetched from your database or Python logic
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
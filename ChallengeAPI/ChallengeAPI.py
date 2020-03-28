from flask import Flask , jsonify, request,render_template
from flask_cors import CORS,cross_origin
import mysql.connector
from datetime import datetime


app = Flask ('__name__')
#if you have any complain about password then we will change it later..
cnx = mysql.connector.connect(host="localhost", user="root", password="cyber@2020",database="cyberchase")
cursor = cnx.cursor(buffered=True)

app.route('/getChallengeId')
@cross_origin()
def get_challenge_id():
	query = "select id from Challenges"
	



if __name__ == '__main__':
    app.run(host='0.0.0.0',port="8001",debug=True)
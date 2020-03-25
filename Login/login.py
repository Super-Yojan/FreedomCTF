from flask import Flask , jsonify, request,render_template
from flask_cors import CORS,cross_origin
import mysql.connector
from datetime import datetime


app = Flask ('__name__')
#if you have any complain about password then we will change it later..
cnx = mysql.connector.connect(host="cyerchase", user="root", password="cyber@2020",database="cyberchase")
cursor = cnx.cursor()


@app.route('/login', methods=['GET','POST','PUT'])
@cross_origin()
def login():
    query= "Select * from Team where TeamName=%s and TeamPassword=%s"
    req_data = request.get_json()
    print(req_data)
    data = req_data.get('data')
    print(data['TeamName'])
    cursor.execute(query,(data['TeamName'],data['TeamPassword']))
    print(cursor)
    for TeamName in cursor:
        print(TeamName[0])
        return jsonify({'Result':'1','Message':'Logined as team {}'.format(TeamName[1]),'TeamID':TeamName[0]})
    return str(cursor)

from flask import Flask , jsonify, request,render_template
from flask_cors import CORS,cross_origin
import mysql.connector
from datetime import datetime


app = Flask ('__name__')
#if you have any complain about password then we will change it later..
cnx = mysql.connector.connect(host="cyberchase", user="root", password="cyber@2020",database="cyberchase")
cursor = cnx.cursor(buffered=True)


@app.route('/login', methods=['GET','POST','PUT'])
@cross_origin()
def login():
    query= "Select * from Team where TeamName=%s and TeamPassword=%s"
    data = request.get_json()
    print(data)
    cursor.execute(query,(data['TeamName'],data['TeamPassword']))
    print(cursor)
    for TeamName in cursor:
        print(TeamName[0])
        return jsonify({'Result':'1','Message':'Logined as team {}'.format(TeamName[1]),'TeamID':TeamName[0]})
    return jsonify({'Result':'0','Message':'TeamName and Password didnot match.'})

if __name__ =='__main__':
    app.run(host="0.0.0.0",port=8000,debug=True)

cursor.close()
cnx.close()


from flask import Flask, jsonify, request , session
from flask_cors import cross_origin
import mysql.connector
from flask_mail import Mail,Message
import hashlib
import os
import pymongo
from datetime import datetime,timedelta


app = Flask('__name__')
app.secret_key= os.urandom(16)
cnx = mysql.connector.connect(host="cyberchase",user="root",password="cyber@2020",database="cyberchase")
cursor = cnx.cursor(buffered=True)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'freedomc7f@gmail.com'
app.config['MAIL_PASSWORD'] = 'Fr33d0m_c7F'
app.config['MAIL_DEFAULT_SENDER']=('Freedom CTF','freedomc7f@gmail.com')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail= Mail(app)
myclient = pymongo.MongoClient("mongodb://forgotlog:27017/")

mydb = myclient["tokens"]

collection = mydb["users"]

#password:::Fr33d0m_c7F

@app.route('/api/forgot/sendMail',methods=['POST','GET'])
@cross_origin()
def send_mail():
	data=request.get_json()
	print(data)
	query="select TeamName,CreatedBy from Team where TeamName=%s"
	cursor.execute(query,(data['TeamName'],))
	email = ''
	for (TeamName,Email) in cursor:
		tok=TeamName+Email
		session['token']=hashlib.md5(tok.encode()).hexdigest()
		mydict={"token":str(hashlib.md5(tok.encode()).hexdigest()),"TeamName":TeamName,"exp":datetime.utcnow() + timedelta(minutes=30)}
		collection.insert_one(mydict)
		email= Email
		#need to change this default email
		send_Email([email,],TeamName)
		return jsonify({"Message":"Email Sent to {}".format(email)})

def send_Email(emails,TeamName):
	msg = Message('Hello', sender="freedomc7f@gmail.com",recipients=emails)
	msg.body="To reset your password visit:"+"http://34.68.171.226/reset?token="+ str(session['token'])+"&TeamName="+TeamName
	mail.send(msg)
	return "Sent"

@app.route('/api/forgot/reset',methods=['PUT'])	
@cross_origin()
def reset():
	data = request.get_json()
	query="update Team set TeamPassword=%s where TeamName=%s"
	cursor.execute(query,(str(hashlib.sha256(data['TeamPassword'].encode()).hexdigest()),data['TeamName']))
	cnx.commit()
	collection.drop()
	return jsonify({"Message":"Password Changed","Result":'1'})


@app.route('/api/forgot/validateToken')
@cross_origin()
def validate_token():
	query={"TeamName":request.args.get("TeamName"),"token":request.args.get("token")}
	doc = collection.find(query,{"_id":0,"TeamName":1,"token":1,"exp":1})
	for token in doc:
		if token["exp"] > datetime.utcnow():	
			return jsonify({"Result":"true","Message":"The token is valid"})
		else:
			collection.drop()
			return jsonify({"Result":"false","Message":"The token expired"})
	else:
		return jsonify({"Result":"false","Message":"The token is invaild"})

if __name__=="__main__":
	app.run(debug=True,port=8003,host="0.0.0.0")
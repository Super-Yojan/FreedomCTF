from flask import Flask , jsonify, request,render_template
from flask_cors import CORS,cross_origin
import mysql.connector
from datetime import datetime

app = Flask ('__name__')
#if you have any complain about password then we will change it later..
cnx = mysql.connector.connect(host="localhost", user="root", password="cyber@2020", database="cyberchase")

cursor = cnx.cursor()

@app.route('/registerTeam', methods=['GET', 'POST'])
@cross_origin()
def register():
    if request.method == 'POST':
        names = [request.form['Name1']]
        studentId = [request.form['StudentID1']]

        if request.form['Name2'] != "":
            names.append(request.form['Name2'])

        if request.form['Name3'] != "":
            names.append(request.form['Name3'])
        if request.form['Name4'] != "":
            names.append(request.form['Name4'])

        if request.form['StudentID2'] != "":
            studentId.append(request.form['StudentID2'])

        if request.form['StudentID3'] != "":
            studentId.append(request.form['StudentID3'])

        if request.form['StudentID4'] != "":
            studentId.append(request.form['StudentID4'])



        add_user(names,studentId,request.form['SchoolName'])


        query = ("insert into Team (TeamName,TeamPassword,TeamStatus,CreationDate,CreatedBy)"
        "values(%(TeamName)s,%(TeamPassword)s,%(TeamStatus)s,%(CreationDate)s,%(CreatedBy)s)")
        queryData = {'TeamName':request.form['TeamName'],
                    'TeamPassword':request.form['TeamPassword'],
                    'TeamStatus': 'Active',
                    'CreationDate': datetime.now(),
                    'CreatedBy': request.form['CreatedBy']
        }
        cursor.execute(query,queryData)
        cnx.commit()
        team_id= get_team_id(request.form['TeamName'])
        student_id = get_user_ids(studentId)
        add_members(team_id,student_id)

        return jsonify({'Status':'Sucessful','Result':'1','Message':'Sucessfully created new Team'})

    else:
        return jsonify({'Status':'Failed','Error':'GET request is not valid','Result':'0'})


def get_team_id(team_name):
    query=("select TeamID from Team where TeamName=%s")
    cursor.execute(query,(team_name,))
    team_names = []
    for name in cursor:
        team_names.append(name[0])
    return team_names

def get_user_ids(school_ids):
    query = ("select UserID from User"" where StudentID = %s")
    user_ids=[]
    for school_id in school_ids:
        cursor.execute(query,(school_id,))
        for id in cursor:
            user_ids.append(id)

    return user_ids

@app.route('/getTeamName')
def get_team_name():
    query= ("select TeamName from Team" "Where TeamName=%s")
    cursor.execute(query, (request.args.get('TeamName'),))
    for name in cursor:
        return jsonify({'TeamName':name})
    else:
        return jsonify({'Result':'1','Message':'Team doesn\'t exist'})

def add_user(names, studentId,schoolName):
    query= ("insert into User (FirstName, LastName,StudentID,CreationDate,UserType,SchoolName,Status)"
    "Values (%(FirstName)s,%(LastName)s,%(StudentID)s,%(CreationDate)s,%(UserType)s,%(SchoolName)s,%(Status)s)")
    for i in range(len(names)):
        data = {'FirstName':names[i].split()[0],
                'LastName': names[i].split()[1],
                'StudentID':studentId[i],
                'CreationDate': datetime.now(),
                'UserType': 'Regular',
                'Status' : 'Unconformed',
                'SchoolName': schoolName

        }
        cursor.execute(query,data)
        cnx.commit()


def add_members(team_id,user_id):
    query=("insert into Members(TeamID,UserID,AddedDate,MemberStatus)"
        "Values(%(TeamID)s,%(UserID)s,%(AddedDate)s,%(Status)s)")

    for i in range(len(user_id)):
        data={'TeamID': str(team_id[0]),
            'UserID': str(user_id[i][0]),
            'AddedDate':datetime.now(),
            'Status': 'Active'

        }
        cursor.execute(query,data)
        cnx.commit()




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
@app.route('/test')
def test():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

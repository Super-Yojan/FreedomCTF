from flask import Flask , jsonify, request,render_template
from flask_cors import CORS,cross_origin
import mysql.connector
from datetime import datetime
import hashlib


app = Flask ('__name__')
#if you have any complain about password then we will change it later..
cnx = mysql.connector.connect(host="cyberchase", user="root", password="cyber@2020",database="cyberchase")
cursor = cnx.cursor(buffered=True)




@app.route('/register', methods=['GET', 'POST','PUT'])
@cross_origin()
def register():
    
    if request.method == 'POST':
        data= request.get_json()
        names = [data['Name1']]
        studentId = [data['StudentID1']]

        if data['Name2'] != "":
            names.append(data['Name2'])

        if data['Name3'] != "":
            names.append(data['Name3'])
        if data['Name4'] != "":
            names.append(data['Name4'])

        if data['StudentID2'] != "":
            studentId.append(data['StudentID2'])

        if data['StudentID3'] != "":
            studentId.append(data['StudentID3'])

        if data['StudentID4'] != "":
            studentId.append(data['StudentID4'])



        add_user(names,studentId,data['SchoolName'])
        print(data['StudentID1'])

        team_exists=get_team_id(data['TeamName'])
        print(len(team_exists))
        if len(team_exists)==0:
            query = ("insert into Team (TeamName,TeamPassword,TeamStatus,CreationDate,CreatedBy)"
            "values(%(TeamName)s,%(TeamPassword)s,%(TeamStatus)s,%(CreationDate)s,%(CreatedBy)s)")
            queryData = {'TeamName':data['TeamName'],
                    'TeamPassword':str(hashlib.sha256(data['TeamPassword']).hexdigest()),
                    'TeamStatus': 'Active',
                    'CreationDate': datetime.now(),
                    'CreatedBy':data['StudentID1']
            }
            cursor.execute(query,queryData)
            cnx.commit()
            team_id= get_team_id(data['TeamName'])
            student_id = get_user_ids(studentId)
            add_members(team_id,student_id)

            return jsonify({'Status':'Sucessful','Result':'1','Message':'Sucessfully created new Team'})
        else:
            return jsonify({'Status':'Failes','Result':'0','Message':'Team already exist'})
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
    query = ("select UserID from User where StudentID = %s")
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


if __name__ == '__main__':
    app.run(host="0.0.0.0",port=8002,debug=True)
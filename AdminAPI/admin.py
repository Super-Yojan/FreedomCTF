from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
import mysql.connector


cnx = mysql.connector.connect(host='localhost',user='root',password='cyber@2020',database="cyberchase")
cursor = cnx.cursor()

app = Flask(__name__)


#works
@app.route('/addCategory',methods=['POST'])
def add_category():
    query= ("insert into Categories(CategoryName,CategoryStatus)" "Values (%s, %s)")
    data = request.get_json()
    cursor.execute(query,(data['CategoryName'],'Active'))
    cnx.commit()
    return jsonify({'Result':'1','Message':'Category with name {} was added to category table'.format(data['CategoryName']),'Status':'Sucessful'})


#works
@app.route('/diactivateCategory',methods=['PUT'])
def diactivate_category():
    query=('update Categories set CategoryStatus = %s Where CategoryID=%s')
    data = request.get_json()
    cursor.execute(query, ('Inactive',data['CategoryID']))
    cnx.commit()
    return jsonify({'Result':'1','Message':'Category with id {} was diactivated on category table'.format(data['CategoryID']),'Status':'Sucessful'})


#works
@app.route('/deleteCategory',methods=['DELETE'])
def delete_category():
    query = 'delete from Categories where CategoryID=%s'
    data =request.get_json()
    cursor.execute(query,(data['CategoryID'],))
    cnx.commit()
    return jsonify({'Result':'1', 'Message':'Category with id {} was deleted from category table'.format(data['CategoryID']),'Status':'Sucessful'})

#works
@app.route('/getCategories')
def get_categories():
    query = 'Select * from Categories'
    cursor.execute(query)
    category = []  

    for cat in cursor:
        category.append({'id':cat[0],'Name':cat[1],'Status':cat[2]})

    return jsonify(category)

@app.route('/getCategory')
def get_category():
    query= 'select * from Categories where id=%s'
    category=''
    cursor.execute(query,(request.args.value('id'),))
    for cat in cursor:
        category.append({"Name":cat[1],"Status":cat[2]})
# this is the end of Category


# Starting Challenges

@app.route('/addChallenge')
def add_challenge():
    query= ("insert into challenges""values (%(id)) ")
    



if __name__ == '__main__':
    app.run(debug=True) 

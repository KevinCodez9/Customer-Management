#C:\flask_dev\flaskreact\app.py
from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow #ModuleNotFoundError: No module named 'flask_marshmallow' = pip install flask-marshmallow https://pypi.org/project/flask-
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db, Users
 
app = Flask(__name__)
 
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
# Databse configuration mysql                             Username:password@hostname/databasename
#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/flaskreact' 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@127.0.0.1:3306/flaskreact'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
CORS(app, supports_credentials=True)
 
db.init_app(app)
        
with app.app_context():
    db.create_all()
 
ma=Marshmallow(app)
 
class UserSchema(ma.Schema):
    class Meta:
        fields = ('customer_num','customer_name','street','city','state','zips','balance','credit_limit','rep_num')
  
user_schema = UserSchema()
users_schema = UserSchema(many=True)
  
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
 
@app.route('/users', methods=['GET']) 
def listusers():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)
  
@app.route('/userdetails/<id>',methods =['GET'])
def userdetails(id):
    user = Users.query.get(id)
    results = users_schema.dump(user)
    return jsonify(results)

@app.route('/userupdate/<id>',methods = ['PUT'])
def userupdate(id):
    user = Users.query.get(id)
  
    customer_num = request.json['customer_num']
    customer_name = request.json['customer_name']
    street = request.json['street']
    city = request.json['city']
    state = request.json['state']
    zips = request.json['zips']
    user.customer_num = customer_num
    user.customer_name = customer_name
    user.street=street
    user.city=city
    user.state=state
    user.zips=zips
    db.session.commit()
    return user_schema.jsonify(user)
 
@app.route('/userdelete/<id>',methods=['DELETE'])
def userdelete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)
  
@app.route('/newuser',methods=['POST'])
def newuser():
 
    customer_num = request.json['customer_num']
    customer_name = request.json['customer_name']
    street = request.json['street']
    city=request.json['city']
    state=request.json['state']
    zips=request.json['zips']
  
   
 
    users = Users(customer_num=customer_num, customer_name=customer_name, street=street,city=city,state=state,zips=zips)
 
    db.session.add(users)
    db.session.commit()
    return user_schema.jsonify(users)
 
if __name__ == "__main__":
   app.run(debug=True)

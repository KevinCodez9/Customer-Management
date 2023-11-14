#C:\flask_dev\flaskreact\models.py
from flask_sqlalchemy import SQLAlchemy
         
db = SQLAlchemy()
         
class Users(db.Model):
    __tablename__ = "cust_details"
    id = db.Column(db.Integer, primary_key=True)
    customer_num = db.Column(db.Integer, primary_key=True, index=True, unique=True)
    customer_name = db.Column(db.String(150), index=True, unique=True)
    street = db.Column(db.String(255), index=True, unique=True)
    city = db.Column(db.String(255), index=True, unique=True)
    state = db.Column(db.String(255), index=True, unique=True)
    zips= db.Column(db.Integer, index=True, unique=True)
  
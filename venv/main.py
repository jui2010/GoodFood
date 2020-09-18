from flask import Flask,request, Response
import json
import os
import pandas as pd    
from flask_cors import CORS
from flask_pymongo import pymongo
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

CONNECTION_STRING = os.environ['MONGO_URI']
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('immunize_db')

#test to insert data to the data base
@app.route("/test")
def test():
    db.users.insert_one({"name": "ahshsh"})
    return "Connected to the data base!"
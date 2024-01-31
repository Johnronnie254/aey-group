from flask import flask
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Author, Book


app = Flask(__name__)






if __name__=='__main__':
    app.run(debug=True)

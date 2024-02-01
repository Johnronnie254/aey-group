from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Author, Book


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

migrate= Migrate(app,db)
CORS(app)
db.init_app(app)

#dashboard
@app.route('/')
def dashboard():
    return f'Welcome to our book store'

#GET /books/ - Returns a list of books in the database
@app.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    book_dict= [
        {
            "id": book.id,
            "book_name": book.book_name,
            "ISBN": book.ISBN,
            "author": {
                "id": book.author.id,
                "name": book.author.name,
                "age": book.author.age,
                "country": book.author.country,
                "book_genre": book.author.book_genre,
            },
        }
        for book in books
    ]
    
    return jsonify(book_dict), 200


 #GET /book/{{id}}/ - Returns a detail view of the specified book id. Nest ● author details


@app.route('/book/<int:id>', methods=['GET'])
def get_book(id):
    book = Book.query.filter_by(id=id).first()
    if book is None:
        return jsonify({'error': 'Unfortunately the book you are looking for is unavailable'}), 404
    else:
        return jsonify({
            "id": book.id,
            "book_name": book.book_name,
            "ISBN": book.ISBN,
            "author": {
                "id": book.author.id,
                "name": book.author.name,
                "age": book.author.age,
                "country": book.author.country,
                "book_genre": book.author.book_genre,
            },
        }), 200

#GET /authors/ - Returns a list of authors in the database
    
@app.route('/authors', methods=['GET'])
def get_authors():
    authors = Author.query.all()
    authors_dict = [
        {
            'id': author.id,
            'name': author.name,
            'age': author.age,
            'country': author.country,
            'book_genre': author.book_genre,
        }
        for author in authors
    ]

    return jsonify( authors_dict), 200
    
    
#GET /author/{{id}}/ - Returns a detail view of the specified author id

@app.route('/authors/<int:id>')
def get_author(id):
    author= Author.query.filter_by(id=id).first()
    
    if author is None:
        return jsonify({'error': 'Sorry, we do not have the author'}), 404
    else:
        return jsonify({
            'id': author.id,
            'name': author.name,
            'age': author.age,
            'country': author.country,
            'book_genre': author.book_genre,
        }), 200

# POST /author/ - Creates a new author with the specified details

@app.route('/author', methods=['POST'])
def create_author():
    data = request.json  

    name = data.get('name')
    age = data.get('age')
    country = data.get('country')
    book_genre = data.get('book_genre')

    if not name or not age or not country:
        return jsonify({'error': 'Name, age, and country are required fields'}), 400

    new_author = Author(name=name, age=age, country=country, book_genre=book_genre)

  
    db.session.add(new_author)
    db.session.commit()

    return jsonify({'message': 'Author created successfully', 'author_id': new_author.id}), 201

#POST /book/ - Creates a new book with the specified details
@app.route('/book', methods=['POST'])
def create_book():
    data= request.json

    book_name = data.get('book_name')
    ISBN = data.get('ISBN')
    author = data.get( 'author')

    if not book_name or not ISBN or not author:
        return jsonify({'error': 'book name, ISBN and author details required'}), 400
    
    new_book = Book(book_name=book_name, ISBN=ISBN, author=author)
    db.session.add(new_book)
    db.session.commit()

    return jsonify({'message': 'The book has been successfully created'}), 201


if __name__=='__main__':
    app.run(debug=True)
   

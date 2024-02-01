from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Author(db.Model):
    __tablename__ = 'authors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    age = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    book_genre = db.Column(db.String)

    def __repr__(self):
        return f'<Author(id={self.id}, name={self.name}, age={self.age}, country={self.country}, book_genre={self.book_genre})>'


class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    book_name = db.Column(db.String, nullable=False, unique=True)
    ISBN = db.Column(db.String, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'), nullable=False)
    author = db.relationship('Author', backref='books')
    coverImageUrl = db.Column(db.String)  
    numBooksInStore = db.Column(db.Integer) 

    def __repr__(self):
        return f'<Book(id={self.id}, book_name={self.book_name}, ISBN={self.ISBN}, author={self.author})>'


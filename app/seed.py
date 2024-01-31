from app import app, db
from models import Author, Book

def seed_database():
  
    with app.app_context():
        db.create_all()

        authors_data = [
            {'name': 'Author 1', 'age': '30', 'country': 'Country 1', 'book_genre': 'Genre 1'},
            {'name': 'Author 2', 'age': '25', 'country': 'Country 2', 'book_genre': 'Genre 2'},
        ]

        for author_info in authors_data:
            author = Author(**author_info)
            db.session.add(author)

        db.session.commit()

        books_data = [
            {'book_name': 'Book 1', 'ISBN': '123456789', 'author_id': 1},
            {'book_name': 'Book 2', 'ISBN': '987654321', 'author_id': 2},
        ]

        for book_info in books_data:
            book = Book(**book_info)
            db.session.add(book)

        db.session.commit()

if __name__ == "__main__":
    seed_database()

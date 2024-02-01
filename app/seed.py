import random
from faker import Faker
from app import app, db
from models import Author, Book

fake = Faker()

def seed_database():
    with app.app_context():
        db.create_all()

        authors_data = [
            {'name': fake.name(), 'age': fake.random_int(20, 80), 'country': fake.country(), 'book_genre': fake.word()}
            for _ in range(10)
        ]

        for author_info in authors_data:
            author = Author(**author_info)
            db.session.add(author)

        db.session.commit()

        books_data = [
            {'book_name': fake.word(), 'ISBN': fake.random_int(1000000000, 9999999999), 
             'numBooksInStore': fake.random_int(1, 100), 'author_id': random.randint(1, 10)}
            for _ in range(10)
        ]

        for book_info in books_data:
            book = Book(**book_info)
            db.session.add(book)

        db.session.commit()

if __name__ == "__main__":
    seed_database()

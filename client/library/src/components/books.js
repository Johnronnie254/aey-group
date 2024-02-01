// Book.js
import React, { useState, useEffect } from 'react';
import MyBooks from './MyBooks';

function Book() {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/books');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToMyBooks = (book) => {
    setMyBooks([...myBooks, book]);
    // Update the number of books in the store
    setBooks((prevBooks) =>
      prevBooks.map((prevBook) =>
        prevBook.id === book.id
          ? { ...prevBook, numBooksInStore: prevBook.numBooksInStore - 1 }
          : prevBook
      )
    );
  };

  const removeFromMyBooks = (bookToRemove) => {
    setMyBooks((prevMyBooks) =>
      prevMyBooks.filter((prevBook) => prevBook.id !== bookToRemove.id)
    );
    // Update the number of books in the store
    setBooks((prevBooks) =>
      prevBooks.map((prevBook) =>
        prevBook.id === bookToRemove.id
          ? { ...prevBook, numBooksInStore: prevBook.numBooksInStore + 1 }
          : prevBook
      )
    );
  };

  return (
    <div>
      <h2>Book List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card" onClick={() => addToMyBooks(book)}>
                <div className="card-body">
                  <h5 className="card-title">{book.book_name}</h5>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author.name}<br />
                    <strong>ISBN:</strong> {book.ISBN}<br />
                    <strong>No. of Books:</strong> {book.numBooksInStore}
                  </p>
                  <button className="btn btn-primary">
                    Add to My Books
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {myBooks.length > 0 && (
        <MyBooks myBooks={myBooks} removeFromMyBooks={removeFromMyBooks} />
      )}
    </div>
  );
}

export default Book;

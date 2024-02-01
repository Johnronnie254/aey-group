import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Book() {
  const [books, setBooks] = useState([]);
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

  return (
    <div>
      <h2>Book List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src='https://i.pinimg.com/564x/12/44/c7/1244c7b3eb6748c34fab1d3b569539e5.jpg'
                      alt={book.book_name}
                      className="img-fluid rounded"
                      style={{ maxWidth: '50%', height: 'auto' }}
                    />
                    <h5 className="card-title">Book: {book.book_name}</h5>
                    <p className="card-text">
                      <strong>Author:</strong> {book.author.name}<br />
                      <strong>ISBN:</strong> {book.ISBN}<br />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Book;

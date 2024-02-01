// MyBooks.js
import React from 'react';

function MyBooks({ myBooks = [], removeFromMyBooks }) {
  return (
    <div>
      <h2>My Books</h2>
      {myBooks.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {myBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.book_name}</td>
                <td>{book.author.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromMyBooks(book)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books added to My Books.</p>
      )}
    </div>
  );
}

export default MyBooks;

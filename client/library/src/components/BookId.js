import { useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';

export default function BookId() {
    const[book, setBook] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/book/${id}`)
        .then((r) => r.json())
        .then((data) => setBook(data))
        .catch((error) => console.error('Error fetching book data:', error));
    }, [id]);

    
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Book 📚:{book.book_name}</h2>
        <div className='book-container'>
            <div className='image'>
            <img src="https://listeningbooks.s3.eu-west-2.amazonaws.com/public/books/500x0/1690886276_W2k6XAkis2_Imagine-Me.jpg" alt="Book Cover" />
            </div>
          <div className='content'>
            <h3>Book Details 📖</h3> 
            <h3>Book Name:  {book.book_name}</h3>
            <p>ISBN:{book.ISBN}</p>
          
          </div>

        </div>
      
    </div>
  )
}
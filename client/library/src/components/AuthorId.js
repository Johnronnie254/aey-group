import React, { useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';

export default function AuthorId() {
    const [author, setAuthor] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/authors/${id}`)
        .then((r) => r.json())
        .then (data => setAuthor(data))
    }, [id])


  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Author 📕🖋:{author.name}</h2>
        <div className='author-container'>
            <div className='image-author'>
            <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png" alt="Book Cover" 
            style={{ maxWidth: '500px', minHeight: '700px', borderRadius:'50px' }}/>
            </div>
          <div className='content'>
            <h3>AUTHOR Details 📖</h3> 
          <p>AGE: {author.age}</p>
          <p>COUNTRY:  {author.country}</p>
          <p>BOOK GENRE: {author.book_genre}</p>

          
          </div>

        </div>
        
      
    </div>
  )
}
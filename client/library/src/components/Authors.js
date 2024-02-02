import React,{useEffect, useState} from 'react'


export default function Author() {
    const [authors, setAuthors] = useState([])
  
    useEffect(() =>{
        fetch("http://127.0.0.1:5000/authors")
        .then((r) => r.json())
        .then(data => setAuthors(data))
    },[])

   

  return (
    <div className='cards'>
        {authors.map(author => (
            <div class="card" style={{width: "20rem", padding:"30px",margin:"10px"}} key={author.id}>
            <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png" class="card-img-top" alt="..." style={{height:"150px"}}/>
           <div class="card-body">
             <h5 class="card-title">Name: {author.name}</h5>
             <h5 class="card-title">Age: {author.age}</h5>
             <p class="card-text">Genre: {author.book_genre}</p>
           </div>
        </div>
        ))}
       
    </div>
  )
}
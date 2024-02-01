import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddBook({handleNewBook}) {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        book_name:"",
        ISBN:" ",
        author:" "
    })
    const handleInput = (e)=>{
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value
        });
    }

    function handleAddBook(e){
        e.preventDefault();
        const item= {
            book_name: input.book_name,
            ISBN: input.ISBN,
            author: input.author,
           
        };
        fetch("",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        })
        .then((r) => r.json())
        .then((data) => handleNewBook(data))
        setInput({
            book_name:"",
            ISBN:" ",
            author:" "
        })
        alert("Book added successfully!");
        navigate("/books")
    }
  return (
    <div>
    <div className='form-container'>
    <form>
        <br></br>
        <br></br>
        <br></br>
<div class="mb-4">
<label for="exampleInputEmail1" class="form-label">Name</label>
<input type="email" 
class="form-control" 
 name='book_name'
 value={input.book_name}
 onChange={handleInput}
/>

</div>

<div class="mb-4">
<label for="exampleInputEmail1" class="form-label">ISBN</label>
<input type="email" 
class="form-control" 
 name='ISBN'
 value={input.ISBN}
 onChange={handleInput}
/>

</div>
<div class="mb-4">
<label for="exampleInputEmail1" class="form-label">Author</label>
<input type="email" 
class="form-control" 
name='author'
value={input.author}
onChange={handleInput}
 
/>

</div>

<button type="submit" class="btn btn-primary"  onClick={handleAddBook}>Add</button>
</form>
        
    </div>      
</div>
    
  )
}
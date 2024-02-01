import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddAuthor({handleNewAuthor}) {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name:" ",
        age:" ",
        country:" ",
        book_genre:" "
    })
    const handleInput = (e)=>{
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value
        });
    }

    function handleAddAuthor(e){
        e.preventDefault();
        const item= {
            name: input.name,
            age: input.age,
            country: input.country,
            book_genre: input.book_genre,

        };
        fetch("",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        })
        .then((r) => r.json())
        .then((data) => handleNewAuthor(data))
        setInput({
            name:" ",
            age:" ",
            country:" ",
            book_genre:" "
        })
        alert("Author added successfully!");
        navigate("/Authors")
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
    name="name"
    value={input.name}
    onChange={handleInput}
    />

  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="password"
     class="form-control"
     name= "age"
     value={input.age}
     onChange={handleInput}
      
      />
  </div>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Genre</label>
    <input type="email" 
    class="form-control" 
    name="book_genre"
    value={input.book_genre}
    onChange={handleInput}
     
    />

  </div>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Country</label>
    <input type="email" 
    class="form-control" 
    name = "country"
    value={input.country}
    onChange={handleInput}
     
    />

  </div>
 
  <button type="submit" class="btn btn-primary" onClick={handleAddAuthor}>Add</button>
</form>
            
        </div>      
    </div>
  )
}
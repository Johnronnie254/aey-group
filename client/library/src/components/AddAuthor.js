import React from 'react'

export default function AddAuthor() {
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
     
    />

  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="password"
     class="form-control"
      
      />
  </div>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Genre</label>
    <input type="email" 
    class="form-control" 
     
    />

  </div>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Country</label>
    <input type="email" 
    class="form-control" 
     
    />

  </div>
 
  <button type="submit" class="btn btn-primary" >Add</button>
</form>
            
        </div>      
    </div>
  )
}
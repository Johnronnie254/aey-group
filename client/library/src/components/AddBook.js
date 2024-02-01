import React from 'react'

export default function AddBook() {
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
<label for="exampleInputEmail1" class="form-label">ISBN</label>
<input type="email" 
class="form-control" 
 
/>

</div>
<div class="mb-4">
<label for="exampleInputEmail1" class="form-label">Author</label>
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
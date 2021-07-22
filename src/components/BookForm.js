import React, { useState } from 'react'

const BookForm = () => {

  const [newBook, setNewBook] = useState({
    title:"",
    author:"",
    description:""
  })

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
     [ e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/books", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( newBook )
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    
    setNewBook({ title:"",
    author:"",
    description:""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input onChange={handleChange} type="text" name="title" value={newBook.title}></input>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input onChange={handleChange} type="text" name="author" value={newBook.author}></input>
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea onChange={handleChange} name="description" value={newBook.description}/>
      </div>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default BookForm

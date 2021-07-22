import React, { useEffect, useState } from 'react'

const BookList = () => {

  const [books, setBooks] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/books")
    .then(resp => resp.json())
    .then(data => setBooks(data))
  }, [])

  if (!books) {return <h2>Loading....</h2>}
  return (
    <div>
      {books.map(book => <div key={book.id}><h3>{book.title}</h3><p>{book.author}</p><p>{book.description}</p> </div>)}
    </div>
  )
}

export default BookList

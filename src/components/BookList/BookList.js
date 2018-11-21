import React from 'react'
import Book from '../Book/Book'


const BookList = ({ books }) => (
	books.map((book, idx) => {
		return <Book 
		key={idx} 
		book={book}
		/>
	})
)

export default BookList

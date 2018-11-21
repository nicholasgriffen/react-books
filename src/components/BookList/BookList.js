import React, { Component } from 'react'
import Book from '../Book/Book'

const API = 'http://localhost:8082/api/books'

class BookList extends Component {
    constructor(props) {
        super(props)
		
		this.state = {
			books: []
		}
    }

    componentDidMount = async () => {
        const booksRequest = await fetch(API)
		const books = await booksRequest.json()
		
		this.setState({
			...this.state,
			books
		})
    }

    render() {
        return this.state.books.map((book, idx) => {
	    	return <Book key={idx} title={book.title}/>
	    })
    }
} 

export default BookList

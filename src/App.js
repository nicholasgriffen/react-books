import React, { Component } from 'react'
import BookList from './components/BookList/BookList'
import './App.css'

class App extends Component {
    constructor(props) {
      super(props)

      this.API = 'http://localhost:8082/api/books'

      this.state = {
        books: []
      }
    }

    async componentDidMount() {
        const books = await fetch(this.API).then(res => res.json())

        this.setState({
          ...this.state,
          books
        })
    }

  render() {
    return (
      <div className="App">
        <BookList {...this.state}/>
      </div>
    )
  }
}

export default App

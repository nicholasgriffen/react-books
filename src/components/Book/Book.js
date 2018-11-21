import React from 'react'

const Book = ({ book: { title, id, author, pages }}) => (
    <li id={id}>{title}<br></br>{`By: ${author}`}</li>
)

export default Book
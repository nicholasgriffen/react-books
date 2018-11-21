import React from 'React'

const Book = ({ title, id, author, pages }) => (
    <li id={ id }>{ title }
    <a href={(function([authorName = 'Unknown', pageCount = 'Unknown']) {
        return (
            `Author: ${authorName}\nPage Count: ${pageCount}`
        )
    })([author, pages])}>'More info...'</a>
    </li>
)

export default Book
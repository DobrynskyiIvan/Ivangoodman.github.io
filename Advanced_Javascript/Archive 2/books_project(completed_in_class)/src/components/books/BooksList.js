import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Book from './Book'

const BookList = ({books}) => (
    <ul className={'list-group'}>
        {books.map(book => (
            <Book key={book._id} book={book} />
        ))}
    </ul>
)

BookList.propTypes = {
    books: PropTypes.array,
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);

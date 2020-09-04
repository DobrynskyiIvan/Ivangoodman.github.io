import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bookSelector} from '../../selectors/booksSelector'
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
    const { categoriesBooks, books} = state;
    
    return {
        books: categoriesBooks.selectedCategory
            ? books.filter(book => book.categoryId === categoriesBooks.selectedCategory)
            : bookSelector(state)
    }
}

export default connect(mapStateToProps)(BookList);

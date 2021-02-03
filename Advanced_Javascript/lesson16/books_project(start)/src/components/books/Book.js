 import React, {useState} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../../ac'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

const Book = ({book, isActive, toggle}) => {
    const [redirect, setRedirect] = useState(false);
    return(
        <li className={'list-group-item'}>
             {redirect && <Redirect to={`/edit-book/${book._id}`}/>}
            <h2 onClick={toggle}>{book.title}</h2>
            <p>Category: {book.categoryId}</p>
            {isActive && (<div><p>{book.desc}</p>
            <button onClick={()=>{
                setRedirect(true)
            }}>Edit Book</button></div>
            )}
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        categoryId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool,
    category: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
    const {categories} = state.categoriesBooks;

    return {
        isActive: state.activeBook === ownProps.book._id,
        category: categories[ownProps.book.categoryId],
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggle: () => {
            dispatch(selectBook(ownProps.book._id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);

import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {mapToArr} from '../../utils'
import {selectCatAction} from '../../ac/index'

const Categories = ({categories, selectAction}) => (
    <ul className={'list-group'}>
        {categories.map(category => (
            <li
                key={category._id}
                className={'list-group-item'}
                onClick={()=>selectAction(category._id)}
                >
                {category.title}
            </li>
        ))}
    </ul>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

Categories.defaultProps = {
    categories: [],
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks;


    return {
        categories: mapToArr(categories)
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        selectAction: (itemId) => {
            dispatch(selectCatAction(itemId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

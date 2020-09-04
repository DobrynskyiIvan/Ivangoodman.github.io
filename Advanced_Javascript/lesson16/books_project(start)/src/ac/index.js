import C from '../constants'

export const selectBook = id => ({
    type: C.SELECT_BOOK,
    payload: id
})

export const selectCatAction = id => ({
    type: C.SELECT_CAT,
    payload: {id}
})

export const addBookAction = book => ({
    type: C.ADD_BOOK,
    payload: book
})
export const editBookAction = book => ({
    type: C.EDIT_BOOK,
    payload: book
})

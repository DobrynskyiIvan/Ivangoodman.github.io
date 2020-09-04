import C from '../constants'
import {generate as id} from 'shortid'
import {defaultBooks} from '../books';

export default (state = defaultBooks, action) => {
    const { type, payload } = action

    switch (type) {
        case C.ADD_BOOK: return [{_id: id(), ...payload}, ...state]
        case C.EDIT_BOOK: return state.map(it=>it._id===payload._id?payload:it)

        default: return state
    }
    
}

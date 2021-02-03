import {generate as id} from 'shortid'
import C from '../constans'

const initState = [];

export default function (state = initState, action) {
    const {type, payload} = action

    switch(type) {
        case C.CREATE_COURSE: return [...state, {id: id(), ...payload}]

        default: return state
    }
}

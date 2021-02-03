import {combineReducers} from "redux"
import courses from "./coursesReducer"
import authors from "./authorReducer"
import counter from "./counterReducer"
import apiStatusReducer from './apiStatusReducer'

const rootReducer =  combineReducers({
    courses,
    authors,
    counter,
    apiStatusReducer,
})

export default rootReducer

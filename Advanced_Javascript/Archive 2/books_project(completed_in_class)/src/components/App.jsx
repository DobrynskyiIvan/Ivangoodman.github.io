import React from "react"
import BookList from "./books/BooksList";

const App = props => (
    <div className={'container'}>
        <h1>Books</h1>
        <div className={'row'}>
            <div className={'col-sm-3'}>
                <h2>Categories</h2>
            </div>

            <div className={'col-sm-9'}>
                <BookList />
            </div>
        </div>
    </div>
)

export default App

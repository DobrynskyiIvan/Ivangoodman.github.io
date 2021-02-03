import React from "react"
import {Route} from "react-router-dom"
import Film from "./films/Film"
import TopNavigation from "./TopNavigation"
import FilmsPage from "./FilmsPage"
import HomePage from "./HomePage"

const AppContext = React.createContext()
export {AppContext}

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <TopNavigation />
                <Route exact path="/" component={HomePage} />
                <Route path="/films" component={FilmsPage} />
                <Route path="/film/:_id" exact component={Film} />
            </div>
        )
    }
}

export default App

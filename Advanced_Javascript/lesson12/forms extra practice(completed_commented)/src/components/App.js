import React, {Component} from "react";
import {films} from "../data";
import FilmsList from "./films";
import {orderBy} from 'lodash';
import FilmForm from "./forms/FilmForm"

const AppContext = React.createContext()
export {AppContext}

class App extends Component {
    state = {
        items: [],
    }

    sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"]);

    toggleFeatured = id =>
        this.setState(({items}) => ({
            items: this.sortFilms(
                items.map(item =>
                    item._id === id ? {...item, featured: !item.featured} : item,
                ),
            ),
        }));

    componentDidMount() {
        this.setState({
            items: this.sortFilms(films),
        })
    }

    render() {
        return (
            <AppContext.Provider value={this.toggleFeatured}>
                <div className="ui container">
                    <FilmForm />
                    <hr />
                    <FilmsList films={this.state.items} />
                </div>
            </AppContext.Provider>
        )
    }
}

export default App;

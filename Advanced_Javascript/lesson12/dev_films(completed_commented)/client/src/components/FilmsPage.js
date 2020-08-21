import React, {Component} from "react"
import FilmsList from "./films"
import {orderBy,find} from 'lodash';
 import api from '../api.js'
 import AdminRoute from './HOC/AdminRoute'
 
 
 


const AppContext = React.createContext()
export {AppContext}
 

class FilmsPage extends Component {
    state = {
        films: [],
        isLoading: true,
    }

    componentDidMount() {
        api.films
            .fetchAll()
            .then(films =>
                this.setState({films: this.sortFilms(films), isLoading: false}),
            )
    }


    sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

    toggleFeatured = id => {
        const film = find(this.state.films, {_id: id})

        return this.updateFilm({...film, featured: !film.featured})
    }

    saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))

    addFilm = filmData =>
        api.films.create(filmData).then(film =>
            this.setState(({films, showAddForm}) => ({
                films: this.sortFilms([...films, {...film}]),
                showAddForm: false,
            })),
        )

    updateFilm = filmData =>
        api.films.update(filmData).then(film =>
            this.setState(({films, showAddForm}) => ({
                films: this.sortFilms(
                    films.map(item => (item._id === film._id ? film : item)),
                ),
                showAddForm: false,
            })),
        )

    deleteFilm = film =>
        api.films.delete(film).then(() =>
            this.setState(({films}) => ({
                films: this.sortFilms(films.filter(item => item._id !== film._id)),
            })),
        )

    render() {
        const {films} = this.state
        const numCol = this.props.location.pathname === "/films" ? "sixteen" : "ten"

        return (
            <AppContext.Provider
                value={{
                    toggleFeatured: this.toggleFeatured,
                    deleteFilm: this.deleteFilm,
                    user: this.props.user,
                }}
            >
                <div className="ui stackable grid">
           
                <AdminRoute status={this.props.user.role} state={this.state} submit={this.saveFilm} />

                    <div className={`${numCol} wide column`}>
                        {
                            this.state.loading ? (
                                <div className="ui icon message">
                                    <i className="notched circle loading icon" />
                                    <div className="content">
                                        <div className="header">films loading</div>
                                    </div>
                                </div>
                            ) : (
                                <FilmsList films={ films} editFilm={this.selectFilmForEdit} deleteFilm={this.deleteFilm} />
                            )
                        }
                    </div>
                </div>
            </AppContext.Provider>
        )
    }
}

export default FilmsPage

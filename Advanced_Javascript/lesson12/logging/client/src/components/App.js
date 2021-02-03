import React from "react"
import {Route} from "react-router-dom"
import jwtDecode from 'jwt-decode'
import Film from "./films/Film"
import TopNavigation from "./TopNavigation"
import {Async, lazyImport} from './Async'
import {setAuthorizationHeader} from '../utils'

const AppContext = React.createContext()
export {AppContext}

const HomePage = Async(lazyImport('./HomePage'));
const FilmsPage = Async(lazyImport('./FilmsPage'));
const SignupPage = Async(lazyImport('./SignupPage'));
const LoginPage = Async(lazyImport('./LoginPage'));

class App extends React.Component {
    state = {
        user: {
            token: null,
            role: 'user'
        },
        message: '',
    }

    componentDidMount() {
        if(localStorage.filmsToken) {
            this.setState({
                user: {
                    token: localStorage.filmsToken,
                    role: jwtDecode(localStorage.filmsToken).user.role
                }})
            setAuthorizationHeader(localStorage.filmsToken)
        }
    }

    login = token => {
        this.setState({user: {
                token,
                role: jwtDecode(token).user.role
            }})
        localStorage.filmsToken = token
        setAuthorizationHeader(token)
    }

    logout = () => {
        this.setState({user: {token: null, role: 'user'}})
        setAuthorizationHeader()
        delete localStorage.filmsToken
    }

    setMessage = message => this.setState({message})

    render() {
        const {user, message} = this.state;
        const isUserAdmin = this.state.user.role === 'admin';

        return (
            <div className="ui container">
                <TopNavigation logout={this.logout} isAuth={user.token} isAdmin={isUserAdmin} />

                {message && (
                    <div className={'ui info message'}>
                        <i className={'close icon'} onClick={() => this.setMessage("")} />
                        {message}
                    </div>
                )}

                <Route exact path="/" component={HomePage} />
                <Route
                    path="/films"
                    render={props => (
                        <FilmsPage {...props} user={this.state.user}/>
                    )}
                />
                <Route path="/film/:_id" exact component={Film} />
                <Route
                    path="/signup"
                    render={props => (
                        <SignupPage {...props} setMessage={this.setMessage} />
                    )}
                />
                <Route
                    path="/login"
                    render={props => <LoginPage {...props} login={this.login} />}
                />
            </div>
        )
    }
}

export default App

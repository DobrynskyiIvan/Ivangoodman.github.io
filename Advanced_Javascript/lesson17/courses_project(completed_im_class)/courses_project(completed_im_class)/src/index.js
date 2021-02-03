import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configurableStore from './store'
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App';

const store = configurableStore()
window.store = store

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById("root")
);

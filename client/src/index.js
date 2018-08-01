import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';
import App from './App';
import Signup from './components/signup';

import registerServiceWorker from './registerServiceWorker';

// Create parent site component and populate with paths using React Router
class Site extends Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path = '/signup' component={Signup} />
                    <Route exact path = '/' component={App} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();

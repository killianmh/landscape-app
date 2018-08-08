import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';
import App from './App';
import Signup from './components/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';

import registerServiceWorker from './registerServiceWorker';

// Create parent site component and populate with paths using React Router
class Site extends Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path = '/signup' render={() => <Signup display={"signup"} />} />
                    <Route exact path = '/login' render={() => <Signup display={"login"} />} />
                    <Route exact path = '/dashboard' render={() => <Dashboard />} />
                    {/* Last route renders home component regardless of endpoint */}
                    <Route path = '/' component={App} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();

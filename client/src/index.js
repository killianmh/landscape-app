import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import './index.css';
// import App from './App';

import registerServiceWorker from './registerServiceWorker';

// Create global initial state;
let state = {

}

// Create reducer function (takes initial state, then based on action, creates and returns new state)
const reducer = (state = state, action) => {
    switch (action.type) {
        case '' :
            return 
        case '' :
            return
        case '' :
            return
        default:
            return state;  
    }
}

// Create a redux store and pass it the reducer function
const store = createStore(reducer);

// Create parent site component and populate with paths using React Router
class Site extends Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route 
                        exact path = '/myDashboard'>

                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

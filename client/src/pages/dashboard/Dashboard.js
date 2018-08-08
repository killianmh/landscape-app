import React, { Component } from 'react';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            authenticated: false
        }
    };

    componentDidMount(){
        console.log(this.state);
        this.setState({authenticated: this.props.authenticated})
        console.log(this.state);
    }

    render(){
        return(
            <div>
                {this.state.authenticated?
                    <div>protected page</div>
                    : (null) }
            </div>
        )
    }
}
export default Dashboard
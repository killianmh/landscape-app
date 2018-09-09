import React, { Component } from 'react';
import axios from 'axios';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            authenticated: false
        }
    };

    componentDidMount(){
        // Put jwtToken from localstorage inside axios request header
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        // Authenticate if user is logged in or not
        axios.post("/api/auth/jwt").then((res) => {
            if(res.data.success){
                this.setState({authenticated: true})
            }
            console.log(this.state);
        })
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
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import UserInputPanel from '../../components/userInputPanel/UserInputPanel';

import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            email: '',
            password: '',
            userType: '',

            firstName: '',
            lastName: '',

            crewName: '',
            firmName: ''
        }
    }

    componentDidMount () {
        this.setState({
            display: this.props.display
        })
    }

    onChange = (e) => {

    }

    onSubmit = (e) => {

    }

    render () {
        const headerLinks = ["Login", "Signup"];
        let userInfo;
        switch (this.state.display){
            case "signup":
                userInfo = this.state.signup;
            case "login":
                userInfo = this.state.login;
        }
        return(
            <div className="container py-4">
                <UserInputPanel 
                    headerType = "Links" 
                    header = {headerLinks} 
                    display = {this.state.display} userInfo = {userInfo} /></div>
        )
    }
}

export default Signup;
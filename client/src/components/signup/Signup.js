import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import SignupCard from '../../components/signupCard/SignupCard';

import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',

            signup : [
                {   
                    id: "firstName",
                    name: 'First Name',
                    placeholder: "Steve",
                    value: ''
                },
                {   
                    id: "lastName",
                    name: 'Last Name',
                    placeholder: "Johnson",
                    value: ''
                },
                {
                    id: "email",
                    name: 'Email',
                    placeholder: "stevejohnson@steve.com",
                    value: ''
                },
                {
                    id: "password",
                    name: 'Password',
                    placeholder: "*********",
                    value: ''
                },
                {
                    id: "userType",
                    name: 'User Type',
                    placeholder: "Steve",
                    value: ''
                }
            ],
            companyInfo: [
                {
                    id: "crewName",
                    name: 'Crew Name',
                    placeholder: "Grounds Crew 1",
                    value: ''
                },
                {
                    id: "firmName",
                    name: 'Firm Name',
                    placeholder: "Landscaping Company",
                    value: ''
                }
            ],
            
            login: [
                {
                    id: "email",
                    name: 'Email',
                    placeholder: "stevejohnson@steve.com",
                    value: ''
                },
                {   
                    id: "password",
                    name: 'Password',
                    placeholder: "*********",
                    value: ''
                }
            ]
        }
    }

    componentDidMount () {
        this.setState({
            display: this.props.display
        })
    }

    changeFormDisplay = (e, linkName) => {
        e.preventDefault();
        this.setState({
            display: linkName
        })
    }

    onChange = (e) => {
        let state;
        switch(this.state.display) {
            case "signup":
                state = this.state.signup;
                break;
            case "login":
                state = this.state.login;
                break;
            default:
                throw new Error('error in setting state for input form');
        }
        let inputLine = state.find((element, i) => {
            if(element.id === e.target.name){
                state[i].value = e.target.value;
                return true
            }
            return inputLine
        })
        this.setState(state);
    }

    onSubmit = (e) => {

    }

    render () {
        const headerLinks = [
            {
                id: "login",
                value: "Login",
                onClick: this.changeFormDisplay
            },
            {
                id: "signup",
                value: "Signup",
                onClick: this.changeFormDisplay
            }];
        let userInfo;
        switch (this.state.display){
            case "signup":
                userInfo = this.state.signup;
                break;
            case "login":
                userInfo = this.state.login;
                break;
            default:
                userInfo = this.state.login;
                break;
        }
        return(
            <div className="container py-5 px-5">
                <SignupCard  
                    links = {headerLinks} 
                    display = {this.state.display} 
                    userInfo = {userInfo}
                    onChange = {(e) => {this.onChange(e)}}
                    onSubmit = {this.onSubmit} />
            </div>
        )
    }
}

export default Signup;
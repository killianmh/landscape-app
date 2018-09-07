import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import SignupCard from '../../components/signupCard/SignupCard';

import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
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
        e.preventDefault();
        let userData;
        switch (this.state.display) {
            case "signup":
                userData = {
                    firstName : this.state.signup[0].value,
                    lastName : this.state.signup[1].value,
                    email : this.state.signup[2].value,
                    password : this.state.signup[3].value,
                    userType : this.state.signup[4].value
                }
                
                axios.post('/api/auth/signup', {userData} )
                .then((res) => {
                    console.log(res.data)
                    if(res.data.success){
                        
                        this.setState({authenticated: true})
                    }
                }).catch((err) => {
                    console.log(err);

                })
                break

            case "login":
                userData = {
                    email : this.state.login[0].value,
                    password : this.state.signup[1].value
                }
                
                break
        }
        
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
        let submitButton;
        switch (this.state.display){
            case "signup":
                userInfo = this.state.signup;
                submitButton = "Sign up"
                break;
            case "login":
                userInfo = this.state.login;
                submitButton = "Login"
                break;
            default:
                userInfo = this.state.login;
                submitButton = "Login"
                break;
        }
        if(this.state.authenticated){
            return(<Redirect to='/dashboard'/>)
        }
        else{
            return(
                <div className="container py-5 px-5">
                    <SignupCard  
                        links = {headerLinks} 
                        display = {this.state.display} 
                        userInfo = {userInfo}
                        submitButton = {submitButton}
                        onChange = {(e) => {this.onChange(e)}}
                        onSubmit = {this.onSubmit} />
                </div>
            )
        }
    }
}

export default Signup;
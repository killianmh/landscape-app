import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userType: '',

        }
    }

    onChange = (e) => {

    }

    onSubmit = (e) => {

    }

    render () {
        return(
            <div><p>Please Signup</p></div>
        )
    }
}
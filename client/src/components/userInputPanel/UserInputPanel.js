import React, { Component } from 'react';

import './UserInputPanel.css';

class UserInputPanel extends Component {
    render(){
        return (
                <div className="row">
                    <div className="col-xs">
                        <div className="card text-center">
                            <div className="card-header">
                                <div className="text-center">
                                    <h1>Welcome to Landscapr!</h1>
                                </div>
                                    <p>
                                    <ul>
                                        {this.props.header.map((headerLink, index) => {
                                            return(
                                                <li key={index}>
                                                    <a href="#" className="active" id={headerLink}>{headerLink}</a>
                                                </li>)
                                        })}
                                    </ul>
                                        <div className="col-xs">
								            <a href="#" className="active" id="login-link">Login</a>
							            </div>
                                        <div class="col-xs">
								            <a href="#" id="signup-link">Signup</a>
							            </div>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                // <p>user input panel</p>
                // <p>{this.props.display}</p>
                // <ul>
                //     {this.props.userInfo.map((item) => {
                //         return(
                //             <li key={item.name}>
                //                 {item.name + ":" + item.value}
                //             </li>)
                //     })}
                // </ul>
        )
    }   
}

export default UserInputPanel;
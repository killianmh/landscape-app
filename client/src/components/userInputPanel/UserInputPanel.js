import React, { Component } from 'react';

import './UserInputPanel.css';

class UserInputPanel extends Component {
    render(){
        return (
            <div>
                <p>user input panel</p>
                <p>{this.props.display}</p>
                <ul>
                    {this.props.userInfo.map((item) => {
                        return(
                            <li key={item.name}>
                                {item.name + ":" + item.value}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }   
}

export default UserInputPanel;
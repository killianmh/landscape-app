import React, { Component } from 'react';

import './SignupCard.css';

class SignupCard extends Component {
    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-xs">
                    <div className="card">
                        <div className="card-header text-center px-5 pt-5">
                            <h1 className="pb-1">Welcome to Landscapr!</h1>
                            <ul className="nav nav-tabs card-header-tabs justify-content-center">
                                {this.props.links.map(link => {
                                    return(
                                        <li key={link.id} className="nav-item">
                                            <a 
                                                className={this.props.display === link.id?
                                                    "nav-link active"
                                                    :"nav-link"}
                                                id = {link.id} 
                                                onClick={(e) => {link.onClick(e, link.id)}}>
                                                {link.value}
                                            </a>
                                        </li>)
                                })}
                            </ul>
                        </div>
                        <div className="card-body">
                            <form>
                                {this.props.userInfo.map(inputField => {
                                    if(inputField.id === "userType"){
                                        return(
                                            <div key={inputField.id} className="form-group mt-4 mb-5">
                                            <label htmlFor={inputField.id}>Select your user type:</label>
                                            <select className="form-control" name={inputField.id} onChange={this.props.onChange} required>
                                                <option>Architect</option>
                                                <option>Landscape Crew</option>
                                                <option>Landscape Manager</option>
                                                <option>Property Manager</option>
                                            </select>
                                            </div>
                                        )
                                    }
                                    if(inputField.id !== "crewName" && inputField.id !== "firmName"){
                                        return(
                                            <div key={inputField.id} className="form-group mt-4 mb-5">
                                                <label htmlFor={inputField.id}>Your {inputField.name}</label>
                                                <input  type="text" className="form-control" aria-describedby={inputField.id} 
                                                        placeholder={inputField.placeholder} name={inputField.id} 
                                                        value={inputField.value} onChange={this.props.onChange} required  />
                                            </div>
                                        )
                                    }
                                })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default SignupCard;
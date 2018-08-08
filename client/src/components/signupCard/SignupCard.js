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
                                            <div key={inputField.id} className="form-group mt-4 mb-4">
                                                <label htmlFor={inputField.id}>Select your user type:</label>
                                                <select className="form-control" name={inputField.id} onChange={this.props.onChange} defaultValue="User Type" required>
                                                    <option value = 'User Type' disabled>User Type</option>
                                                    <option value = 'Architect'>Architect</option>
                                                    <option value = 'Landscape Crew'>Landscape Crew</option>
                                                    <option value = 'Landscape Manager'>Landscape Manager</option>
                                                    <option value = 'Property Manager'>Property Manager</option>
                                                </select>
                                            </div>
                                        )
                                    }
                                    else{
                                        return(
                                            <div key={inputField.id} className="form-group mt-4 mb-4">
                                                <label htmlFor={inputField.id}>Your {inputField.name}</label>
                                                <input  type="text" className="form-control" aria-describedby={inputField.id} 
                                                        placeholder={inputField.placeholder} name={inputField.id} 
                                                        value={inputField.value} onChange={this.props.onChange} required  />
                                            </div>
                                        )
                                    }
                                })}
                                <div className="text-center">
                                    <button onClick={this.props.onSubmit} type="submit" className="btn text-uppercase px-5">{this.props.submitButton}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default SignupCard;
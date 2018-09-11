import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import leaf from "./assets/images/leaf.svg";

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then((res) => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={leaf} width="30" height="30" alt=""></img>
          </a>
        </nav>
        <div className="jumbotron jumbotron-fluid jumbo-background">
          <div className="container">
            <div className="row align-items-center landing-title">
              <div className="col text-center">
                <div>Landscapr</div>
                
              </div>
            </div>
            <div className="row">
              <div>
              <button>button</button>
              </div>
            </div>
        </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              test
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;

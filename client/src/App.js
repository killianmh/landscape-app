import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import $ from 'jquery';

import leaf from "./assets/images/leaf.svg";

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then((res) => {
      console.log(res.data);
    })

    
  }

  smoothScroll = (event) => {
    event.preventDefault();
    let hash = document.getElementById("btn-learnMore").getAttribute("href");
    $('html, body').animate({scrollTop: ($(hash).offset().top)}, 800)
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
            <div className="row align-items-center landing-container">
              <div className="col">
              <div className="row">
              <div className="col text-center landing-title">
                <div><span><img src={leaf} width="80" height="80" alt=""></img></span>Landscapr</div>
              </div>
            </div>
            <div className="row landing-button-row">
              <div className="col text-center">
                <a href="#why" onClick={this.smoothScroll} id="btn-learnMore">
                  <button type="button" className="landing-button mr-5">Learn More</button>
                </a>
                <a href="/login">
                  <button type="button" className="landing-button">Login</button>
                </a>
              </div>
            </div>
              </div>
            </div>
        </div>
        </div>
        <div className="container-fluid landing-why-container pb-5" id="why">
          <div className="container">
          <div className="row">
            <div className="col text-center landing-heading">
              Why Landscapr?
            </div>
          </div>
          <div className="row">
            <div className="col-lg landing-why-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum cursus massa eget hendrerit. Integer lobortis mauris quis nulla consequat, non varius lacus pellentesque. Praesent nec fringilla turpis. Nulla interdum egestas sapien, at accumsan dolor aliquet vel. Suspendisse non magna quis sapien sagittis pulvinar fermentum eleifend leo.
            </div>
            <div className="col-lg landing-why-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum cursus massa eget hendrerit. Integer lobortis mauris quis nulla consequat, non varius lacus pellentesque. Praesent nec fringilla turpis. Nulla interdum egestas sapien, at accumsan dolor aliquet vel. Suspendisse non magna quis sapien sagittis pulvinar fermentum eleifend leo.
            </div>
            <div className="col-lg landing-why-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum cursus massa eget hendrerit. Integer lobortis mauris quis nulla consequat, non varius lacus pellentesque. Praesent nec fringilla turpis. Nulla interdum egestas sapien, at accumsan dolor aliquet vel. Suspendisse non magna quis sapien sagittis pulvinar fermentum eleifend leo.
            </div>
          </div>
          </div>
        </div>
        
        <div className="extra-space">
          More content
        </div>

        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
      
    );
  }
}

export default App;

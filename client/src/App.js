import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then((res) => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>This is a test</p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    data: []
  }


  componentDidMount() {

    axios.get('https://swapi.co/api/people/1')
      .then(response => {
        this.setState({
          data: response
        })
      })
      .catch(err => console.log(err))

  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <h2>ahhaahhahahahahaha</h2>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
            {/* <div style={{color: 'white'}}>{JSON.stringify(this.state.data.data.name)}</div>
         */}
        </header>
      </div>
    );
  }

}

export default App;

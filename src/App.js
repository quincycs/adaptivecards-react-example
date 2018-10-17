import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardExample from './CardExample';
import AdaptiveCard from './AdaptiveCard';

class App extends Component {

  _cardActionExecuted = (action) => {
    console.log("executed action:"+JSON.stringify(action));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <div style={{maxWidth: '400px', padding: '50px'}}>
            <AdaptiveCard 
              card={CardExample} 
              onExecuteAction={this._cardActionExecuted} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

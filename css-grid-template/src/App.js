import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
            <div className="z-depth-2" alt="image wordings"><img src="img/normal1.jpg"/></div>
            <div className="vertical z-depth-2" alt="image wordings"><img src="img/vertical1.jpg"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/horizontal1.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src={logo} className="App-logo z-depth-2" alt="logo" /></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/big1.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal4.jpg"/></div>
            <div className="vertical z-depth-2" alt="image wordings"><img src="img/vertical2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal5.jpg"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/horizontal2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal6.jpg"/></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/big2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal7.jpg"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/horizontal3.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal8.jpg"/></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/big3.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal9.jpg"/></div>
            <div className="vertical z-depth-2" alt="image wordings"><img src="img/vertical3.jpg"/></div>
        </div>
      </div>
    );
  }
}

export default App;

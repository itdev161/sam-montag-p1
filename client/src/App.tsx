import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class Root extends Component {
  render() {    
    return (
      <div className="App">
        
        <header className="App-header">
        <h1>Hi, I'm a React App!</h1>
        <div className="Welcome-message">
          <h2>Welcome To React!!</h2>
        </div>
        <img id="earthlogo" src="https://www.uidownload.com/files/442/743/719/globe-browser-earth-world-planet-icon.png" className="App-logo" alt="logo" />
        <p>This is our Earth. The Earth rotates at a speed of roughly 1,000 miles per hour!</p> 
        <Person />
      
      </header>
      </div>
    )
    
   //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Does This Work Better?'))
  }
}
/*
function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Welcome-message">
          <h2>Welcome To React!!</h2>
        </div>
        <img id="earthlogo" src="https://www.uidownload.com/files/442/743/719/globe-browser-earth-world-planet-icon.png" className="App-logo" alt="logo" />
        <p>This is our Earth. The Earth rotates at a speed of roughly 1,000 miles per hour!</p> 
        
      
      </header>
    </div>
  );
}
*/
export default Root;

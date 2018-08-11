import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi world!</h1>
        <Person name="Kiryl"/>
        <Person name="Petr">I like this world!</Person>
        <Person name="Alex"/>
      </div>
    ); 

  }
}

export default App;

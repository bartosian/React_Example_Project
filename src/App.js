import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {name:"Kiryl"},
      {name:"Petr"},
      {name:"Alex"}
    ]
  }

  switchName = () => {
    console.log(this.state.people);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi world!</h1>
        <button onClick={this.switchName}>Click me</button>
        <Person name={this.state.people[0].name}/>
        <Person name={this.state.people[1].name}>I like this world!</Person>
        <Person name={this.state.people[2].name}/>
      </div>
    ); 

  }
}

export default App;

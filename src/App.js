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

  switchName = (otherName) => {
    this.setState({
      people: [
        {name:otherName},
        {name:"Petr"},
        {name:"Dorrel"}
      ]
    });
  }

  changeName = (event) => {
    this.setState({
      people: [
        {name: "Kiryl"},
        {name:event.target.value},
        {name:"Dorrel"}
      ]
    });
  }

  render() {

    let styles = {
      width:"100px",
      height: "40px",
      background: "grey",
      color: "white",
      cursor: "pointer"

    }
    return (
      <div className="App">
        <h1>Hi world!</h1>
        <button style={styles} onClick={this.switchName.bind(this, "Afonya")}>Click me</button>
        <Person 
        name={this.state.people[0].name}
        click={this.switchName.bind(this, "Afonya")}
        />
        <Person 
        name={this.state.people[1].name}
        change={this.changeName}
        >I like this world!</Person>
        <Person name={this.state.people[2].name}/>
      </div>
    ); 

  }
}

export default App;

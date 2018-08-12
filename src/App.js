import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {name:"Kiryl"},
      {name:"Petr"},
      {name:"Alex"}
    ],
    showPeople: false
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

  showPeople = () => {
    let show = !this.state.showPeople;
    this.setState({
      showPeople: show
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

    let people = null;

    if(this.state.showPeople) {
        people = (
          <div>
          { this.state.people.map(
            (person) => {
              return <Person name={person.name}/>
            }
          )}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi world!</h1>
        <button style={styles} onClick={this.showPeople}>Click me</button>
          {people}
      </div>
    ); 

  }
}

export default App;

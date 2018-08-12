import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {id:"0", name:"Kiryl"},
      {id:"1", name:"Petr"},
      {id:"2", name:"Alex"}
    ],
    showPeople: false
  }

  deletePerson = (idx) => {
      const people = [...this.state.people];
      people.splice(idx, 1);

      this.setState({
        people: people
      });
  }

  changeName = (event, id) => {
    let personIdx = this.state.people.findIndex((person) => {
      return person.id === id;
    });

    let person = Object.assign({}, this.state.people[personIdx]);
    person.name = event.target.value;

    let people = [...this.state.people];
    people[personIdx] = person;
    
    this.setState({
      people: people
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
            (person, idx) => {
              return <Person 
              key={person.id}
              name={person.name}
              delete={() => {this.deletePerson(idx)}}
              change={ (event) => { this.changeName(event, person.id)}}
              />
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

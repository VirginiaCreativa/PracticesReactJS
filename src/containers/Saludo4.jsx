import React, { Component } from 'react';
import Saludo from '../components/Saludo4';

class SaludoContainers extends Component {
  state = {
  	personas: [
      { id: 1, name: 'Virginia', age: 33 },
      { id: 2, name: 'Juan', age: 35 },
      { id: 3, name: 'Ligia', age: 59 },
  	],
    showPersons: false,
    showTextBtn: true,
  };

  HandlerToggleShow = () => {
    const doesShow = this.state.showPersons;
    const btnToggle = this.state.showTextBtn;
    this.setState({
      showPersons: !doesShow,
      showTextBtn: !btnToggle,
    });
  }

  deletePersonHandle = (personIndex) => {
    const persons = this.state.personas;
    persons.splice(personIndex, 1);
    this.setState({ personas: persons });
  }

  ChangeNameHandle = (ev, id) => {
    const personIndex = this.state.personas.findIndex(p => p.id === id);
    const person = { ...this.state.personas[personIndex] };
    person.name = ev.target.value;
    const persons = [...this.state.personas];
    persons[personIndex] = person;

    this.setState({ personas: persons });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.personas.map((person, index) => <Saludo
              {...person}
              key={person.id}
              click={() => this.deletePersonHandle(index)}
              changed={ev => this.ChangeNameHandle(ev, person.id)}
              />)
          }
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.HandlerToggleShow}>{this.state.showTextBtn === true ? 'Show Persons' : 'Hide Persons'}</button>
        {persons}
      </div>
    );
  }
}

export default SaludoContainers;

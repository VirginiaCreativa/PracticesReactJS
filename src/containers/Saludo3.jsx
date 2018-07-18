import React, { Component } from 'react';
import Saludo from '../components/Saludo3';

class SaludoContainers extends Component {
  state = {
  	personas: [
      { name: 'Virginia', age: 33 },
      { name: 'Juan', age: 35 },
      { name: 'Ligia', age: 59 },
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

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            // this.state.personas.map((person, key) => <Saludo key={person.id} name={person.name} age={person.age} />)
            this.state.personas.map((person, index) => <Saludo {...person} key={index} click={() => this.deletePersonHandle(index)} />)
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

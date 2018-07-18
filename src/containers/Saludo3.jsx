import React, { Component } from 'react';
import Saludo from '../components/Saludo';

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

  handleChangeName = (ev) => {
    this.setState({
      personas: [
        { name: 'Isabella', age: 5 },
        { name: ev.target.value, age: 2 },
        { name: 'Bebe', age: 0 },
      ],
    });
  }

  HandlerToggleShow = () => {
    const doesShow = this.state.showPersons;
    const btnToggle = this.state.showTextBtn;
    this.setState({
      showPersons: !doesShow,
      showTextBtn: !btnToggle,
    });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            // this.state.personas.map((person, key) => <Saludo key={person.id} name={person.name} age={person.age} />)
            this.state.personas.map((person, index) => <Saludo {...person} key={index} />)
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

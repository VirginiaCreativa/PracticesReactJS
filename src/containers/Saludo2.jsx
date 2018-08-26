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
		      <Saludo name={this.state.personas[0].name} age={this.state.personas[0].age} changed={this.handleChangeName} />
		      <Saludo name={this.state.personas[1].name} age={this.state.personas[1].age} changed={this.handleChangeName}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam beatae reprehenderit fugiat dolorem, delectus explicabo iusto. Molestiae voluptatibus doloremque rerum cumque, quae expedita ipsa quidem impedit veritatis sequi laboriosam minus?</Saludo>
		      <Saludo name={this.state.personas[2].name} age={this.state.personas[2].age} changed={this.handleChangeName} />
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

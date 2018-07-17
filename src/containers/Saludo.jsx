import React, { Component } from 'react';
import Saludo from './../components/Saludo';

class SaludoContainers extends Component {
   state = {
   	personas: [
			{ name: 'Virginia', age: 33 },
			{ name: 'Juan', age: 35 },
			{ name: 'Ligia', age: 59 }
   	]
   }

   render() {
		return (
			<div>
		   	<Saludo name={this.state.personas[0].name} age={this.state.personas[0].age}/>
		   	<Saludo name={this.state.personas[1].name} age={this.state.personas[1].age}>
		 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam beatae reprehenderit fugiat dolorem, delectus explicabo iusto. Molestiae voluptatibus doloremque rerum cumque, quae expedita ipsa quidem impedit veritatis sequi laboriosam minus?
		   	</Saludo>
		   	<Saludo name={this.state.personas[2].name} age={this.state.personas[2].age}/>
			</div>
		);
   }
}

export default SaludoContainers;

import React, { Component } from 'react';
import ValidationChar from '../components/ValidationChar/ValidationChar';
import Char from '../components/Char/Char';

class CharacterApp extends Component {
	state = {
		userIntup: ''
	};

	inputChangeHandler = (ev) => {
		this.setState({userIntup: ev.target.value});
	}
	deleteCharHandler = (index) => {
		const box = this.state.userIntup.split('');
		box.splice(index, 1);
		const updateBox = box.join('');
		this.setState({userIntup: updateBox});
	}
	componentDidMount() {
		setTimeout(() => { return this.deleteCharHandler;}, 3000);
	}
	render() {
		let charList = this.state.userIntup.split('').map((ch, index) => {
			return <Char key={index} character={ch} clicked={() => this.deleteCharHandler(index)} />;
		});
		return (
			<div>
				<div className="container">
					<h3>CharacterApp</h3>
					<input type="text" onChange={this.inputChangeHandler} value={this.state.userIntup} />
					<p>{this.state.userIntup}</p>
					<ValidationChar inputLength={this.state.userIntup.length} />
					{charList}
				</div>	
			</div>
		);
	}
}

export default CharacterApp;
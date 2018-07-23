import React from 'react';

const ValidationChar = (props) => {

	let showText = {
		color: '#e74c3c'
	};

	let ValidationMessage = 'Text long enough';
	
	if(props.inputLength >= 5){
		ValidationMessage = 'Text too short!';
		showText = {
			color: '#2ecc71',
			fontWeight: '700'
		};
	}

	return (
		<div style={showText}>{ValidationMessage}</div>
	);
};
export default ValidationChar;
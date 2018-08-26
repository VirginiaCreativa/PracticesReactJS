import React from 'react';

const Char = (props) => {
	let boxStyle = {
		display   : 'inline-block',
		margin    : '10px',
		padding   : '20px',
		cursor    : 'pointer',
		border    : '1px solid #eee',
		textAlign : 'center'
	};
	return(
		<div style={boxStyle} onClick={props.clicked}>{props.character}</div>
	);
};
export default Char;
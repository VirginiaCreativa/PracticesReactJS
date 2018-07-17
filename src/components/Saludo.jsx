import React  from 'react';

const Saludo = (props) => {
   let boxStyle = {
   	border: '4px solid #3c83ff',
   	padding: '20px',
   	color: '#fff',
   	backgroundColor : '#273971',
   	marginBottom: '10px'
   }
   return (
		<h1 style={boxStyle}>Hola {props.name}, tienes {props.age}</h1>
   ) 
}
export default Saludo;

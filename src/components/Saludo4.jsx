import React from 'react';
import style from './Saludo.scss';

function Saludo (props) {
  return (
	<div>
		<div className={style}>
			<h1 >Hola {props.name}!, tienes {props.age} años</h1>
			<input type='text' onChange={props.changed} value={props.name} />
			<button onClick={props.click}>Eliminar</button>
		</div>
	</div>
  );
}
export default Saludo;

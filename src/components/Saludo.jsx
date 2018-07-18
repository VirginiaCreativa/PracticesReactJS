import React from 'react';

function Saludo(props) {
  const boxStyle = {
   	border: '4px solid #3c83ff',
   	padding: '20px',
   	color: '#fff',
   	backgroundColor: '#273971',
   	marginBottom: '10px',
  };
  return (
    <div>
      <div className='box' style={boxStyle}>
        <h1 >Hola {props.name}!, tienes {props.age} años</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </div>
  );
}
export default Saludo;

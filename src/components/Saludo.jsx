import React from 'react'

function Saludo ({name}, {age}, props) {
  const boxStyle = {
   	border: '4px solid #3c83ff',
   	padding: '20px',
   	color: '#fff',
   	backgroundColor: '#273971',
   	marginBottom: '10px'
  }
  return (
    <div>
      <h1 style={boxStyle}>Hola{name}, tienes{age}</h1>
      <p>{props.children}</p>
    </div>
  )
};

export default Saludo

import React from 'react'
import './Saludo.scss'

function Saludo (props) {
  return (
    <div>
      <div className='Saludo'>
        <h1 >Hola {props.name}!, tienes {props.age} años</h1>
        <p>{props.children}</p>
        <button onClick={props.click}>Eliminar</button>
      </div>
    </div>
  )
}
export default Saludo

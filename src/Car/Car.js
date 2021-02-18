import React from 'react' 
import Radium from 'radium'
import './Car.css'

const Car = props => {
    const inputClasses = ['input']

    if(props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if(props.name.length > 4) {
        inputClasses.push('bold')
    }

    return (
    <div className='Car__card'>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <input 
            type="text" 
            onChange={props.onChangeName} 
            value={props.name} 
            className={inputClasses.join(' ')}
        />
        <button onClick={props.onDelete}>Delete</button>
    </div>
    )
}

export default Radium(Car)
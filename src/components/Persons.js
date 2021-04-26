import React from 'react';
import Person from './Person';


const Persons = (props) => (
  
        props.persons.map((person,index) => {
            return <Person key={index} 
            clicked = {(event) => props.clicked(event , index)}
            changed={(event) => props.changed(event,index)}
            name={person.name}
            age={person.age} />
           
          })
    
)

export default Persons
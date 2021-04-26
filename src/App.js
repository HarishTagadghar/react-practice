import React from 'react'
import './App.css';
import Cockpit from './components/Cockpit';
// import ErrorBoundary from './components/ErrorBoundary';
// import Person from './components/Person'
import Persons from './components/Persons';

class App extends React.Component {
state = {
  persons :[
    {name:"mark",age:20},
    {name:"sandy",age:21},
    {name:"jack",age:23}
  ],
  toggle:false
}
 handleChange = (e,i) => {
  let person = this.state.persons[i];
  person.name = e.target.value;
  let  persons = [...this.state.persons]
  persons[i] = person
  this.setState({persons})
  }

  render() {
    
      const handletoggle = () => {
        let tog = this.state.toggle;
        this.setState({toggle : !tog})
      }
      const handleDelete = (e,i) => {
      let persons = [...this.state.persons];
      persons.splice(i , 1)

      this.setState({persons : persons})
      
      }
    return (
            <div className="center">
              
              <Cockpit clicked={handletoggle} />
             {this.state.toggle ? (
              <div>
              <Persons
              persons={this.state.persons}
              clicked={handleDelete}
              changed={this.handleChange} />
                
              </div>
             ) : null}
            </div>
    )
  }
}

export default App 
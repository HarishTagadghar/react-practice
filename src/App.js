import React from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Person from './components/Person'
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
              <h1 >React Practice</h1>
              <button onClick={handletoggle}>Toggle</button>
      
             {this.state.toggle ? (
              <div>
                 {this.state.persons.map((person,index) => {
                   return <Person clicked = {(event) => handleDelete(event , index)} changed={(event) => this.handleChange(event,index)} name={person.name} age={person.age} />
                  
                 })}
              </div>
             ) : null}
            </div>
    )
  }
}

export default App 
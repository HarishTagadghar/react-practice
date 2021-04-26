import React from 'react'
import './App.css';
import Cockpit from './components/Cockpit';
// import ErrorBoundary from './components/ErrorBoundary';
// import Person from './components/Person'
import Persons from './components/Persons';
import AuthContext from './context/Auth-context';

class App extends React.Component {
state = {
  persons :[
    {name:"mark",age:20},
    {name:"sandy",age:21},
    {name:"jack",age:23}
  ],
  toggle:false,
  authenticated:false
}
 handleChange = (e,i) => {
  let person = this.state.persons[i];
  person.name = e.target.value;
  let  persons = [...this.state.persons]
  persons[i] = person
  this.setState({persons})
  }

  loginHandler = () => {
    this.setState({authenticated : !this.state.authenticated})
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
              <AuthContext.Provider value={{authenticated:this.state.authenticated , login : this.loginHandler}}>

              <Cockpit clicked={handletoggle} />
             {this.state.toggle ? (
              <div>
              <Persons
              persons={this.state.persons}
              clicked={handleDelete}
              changed={this.handleChange} />
                
              </div>
             ) : null}
             
              </AuthContext.Provider>
              
            </div>
    )
  }
}

export default App 
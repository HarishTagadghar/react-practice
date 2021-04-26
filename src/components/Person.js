import React from 'react';
import '../App.css';
import propTypes from 'prop-types'
class Person extends React.Component {
    render() {
      
        return (
            <div className="box">
                <p>Name : {this.props.name} </p>
                <p>Age : {this.props.age} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button className="delete" style={{cursor:'pointer'}} onClick={this.props.clicked}>Delete</button>
            </div>
        )
    }
}

Person.propTypes = {
    clicked: propTypes.func,
    changed: propTypes.func,
    name: propTypes.string,
    age: propTypes.number
  }
  
export default Person
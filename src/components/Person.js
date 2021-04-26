import React from 'react';
import '../App.css';
import propTypes from 'prop-types';
import AuthContext from '../context/Auth-context';
class Person extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.referenceElement = React.createRef();
    }

    componentDidMount() {
        this.referenceElement.current.focus()
        console.log(this.referenceElement);
    }
    render() {
    console.log(this.context);
      
        return (
            <div className="box cockpit">
            {/* <AuthContext.Consumer>
                {(context)=>  context.authenticated ? 'Authenticate!' : 'Please login'}
            </AuthContext.Consumer> */}
          
                <p>Name : {this.props.name} =  {this.context.authenticated ? 'Authenticate!' : 'Please log in'} </p>
                <p>Age : {this.props.age} </p>
                <input type="text" ref={this.referenceElement} onChange={this.props.changed} value={this.props.name}/>
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
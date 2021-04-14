import React from 'react';
import '../App.css'
class Person extends React.Component {
    render() {
        let num = Math.random();
        console.log(num);
        if (num > 0.7) {
            throw new Error('handle this error with error boundary of react')
        }
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

export default Person
import React from 'react';

class Cockpit extends React.Component {
    render() {
        return (
            <div>
            <h1 >React Practice</h1>
              <button onClick={this.props.clicked}>Toggle</button>
      
        </div>
        )
    }
}

export default Cockpit
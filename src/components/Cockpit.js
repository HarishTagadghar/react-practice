import React , {useEffect ,useState} from 'react';

// class Cockpit extends React.Component {
//     render() {
//         return (
//             <div>
//             <h1 >React Practice</h1>
//               <button onClick={this.props.clicked}>Toggle</button>
      
//         </div>
//         )
//     }
// }


const Cockpit = (props) => {

let refElement = React.useRef(null);
let [show , setShow] = useState(true)

useEffect(() => {
setTimeout(() => {
    refElement.current.click()
    setShow(false)
}, 2000);
} , [])
console.log(show);
    return (
        <div className="cockpit">
        <h1 >React Practice</h1>
          <button ref={refElement} onClick={props.clicked} className="cockpit">Toggle</button>
        <div>
            {show ? 'WAIT FOR 2 SEC' : null}
        </div>
    </div>
    )
}
export default Cockpit
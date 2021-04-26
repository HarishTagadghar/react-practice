import React , {useEffect ,useState , useContext} from 'react';
import AuthContext from '../context/Auth-context';
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
let authcontext = useContext(AuthContext)
useEffect(() => {
setTimeout(() => {
    refElement.current.click()
    setShow(false)
}, 2000);
} , [])
    return (
        <div className="cockpit">
        <h1 >React Practice</h1>
          <button ref={refElement} onClick={props.clicked} className="cockpit">Toggle</button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}
            <button onClick={authcontext.login}>Log In</button>
        <div>
            {show ? 'WAIT FOR 2 SEC' : null}
        </div>
    </div>
    )
}
export default Cockpit
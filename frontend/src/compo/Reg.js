import './form.css';
import {NavLink} from "react-router-dom";

function Reg(){
    return(
    <div className='main'>
        <div className='img'>
       
        </div>
        <div className='box'>
       
            <h1> Register</h1>
            <p>welcome to BlogSpot.com</p>
            <br/>
           
            <input type='text' placeholder='User Name '></input><br/>
                   
            <input type='Password' placeholder='Password'></input><br/>
            <input type='Password' placeholder='Re-Type Password'></input><br/>
            
            <button>Login</button><br/>
            
        
                   
            
    
        <NavLink to="/" className='l2' activeClassName='active-link' exact> If You Have Account ?Login Here </NavLink>
     
        </div> 
       
           
    </div>
    )
}

export default Reg;
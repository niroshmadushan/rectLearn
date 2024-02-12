import './form.css';
import {NavLink} from "react-router-dom";


function Login(){
   
    return(
        <div className='main' id='sigin'>
    
        <div className='img'>
        
        </div>
        <div className='box'>
       
            <h1> Login</h1>
            <p>welcome to BlogSpot.com</p>
            <br/>
           
            <input type='text' placeholder='User Name '></input><br/>
                   
            <input type='Password' placeholder='Password'></input><br/>
            
            <a href='http://localhost:3000' className='l1'>Forgot Password ?</a><br/>
            <button>Login</button><br/>
            

            <NavLink to="/reg" className='l2' activeClassName='active-link' exact> Do You Haven't Account ? Register here </NavLink>
          
              
           
           
                   
            
            
        </div> 
       
           
    </div>
    )
}

export default Login;
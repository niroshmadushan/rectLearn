import './form.css';

function Form(){
    return(
    <div className='main'>
        <div className='box'>
            <h1> Login</h1>
            <p>welcome to BlogSpot.com</p>
            <br/>
           
            <input type='text' placeholder='User Name '></input><br/>
                   
            <input type='Password' placeholder='Password'></input><br/>
            <a href='' className='l1'>Forgot Password ?</a><br/>
            <button>Login</button><br/>

            <a href='' className='l2'>Create New Account / Register ?</a>
                   
            
            
        </div> 
       
           
    </div>
    )
}

export default Form;
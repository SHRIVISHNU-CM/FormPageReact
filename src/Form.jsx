import React, { useState } from 'react'
import './Form.css'
// import { useState } from 'react';
function Form(){
    
    const [action,setData]= useState("Login");
    

    return(
        <div className='container'>
            <div className='sub-container'>
                <div className="form-container">
                    <div className="header">{action}</div>
                </div>
                {action === "Login" ? <span></span> : <div class="input-fields">

                    <input type='text' placeholder='name' ></input>
                </div>}
                
                <div class="input-fields">
                    <input type='text' placeholder='Email' ></input>
                </div>
                <div class="input-fields">
                    <input type='text' placeholder='Password' ></input>
                </div>
                {action === "Login" ? <sapn></sapn> : <div className="last-button">
                    <h4>Last Password? </h4>
                    <a>Click Here</a>
                </div>}
                
                <div className="login-button">
                    <button className={action === "Login" ? "SignUp-gray" : "SignUp"} onClick={() => { setData("SignUp") }}>Sign Up</button>
                    <button className={action === 'SignUp' ?"Login-gray":"Login"} onClick={()=>{setData('Login')}}>Login</button>
                </div>
            </div>
            
        </div>
            
    )
}

export default Form;
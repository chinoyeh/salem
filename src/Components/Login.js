import React from 'react'
import Navbar from './Navbar'

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className ='Login'>
                <div>
                    <input type = 'name'/>
                    <p>Account ID</p>
                    <input type = 'password'/>
                    <p>Passcode</p>
                    <button>Check Balance</button>
                </div>
                <div className ='Login-image'>

                </div>

            </div>
            
        </div>
    )
}

export default Login

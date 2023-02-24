import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div className='container2'>
            <form method='post' className='form2' >
                <h1 class="heading2">Login</h1>
                <input className='input2' type="email" placeholder='youremail@gmail.com' required ></input>
                <input className='input2' type="password" placeholder='password' required  ></input>
                <a href="/resetpassword" className='reset2'>forgot password?</a>
                <input className='input2' type="submit" value='Login'></input>
                <a href="/signup" className='reset2'>Register here</a>
            </form>
        </div>
    )
}

export default Login;
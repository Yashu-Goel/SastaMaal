import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container1'>
      <form method='post1' className='form' >
        <h1 class="heading1">Register</h1>
        <input className='input' type="text" placeholder='Enter your name' required ></input>
        <input className='input' type="email" placeholder='youremail@gmail.com' required ></input>
        <input className='input' type="password" placeholder='password' required  ></input>
        <input className='input' type="password" placeholder='Confirm password' required  ></input>
        <input className='input' type="submit" value='Signup'></input>
        <a href="/login" className='reset1'>already a user?</a>
      </form>
    </div>
  )
}

export default Signup
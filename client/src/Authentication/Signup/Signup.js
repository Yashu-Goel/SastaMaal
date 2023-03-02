import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import './Signup.css'

const API_BASE = "http://localhost:5000";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const [isError, setIsError] = useState(null);


  const handleErrors = async (res) => {
    if (!res.ok) {
      const { message } = await res.json();
      throw Error(message);
    }
    return res.json();
  }

  const nameHandler = (e) => {
    setIsError("")
    const { value } = e.target;
    setName(value);
  }
  const emailHandler = (e) => {
    setIsError("")
    const { value } = e.target;
    setEmail(value);
  }
  const passHandler = (e) => {
    setIsError("")
    const { value } = e.target;
    setPass(value);
  }
  const cpassHandler = (e) => {
    setIsError("")
    const { value } = e.target;
    setCpass(value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (pass !== cpass) {
      setIsError("Password Not Matching");
      return;
    }

    await fetch(API_BASE + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, password: pass, email: email
      })
    })
      .then(handleErrors)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setIsError(error.message);
      })
  }

  return (
    <div className='container1'>
      <form method='post' className='form' onSubmit={submitHandler} >
        <h1 class="heading1">Register</h1>
        {(isError !== "") && <p className='error2'>{isError}</p>}
        <input className='input' type="text" placeholder='Enter your name' required onChange={nameHandler} ></input>
        <input className='input' type="email" placeholder='youremail@gmail.com' required onChange={emailHandler}></input>
        <input className='input' type="password" placeholder='password' required onChange={passHandler} ></input>
        <input className='input' type="password" placeholder='Confirm password' required onChange={cpassHandler} ></input>
        <input className='input' type="submit" value='Signup'></input>
        <a href="/login" className='reset1'>already a user?</a>
      </form>
    </div>
  )
}

export default Signup
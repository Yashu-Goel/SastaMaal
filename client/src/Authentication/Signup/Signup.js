import './Signup.css'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,Link } from "react-router-dom";

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const Signup = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const handleErrors = async (res) => {
    if (!res.ok) {
      const { message } = await res.json();
      throw Error(message);
    }
    return res.json();
  }

  const submitHandler = async (e) => {
    
    e.preventDefault();

    if (pass !== cpass) {
      toast.info("Oops! Password Not Matching");
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
        toast.success("Register Success .. Redirecting to login page..")
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      })
      .catch((error) => {
        toast.error(error.message);
      })
  }

  return (
    <div className='container1'>
      <form method='post' className='form' onSubmit={submitHandler} >
        <h1 class="heading1">Register</h1>

        <input className='input' type="text" placeholder='Enter your name' required onChange={(e)=>setName(e.target.value)} ></input>
        <input className='input' type="email" placeholder='youremail@gmail.com' required onChange={(e)=>setEmail(e.target.value)}></input>
        <input className='input' type="password" placeholder='password' required onChange={(e)=>setPass(e.target.value)} ></input>
        <input className='input' type="password" placeholder='Confirm password' required onChange={(e)=>setCpass(e.target.value)} ></input>
        <input className='input' type="submit" value='Signup'></input>
        <Link to="/login" className='reset1'>already a user?</Link>
      </form>
      <ToastContainer position='top-center' autoClose={1500} />
    </div>
  )
}

export default Signup
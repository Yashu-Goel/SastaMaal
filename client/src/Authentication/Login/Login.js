import './Login.css';
import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ResetPass from '../ResetPass/ResetPass';

const API_BASE = "http://localhost:5000";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [show,setShow] = useState(false);

    const handleErrors = async (res) => {

        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }
    
    function clickHandler(){
        setShow(!show);
    }
    const submiteHanlder = async (e) => {
        e.preventDefault();
        
        await fetch(API_BASE + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: password
            })
        })
            .then(handleErrors)
            .then((res) => {
                localStorage.setItem("profile", res.token);

                toast.success("Login Success! Redirecting ...");
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })

            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <div className='container2' onSubmit={submiteHanlder}>
            {show && <ResetPass closeModal={clickHandler}/>}
            <form method='post' className='form2'>
                <h1 class="heading2">Login</h1>
                <input className='input2' type="email" placeholder='youremail@gmail.com' required onChange={(e)=>setEmail(e.target.value)}></input>
                <input className='input2' type="password" placeholder='password' required onChange={(e)=>setPass(e.target.value)} ></input>
                <Link className='reset2' onClick={clickHandler}>forgot password?</Link>
                <input className='input2' type="submit" value='Login'></input>
                <Link to="/signup" className='reset2'>Register here</Link>
            </form>
            <ToastContainer position='top-center' autoClose={3000} />
        </div>
    )
}

export default Login;
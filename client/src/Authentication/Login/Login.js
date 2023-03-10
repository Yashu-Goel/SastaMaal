import './Login.css';
import React, { useState, useContext } from 'react'
import { useNavigate,Link } from "react-router-dom";
import { CredentialContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from "crypto-js";

const API_BASE = "http://localhost:5000";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const [credentials, setCredentials] = useContext(CredentialContext);

    const handleErrors = async (res) => {
        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }
    const passHandler = (e) => {
        const { value } = e.target;
        setPass(value);
    }

    const emailHandler = (e) => {
        const { value } = e.target;
        setEmail(value);
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
                setCredentials({
                    email, password
                })

                const user = { email: email, password: password };
                let string = JSON.stringify(user);
                const secret = "hdahg g badhj yuida gdjhag dag jjh";

                let encryp = CryptoJS.AES.encrypt(string, secret).toString();

                localStorage.setItem("user", encryp);

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
            <form method='post' className='form2' >
                <h1 class="heading2">Login</h1>
                <input className='input2' type="email" placeholder='youremail@gmail.com' required onChange={emailHandler} ></input>
                <input className='input2' type="password" placeholder='password' required onChange={passHandler} ></input>
                <Link to="/resetpassword" className='reset2'>forgot password?</Link>
                <input className='input2' type="submit" value='Login'></input>
                <Link to="/signup" className='reset2'>Register here</Link>
            </form>
            <ToastContainer position='top-center' autoClose={1500} />
        </div>
    )
}

export default Login;
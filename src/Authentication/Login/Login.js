import './Login.css';
import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { CredentialContext } from '../../App';
import secureLocalStorage from "react-secure-storage";
const API_BASE = "http://localhost:5000";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [isError, setIsError] = useState("");

    const [, setCredentials] = useContext(CredentialContext);

    const handleErrors = async (res) => {
        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }
    const passHandler = (e) => {
        setIsError("");
        const { value } = e.target;
        setPass(value);
    }

    const emailHandler = (e) => {
        setIsError("");
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
                secureLocalStorage.setItem("id", email);
                secureLocalStorage.setItem("pass", password);
                navigate("/");
            })

            .catch((error) => {
                setIsError(error.message);
            })

    }
    return (
        <div className='container2' onSubmit={submiteHanlder}>
            <form method='post' className='form2' >
                <h1 class="heading2">Login</h1>
                {(isError != "") && <p className='error1'>{isError}</p>}
                {(isError == "Login Success!!") && <p className='success1'>{isError}</p>}
                <input className='input2' type="email" placeholder='youremail@gmail.com' required onChange={emailHandler} ></input>
                <input className='input2' type="password" placeholder='password' required onChange={passHandler} ></input>
                <a href="/resetpassword" className='reset2'>forgot password?</a>
                <input className='input2' type="submit" value='Login'></input>
                <a href="/signup" className='reset2'>Register here</a>
            </form>
        </div>
    )
}

export default Login;
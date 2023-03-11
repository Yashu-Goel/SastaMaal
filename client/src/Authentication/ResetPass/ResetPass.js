import './ResetPass.css'
import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { alert } from '@mobiscroll/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const API_BASE = "http://localhost:5000";

const ResetPass = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);

    const handleErrors = async (res) => {

        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }

    const submitHandler = async (e) => {

        e.preventDefault();


        await fetch(API_BASE + "/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email })
        })
            .then(handleErrors)
            .then((res) => {
                alert({ title: "Email Sent", message: "Check your email for password" });
                toast.success("Redirecting to login page...", setTimeout(() => {
                    navigate('/login');
                }, 5000));
                return;
            })
            .catch((error) => {
                toast.error(error.message);
                setTimeout(() => {
                    navigate('/signup');
                }, 5000)
            });
    }

    return (
        <div className='outer-reset'>
            <form ref={form} >
                <h2>Forgot Password Form</h2>
                <div className='inner-input'>
                    <input type='email' placeholder='Enter your email address' required autoSave='on' autoFocus onChange={(e) => setEmail(e.target.value)} ></input>
                </div>
                <input type='submit' value='Verify User' onClick={submitHandler}></input>
            </form>
            <ToastContainer className='toaster' position='top-center' autoClose={3000} />
        </div>
    )
}

export default ResetPass
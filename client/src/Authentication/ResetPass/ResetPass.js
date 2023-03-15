import './ResetPass.css'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { alert } from '@mobiscroll/react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const ResetPass = ({closeModal}) => {
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
            .then(() => {
                alert({ title: "Email Sent", message: "Check your email for password" });
                toast.success("Redirecting to login page...", setTimeout(() => {
                    window.location.reload(true);
                }, 3000) )
            })
            .catch((error) => {
                toast.error(error.message);
                setTimeout(() => {
                    navigate('/signup');
                }, 5000)
            });
    }

    return (
        <div className='outer-outer-reset'>
            <div className='outer-reset'>
                <button onClick={closeModal} className='close-button-reset'>x</button>
                <form>
                    <h2>Forgot Password Form</h2>
                    <div className='inner-input'>
                        <input type='email' placeholder='Enter your email address' required autoSave='on' autoFocus onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>
                    <input type='submit' value='Verify User' onClick={submitHandler}></input>
                </form>
            </div>
        </div>

    )
}

export default ResetPass
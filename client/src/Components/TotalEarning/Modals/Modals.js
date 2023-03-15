import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Modals.css'

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app"

const MyModel = ({ withHandler, amount }) => {

    const navigate = useNavigate();
    const [isError, setIsError] = useState(null);
    const [req, setReq] = useState("Withdraw Request");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [amoun, setAmount] = useState("");
    const [upi, setUpi] = useState("");
    const [cupi, setCupi] = useState("");

    const handleErrors = async (res) => {

        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }

    function passHandler(e) {
        setReq("Withdraw Request");
        const { value } = e.target;
        setPass(value);
    }
    function emailHandler(e) {
        setReq("Withdraw Request")
        setIsError(null);
        const { value } = e.target;
        setEmail(value);
    }
    function amountHandler(e) {
        setReq("Withdraw Request")
        setIsError(null);
        const { value } = e.target;
        setAmount(value);
    }
    function upiHandler(e) {
        setReq("Withdraw Request")
        setIsError(null);
        const { value } = e.target;
        setUpi(value);
    }
    function cupiHandler(e) {
        setReq("Withdraw Request")
        setIsError(null);
        const { value } = e.target;
        setCupi(value);
    }

    const onSubmitHandle = async (e) => {
        
        const string = localStorage.getItem("profile");

        e.preventDefault();
        if (upi !== cupi) {
            toast.info("Upi id mismatch");
            return;
        }
        if(amoun < 200)
        {
            toast.error("Minimum amount not reached");
            return;
        }

        await fetch(API_BASE + "/withdraw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${string}`
            },
            body: JSON.stringify({
                amount: amoun, password: pass, email: email, upi: upi
            })
        })
            .then(handleErrors)
            .then(() => {
                toast.success("Withdrawal success !!!");
                setTimeout(() => {
                    navigate("/setting/payment-history");
                }, 2000)
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <>
            <div className='modal-cont'>
                <div className='modal-wrapper'>
                    <button id='modal-cross' onClick={withHandler}>x</button>
                    <h1 id='modal-head'>Withdrawal here</h1>
                    <form id='modal-form'>

                        <div className='modal-divs'>
                            <label>Enter you email:</label>
                            <input type='text' placeholder='youremail@gmail.com' required onChange={emailHandler}></input>
                        </div>

                        <div className='modal-divs'>
                            <label>Enter you password:</label>
                            <input type='password' placeholder='*******' required onChange={passHandler}></input>
                        </div>

                        <div className='modal-divs'>
                            <label>Amount (between 200 and {amount}):</label>
                            <input type='number' required min="200" max={amount} placeholder={amount} onChange={amountHandler}></input>
                        </div>
                        <div className='modal-divs'>
                            <label>Enter the UPI ID</label>
                            <input type='text' required placeholder="9898xxx@bankname" onChange={upiHandler}></input>
                        </div>
                        <div className='modal-divs'>
                            <label>Re-enter the UPI ID</label>
                            <input type='text' required placeholder="************" onChange={cupiHandler}></input>
                        </div>
                        <input type='submit' value={req} onClick={onSubmitHandle}></input>
                    </form>
                    {isError && <p id='mod-error'>&#10060;{isError}</p>}
                </div>
            </div>
        </>
    )
}
export default MyModel
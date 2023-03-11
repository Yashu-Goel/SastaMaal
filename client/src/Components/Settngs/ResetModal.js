import React, { useState } from 'react'
import './ResetModal.css'

const API_BASE = "http://localhost:5000";

const ResetModal = ({closeResetModal}) => {

    // const handleErrors = async (res) => {
    //     if (!res.ok) {
    //         const { message } = await res.json();
    //         throw Error(message);
    //     } else if (res.ok) {
    //         const { message } = await res.json();
    //         throw Error(message);
    //     }
    //     return res.json();
    // }

    // const [isError, setIsError] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // function onNameChange(e) {
    //     const { value } = e.target;
    //     setName(value);
    // }
    // function onEmailChange(e) {
    //     const { value } = e.target;
    //     setEmail(value);
    // }

    // function onMessageChange(e) {
    //     const { value } = e.target;
    //     setMessage(value);
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (name === "" || email === "" || message === "") {
    //         alert("please fill the required fields");
    //         return;
    //     }
    //     fetch(API_BASE + "/support", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email: email, message: message, name: name
    //         })
    //     })
    //         .then(handleErrors)
    //         .then(window.location.reload(true))
    //         .catch((error) => {
    //             setIsError(error.message);
    //         })
    // }
    return (
        <>
            <div className='outer-outer-support'>
                <div className='outer-support'>
                    <button onClick={closeResetModal} className='close-button'>x</button>
                    <div className="sup-container">
                        <h1 className='sup-head'>Reset Password</h1>
                        <form id="contact-form" >
                            <div className="form-group">
                                <label htmlFor="password">Current Password</label><br />
                                <input type="password" className="form-control"  placeholder='Current Password' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newpassword">New Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Password'  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Confirm Password'  required />
                            </div>
                            <button type="submit" className="sup-btn" >Submit</button>
                            {/* {(isError === "Changes Saved Successfully") && <p className='sup-success'>&#9989;{isError}</p>} */}
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ResetModal
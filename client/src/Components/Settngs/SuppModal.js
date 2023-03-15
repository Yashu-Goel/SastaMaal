import React, { useState } from 'react'
import './SuppModal.css'

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const Support = ({ closeModal }) => {

    const handleErrors = async (res) => {
        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        } else if (res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }

    const [isError, setIsError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function onNameChange(e) {
        const { value } = e.target;
        setName(value);
    }
    function onEmailChange(e) {
        const { value } = e.target;
        setEmail(value);
    }

    function onMessageChange(e) {
        const { value } = e.target;
        setMessage(value);
    }
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            alert("please fill the required fields");
            return;
        }
        fetch(API_BASE + "/support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, message: message, name: name
            })
        })
            .then(handleErrors)
            .then(window.location.reload(true))
            .catch((error) => {
                setIsError(error.message);
            })
    }
    return (
        <div>
            <div className='outer-outer-support'></div>
            <div className='outer-support'>
                <button onClick={closeModal} className='close-button'>x</button>
                <div className="sup-container">
                    <h1 className='sup-head'>Contact Form</h1>
                    <form id="contact-form" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" className="form-control" value={name} onChange={onNameChange} placeholder='name' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <br />
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='youremail@gmail.com' value={email} onChange={onEmailChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <br />
                            <textarea className="form-control" rows="5" placeholder='backend not yet implemented ...' value={message} onChange={onMessageChange} required />
                        </div>
                        <button type="submit" className="sup-btn" onClick={handleSubmit}>Submit</button>
                        {(isError === "Changes Saved Successfully") && <p className='sup-success'>&#9989;{isError}</p>}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Support